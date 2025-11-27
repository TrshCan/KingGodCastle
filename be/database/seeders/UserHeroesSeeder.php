<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserHeroesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('user_heroes')->insert([
            ['id' => 1, 'user_id' => 4, 'hero_id' => 1, 'level' => 3, 'xp' => 10],
            ['id' => 2, 'user_id' => 4, 'hero_id' => 2, 'level' => 2, 'xp' => 10],
            ['id' => 3, 'user_id' => 4, 'hero_id' => 4, 'level' => 4, 'xp' => 90],
            ['id' => 4, 'user_id' => 4, 'hero_id' => 3, 'level' => 1, 'xp' => 0],
            ['id' => 5, 'user_id' => 4, 'hero_id' => 5, 'level' => 2, 'xp' => 0],
            ['id' => 6, 'user_id' => 2, 'hero_id' => 1, 'level' => 2, 'xp' => 0],
            ['id' => 7, 'user_id' => 2, 'hero_id' => 2, 'level' => 3, 'xp' => 0],
            ['id' => 8, 'user_id' => 2, 'hero_id' => 3, 'level' => 1, 'xp' => 0],
        ]);
    }
}

