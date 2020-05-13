<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Playlist;
use App\Song;
use Auth;

class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $playlists = Playlist::all();
        return response()->json($playlists, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $playlist = new Playlist;
        $playlist->user_id = Auth::id();
        $playlist->title = $request->title;
        $status = $playlist->save();
        return response()->json($playlist, $status ? 200 : 401);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $playlist = Playlist::with('user')->with(['songs' => function($query){
            $query->with('artists');
        }])->find($id);
        
        return $playlist ? response()->json($playlist,200) : response()->json($false, 401);
    }
    public function playlistAdd($id, $song_id) {
        $playlist = Playlist::findorfail($id);
        $playlist->songs()->attach($song_id);
        $song = Song::with('artists')->find($song_id);
        return response()->json($song,200);

    }
    public function playlistDelete($id, $song_id) {
        $playlist = Playlist::findorfail($id);
        $playlist->songs()->detach($song_id);
        $song = Song::find($song_id);
        return response()->json($song,200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function playlistUser() {
        if(Auth::check()) {
            $playlists = Playlist::where('user_id',Auth::id())->get();
            return response()->json($playlists, 200);
        }
        return response()->json("error",401);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
