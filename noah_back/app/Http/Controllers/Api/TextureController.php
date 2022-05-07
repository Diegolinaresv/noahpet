<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Texture;
use Illuminate\Http\Request;

class TextureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $texture = new Texture();
        $all = $texture->all();
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
     * @param  \App\Models\Texture  $texture
     * @return \Illuminate\Http\Response
     */
    public function show(Texture $texture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Texture  $texture
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Texture $texture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Texture  $texture
     * @return \Illuminate\Http\Response
     */
    public function destroy(Texture $texture)
    {
        //
    }
}
