<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroBannersSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('hero_banners')->insert([
            ['id' => 1, 'hero_id' => 1], // Luniare
            ['id' => 2, 'hero_id' => 2], // Shelda
            ['id' => 3, 'hero_id' => 3], // Evan
            ['id' => 4, 'hero_id' => 4], // Draco
            ['id' => 5, 'hero_id' => 5], // Neria
        ]);
    }
}
