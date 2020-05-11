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
                'name' => 'Gusttavo Lima'
            ],
            [
                'name' => 'Wesley Safadão'
            ],
            [
                'name' => 'Zé Neto e Cristiano'
            ],
            [
                'name' => 'Lexa'
            ],
            [
                'name' => 'Pedro Sampaio'
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
                'name' => 'Dilsinho'
            ],
            [
                'name' => 'Turma do Pagode'
            ]
        ];
        DB::table('artists')->insert($artists);
    }
}
