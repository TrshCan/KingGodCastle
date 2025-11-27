<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HeroSkillsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('hero_skills')->insert([
            // Luniare (hero_id: 1)
            ['id' => 1, 'hero_id' => 1, 'name' => 'Lunar Aegis', 'description' => '<Blessing of the Blue Moon> grants 1 Mighty Block to the target.', 'type' => 'passive', 'icon' => null],
            ['id' => 2, 'hero_id' => 1, 'name' => 'Moonlit Resilience', 'description' => 'After the end of <Blessing of the Blue Moon>, buff remains for an additional 2 turns.', 'type' => 'passive', 'icon' => null],
            ['id' => 3, 'hero_id' => 1, 'name' => 'Swift Blessing', 'description' => 'Luniare recovers 100% MP if the target\'s is after Luniare at the begining of the battle. +20% Movement Speed on the target of <Blessing of the Blue Moon>.', 'type' => 'awakening', 'icon' => null],
            ['id' => 4, 'hero_id' => 1, 'name' => 'Protection of the Moon', 'description' => 'No longer grants Protection when <Blessing of the Blue Moon> is cast. +2 Mighty Blocks to the target of <Blessing of the Blue Moon>', 'type' => 'awakening', 'icon' => null],
            ['id' => 5, 'hero_id' => 1, 'name' => 'Blessing of the Blue Moon', 'description' => 'Concentrates for 5 turns, granting 15/60/120/250+SP Protection to the linked target and giving 90/100/110/120% of ATK and Spell Power converted into the target hero\'s base stats.', 'type' => 'ultimate', 'icon' => null],
            
            // Shelda (hero_id: 2)
            ['id' => 6, 'hero_id' => 2, 'name' => 'Knight\'s Bulwark', 'description' => '+50% For all obtained Protection.', 'type' => 'passive', 'icon' => null],
            ['id' => 7, 'hero_id' => 2, 'name' => 'Defiant Stand', 'description' => ' -20 MP Cost of <Iron Will>.', 'type' => 'passive', 'icon' => null],
            ['id' => 8, 'hero_id' => 2, 'name' => 'Absolute Will', 'description' => 'Obtains 2-8 Mighty Blocks when using <Iron Will>. (can\'t be stacked)', 'type' => 'awakening', 'icon' => null],
            ['id' => 9, 'hero_id' => 2, 'name' => 'Explosive Will', 'description' => 'Consumes current Protection when using <Iron Will>. Upon consuming/depleting Protection, deals spell skill damage equal to consuming/depleting Protection + 50% of Spell power to all enemies', 'type' => 'awakening', 'icon' => null],
            ['id' => 10, 'hero_id' => 2, 'name' => 'Iron Will', 'description' => 'Generates 30/120/250/700 + SP Protection upon herself with her willpower.', 'type' => 'ultimate', 'icon' => null],
            
            // Evan (hero_id: 3)
            ['id' => 11, 'hero_id' => 3, 'name' => 'Valiant Strike', 'description' => 'Recover 100% of MP at the start of the battle', 'type' => 'passive', 'icon' => null],
            ['id' => 12, 'hero_id' => 3, 'name' => 'Tactician\'s Edge', 'description' => '+40% Spell Power', 'type' => 'passive', 'icon' => null],
            ['id' => 13, 'hero_id' => 3, 'name' => 'Wave Slash', 'description' => '+20% final damage of <Crescent Slash> for each enemy hit by <Crescent Slash> (max +100%)', 'type' => 'awakening', 'icon' => null],
            ['id' => 14, 'hero_id' => 3, 'name' => 'Unleash Sword Aura', 'description' => 'Emits aura with his sword that deals spell normal damage equal to 30% of Spell Power to enemies next to target on normal attacks', 'type' => 'awakening', 'icon' => null],
            ['id' => 15, 'hero_id' => 3, 'name' => 'Crescent Slash', 'description' => 'Unleash a piercing aura with his sword, dealing 20/35/50/65+ SP damage to 3 enemies in front of him.', 'type' => 'ultimate', 'icon' => null],
            
            // Draco (hero_id: 4)
            ['id' => 16, 'hero_id' => 4, 'name' => 'Drake\'s Flame', 'description' => 'When all targets of <Flamebreath> are killed, MP is returned in proportion to the remaining skill damage count', 'type' => 'passive', 'icon' => null],
            ['id' => 17, 'hero_id' => 4, 'name' => 'Stormfang Slash', 'description' => 'Drain +50% of the Spell Power damage as HP', 'type' => 'passive', 'icon' => null],
            ['id' => 18, 'hero_id' => 4, 'name' => 'Ignite', 'description' => 'Gradually increases final damage of <Flamebreath> by 15% while target is on it for every turn (max 135%)', 'type' => 'awakening', 'icon' => null],
            ['id' => 19, 'hero_id' => 4, 'name' => 'Concentrated Flame', 'description' => '-45 MP Cost and +70% Spell Power for <Flamebreath>. Total turn of <Flamebreath> is reduced to 4 and can\'t be stacked', 'type' => 'awakening', 'icon' => null],
            ['id' => 20, 'hero_id' => 4, 'name' => 'Flamebreath', 'description' => 'Breathes out flame, dealing 10 + 60% SP damage to all enemies in front of him once for 10 turns.', 'type' => 'ultimate', 'icon' => null],
            
            // Neria (hero_id: 5)
            ['id' => 21, 'hero_id' => 5, 'name' => 'Crimson Fang', 'description' => '+1% final damage per 1% HP lost by target of <Annihilation Time> (max +60%)', 'type' => 'passive', 'icon' => null],
            ['id' => 22, 'hero_id' => 5, 'name' => 'Bloodseeker\'s Mark', 'description' => '+1% final damage dealt by <Annihilation Time> for every 3% Attack Speed that exceeds 100% (max +50%)', 'type' => 'passive', 'icon' => null],
            ['id' => 23, 'hero_id' => 5, 'name' => ' Everlasting Night', 'description' => '+1 attack count of <Annihilation Time> that is being cast when a target is killed by the skill (max 3)', 'type' => 'awakening', 'icon' => null],
            ['id' => 24, 'hero_id' => 5, 'name' => 'Shroud of Night', 'description' => 'Hides for 2 round when using <Annihilation Time>, becoming untargetable to attacks for the duration', 'type' => 'awakening', 'icon' => null],
            ['id' => 25, 'hero_id' => 5, 'name' => 'Annihilation Time', 'description' => 'For the next 4 rounds, shoots enhanced arrows that deal (450+SP/10)% of ATK. During <Annihilation Time>, Neria\'s Movement Speed is fixed to 100.', 'type' => 'ultimate', 'icon' => null],
        ]);
    }
}

