<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Diet;
use App\Models\Pet;
use Illuminate\Http\Request;

class NoahController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function finish_actual_pet(Client $client)
    {
        $client->actualPet()->update([
            'status' => Pet::STATUS_DONE
        ]);

        return response()->json($client);
    }

    public function food(Client $client)
    {
        $pet_food_list = [];

        foreach ($client->donePets()->get() as $pet) {

            if ($pet->has_medical_condition) {
                array_push($pet_food_list, [
                    'id' => $pet->id,
                    'name' => $pet->name,
                    'food' => Diet::where('type', 'medical_condition')->where('id', $pet->principal_medical_condition_id)->get(),
                    'supplement' => ($pet->has_secondary_medical_condition) ? Diet::where('type', 'medical_condition')->where('id', $pet->secondary_medical_condition_id)->get() : []
                ]);
            } else {
                array_push($pet_food_list, [
                    'id' => $pet->id,
                    'name' => $pet->name,
                    'food' => Diet::where('type', 'food')->get(),
                    'supplement' => [],
                ]);
            }
        }

        return response()->json($pet_food_list);
    }
}
