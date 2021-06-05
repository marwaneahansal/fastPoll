<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    use HasFactory;

    protected $casts = [
        'pollOptions' => 'array'
    ];

    protected $fillable = ['pollOptions'];


    /**
     * get all options for a poll
     *
     * @return \App\Models\Poll
     */
    public function options()
    {
        return $this->hasMany(PollOptions::class);
    }
}
