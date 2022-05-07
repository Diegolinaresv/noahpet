<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    const GENDER_MALE = 'm';
    const GENDER_FEMALE = 'f';
    const TYPE_DOG = 'dog';
    const TYPE_CAT = 'cat';
    const TYPE_OTHER = 'other';
    const IS_STERILIZED_M = 'ya esta esterilizado';
    const IS_STERILIZED_F = 'ya esta esterilizada';
    const IS_NOT_STERILIZED_M = 'no esta esterilizada';
    const IS_NOT_STERILIZED_F = 'no esta esterilizado';
    const STATUS_DONE = 'done';
    const STATUS_PENDING = 'pending';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'gender',
        'type',
        'age',
        'sterilized',
        'birthday',
        'weight',
        'breed_id',
        'texture_id',
        'ideal_weight',
        'activity_level_id',
        'eat_style',
        'food_type',
        'food_branch',
        'n_feed_times',
        'snacking_id',
        'has_medical_condition',
        'principal_medical_condition_id',
        'principal_medical_sympton',
        'has_secondary_medical_condition',
        'secondary_medical_condition_id',
        'secondary_medical_sympton',
        'client_id',
        'diet_id',
        'status'
    ];
}
