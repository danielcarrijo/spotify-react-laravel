<?php

use Illuminate\Database\Seeder;
use App\Playlist;
class PlaylistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $playlist = Playlist::create(['user_id' => '1', 'title' => 'Playlist do Daniel']);
        $playlist->songs()->sync([1,6,10,18,17,33,2,8]);
        $playlist = Playlist::create(['user_id' => '1', 'title' => 'Aleatório do Baile']);
        $playlist->songs()->sync([2,7,11,19,18,34,40,39]);
        $playlist = Playlist::create(['user_id' => '1', 'title' => 'Mais um aleatório']);
        $playlist->songs()->sync([25,14,6,5,3,36]);
        $playlist = Playlist::create(['user_id' => '1', 'title' => 'Aleatório de novo']);
        $playlist->songs()->sync([1,10,20,30,38]);
    }
}
