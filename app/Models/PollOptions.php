<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PollOptions extends Model
{
    use HasFactory;

    protected $fillable = [
        'poll_id',
        'option'
    ];
}
