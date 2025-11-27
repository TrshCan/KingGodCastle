<?php

namespace App\Services;

use App\Models\Team;
use App\Repositories\TeamRepository;
use App\Repositories\UserHeroRepository;
use Illuminate\Support\Facades\DB;

class TeamService
{
    public function __construct(
        protected TeamRepository $teamRepository,
        protected UserHeroRepository $userHeroRepository
    ) {}

    public function createTeam(int $userId, array $data): Team
    {
        $this->validateTeamData($data);

        $team = $this->teamRepository->create([
            'user_id' => $userId,
            'name' => $data['name'] ?? null,
            'slot1' => $data['slot1'] ?? null,
            'slot2' => $data['slot2'] ?? null,
            'slot3' => $data['slot3'] ?? null,
            'slot4' => $data['slot4'] ?? null,
            'slot5' => $data['slot5'] ?? null,
            'slot6' => $data['slot6'] ?? null,
        ]);

        return $this->teamRepository->getTeamWithDetails($team->id);
    }

    public function updateTeam(int $teamId, int $userId, array $data): Team
    {
        $team = $this->teamRepository->findOrFail($teamId);

        // Verify ownership
        if ($team->user_id !== $userId) {
            throw new \Exception("Unauthorized: You don't own this team", 403);
        }

        $this->validateTeamData($data, $teamId);

        $this->teamRepository->updateTeamSlots($teamId, $data);
        return $this->teamRepository->getTeamWithDetails($teamId);
    }

    public function getUserTeams(int $userId)
    {
        return $this->teamRepository->getUserTeams($userId);
    }

    public function getTeam(int $teamId): Team
    {
        return $this->teamRepository->getTeamWithDetails($teamId);
    }

    public function deleteTeam(int $teamId, int $userId): bool
    {
        $team = $this->teamRepository->findOrFail($teamId);

        if ($team->user_id !== $userId) {
            throw new \Exception("Unauthorized: You don't own this team", 403);
        }

        return $this->teamRepository->delete($teamId);
    }

    protected function validateTeamData(array $data, ?int $teamId = null): void
    {
        $slots = ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6'];
        
        foreach ($slots as $slot) {
            if (isset($data[$slot]) && $data[$slot] !== null) {
                // Verify user hero exists and belongs to the user
                $userHero = $this->userHeroRepository->find($data[$slot]);
                if (!$userHero) {
                    throw new \Exception("User hero not found: {$data[$slot]}", 404);
                }

                // Check if hero is already in another slot of this team
                if ($teamId) {
                    $team = $this->teamRepository->find($teamId);
                    foreach ($slots as $otherSlot) {
                        if ($otherSlot !== $slot && $team->$otherSlot === $data[$slot]) {
                            throw new \Exception("Hero already in team slot: {$otherSlot}", 400);
                        }
                    }
                }
            }
        }
    }
}

