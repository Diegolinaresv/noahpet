<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NoahCalc extends Controller
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
    public function store(Request $request)
    {
        $peso = 25;

        $factor_general = 130;
        $factor_otros = 130;

        //peso metabólico - Peso metabólico (kg) = Peso elevado al 0.75 = Peso^0.75

        $peso_metabolito = pow($peso, 0.75);

        // print($peso_metabolito);

        //echo "/";

        //contextura

        $too_skinny = 1.15;
        $normal = 1;
        $fat = 0.85;

        $contextura = $factor_general * $too_skinny; //O cambiar el const de la contextura

        //print($contextura);

        //echo "/";

        //nivel de actividad

        $inactivo = 0.73;
        $activo = 1;
        $muy_activo = 1.0768;

        $actividad = $contextura * $inactivo; //O cambiar el const de la actividad

        //print($actividad);

        //echo "/";

        //consumo snacks

        $bastante = 0.95;
        $ocasional = 0.97;
        $nunca = 1;

        $consumo_snacks = $actividad * $bastante; //O cambiar el consumo snacks

        //print($consumo_snacks);

        //echo "/";

        $requerimiento_de_energia = $consumo_snacks * $peso_metabolito;

        //print($requerimiento_de_energia);

        //echo "/";

        $condicion = 2429;

        $g_por_dia = round((($requerimiento_de_energia / $condicion) * 1000) * 1.05);

        return response()->json($g_por_dia);
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
