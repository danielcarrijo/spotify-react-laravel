<?php

namespace App\Http\Controllers;

use App\Gender;
use Illuminate\Http\Request;

class GenderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $genders = Gender::all();
        return response()->json($genders, 200);
    }

    public function get4()
    {
        $genders = Gender::take(4)->get();
        return response()->json($genders,200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Gender  $gender
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gender = Gender::with(['songs' => function($query){
            $query->with('artists');
        }])->find($id);
        return response()->json($gender, 200);
    }


    public function img($filename) {
        $file = public_path() . '/img'. '/' . $filename;
        $headers = array(
            'Content-Type: image/jpeg',
            'Content-Length: ' . filesize($file),
        );
        return response()->download($file, 200, $headers);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Gender  $gender
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gender $gender)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Gender  $gender
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gender $gender)
    {
        //
    }
}
