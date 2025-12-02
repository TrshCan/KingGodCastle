<?php

namespace App\GraphQL\Resolvers;

class UserHeroStatResolver
{
    // Field resolver for camelCase mapping
    public function userHeroId($root)
    {
        return $root->user_hero_id ?? $root->attributes['user_hero_id'] ?? null;
    }
}

