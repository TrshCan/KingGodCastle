<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class XpAmountsSeeder extends Seeder
{
    public function run(): void
    {
        // Remove duplicates - only keep unique types
        $uniqueTypes = [
            'win_match' => 100,
            'xp_bottle' => 5,
            'summon_duplicate' => 25,
            'complete_quest' => 50,
            'defeat_boss' => 200,
            'daily_login' => 10,
            'friend_support' => 15,
            'upgrade_hero' => 30,
            'collect_item' => 8,
            'participate_event' => 40,
        ];
        
        $data = [];
        foreach ($uniqueTypes as $type => $value) {
            $data[] = [
                'type' => $type,
                'value' => $value,
            ];
        }
        
        DB::table('xp_amounts')->insert($data);
    }
}

