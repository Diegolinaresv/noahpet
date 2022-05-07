<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/register', [App\Http\Controllers\Auth\AuthController::class, 'register']);
Route::post('/login', [App\Http\Controllers\Auth\AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::post('/logout', [App\Http\Controllers\Auth\AuthController::class, 'logout']);
});

Route::resource('/countries', App\Http\Controllers\Api\CountryController::class)->only([
    'index', 'show'
]);

Route::resource('/breeds', App\Http\Controllers\Api\BreedController::class)->only([
    'index', 'show'
]);

Route::resource('/diets', App\Http\Controllers\Api\DietController::class)->only([
    'index', 'show'
]);

Route::resource('/snacking', App\Http\Controllers\Api\SnackingController::class)->only([
    'index', 'show'
]);

Route::resource('/textures', App\Http\Controllers\Api\TextureController::class)->only([
    'index', 'show'
]);

Route::resource('/activities', App\Http\Controllers\Api\ActivityLevelController::class)->only([
    'index', 'show'
]);

Route::resource('/clients', App\Http\Controllers\Api\ClientController::class)->only([
    'index', 'show', 'store'
]);

Route::resource('/pets', App\Http\Controllers\Api\PetController::class)->only([
    'index', 'show', 'store', 'update'
]);

Route::post('/finish-pet/{client}', [App\Http\Controllers\Api\NoahController::class, 'finish_actual_pet']);
Route::post('/pet-foods/{client}', [App\Http\Controllers\Api\NoahController::class, 'food']);

Route::post('/pet-foods', [App\Http\Controllers\Api\NoahCalController::class, 'food']);
Route::post('/calc', [App\Http\Controllers\Api\NoahCalController::class, 'calc']);
