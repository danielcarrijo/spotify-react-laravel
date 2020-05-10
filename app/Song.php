<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = ['artist_id','gender_id','title','filename','img'];

    public function playlists()
    {
        return $this->belongsToMany('App\Playlist')->using('App\PlaylistSong');
    }
    public function gender() {
        return $this->belongsTo('App\Gender');
    }
    public function artists() {
        return $this->belongsToMany('App\Artist')->using('App\ArtistSong');
        
    }
}
