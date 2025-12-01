<?php

namespace App\Repositories;

use App\Models\HeroClass;
use App\Repositories\BaseRepository;

class HeroClassRepository extends BaseRepository
{
    public function __construct(HeroClass $model)
    {
        parent::__construct($model);
    }

    public function getAllClasses()
    {
        return $this->model->all();
    }
}

