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
        // return $request;
        // $validateRequest = $request->validate([
        //     'pollQuestion' => 'required',
        //     'pollOptions.option1' => 'required',
        //     'pollOptions.option2' => 'required',
        // ]);

        $uri = Str::Random(10);
        $searchUri = DB::table('polls')->where('uri', $uri)->first();
        while($searchUri != null) {
            $uri = Str::Random(10);
            $searchUri = DB::table('polls')->where('uri', $uri)->first();
        }

        $input = $request->all();
        $pollQuestion = $input['pollQuestion'];
        $option1 = $input['pollOptions'][0][0];
        $option2 = $input['pollOptions'][1][1];
        $option3 = !$input['pollOptions'][2][2] ? 'null' : $input['pollOptions'][2][2];
        // $option4 = $input['pollOptions'][3][3] || null;
        // $option5 = $input['pollOptions'][4][4] || null;
        // $option6 = $input['pollOptions'][5][5] || null;
        // $option7 = $input['pollOptions'][6][6] || null;
        // $option8 = $input['pollOptions'][7][7] || null;
        return [
            'option1' => $option1,
            'option2' => $option2,
            'option3' => $option3,
            // 'option4' => $option4,
            // 'option5' => $option5,
            // 'option6' => $option6,
            // 'option7' => $option7,
            // 'option8' => $option8,
            'input' => $input,
        ];

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
        ]);

       
        return [
            'uri' => $uri,
            'poll' => $validateRequest
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
        //
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
        //
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
