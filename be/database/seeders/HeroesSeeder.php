<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('heroes')->insert([
            [
                'id' => 1,
                'name' => 'Luniare',
                'region_id' => 2,
                'class_id' => 2,
                'title' => 'Blue Moonlight',
                'description' => 'Coming form the north where the Blue Moon rises, Luniare endlessly yearned for the Moon that rose every night, coming to harness its beauty to bless others.',
                'rarity' => 'epic',
                'icon' => 'Unit_10230.png',
                'illustration' => 'Unit_Illust_10230_02.png',
                'card' => '19-2.png',
            ],
            [
                'id' => 2,
                'name' => 'Shelda',
                'region_id' => 5,
                'class_id' => 4,
                'title' => 'Shield of Knights',
                'description' => 'Shelda always stands against enemies at the front line of the battlefield to honor her father, a legendary war hero.',
                'rarity' => 'rare',
                'icon' => 'Unit_10000_00.png',
                'illustration' => 'Unit_Illust_10000_00.png',
                'card' => '12_2.png',
            ],
            [
                'id' => 3,
                'name' => 'Evan',
                'region_id' => 5,
                'class_id' => 3,
                'title' => 'Sword of Valor',
                'description' => 'Evan, a talented swordman and tactician, ascended to the position of Knight Commander at such a tender age.',
                'rarity' => 'epic',
                'icon' => 'Unit_10030.png',
                'illustration' => 'Unit_Illust_10030.png',
                'card' => '5_2.png',
            ],
            [
                'id' => 4,
                'name' => 'Draco',
                'region_id' => 4,
                'class_id' => 6,
                'title' => 'Half-Dragon',
                'description' => 'Born between a dragon and a human, Draco cannot wield the full power of a dragon, but his might is still quite formidable.',
                'rarity' => 'legendary',
                'icon' => 'Unit_10080_01.png',
                'illustration' => 'Unit_Illust_10080.png',
                'card' => '6_2.png',
            ],
            [
                'id' => 5,
                'name' => 'Neria',
                'region_id' => 2,
                'class_id' => 5,
                'title' => 'Hunter of the Red Moon',
                'description' => 'Neria is the leader of a secret sect called Red Moon, a group that seeks the root of the Curse of the Black Blood that spread throughout the world. After losing her kin to the cursed ones, she lives to eliminate the dark-blooded beings to the last of their kind.',
                'rarity' => 'legendary',
                'icon' => 'Unit_10350_99_00.png',
                'illustration' => 'Unit_Illust_10350_03.png',
                'card' => '21-2.png',
            ],
        ]);
    }
}

