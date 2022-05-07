<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Snacking;
use Illuminate\Http\Request;

class SnackingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $snacking = new Snacking();
        $all = $snacking->all();
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
     * @param  \App\Models\Snacking  $snacking
     * @return \Illuminate\Http\Response
     */
    public function show(Snacking $snacking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Snacking  $snacking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Snacking $snacking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Snacking  $snacking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Snacking $snacking)
    {
        //
    }
}
