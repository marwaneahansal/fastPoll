<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PollController;
use App\Http\Controllers\AuthController;

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

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::get('polls/{id}', [PollController::class, 'getUserPoll']);
Route::apiResource('polls', PollController::class)->except('store', 'update');
// 40 request per one minutes
Route::post('polls', [PollController::class, 'store'])->middleware('throttle:40,1');

// 40 request per one minutes
Route::put('polls/{id}', [PollController::class, 'update'])->middleware('throttle:40,1');

Route::get('/poll/{uri}', [PollController::class, 'getPoll']);