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
        return('Comming Soon');
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
            'option1' => 'required',
            'option2' => 'required',
        ]);

        $uri = Str::Random(10);
        $searchUri = DB::table('polls')->where('uri', $uri)->first();
        while($searchUri != null) {
            $uri = Str::Random(10);
            $searchUri = DB::table('polls')->where('uri', $uri)->first();
        }

        $pollQuestion = $request->input('pollQuestion');
        $option1 = $request->input('option1');
        $option2 = $request->input('option2');
        $option3 = $request->input('option3');
        $option4 = $request->input('option4');
        $option5 = $request->input('option5');
        $option6 = $request->input('option6');
        $option7 = $request->input('option7');
        $option8 = $request->input('option8');
        
        DB::table('polls')->insert([
            'uri' => $uri,
            'poll_question' => $pollQuestion,
            'option_1' => $option1,
            'option_2' => $option2,
            'option_3' => $option3,
            'option_4' => $option4,
            'option_5' => $option5,
            'option_6' => $option6,
            'option_7' => $option7,
            'option_8' => $option8,
            'created_at' => now()
        ]);

       
        return [
            'uri' => $uri,
            'poll' => [
                'poll_question' => $pollQuestion,
                'option_1' => $option1,
                'option_2' => $option2,
                'option_3' => $option3,
                'option_4' => $option4,
                'option_5' => $option5,
                'option_6' => $option6,
                'option_7' => $option7,
                'option_8' => $option8,
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
        $option = $request->input('option');
        $optionRow = 'option_' . $option . '_votes';
        $option_votes = $poll[$optionRow];
        $total_votes = $poll->total_votes;
        $updatedPoll = DB::table('polls')->where('id', $poll->id)->update([$optionRow => ($option_votes + 1), 'total_votes' => ($total_votes + 1)]);

        if($updatedPoll === 1) return ['message' => 'Thank you for your vote'];
        return [ 'error' => 'Erro happend'];
        
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
