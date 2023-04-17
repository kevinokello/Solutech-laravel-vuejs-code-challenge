<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;
use App\Http\Resources\TaskCollection;
use App\Http\Requests\StoreTaskRequest;

class TaskController extends Controller
{
    public function index()
    {
        // return TaskResource::collection(Task::all());
        return new TaskCollection(Task::all());
    }
    public function show(Task $task)
    {
        return new TaskResource($task);
    }
    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());
        return response()->json("Task created");
    }

    public function update(StoreTaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return response()->json("Task created");
    }
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json("Task deleted");

    }
}
