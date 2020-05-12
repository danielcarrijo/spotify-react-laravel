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
                'name' => 'Wesley Safadão'
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
                'name' => 'Jorge e Mateus'
            ],
            [
                'name' => 'Henrique e Juliano'
            ],
            [
                'name' => 'Capital Inicial'
            ],
            [
                'name' => 'Red Hot Chilli Peppers'
            ],
            [
                'name' => 'Ludmilla'
            ],
            [
                'name' => 'Marília Mendonça'
            ],
            [
                'name' => 'Anitta'
            ],
            [
                'name' => 'Dilsinho',
                'img' => 'dilsinho.png'
            ],
            [
                'name' => 'Turma do Pagode'
            ]
        ];
        DB::table('artists')->insert($artists);
    }
}
