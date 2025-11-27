<?php

namespace App\Services;

use App\Models\Friend;
use App\Repositories\FriendRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\DB;

class FriendService
{
    public function __construct(
        protected FriendRepository $friendRepository,
        protected UserRepository $userRepository
    ) {}

    public function sendFriendRequest(int $userId, int $friendId): Friend
    {
        if ($userId === $friendId) {
            throw new \Exception("Cannot send friend request to yourself", 400);
        }

        // Verify friend exists
        $friend = $this->userRepository->findOrFail($friendId);

        // Check if friendship already exists
        $existingFriendship = $this->friendRepository->getFriendship($userId, $friendId);
        if ($existingFriendship) {
            throw new \Exception("Friend request already exists", 400);
        }

        return $this->friendRepository->create([
            'user_id' => $userId,
            'friend_id' => $friendId,
            'status' => 'pending',
        ]);
    }

    public function acceptFriendRequest(int $userId, int $friendId): bool
    {
        $friendship = $this->friendRepository->getFriendship($friendId, $userId);
        
        if (!$friendship || $friendship->status !== 'pending') {
            throw new \Exception("Friend request not found or already processed", 404);
        }

        // Accept the request
        $friendship->status = 'accepted';
        $friendship->save();

        // Create reciprocal friendship if it doesn't exist
        $reciprocal = $this->friendRepository->getFriendship($userId, $friendId);
        if (!$reciprocal) {
            $this->friendRepository->create([
                'user_id' => $userId,
                'friend_id' => $friendId,
                'status' => 'accepted',
            ]);
        }

        return true;
    }

    public function getFriends(int $userId)
    {
        return $this->friendRepository->getUserFriends($userId);
    }

    public function getPendingRequests(int $userId)
    {
        return $this->friendRepository->getPendingFriendRequests($userId);
    }

    public function removeFriend(int $userId, int $friendId): bool
    {
        $friendship1 = $this->friendRepository->getFriendship($userId, $friendId);
        $friendship2 = $this->friendRepository->getFriendship($friendId, $userId);

        $deleted = false;
        if ($friendship1) {
            $friendship1->delete();
            $deleted = true;
        }
        if ($friendship2) {
            $friendship2->delete();
            $deleted = true;
        }

        return $deleted;
    }
}

