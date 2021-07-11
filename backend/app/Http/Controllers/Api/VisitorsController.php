<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\ExportVisitors;
use Maatwebsite\Excel\Facades\Excel;
use App\Visitor;
use Illuminate\Support\Facades\Validator;

class VisitorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visitors = Visitor::orderBy('id', 'DESC')->get();
        $response = ['visitors' => $visitors];
        return response($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'dob' => 'required',
        ]);
        if ($validator->fails())
        {
            $error = $validator->errors()->all();
            return response(['message'=>$error], 422);
        }
        else{
            \DB::beginTransaction();
                try {
                    $visitor = new Visitor();
                    $visitor->firstname = $request->get('firstname');
                    $visitor->lastname = $request->get('lastname');
                    $visitor->email = $request->get('email');
                    $visitor->DOB = \Carbon\Carbon::parse($request->get('dob'))->format('Y-m-d');
                    $visitor->save();

                    \DB::commit();
            
                    $response = ['message' => 'Visitor saved successfully'];
                    return response($response, 200); 
                }catch (\Exception $e) {
                    \DB::rollback();
                    $response = ["message" =>'Something went wrong,please try again later.','error' => $e];
                    return response($response, 422);
                }
        }
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $visitor = Visitor::find($id);
        if($visitor){
            $visitor->delete();
            $response = ['message' => "Visitor deleted successfully"];
            return response($response, 200);
        }else{
            $response = ['message' => "Visitor not found"];
            return response($response, 422);
        }
    }

    public function export(){
        return Excel::download(new ExportVisitors, 'visitors.csv');
    }
}
