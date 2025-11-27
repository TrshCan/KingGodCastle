<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamRelicsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('team_relics')->insert([
            ['team_id' => 1, 'relic_id' => 5],
            ['team_id' => 2, 'relic_id' => 5],
        ]);
    }
}

