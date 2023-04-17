<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTask extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    
    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }
}
