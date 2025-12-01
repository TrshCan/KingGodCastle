<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LegaciesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('legacies')->insert([
            [
                'id' => 1,
                'name' => 'Ancient Dragonblood',
                'description' => 'A legendary bloodline said to grant its bearer immense resilience and draconic might.',
            ],
            [
                'id' => 2,
                'name' => 'Moonbound Heritage',
                'description' => 'Ancestral power tied to the light of distant moons, enhancing mystical abilities.',
            ],
            [
                'id' => 3,
                'name' => 'Knight Commander Lineage',
                'description' => 'A proud lineage of battlefield leaders whose presence rallies allies to victory.',
            ],
        ]);
    }
}
