<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Visitor::class, function (Faker $faker) {
    return [
        'firstname' => $faker->firstname,
        'lastname' => $faker->lastname,
        'email' => $faker->unique()->safeEmail,
        'DOB' => $faker->date($format = 'Y-m-d', $max = 'now')
    ];
});
