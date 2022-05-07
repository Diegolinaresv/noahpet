<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Diet;
use Illuminate\Http\Request;

class DietController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $params)
    {
        $diet = new Diet();
        $all = $diet->where('type', $params->get('type'))->get();
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
     * @param  \App\Models\Diet  $diet
     * @return \Illuminate\Http\Response
     */
    public function show(Diet $diet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Diet  $diet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Diet $diet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Diet  $diet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Diet $diet)
    {
        //
    }

    public function food(Request $request, Client $client)
    {
        $pet_food_list = [];

        foreach ($request->input('pets') as $pet) {

            if ($pet['petHasMedicalCondition']) {
                array_push($pet_food_list, [
                    'name' => $pet['petName'],
                    'food' => Diet::where('type', 'medical_condition')->where('id', $pet['petPrincipalMedicalCondition'])->get(),
                    'supplement' => ($pet['petHasSecondaryMedicalCondition']) ? Diet::where('type', 'medical_condition')->where('id', $pet['petSecondaryMedicalCondition'])->get() : []
                ]);
            } else {
                array_push($pet_food_list, [
                    'name' => $pet['petName'],
                    'food' => Diet::where('type', 'food')->get(),
                    'supplement' => [],
                ]);
            }
        }

        return response()->json($pet_food_list);
    }
}
