<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EditPollOptionsColumnInPollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('polls', function (Blueprint $table) {
            $table->json('pollOptions')->nullable()->change();
            $table->json('optionsCount')->nullable()->change();
            $table->json('totalVotes')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('polls', function (Blueprint $table) {
            $table->json('pollOptions')->change();
            $table->json('optionsCount')->change();
            $table->json('totalVotes')->change();
        });
    }
}
