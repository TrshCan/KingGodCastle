<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('classes')->insert([
            [
                'id' => 1,
                'name' => 'Swiftness',
                'description' => 'Masters of agility and precision, the Swiftness class dances through battle with unparalleled speed. Their fluid movements make them nearly untouchable, striking foes with deadly accuracy before vanishing from sight.',
                'icon' => null,
            ],
            [
                'id' => 2,
                'name' => 'Mystique',
                'description' => 'Enigmatic wielders of arcane power, the Mystique class commands ancient magic and mesmerizing illusions. Their unpredictable spells confound enemies, turning the tide of battle with otherworldly finesse.',
                'icon' => null,
            ],
            [
                'id' => 3,
                'name' => 'Courage',
                'description' => 'Unyielding champions of valor, the Courage class charges fearlessly into the fray, igniting the hearts of allies. Their bold presence inspires unwavering resolve, rallying comrades to triumph against all odds.',
                'icon' => null,
            ],
            [
                'id' => 4,
                'name' => 'Tenacity',
                'description' => 'Indomitable guardians of endurance, the Tenacity class stands firm through any ordeal, shielding allies with unshakable resolve. Their relentless spirit transforms hardship into unbreakable strength.',
                'icon' => null,
            ],
            [
                'id' => 5,
                'name' => 'Shadow',
                'description' => 'Elusive predators of the night, the Shadow class strikes from the darkness with lethal precision. Masters of stealth and deception, they sow fear in their enemies, vanishing before retaliation can strike.',
                'icon' => null,
            ],
            [
                'id' => 6,
                'name' => 'Element',
                'description' => 'Commanders of nature\'s fury, the Element class channels the primal forces of fire, water, wind, and earth. Their dynamic assaults shift like the tides, overwhelming foes with the raw power of the elements.',
                'icon' => null,
            ],
        ]);
    }
}

