<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use Illuminate\Http\Request;
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
        $polls = DB::table('polls')->get();
        return response(['polls' => $polls], 200);
    }

    public function getPoll($uri) {
        $poll = DB::table('polls')->where('uri','=', $uri)->first();
        if($poll == null) return ['error' => 'Poll not found, Please check the url again!'];
        return ['poll' => $poll];
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
        $validateRequest = $request->validate([
            'pollQuestion' => 'required',
            'pollOptions' => 'required'
        ]);

        $uri = Str::Random(10);
        $searchUri = DB::table('polls')->where('uri', $uri)->first();
        while($searchUri != null) {
            $uri = Str::Random(10);
            $searchUri = DB::table('polls')->where('uri', $uri)->first();
        }

        $poll = new Poll();

        $poll->uri = $uri;
        $poll->poll_question = $request->input('pollQuestion');
        $poll->pollOptions = $request->input('pollOptions');
        
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
    public function update(Request $request, Poll $poll)
    {
        $poll->pollOptions = $request->input('pollOptions');
        $poll->totalVotes = $poll->totalVotes + 1;
        $poll->update($request->all());


        return ['message' => 'Thank you for your vote'];
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Poll  $poll
     * @return \Illuminate\Http\Response
     */
    public function destroy(Poll $poll)
    {
        //
    }
}
