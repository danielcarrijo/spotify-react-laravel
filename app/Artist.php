<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['name', 'img'];
    public function songs() {
        return $this->belongsToMany('App\Song')->using('App\ArtistSong');
        
    }
}
