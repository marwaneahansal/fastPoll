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
            'poll_question' => $this->faker->text,
            'pollOptions' => function () {
                $options = [];
                for ($i = 0; $i < $this->faker->numberBetween(2, 5); $i++) {
                    array_push($options, array('id' => $i + 1, 'option' => $this->faker->word, 'votes' => $this->faker->numberBetween(2, 5)));
                }
                return $options;
            },
            'optionsCount' => $this->faker->numberBetween(2, 5),
            'totalVotes' => $this->faker->numberBetween(0, 20),
            'status' => $this->faker->randomElement(array('private', 'public')),
            'user_id' => User::factory(),
            'created_by' => function (array $attributes) {
                return User::find($attributes['user_id'])->name;
            },
        ];
    }
}
