<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InventorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('inventory')->insert([
            ['user_id' => 1, 'item_id' => 5, 'quantity' => 1],
            ['user_id' => 1, 'item_id' => 6, 'quantity' => 3],
            ['user_id' => 1, 'item_id' => 9, 'quantity' => 2],
            ['user_id' => 2, 'item_id' => 3, 'quantity' => 1],
            ['user_id' => 2, 'item_id' => 4, 'quantity' => 1],
            ['user_id' => 2, 'item_id' => 10, 'quantity' => 5],
            ['user_id' => 3, 'item_id' => 1, 'quantity' => 6],
            ['user_id' => 3, 'item_id' => 8, 'quantity' => 2],
            ['user_id' => 3, 'item_id' => 9, 'quantity' => 1],
            ['user_id' => 4, 'item_id' => 1, 'quantity' => 8],
        ]);
    }
}

