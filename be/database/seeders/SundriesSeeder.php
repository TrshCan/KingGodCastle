<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SundriesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('sundries')->insert([
            ['id' => 1, 'name' => 'Lunar Elixir', 'type' => 'consumable', 'description' => 'A shimmering potion infused with the North\'s Blue Moon essence, restoring mana and vitality to weary heroes like Luniare, who draw strength from its celestial glow.', 'icon' => null],
            ['id' => 2, 'name' => 'Starforged Plate', 'type' => 'armor', 'description' => 'Forged in the Central region\'s ancient smithies, this radiant armor bolsters the resilience of warriors like Shelda, deflecting blows with unyielding might.', 'icon' => null],
            ['id' => 3, 'name' => 'Dawnblade', 'type' => 'weapon', 'description' => 'A masterfully crafted sword from the Central region, its edge gleams with the light of dawn, wielded by heroes like Evan to carve paths through enemy ranks.', 'icon' => null],
            ['id' => 4, 'name' => 'Red Moon Talisman', 'type' => 'accessory', 'description' => 'A crimson amulet pulsing with the North\'s vengeful spirit, enhancing the precision of assassins like Neria as they hunt the cursed under the Red Moon\'s gaze.', 'icon' => null],
            ['id' => 5, 'name' => 'Drake\'s Embercore', 'type' => 'relic', 'description' => 'A smoldering gem from the West\'s volcanic depths, imbued with draconic fire, granting heroes like Draco the power to unleash searing elemental fury.', 'icon' => null],
            ['id' => 6, 'name' => 'Moonlit Thread', 'type' => 'material', 'description' => 'Gossamer strands woven from the North\'s lunar mists, used by mystics like Luniare to craft enchanted garments that shimmer with arcane protection.', 'icon' => null],
            ['id' => 7, 'name' => 'Sacred Reliquary', 'type' => 'legacy', 'description' => 'An ancient artifact from the Central region, said to hold the valor of fallen knights, empowering heroes like Evan with the strength of their forebears.', 'icon' => null],
            ['id' => 8, 'name' => 'Viper\'s Fang', 'type' => 'weapon', 'description' => 'A sleek dagger forged in the North\'s shadows, its venomous edge favored by Nerias for silent strikes against the cursed, leaving no trace.', 'icon' => null],
            ['id' => 9, 'name' => 'Guardian\'s Crest', 'type' => 'accessory', 'description' => 'A sturdy emblem etched with the Central region\'s sigils, worn by tanks like Shelda to bolster their resolve and shield allies from harm.', 'icon' => null],
            ['id' => 10, 'name' => 'Astral Shard', 'type' => 'consumable', 'description' => 'A crystalline fragment from the North\'s starry skies, consumed by mystics like Luniare to briefly amplify their spellcasting with cosmic radiance.', 'icon' => null],
        ]);
    }
}

