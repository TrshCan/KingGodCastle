<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Base data (no dependencies)
        $this->call([
            RegionsSeeder::class,
            ClassesSeeder::class,
            LevelRequirementsSeeder::class,
            XpAmountsSeeder::class,
        ]);

        // Heroes and related data
        $this->call([
            HeroesSeeder::class,
            HeroBaseStatsSeeder::class,
            HeroSkillsSeeder::class,
        ]);

        // Items and effects
        $this->call([
            SundriesSeeder::class,
            ItemEffectsSeeder::class,
        ]);

        // Users and user-related data
        $this->call([
            UsersSeeder::class,
            FriendsSeeder::class,
            InventorySeeder::class,
        ]);

        // User heroes and related data
        $this->call([
            UserHeroesSeeder::class,
            UserHeroStatsSeeder::class,
            UserHeroAccessoriesSeeder::class,
            UserHeroLegaciesSeeder::class,
        ]);

        // Teams
        $this->call([
            TeamsSeeder::class,
            TeamRelicsSeeder::class,
        ]);

        // Other data
        $this->call([
            MessagesSeeder::class,
            MailsSeeder::class,
            QuestsSeeder::class,
        ]);
    }
}
