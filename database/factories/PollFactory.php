<?php

namespace Database\Factories;

use App\Models\Poll;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PollFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Poll::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //  Str::Random(10),
        return [
            'uri' => Str::Random(10),
            'poll_question' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'optionsCount' => 0,
            'totalVotes' => 0,
            'status' => 'public'
        ];
    }
}
