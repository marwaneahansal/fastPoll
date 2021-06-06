<?php

namespace App\Http\Controllers;

use App\Http\Resources\Poll\Poll as PollPoll;
use App\Http\Resources\Poll\PollCollection;
use App\Models\Poll;
use App\Models\PollOptions;
use App\Models\Votes;
use App\Rules\PollOptionExist;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PollController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $polls = Poll::orderByRaw('updated_at - created_at ASC')->get();
        return new PollCollection($polls);
    }

    public function getPoll($uri)
    {
        $poll = Poll::where('uri', '=', $uri)->firstOrFail();
        return ['poll' => new PollPoll($poll)];
    }

    public function getUserPoll(Request $request)
    {
        $polls = Poll::where('user_id', $request->user('api')->id)->get();
        return response()->json(["polls" => $polls]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'pollQuestion' => 'required',
            'pollOptions' => 'required|array'
        ]);


        $uri = Str::Random(10);
        $searchUri = DB::table('polls')->where('uri', $uri)->first();
        while ($searchUri != null) {
            $uri = Str::Random(10);
            $searchUri = DB::table('polls')->where('uri', $uri)->first();
        }

        $poll = new Poll();

        $poll->uri = $uri;
        $poll->poll_question = $request->get('pollQuestion');

        $InoutPollOptions = $request->get('pollOptions');

        $pollOptions = array_map(function ($pollOption) {
            return new PollOptions(['option' => $pollOption['option'], 'votes' => 0]);
        }, $InoutPollOptions);

        if ($request->user('api')) {
            $user = $request->user('api');
            $poll->user_id = $user->id;
            $poll->created_by = $user->name;
        }

        $poll->save();

        $poll->options()->saveMany($pollOptions);

        $poll->refresh();

        return [
            'uri' => $uri,
            'poll' => [
                'poll_question' => $poll->poll_question,
                'poll_options' => $poll->options,
            ]
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function show(Poll $poll)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function edit(Poll $poll)
    {
        //
    }

    /**
     * Vote the specified poll
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function vote(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'option' => [
                'required',
                new PollOptionExist($id)
            ]
        ]);

        if ($validator->fails()) return response()->json(['errors' => $validator->errors()]);

        $poll = Poll::findOrFail($id);
        // Create vote in votes
        if ($request->user('api')) {
            $vote = Votes::where(['user_id' => $request->user('api')->id, 'poll_id' => $poll->id])->first();

            if ($vote) return response()->json(['success' => false, 'message' => 'You already voted on this poll!']);

            Votes::create([
                'user_id' => $request->user('api')->id,
                'poll_id' => $poll->id
            ]);
        }

        $pollOption = PollOptions::where(['poll_id' => $poll->id, 'id' => $request->get('option')])->firstOrFail();

        $pollOption->update([
            'votes' => $pollOption->votes + 1
        ]);



        return response()->json(['success' => true, 'message' => 'Thank you for your vote', 'poll' => new PollPoll($poll)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function destroy(Poll $poll, Request $request)
    {
        if ($request->user('api')->id === $poll->user_id) {
            $poll->delete();
            return response()->json(['success' => true, 'message' => 'Poll is deleted with success']);
        }

        return response()->json(['success' => false, 'message' => 'Poll not found']);
    }
}
