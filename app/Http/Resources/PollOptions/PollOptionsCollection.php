<?php

namespace App\Http\Resources\PollOptions;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PollOptionsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
