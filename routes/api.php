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
Route::post('/register','UserController@register');
Route::get('/logout','UserController@logout');

Route::post('/playlist','PlaylistController@store')->middleware('auth:api');
Route::get('/playlist/{id}','PlaylistController@show');
Route::get('/playlist','PlaylistController@index');
Route::get('/playlist_user','PlaylistController@playlistUser')->middleware('auth:api');
Route::get('/playlist_add/{id}/{song_id}','PlaylistController@playlistAdd')->middleware('auth:api');
Route::get('/playlist_delete/{id}/{song_id}','PlaylistController@playlistDelete')->middleware('auth:api');


 Route::get('/audio/{folder}/{filename}','SongController@listenAudio');
 Route::get('/song','SongController@index');
 Route::post('/song','SongController@store');
 Route::get('/song/{id}','SongController@show');
 
 Route::post('/artist','ArtistController@store');
 Route::get('/artist','ArtistController@index');
 Route::get('/artist/{id}','ArtistController@show');
 Route::get('/4artist','ArtistController@get4');

 Route::get('/gender','GenderController@index');
 Route::get('/4gender','GenderController@get4');
 Route::get('/gender/{id}','GenderController@show');
 Route::get('/gender/img/{filename}','GenderController@img');
