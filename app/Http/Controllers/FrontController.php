<?php

namespace App\Http\Controllers;

use App\Exports\ProductExport;
use App\Imports\ProductImport;
use App\Models\Banner;
use App\Models\Product;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;
use Maatwebsite\Excel\Facades\Excel;
class FrontController extends Controller
{
 public  function home(){
    $sliders = Banner::latest()->take(3)->get();
     return view('front.home',compact('sliders'));
 }
 public function index(){
    $productes = Product::all();
    return view('front.product.index',compact('productes'));
}
public function import(){
    // dd('ff');
    Excel::import(new ProductImport,request()->file('file'));
    return back();
}
public function show(){
    return view('front.product.show');
}
public function export(){
    return Excel::download(new ProductExport,'product.csv');
}
}
