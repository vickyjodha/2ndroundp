@extends('front.layout.app')
@section('content')
    <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
        <div class="kt-container page-custom-tab-section kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div class="row">
                <div class="col-md-10 col-10 mx-auto">
<a href="{{ route('user.product.import') }}" class="btn btn-primary">Import</a>
<a href="{{ route('user.product.export') }}" class="btn btn-primary">Export</a>
                </div>
                </div>
            <div class="row">

                <div class="col-lg-10 pb-4 mx-auto custom-height-manage">
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

