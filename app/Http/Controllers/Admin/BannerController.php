<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BannerRequest;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index(){
        $banneres = Banner::all();
        return view('admin.banner.index',compact('banneres'));
    }
    public function create(){

        return view('admin.banner.edit');
    }
    public function edit($id){
$banner  = Banner::findOrFail($id);
        return view('admin.banner.edit',compact('banner'));
    }
    public function show(){
        return view('admin.banner.edit');
    }
    public function store(BannerRequest $request){
        $banner = new  Banner();
        $banner->name = $request->alt;
        if ($image = $request->file('image')) {
            $destinationPath = 'banner/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $banner->image = "$profileImage";
        }
        $banner->save();
        return back()->with('message','banner Created');
    }
    public function update(BannerRequest $request,$id){
        $banner = Banner::findOrFail($id);
        $banner->name = $request->alt;

        if ($image = $request->file('image')) {
            $destinationPath = 'banner/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $banner->image = "$profileImage";
        }
        $banner->save();
        return  redirect()->route('banner.index')->with('message','Banner Updated');
    }
    public function destroy($id){
        $banner = Banner::findOrFail($id);
        $banner->delete();
        return back()->with('message',"Banner Deleted");
    }
}
