@extends('admin.layouts.admin')
@section('title', 'product')
@section('page_title', 'Product Import')

@section('page_level_css')
    <link href="{{ asset('assets/vendors/custom/datatables/datatables.bundle.css') }}" rel="stylesheet"
        type="text/css" />
@endsection

@section('content')
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
        <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="kt-portlet">
                        <div class="kt-portlet__head">
                            <div class="kt-portlet__head-label">
                                <h3 class="kt-portlet__head-title">
                                    Banner
                                </h3>
                            </div>
                        </div>
                        <!--begin::Form-->
                        <form class="kt-form kt-form--label-right" action="{{ isset($banner)? route('banner.update',$banner->id):route('banner.store') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @if(isset($banner))
                                @method('patch')
                                @endif
                                <div class="kt-portlet__body">
                                    <div class="form-group row">
                                        <label class="col-form-label col-lg-3 col-sm-12">Import Product</label>
                                        <div class="col-lg-9 col-md-9 col-sm-12">
                                            <input type="file" class="form-control" name="image"
                                                placeholder="csv" >
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-lg-3 col-sm-12">Alt </label>
                                        <div class="col-lg-9 col-md-9 col-sm-12">
                                            <input type="text" class="form-control" name="alt"
                                                placeholder="Enter Image Alt" value="{{ isset($banner)?$banner->name:old('alt') }}" >
                                        </div>
                                    </div>

                                </div>
                                <div class="kt-portlet__foot">
                                    <div class="kt-form__actions">
                                        <div class="row">
                                            <div class="col-lg-9 ml-lg-auto">
                                                <button type="submit"
                                                    class="btn btn-brand"> {{ isset($banner)?"Update":"Submit"}}</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <!--end::Form-->
                        </div>

                        <!--end::Portlet-->
                    </div>
                </div>
            </div>
        </div>

 @endsection


@section('page_level_js')
    <script src="{{ asset('assets/vendors/custom/datatables/datatables.bundle.min.js') }}" type="text/javascript">
    </script>
    <script src="{{ asset('assets/js/demo1/pages/crud/datatables/basic/paginations.js') }}" type="text/javascript">
    </script>
@endsection

