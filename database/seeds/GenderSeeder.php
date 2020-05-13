<?php

use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genders = [
            [
                'name' => 'sertanejo',
                'img' => 'sertanejo.jpg'
            ],
            [
                'name' => 'funk',
                'img' => 'funk.jpg'
            ],
            [
                'name' => 'rock'
            ],
            [
                'name' => 'pagode',
                'img' => 'pagode.jpg'
            ],
            [
                'name' => 'axé'
            ],
            [
                'name' => 'pop'
            ],
            [
                'name' => 'samba'
            ],
        ];
        DB::table('genders')->insert($genders);
        
    }
}
