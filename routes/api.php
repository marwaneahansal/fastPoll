<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PollController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('polls', PollController::class)->except('store', 'update');
// 10 request per one minutes
Route::post('polls', [PollController::class, 'store'])->middleware('throttle:10,1');

// 1 request per 24 hours
Route::put('polls/{id}', [PollController::class, 'update'])->middleware('throttle:1,1440');

Route::get('/poll/{uri}', [PollController::class, 'getPoll']);