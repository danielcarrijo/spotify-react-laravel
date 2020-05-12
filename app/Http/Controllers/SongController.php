<?php

namespace App\Http\Controllers;
use App\Song;
use App\Artist;
use App\ArtistSong;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $songs = Song::with('artists')->get();
        return response()->json($songs, 200);
    }

    // public function uploadAudio(Request $request)
    // {
    //     if($request->hasFile('image')){
    //         $name = time()."_".$request->file('image')->getClientOriginalName();
    //         $request->file('image')->move(public_path('img'), $name);
    //     }
    //     return response()->json($name,201);
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Auth::user()->is_admin) {
            foreach($request->artists as $artist_id) {
                if(!Artist::find(intval($artist_id))) {
                    $message = "Artista não reconhecido";
                    return response()->json($message,401);
                }
            }
            $song = new Song;
            $song->title = $request->title;
            $song->gender_id = $request->gender_id;
            $song->img = $request->img == null ? 'none.png': $request->img;
            $song->filename = $request->filename;
            $song->save();
            foreach($request->artists as $artist_id) {
                    $relation = new ArtistSong;
                    $relation->artist_id = intval($artist_id);
                    $relation->song_id = $song->id;
                    $relation->save();
            } 
            return response()->json($song->id,200);
        }else {
            $message = "Você não tem permissão pra esse recurso";
            return response()->json($message,401);
        }
        
    }

    
    public function teste() {
        return response()->json('ok',200);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $song = Song::with('artists')->find($id);
        return response()->json($song, 200);
    }

    public function listenAudio($folder, $filename) {
        $file = public_path() . '/sound'. '/' . $folder . '/' . $filename;
        $headers = array(
            'Content-Type: audio/mpeg',
            'Cache-Control: no-cache',
            'Content-Transfer-Encoding: binary',
            'Content-Length: ' . filesize($file),
            'Accept-Ranges: bytes'
        );
        $sound = File::get($file);
        return response()->download($file, 200, $headers);
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
