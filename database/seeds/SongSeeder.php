<?php

use Illuminate\Database\Seeder;
use App\Song;
class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $song = Song::create(['gender_id' => '1', 'title' => 'Milu', 'filename' => 'gusttavo_lima/milu.mp3']);
        $song->artists()->sync([1]);
        $song = Song::create(['gender_id' => '1', 'title' => 'A gente fez amor', 'filename' => 'gusttavo_lima/a_gente_fez_amor.mp3']);
        $song->artists()->sync([1]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Eu não iria', 'filename' => 'gusttavo_lima/eu_não_iria.mp3']);
        $song->artists()->sync([1]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Se tem briga tem amor', 'filename' => 'gusttavo_lima/se_tem_briga_tem_amor.mp3']);
        $song->artists()->sync([1]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Solteiro de novo', 'filename' => 'wesley_safadão/solteiro_de_novo.mp3']);
        $song->artists()->sync([2]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Na cama que eu paguei', 'filename' => 'wesley_safadão/na_cama_que_eu_paguei.mp3']);
        $song->artists()->sync([2,3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Barzinho Aleatório', 'filename' => 'zé_neto_e_cristiano/barzinho_aleatório.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Bebi minha Bicicleta', 'filename' => 'zé_neto_e_cristiano/bebi_minha_bicicleta.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Enchendo e Derramando', 'filename' => 'zé_neto_e_cristiano/enchendo_e_derramando.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Seu Polícia', 'filename' => 'zé_neto_e_cristiano/seu_polícia.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'S de Saudade', 'filename' => 'zé_neto_e_cristiano/s_de_saudade.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Ferida Curada', 'filename' => 'zé_neto_e_cristiano/ferida_curada.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Notificação Preferida', 'filename' => 'zé_neto_e_cristiano/notificação_preferida.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Largado às Traças', 'filename' => 'zé_neto_e_cristiano/largado_às_traças.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Mulher Maravilha', 'filename' => 'zé_neto_e_cristiano/mulher_maravilha.mp3']);
        $song->artists()->sync([3]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Aquecimento da Lexa', 'filename' => 'lexa/aquecimento_da_lexa.mp3']);
        $song->artists()->sync([4]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Chama ela', 'filename' => 'lexa/chama_ela.mp3']);
        $song->artists()->sync([4,5]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Sapequinha', 'filename' => 'lexa/sapequinha.mp3']);
        $song->artists()->sync([4]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Largadão', 'filename' => 'lexa/largadão.mp3']);
        $song->artists()->sync([4]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Só depois do Carnaval', 'filename' => 'lexa/só_depois_do_carnaval.mp3']);
        $song->artists()->sync([4]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Sentadão', 'filename' => 'pedro_sampaio/sentadão.mp3']);
        $song->artists()->sync([5]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Bota pra tremer', 'filename' => 'pedro_sampaio/bota_pra_tremer.mp3']);
        $song->artists()->sync([5]);
        $song = Song::create(['gender_id' => '2', 'title' => 'Vai menina', 'filename' => 'pedro_sampaio/vai_menina.mp3']);
        $song->artists()->sync([5]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Cheirosa', 'filename' => 'jorge_e_mateus/cheirosa.mp3']);
        $song->artists()->sync([6]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Tijolão', 'filename' => 'jorge_e_mateus/tijolão.mp3']);
        $song->artists()->sync([6]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Propaganda', 'filename' => 'jorge_e_mateus/propaganda.mp3']);
        $song->artists()->sync([6]);
        $song = Song::create(['gender_id' => '1', 'title' => 'Flor', 'filename' => 'jorge_e_mateus/flor.mp3']);
        $song->artists()->sync([6]);
        $song = Song::create(['gender_id' => '4', 'title' => '12 horas', 'filename' => 'dilsinho/12_horas.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Não vai embora', 'filename' => 'dilsinho/não_vai_embora.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Onze e pouquinho', 'filename' => 'dilsinho/onze_e_pouquinho.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Péssimo negócio', 'filename' => 'dilsinho/péssimo_negócio.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Pouco a pouco', 'filename' => 'dilsinho/pouco_a_pouco.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Refém', 'filename' => 'dilsinho/refém.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Trovão', 'filename' => 'dilsinho/trovão.mp3']);
        $song->artists()->sync([13]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Camisa 10', 'filename' => 'turma_do_pagode/camisa_10.mp3']);
        $song->artists()->sync([14]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Cobertor de orelha', 'filename' => 'turma_do_pagode/cobertor_de_orelha.mp3']);
        $song->artists()->sync([14]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Deixa em off', 'filename' => 'turma_do_pagode/deixa_em_off.mp3']);
        $song->artists()->sync([14]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Lancinho', 'filename' => 'turma_do_pagode/lancinho.mp3']);
        $song->artists()->sync([14]);
        $song = Song::create(['gender_id' => '4', 'title' => 'Muito cedo', 'filename' => 'turma_do_pagode/muito_cedo.mp3']);
        $song->artists()->sync([14]);
        $song = Song::create(['gender_id' => '4', 'title' => 'O Brasil tem que te ver 10', 'filename' => 'turma_do_pagode/o_brasil_tem_que_te_ver.mp3']);
        $song->artists()->sync([14]);
    }
}
