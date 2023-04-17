<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserTaskController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('assesment')->group(function () {
    Route::apiResource('statuses', StatusController::class);
    Route::apiResource('tasks', TaskController::class);
    Route::apiResource('usertasks', UserTaskController::class);

});