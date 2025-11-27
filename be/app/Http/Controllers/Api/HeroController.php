<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\HeroService;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function __construct(
        protected HeroService $heroService
    ) {}

    public function index()
    {
        return response()->json($this->heroService->getAllHeroes());
    }

    public function show(int $id)
    {
        try {
            return response()->json($this->heroService->getHero($id));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 404);
        }
    }

    public function byRegion(int $regionId)
    {
        return response()->json($this->heroService->getHeroesByRegion($regionId));
    }

    public function byClass(int $classId)
    {
        return response()->json($this->heroService->getHeroesByClass($classId));
    }
}

