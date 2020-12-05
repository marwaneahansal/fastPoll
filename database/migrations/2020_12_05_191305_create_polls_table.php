<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePollsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('polls', function (Blueprint $table) {
            $table->id();
            $table->string('uri')->unique();
            $table->string('poll_question');
            $table->string('option_1');
            $table->bigInteger('option_1_votes')->default(0);
            $table->string('option_2');
            $table->bigInteger('option_2_votes')->default(0);
            $table->string('option_3')->nullable();
            $table->bigInteger('option_3_votes')->default(0);
            $table->string('option_4')->nullable();
            $table->bigInteger('option_4_votes')->default(0);
            $table->string('option_5')->nullable();
            $table->bigInteger('option_5_votes')->default(0);
            $table->string('option_6')->nullable();
            $table->bigInteger('option_6_votes')->default(0);
            $table->string('option_7')->nullable();
            $table->bigInteger('option_7_votes')->default(0);
            $table->string('option_8')->nullable();
            $table->bigInteger('option_8_votes')->default(0);
            $table->bigInteger('total_votes')->default(0);
            $table->string('created_by')->default('anonymous');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('polls');
    }
}
