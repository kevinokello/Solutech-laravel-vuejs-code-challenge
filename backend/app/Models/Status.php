<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Status extends Model
{
    use HasFactory;
    
    protected $guarded = [];
    public function tasks()
    {
        return $this->hasMany(Task::class);
    } 
}
