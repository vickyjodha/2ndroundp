@extends('front.layout.app')
@section('content')
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
        <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="kt-portlet">
                        <div class="kt-portlet__head">
                            <div class="kt-portlet__head-label">
                                <h3 class="kt-portlet__head-title">
                                    Product Upload
                                </h3>
                            </div>
                        </div>
                        <!--begin::Form-->
                        <form class="kt-form kt-form--label-right" action="{{ route('product.store') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="kt-portlet__body">
                                    <div class="form-group row">
                                        <label class="col-form-label col-lg-3 col-sm-12">Import Product</label>
                                        <div class="col-lg-9 col-md-9 col-sm-12">
                                            <input type="file" class="form-control" name="file"
                                                placeholder="csv" >
                                        </div>
                                    </div>


                                </div>
                                <div class="kt-portlet__foot">
                                    <div class="kt-form__actions">
                                        <div class="row">
                                            <div class="col-lg-9 ml-lg-auto">
                                                <button type="submit"
                                                    class="btn btn-brand"> Upload</button>

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


