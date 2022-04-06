@extends('front.layout.app')
@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    @forelse($sliders as $slider)
                    <div class="carousel-item @if($loop->first) active @endif">
                        <img src="{{ asset('banner').'/'. $slider->image }}" class="d-block w-100" alt="{{ $slider->name }}">
                      </div>
                    @empty
                  <div class="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/the-city-of-london-skyline-at-night-united-kingdom-picture-id1312550959" class="d-block w-100" alt="...">
                  </div>
                  @endforelse
                  {{-- <div class="carousel-item">
                    <img src="https://media.istockphoto.com/photos/the-city-of-london-skyline-at-night-united-kingdom-picture-id1312550959" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://media.istockphoto.com/photos/the-city-of-london-skyline-at-night-united-kingdom-picture-id1312550959" class="d-block w-100" alt="...">
                  </div> --}}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    </div>
</div>

@endsection
