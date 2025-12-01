<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\UserRepository;
use App\Repositories\HeroRepository;
use App\Repositories\UserHeroRepository;
use App\Repositories\TeamRepository;
use App\Repositories\InventoryRepository;
use App\Repositories\SundryRepository;
use App\Repositories\QuestRepository;
use App\Repositories\FriendRepository;
use App\Repositories\RegionRepository;
use App\Repositories\ItemEffectRepository;
use App\Models\User;
use App\Models\Hero;
use App\Models\UserHero;
use App\Models\Team;
use App\Models\Inventory;
use App\Models\Sundry;
use App\Models\Quest;
use App\Models\Friend;
use App\Models\Region;
use App\Models\ItemEffect;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Repositories
        $this->app->singleton(UserRepository::class, function ($app) {
            return new UserRepository(new User());
        });

        $this->app->singleton(HeroRepository::class, function ($app) {
            return new HeroRepository(new Hero());
        });

        $this->app->singleton(UserHeroRepository::class, function ($app) {
            return new UserHeroRepository(new UserHero());
        });

        $this->app->singleton(TeamRepository::class, function ($app) {
            return new TeamRepository(new Team());
        });

        $this->app->singleton(InventoryRepository::class, function ($app) {
            return new InventoryRepository(new Inventory());
        });

        $this->app->singleton(SundryRepository::class, function ($app) {
            return new SundryRepository(new Sundry());
        });

        $this->app->singleton(QuestRepository::class, function ($app) {
            return new QuestRepository(new Quest());
        });

        $this->app->singleton(FriendRepository::class, function ($app) {
            return new FriendRepository(new Friend());
        });

        $this->app->singleton(RegionRepository::class, function ($app) {
            return new RegionRepository(new Region());
        });

        $this->app->singleton(ItemEffectRepository::class, function ($app) {
            return new ItemEffectRepository(new ItemEffect());
        });
    }

    public function boot(): void
    {
        //
    }
}

