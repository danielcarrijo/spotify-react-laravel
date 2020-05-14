<?php

use Illuminate\Database\Seeder;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $artists = [
            [
                'name' => 'Gusttavo Lima',
                'img' => 'gusttavo_lima.png'
            ],
            [
                'name' => 'Wesley Safadão',
                'img' => 'wesley_safadão.png'
            ],
            [
                'name' => 'Zé Neto e Cristiano',
                'img' => 'ze_neto_e_cristiano.png'
            ],
            [
                'name' => 'Lexa',
                'img' => 'lexa.png'
            ],
            [
                'name' => 'Pedro Sampaio',
                'img' => 'pedro_sampaio.png'
            ],
            [
                'name' => 'Dilsinho',
                'img' => 'dilsinho.png'
            ],
            [
                'name' => 'Turma do Pagode',
                'img' => 'turma_do_pagode.png'
            ]
        ];
        DB::table('artists')->insert($artists);
    }
}
