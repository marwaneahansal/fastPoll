<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Poll extends Model
{
    use HasFactory;

    protected $casts = [
        'pollOptions' => 'array',
    ];

    protected $fillable = ['pollOptions'];

    protected $appends = [
        'totalVotes',
        'totalOptions'
    ];


    /**
     * get all options for a poll
     *
     * @return \App\Models\Poll
     */
    public function options()
    {
        return $this->hasMany(PollOptions::class);
    }

    public function getTotalVotesAttribute()
    {
        return (int) $this->options()->sum('votes');
    }

    public function getTotalOptionsAttribute()
    {
        return $this->options()->count();
    }

    public function scopeOrderOption($query, $orderOption)
    {
        switch ($orderOption) {
            case 'recent':
                return $query->orderBy('updated_at', 'desc');
            case 'older':
                return $query->orderBy('updated_at', 'asc');
        }
    }
}
