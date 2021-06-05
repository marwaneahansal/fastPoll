<?php

namespace Database\Factories;

use App\Models\PollOptions;
use Illuminate\Database\Eloquent\Factories\Factory;

class PollOptionsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PollOptions::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'option' => $this->faker->word(),
            'votes' => $this->faker->numberBetween(0, 10)
        ];
    }
}
