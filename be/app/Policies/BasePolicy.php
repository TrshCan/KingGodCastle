<?php

namespace App\Policies;

use App\Models\User;

abstract class BasePolicy
{
    /**
     * Determine if the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine if the user can view the model.
     */
    public function view(User $user, $model): bool
    {
        return true;
    }

    /**
     * Determine if the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->role === 'admin';
    }

    /**
     * Determine if the user can update the model.
     */
    public function update(User $user, $model): bool
    {
        return $user->role === 'admin' || $this->isOwner($user, $model);
    }

    /**
     * Determine if the user can delete the model.
     */
    public function delete(User $user, $model): bool
    {
        return $user->role === 'admin' || $this->isOwner($user, $model);
    }

    /**
     * Check if user owns the resource
     */
    protected function isOwner(User $user, $model): bool
    {
        // Override in child classes
        return false;
    }
}

