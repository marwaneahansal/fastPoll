<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

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
        return response(['polls' => $polls], 200);
    }

    public function getPoll($uri)
    {
        $poll = DB::table('polls')->where('uri', '=', $uri)->first();
        if ($poll == null) return ['error' => 'Poll not found, Please check the url again!'];
        return ['poll' => $poll];
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
            'pollOptions' => 'required'
        ]);


        $uri = Str::Random(10);
        $searchUri = DB::table('polls')->where('uri', $uri)->first();
        while ($searchUri != null) {
            $uri = Str::Random(10);
            $searchUri = DB::table('polls')->where('uri', $uri)->first();
        }

        $poll = new Poll();

        $poll->uri = $uri;
        $poll->poll_question = $request->input('pollQuestion');
        $poll->pollOptions = $request->input('pollOptions');
        if ($request->user('api')) {
            $user = $request->user('api');
            $poll->user_id = $user->id;
            $poll->created_by = $user->name;
        }

        $poll->save();


        return [
            'uri' => $uri,
            'poll' => [
                'poll_question' => $poll->poll_question,
                'poll_options' => $poll->pollOptions,
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $poll = Poll::find($id);
        $poll->pollOptions = $request->input('pollOptions');
        $poll->totalVotes = $poll->totalVotes + 1;
        $poll->save();


        return response()->json(['message' => 'Thank you for your vote', 'poll' => $poll]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function destroy(Poll $poll)
    {
        //TODO: Check user that created this poll
        $poll->delete();
        return response()->json(['success' => true, 'message' => 'Poll is deleted with success']);
    }
}
