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
                'name' => 'Jorge e Mateus',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Henrique e Juliano',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Capital Inicial',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Red Hot Chilli Peppers',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Ludmilla',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Marília Mendonça',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'Anitta',
                'img' => 'none.PNG'
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
