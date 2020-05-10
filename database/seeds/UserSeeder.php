<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Daniel',
            'email' => 'daniel@gmail.com',
            'password' => bcrypt('password'),
            'is_admin' => 1
        ]);
    }
}
