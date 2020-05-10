<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    protected $fillable = ['name','img'];

    public function songs () {
        return $this->hasMany('App\Song');
    }
}
