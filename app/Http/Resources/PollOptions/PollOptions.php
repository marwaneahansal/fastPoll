<?php

namespace App\Http\Resources\PollOptions;

use Illuminate\Http\Resources\Json\JsonResource;

class PollOptions extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'option' => $this->option,
            'votes' => $this->votes
        ];
    }
}
