<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('regions')->insert([
            [
                'id' => 1,
                'name' => 'South',
                'description' => 'A sun-drenched realm of vibrant landscapes, the South pulses with fiery passion and untamed beauty. Its sprawling deserts and lush jungles teem with life, challenging adventurers with trials of endurance and discovery.',
                'icon' => null,
            ],
            [
                'id' => 2,
                'name' => 'North',
                'description' => 'A frost-kissed expanse of rugged majesty, the North stands resolute under towering peaks and endless skies. Its icy winds carry tales of ancient heroes, beckoning the brave to carve their own legends.',
                'icon' => null,
            ],
            [
                'id' => 3,
                'name' => 'East',
                'description' => 'A land of dawn\'s first light, the East shimmers with mystic allure and boundless opportunity. Its serene valleys and windswept cliffs hide secrets of forgotten lore, awaiting those bold enough to seek them.',
                'icon' => null,
            ],
            [
                'id' => 4,
                'name' => 'West',
                'description' => 'A frontier of untamed horizons, the West roars with the spirit of exploration and conquest. Its golden plains and stormy coasts promise riches and peril, forging heroes in the crucible of adventure.',
                'icon' => null,
            ],
            [
                'id' => 5,
                'name' => 'Central',
                'description' => 'The beating heart of the world, the Central region thrives with harmony and unrelenting vitality. Its rolling hills and radiant cities unite diverse cultures, offering a crucible for epic tales and grand destinies.',
                'icon' => null,
            ],
        ]);
    }
}

