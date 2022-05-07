<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLevel;
use Illuminate\Http\Request;

class ActivityLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activity_level = new ActivityLevel();
        $all = $activity_level->all();
        return response()->json($all);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ActivityLevel  $activityLevel
     * @return \Illuminate\Http\Response
     */
    public function show(ActivityLevel $activityLevel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ActivityLevel  $activityLevel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ActivityLevel $activityLevel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ActivityLevel  $activityLevel
     * @return \Illuminate\Http\Response
     */
    public function destroy(ActivityLevel $activityLevel)
    {
        //
    }
}
