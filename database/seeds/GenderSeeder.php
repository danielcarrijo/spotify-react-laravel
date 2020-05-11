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
                'name' => 'sertanejo'
            ],
            [
                'name' => 'funk'
            ],
            [
                'name' => 'rock'
            ],
            [
                'name' => 'pagode'
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
