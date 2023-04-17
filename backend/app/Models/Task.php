<?php

namespace App\Models;

use App\Models\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    public function users()
    {
        return $this->hasMany(User::class);
    } 
    public function status()
    {
        return $this->belongsTo(Status::class);
    } 
}
