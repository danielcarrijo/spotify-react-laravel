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
/* AUTH */

Route::post('/login','UserController@login');
Route::get('/logout','UserController@logout');

Route::post('/playlist','PlaylistController@store')->middleware('auth:api');
Route::get('/playlist/{id}','PlaylistController@show');

 Route::get('/audio/{folder}/{filename}','SongController@listenAudio');
 Route::post('/song','SongController@store');
 Route::get('/song/{id}','SongController@show');
 
 Route::post('/artist','ArtistController@store');
 Route::get('/artist','ArtistController@index');
 Route::get('/artist/{id}','ArtistController@show');
