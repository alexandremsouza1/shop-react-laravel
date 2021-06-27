<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use App\Models\Vehicle_car_steering;
use App\Models\Vehicle_carcolor;
use App\Models\Vehicle_cubccms;
use App\Models\Vehicle_doors;
use App\Models\Vehicle_exchange;
use App\Models\Vehicle_features;
use App\Models\Vehicle_financial;
use App\Models\Vehicle_gearbox;
use App\Models\Vehicle_motorpower;
use App\Models\Vehicle_regdate;
use App\Models\Vehicle_type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VehiclesController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = Auth()->guard('api')->user();
    }

    private function getData()
    {
        return [
            'vehicle_types' => Vehicle_type::all(),
            'regdate' => Vehicle_regdate::orderBy('label','ASC')->get(),
            'gearbox' => Vehicle_gearbox::all(),
            'fuel' => Vehicle_gearbox::all(),
            'car_steering' => Vehicle_car_steering::all(),
            'motorpower' => Vehicle_motorpower::all(),
            'doors' => Vehicle_doors::all(),
            'features' => Vehicle_features::all(),
            'carcolor' => Vehicle_carcolor::all(),
            'exchange' => Vehicle_exchange::all(),
            'financial' => Vehicle_financial::all(),
            'cubccms' => Vehicle_cubccms::all(),

        ];
    }
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
    public function store()
    {
        $vehicle = Vehicle::with('vehicle_photos')
                    ->firstOrCreate([
                        'user_id' => $this->user->id,
                        'status'=> 0
                    ]);

        return array_merge(['vehicle' => $vehicle],$this->getData());
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
