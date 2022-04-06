<?php

namespace App\Http\Controllers\Admin;

use App\Exports\ProductExport;
use App\Http\Controllers\Controller;
use App\Imports\ProductImport;
use App\Models\Product;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{
    public function index(){
        $productes = Product::all();
        return view('admin.product.index',compact('productes'));
    }
    public function import(){
        // dd('ff');
        Excel::import(new ProductImport,request()->file('file'));
        return back();
    }
    public function show(){
        return view('admin.product.show');
    }
    public function export(){
        return Excel::download(new ProductExport,'product.csv');
    }
}
