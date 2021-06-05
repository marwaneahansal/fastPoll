<?php

namespace Database\Seeders;

use App\Models\Poll;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(4)
            ->has(Poll::factory()->count(2)->state(function (array $attributes, User $user) {
                return ['created_by' => $user->name];
            })->hasOptions(4))
            ->create();
    }
}
