<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('teams')->insert([
            [
                'id' => 1,
                'user_id' => 1,
                'name' => 'Moonlit Vanguard',
                'slot1' => 1,
                'slot2' => 2,
                'slot3' => 3,
                'slot4' => null,
                'slot5' => null,
                'slot6' => null,
            ],
            [
                'id' => 2,
                'user_id' => 1,
                'name' => 'Drake\'s Fury',
                'slot1' => 3,
                'slot2' => 1,
                'slot3' => null,
                'slot4' => null,
                'slot5' => null,
                'slot6' => null,
            ],
            [
                'id' => 3,
                'user_id' => 2,
                'name' => 'Blade of Shadows',
                'slot1' => 4,
                'slot2' => 5,
                'slot3' => null,
                'slot4' => null,
                'slot5' => null,
                'slot6' => null,
            ],
            [
                'id' => 4,
                'user_id' => 3,
                'name' => 'Crimson Bastion',
                'slot1' => 7,
                'slot2' => 6,
                'slot3' => 8,
                'slot4' => null,
                'slot5' => null,
                'slot6' => null,
            ],
        ]);
    }
}

