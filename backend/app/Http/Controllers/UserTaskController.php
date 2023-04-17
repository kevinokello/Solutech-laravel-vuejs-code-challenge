<?php

namespace App\Http\Controllers;

use App\Models\UserTask;
use Illuminate\Http\Request;
use App\Http\Resources\UserTaskResource;
use App\Http\Resources\UserTaskCollection;
use App\Http\Requests\StoreUserTaskRequest;

class UserTaskController extends Controller
{
    public function index()
    {
        // return TaskResource::collection(Task::all());
        return new UserTaskCollection(UserTask::all());
    }
    public function show(UserTask $usertask)
    {
        return new UserTaskResource($usertask);
    }
    public function store(StoreUserTaskRequest $request)
    {
        UserTask::create($request->validated());
        return response()->json("Task created");
    }

    public function update(StoreUserTaskRequest $request, UserTask $usertask)
    {
        $usertask->update($request->validated());
        return response()->json("Task created");
    }
    public function destroy(UserTask $usertask)
    {
        $usertask->delete();
        return response()->json("Task deleted");

    }
}
