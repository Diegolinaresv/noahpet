<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'cellphone',
        'city',
    ];

    public function donePets()
    {
        return $this->hasMany('App\Models\Pet')->where('status', Pet::STATUS_DONE);
    }

    public function actualPet()
    {
        return $this->hasOne('App\Models\Pet')->where('status', Pet::STATUS_PENDING);
    }
}
