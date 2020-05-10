<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ArtistSong extends Pivot
{
    protected $fillable = ['artist_id','song_id'];
    public $timestamps = false;
}
