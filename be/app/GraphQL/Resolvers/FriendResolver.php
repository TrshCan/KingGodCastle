<?php

namespace App\GraphQL\Resolvers;

use App\Services\FriendService;
use App\GraphQL\Resolvers\Traits\AuthenticatesAdmin;
use Illuminate\Support\Facades\Auth;

class FriendResolver
{
    use AuthenticatesAdmin;

    public function __construct(
        protected FriendService $friendService
    ) {}

    public function myFriends($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->friendService->getFriends($user->id);
    }

    public function pendingRequests($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->friendService->getPendingRequests($user->id);
    }

    public function sendFriendRequest($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        return $this->friendService->sendFriendRequest($user->id, $args['friendId']);
    }

    public function acceptFriendRequest($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        $this->friendService->acceptFriendRequest($user->id, $args['friendId']);
        return ['success' => true];
    }

    public function removeFriend($root, array $args)
    {
        $user = Auth::user();
        if (!$user) {
            throw new \Exception("Unauthenticated", 401);
        }

        $this->friendService->removeFriend($user->id, $args['friendId']);
        return ['success' => true];
    }

    public function adminFriends($root, array $args)
    {
        $this->authenticateAdmin();
        
        $userId = $args['userId'] ?? null;
        return $this->friendService->getAllFriendships($userId);
    }
}

