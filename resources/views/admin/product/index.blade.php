@extends('admin.layouts.admin')
@section('title', 'Category')
@section('page_title', 'CategoryIndex')

@section('page_level_css')
    <link href="{{ asset('assets/vendors/custom/datatables/datatables.bundle.css') }}" rel="stylesheet"
        type="text/css" />
@endsection

@section('content')
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
        <div class="kt-container page-custom-tab-section kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div class="row">
                <div class="col-md-12 col-12">
<a href="{{ route('product.import') }}" class="btn btn-primary">Import</a>
<a href="{{ route('product.export') }}" class="btn btn-primary">Export</a>
                </div>
                <div class="col-lg-12 pb-4 custom-height-manage">
                    <div class="kt-portlet kt-portlet--mobile mb-0">
                        <div class="kt-portlet__body data-table-list">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    @forelse($productes as $product)
                                  <tr>
                                    <th scope="row">{{ $loop->index+1 }}</th>
                                    <td>{{ $product->name }}</td>
                                  </tr>
                                 @empty
                                 <tr>
                                    <td colspan="6"> Empty</td>
                                  </tr>
                                  @endforelse
                                </tbody>
                              </table>
                        </div>
                    </div>
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

