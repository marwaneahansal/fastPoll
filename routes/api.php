<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PollController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AddAuthHeader;

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

Route::middleware([AddAuthHeader::class])->group(function () {
  Route::get('logout', [AuthController::class, 'logout']);
  Route::get('user', [AuthController::class, 'getLoggedInUser']);
});

Route::get('mypolls', [PollController::class, 'getUserPoll']);
Route::apiResource('polls', PollController::class)->except('store', 'update');
// 40 request per one minutes
Route::post('polls', [PollController::class, 'store'])->middleware('throttle:40,1');

// 40 request per one minutes
Route::put('polls/{id}', [PollController::class, 'update'])->middleware('throttle:40,1');

Route::get('/poll/{uri}', [PollController::class, 'getPoll']);
