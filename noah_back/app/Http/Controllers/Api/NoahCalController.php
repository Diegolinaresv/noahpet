<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLevel;
use App\Models\Breed;
use App\Models\Diet;
use App\Models\Snacking;
use App\Models\Texture;
use Illuminate\Http\Request;

class NoahCalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function calc(Request $request)
    {
        $pet_list = [];

        foreach ($request->input('donePets') as $pet) {
            $factor = Breed::where('id', $pet['petBreed'])->first()->factor;
            $weight = $pet['petWeight'];
            $metabolic_weight = pow($weight, 0.75);
            $texture_val = Texture::where('id', $pet['petTexture'])->first()->percent;
            $texture = $texture_val * $factor;
            $activity_val = 0.73;
            $activity = $activity_val * $texture;
            $snacking_val = Snacking::where('id', $pet['petSnackShare'])->first()->percent;
            $snacking = $activity * $snacking_val;
            $energy_requirement = $snacking * $metabolic_weight;

            $diet = Diet::where('id', $pet['petSelectedFood'])->first()->em;

            $g_per_day = round((($energy_requirement / $diet) * 1000) * 1.08);

            array_push($pet_list, [
                'name' => $pet['petName'],
                'gPerDay' => $g_per_day,
            ]);
        }

        return response()->json($pet_list);
    }

    public function food(Request $request)
    {
        $pet_food_list = [];

        foreach ($request->input('donePets') as $pet) {

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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
