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
                'name' => 'rock',
                'img' => 'none.PNG'
            ],
            [
                'name' => 'pagode',
                'img' => 'pagode.jpg'
            ],
            [
                'name' => 'axé',
                'img' => 'none.PNG'

            ],
            [
                'name' => 'pop',
                'img' => 'none.PNG'

            ],
            [
                'name' => 'samba',
                'img' => 'none.PNG'

            ],
        ];
        DB::table('genders')->insert($genders);
        
    }
}
