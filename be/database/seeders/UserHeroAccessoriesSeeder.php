<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserHeroAccessoriesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('user_hero_accessories')->insert([
            ['user_hero_id' => 2, 'accessory_id' => 4],
            ['user_hero_id' => 2, 'accessory_id' => 9],
            ['user_hero_id' => 5, 'accessory_id' => 4],
            ['user_hero_id' => 7, 'accessory_id' => 9],
            ['user_hero_id' => 8, 'accessory_id' => 4],
        ]);
    }
}

