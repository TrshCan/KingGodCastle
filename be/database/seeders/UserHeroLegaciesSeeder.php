<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserHeroLegaciesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('user_hero_legacies')->insert([
            ['user_hero_id' => 1, 'legacy_id' => 7],
            ['user_hero_id' => 2, 'legacy_id' => 7],
            ['user_hero_id' => 3, 'legacy_id' => 7],
            ['user_hero_id' => 4, 'legacy_id' => 7],
            ['user_hero_id' => 5, 'legacy_id' => 7],
            ['user_hero_id' => 6, 'legacy_id' => 7],
            ['user_hero_id' => 7, 'legacy_id' => 7],
            ['user_hero_id' => 8, 'legacy_id' => 7],
        ]);
    }
}

