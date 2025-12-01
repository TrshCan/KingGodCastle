<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LegacyBannersSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('legacy_banners')->insert([
            ['id' => 1, 'legacy_id' => 1],
            ['id' => 2, 'legacy_id' => 2],
            ['id' => 3, 'legacy_id' => 3],
        ]);
    }
}
