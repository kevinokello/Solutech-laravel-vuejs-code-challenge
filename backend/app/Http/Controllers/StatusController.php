<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use App\Http\Resources\StatusResource;
use App\Http\Resources\StatusCollection;
use App\Http\Requests\StoreStatusRequest;

class StatusController extends Controller
{
    public function index()
    {
        // return StatusResource::collection(Status::all());
        return new StatusCollection(Status::all());
    }
    public function show(Status $status)
    {
        return new StatusResource($status);
    }
    public function store(StoreStatusRequest $request)
    {
        Status::create($request->validated());
        return response()->json("status created");
    }

    public function update(StoreStatusRequest $request, Status $status)
    {
        $status->update($request->validated());
        return response()->json("status created");
    }
    public function destroy(Status $status)
    {
        $status->delete();
        return response()->json("status deleted");

    }
}
