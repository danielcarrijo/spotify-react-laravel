<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    protected $fillable = ['user_id','title'];
    public function songs()
    {
        return $this->belongsToMany('App\Song')->using('App\PlaylistSong');
    }
    public function user() {
        return $this->belongsTo('App\User');
    }
}
