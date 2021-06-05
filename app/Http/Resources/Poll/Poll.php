<?php

namespace App\Http\Resources\Poll;

use App\Http\Resources\PollOptions\PollOptionsCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class Poll extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $pollOptions = $this->options;
        return [
            'id' => $this->id,
            'poll_question' => $this->poll_question,
            'uri' => $this->uri,
            'poll_options' => new PollOptionsCollection($pollOptions),
            'totalVotes' => $pollOptions->sum('votes'),
            'created_by' => $this->created_by
        ];
    }
}
