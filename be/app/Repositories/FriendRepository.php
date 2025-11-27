<?php

namespace App\Repositories;

use App\Models\Friend;
use App\Repositories\BaseRepository;

class FriendRepository extends BaseRepository
{
    public function __construct(Friend $model)
    {
        parent::__construct($model);
    }

    public function getFriendship(int $userId, int $friendId): ?Friend
    {
        return $this->model->where('user_id', $userId)
            ->where('friend_id', $friendId)
            ->first();
    }

    public function getUserFriends(int $userId)
    {
        return $this->model->where('user_id', $userId)
            ->where('status', 'accepted')
            ->with('friend')
            ->get();
    }

    public function getPendingFriendRequests(int $userId)
    {
        return $this->model->where('friend_id', $userId)
            ->where('status', 'pending')
            ->with('user')
            ->get();
    }

    public function acceptFriendRequest(int $userId, int $friendId): bool
    {
        $friendship = $this->getFriendship($friendId, $userId);
        if ($friendship && $friendship->status === 'pending') {
            $friendship->status = 'accepted';
            return $friendship->save();
        }
        return false;
    }
}

