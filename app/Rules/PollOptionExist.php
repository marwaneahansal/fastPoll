<?php

namespace App\Rules;

use App\Models\PollOptions;
use Illuminate\Contracts\Validation\Rule;

class PollOptionExist implements Rule
{
    public $pollId;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($pollId)
    {
        $this->pollId = $pollId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return PollOptions::where(['poll_id' => $this->pollId, 'id' => $value])->count();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The option doesn't belong to this poll.";
    }
}
