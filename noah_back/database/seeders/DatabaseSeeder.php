<?php

namespace Database\Seeders;

use App\Models\ActivityLevel;
use App\Models\Breed;
use App\Models\Diet;
use App\Models\Food;
use App\Models\Snacking;
use App\Models\Texture;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Role::create(['name' => 'web_user']);
        Role::create(['name' => 'web_guest']);

        $user = User::create([
            'name' => 'Web',
            'email' => 'web@noah.pet',
            'password' => Hash::make(Str::random(8)),
        ]);

        $user->assignRole('web_guest');

        Breed::create([
            'name' => 'Otro',
            'slug' => 'other',
            'factor' => 130,
        ]);

        Breed::create([
            'name' => 'Bull Terrier',
            'slug' => 'bull_terrier',
            'factor' => 180,
        ]);

        Breed::create([
            'name' => 'Gran Danés',
            'slug' => 'gran_danes',
            'factor' => 200,
        ]);

        Texture::create([
            'name' => 'Delgado',
            'slug' => 'skinny',
            'percent' => 1.5,
            'image' => 'skinny.svg',
        ]);

        Texture::create([
            'name' => 'Ideal',
            'slug' => 'normal',
            'percent' => 1,
            'image' => 'normal.svg',
        ]);

        Texture::create([
            'name' => 'Sobrepeso',
            'slug' => 'fat',
            'percent' => 0.85,
            'image' => 'fat.svg',
        ]);

        ActivityLevel::create([
            'name' => 'Poco Activa',
            'slug' => 'low_activity',
            'percent' => 0.73,
            'image' => 'low-activity.svg',
        ]);

        ActivityLevel::create([
            'name' => 'Activa',
            'slug' => 'normal_activity',
            'percent' => 1,
            'image' => 'normal-activity.svg',
        ]);

        ActivityLevel::create([
            'name' => 'Muy activa',
            'slug' => 'high_activity',
            'percent' => 1.0768,
            'image' => 'high-activity.svg',
        ]);

        Snacking::create([
            'name' => 'Bastante',
            'slug' => 'plenty',
            'percent' => 0.95,
        ]);

        Snacking::create([
            'name' => 'Ocasional',
            'slug' => 'occasional',
            'percent' => 0.97,
        ]);

        Snacking::create([
            'name' => 'Nunca',
            'slug' => 'never',
            'percent' => 1,
        ]);

        Diet::create([
            'name' => 'Balanceado carne',
            'slug' => 'balanceado_carne',
            'em' => 2614,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado carne y leguminosas',
            'slug' => 'balanceado_carne_leguminosas',
            'em' => 2140,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado cerdo',
            'slug' => 'balanceado_cerdo',
            'em' => 2599,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado mix',
            'slug' => 'balanceado_mix',
            'em' => 2381,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado pollo',
            'slug' => 'balanceado_pollo',
            'em' => 2440,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado cachorros',
            'slug' => 'balanceado_cachorros',
            'em' => 2300,
            'type' => 'food',
        ]);

        Diet::create([
            'name' => 'Balanceado cachorros cuidado digestivo',
            'slug' => 'balanceado_cachorros_cuidado_digestivo',
            'em' => 2219,
            'type' => 'food',
        ]);

        //Medical Condition

        Diet::create([
            'name' => 'Cuidado Digestivo',
            'slug' => 'cuidado_digestivo',
            'em' => 2482,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Alergia sabor carne',
            'slug' => 'alergia_sabor_carne',
            'em' => 2470,
            'type' => 'allergy',
        ]);

        Diet::create([
            'name' => 'Calculo estruvita',
            'slug' => 'calculo_estruvita',
            'em' => 2540,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Calculo Oxalato',
            'slug' => 'calculo_oxalato',
            'em' => 2424,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Control de Peso',
            'slug' => 'control_de_peso',
            'em' => 2000,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado Articular',
            'slug' => 'cuidado_articular',
            'em' => 2349,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado Cardiaco',
            'slug' => 'cuidado_cardiaco',
            'em' => 2618,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado de la piel',
            'slug' => 'cuidado_piel',
            'em' => 2435,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado hepático',
            'slug' => 'cuidado_hepático',
            'em' => 2421,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado hepático carne',
            'slug' => 'cuidado_hepatico_carne',
            'em' => 2555,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Cuidado Renal',
            'slug' => 'cuidado_renal',
            'em' => 2565,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Diabetes',
            'slug' => 'Diabetes',
            'em' => 1780,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Estreñimiento',
            'slug' => 'estrenimiento',
            'em' => 2360,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Grain Free',
            'slug' => 'grain_free',
            'em' => 1370,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Hemoparásitos',
            'slug' => 'hemoparasitos',
            'em' => 2308,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Hipoalergenica cerdo',
            'slug' => 'hipoalergenica_cerdo',
            'em' => 2541,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Oncológico',
            'slug' => 'oncológico',
            'em' => 2035,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Pancreatitis',
            'slug' => 'pancreatitis',
            'em' => 2374,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Senior',
            'slug' => 'senior',
            'em' => 2441,
            'type' => 'medical_condition',
        ]);

        Diet::create([
            'name' => 'Shunt',
            'slug' => 'shunt',
            'em' => 2089,
            'type' => 'medical_condition',
        ]);
    }
}
