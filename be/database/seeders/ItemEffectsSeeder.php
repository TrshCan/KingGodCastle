<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemEffectsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('item_effects')->insert([
            ['id' => 1, 'item_id' => 1, 'stat_name' => 'MP', 'modifier_type' => 'flat', 'value' => 50.00, 'note' => 'Restores 50 mana instantly upon consumption.'],
            ['id' => 2, 'item_id' => 1, 'stat_name' => 'HP', 'modifier_type' => 'flat', 'value' => 100.00, 'note' => 'Heals 100 health over 10 seconds.'],
            ['id' => 3, 'item_id' => 4, 'stat_name' => 'ATK', 'modifier_type' => 'percent', 'value' => 0.15, 'note' => 'Increases attack power by 15% for heroes like Neria.'],
            ['id' => 4, 'item_id' => 4, 'stat_name' => 'Execution_Rate', 'modifier_type' => 'flat', 'value' => 0.05, 'note' => 'Grants a 5% chance to execute low-HP enemies.'],
            ['id' => 5, 'item_id' => 5, 'stat_name' => 'Special_Damage', 'modifier_type' => 'flat', 'value' => 20.00, 'note' => 'Adds 20 fire damage to all attacks for heroes like Draco.'],
            ['id' => 6, 'item_id' => 5, 'stat_name' => 'Spell', 'modifier_type' => 'percent', 'value' => 0.20, 'note' => 'Boosts spell power by 20%, stacking up to 60% with repeated casts.'],
            ['id' => 7, 'item_id' => 9, 'stat_name' => 'Mighty_Block', 'modifier_type' => 'flat', 'value' => 15.00, 'note' => 'Increases block chance by 15 for tanks like Shelda.'],
            ['id' => 8, 'item_id' => 10, 'stat_name' => 'Skill_Amplification', 'modifier_type' => 'percent', 'value' => 0.25, 'note' => 'Boosts skill damage by 25% for 30 seconds after consumption.'],
        ]);
    }
}

