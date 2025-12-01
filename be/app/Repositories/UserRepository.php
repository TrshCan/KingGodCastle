<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\BaseRepository;

class UserRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function findByEmail(string $email): ?User
    {
        return $this->model->where('email', $email)->first();
    }

    public function findByUsername(string $username): ?User
    {
        return $this->model->where('username', $username)->first();
    }

    public function findByToken(string $token): ?User
    {
        return $this->model->where('token', $token)->first();
    }

    public function getUserWithHeroes(int $userId): ?User
    {
        return $this->model->with('userHeroes.hero', 'userHeroes.stats')->find($userId);
    }

    public function getUserWithTeams(int $userId): ?User
    {
        return $this->model->with('teams.hero1', 'teams.hero2', 'teams.hero3', 'teams.hero4', 'teams.hero5', 'teams.hero6', 'teams.relics')->find($userId);
    }

    public function getUserInventory(int $userId): ?User
    {
        return $this->model->with('inventory.item')->find($userId);
    }

    public function getAllUsers()
    {
        return $this->model->all();
    }
}

