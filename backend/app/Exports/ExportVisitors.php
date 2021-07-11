<?php

namespace App\Exports;

use App\Visitor;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportVisitors implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Visitor::all();
    }
}
