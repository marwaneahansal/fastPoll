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

    public function options()
    {
        return $this->hasMany(PollOptions::class);
    }
}
