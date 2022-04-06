<html lang="en">

<head>

    <meta charset="utf-8" />
    <title> @yield('title') | {{ config('app.name') }}</title>
    <meta name="description" content="Login page">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
            },
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>

    <link href="{{ asset('assets/css/demo1/pages/login/login-2.css') }}" rel="stylesheet" type="text/css" />

    <link href="{{ asset('assets/vendors/general/sweetalert2/dist/sweetalert2.css') }}" rel="stylesheet"
        type="text/css" />

    <!--end:: Global Optional Vendors -->

    <!--begin::Global Theme Styles(used by all pages) -->
    <link href="{{ asset('assets/css/demo1/style.bundle.css') }}" rel="stylesheet" type="text/css" />

    <!--end::Global Theme Styles -->

    <script src="{{ asset('assets/vendors/general/jquery/dist/jquery.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/vendors/general/sweetalert2/dist/sweetalert2.min.js') }}" type="text/javascript">
    </script>
    <script src="{{ asset('assets/vendors/custom/js/vendors/sweetalert2.init.js') }}" type="text/javascript"></script>
    <script src="{{ asset('assets/js/custom.js') }}" type="text/javascript"></script>
    <link href="{{ asset('assets/vendors/custom/vendors/line-awesome/css/line-awesome.css') }}" rel="stylesheet"
        type="text/css" />
    <script src="{{ asset('assets/vendors/general/bootstrap/dist/js/bootstrap.min.js') }}" type="text/javascript">
    </script>

    <!--end::Layout Skins -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('assets/media/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/media/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/media/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/media/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('assets/media/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/media/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/media/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/media/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/media/favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"
        href="{{ asset('assets/media/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/media/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('assets/media/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/media/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('assets/media/favicon/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('assets/media/favicon/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <style type="text/css">
        .input-group-append {
            display: flex;
        }

        .input-group-text {
            display: flex;
            align-items: center;
            padding: 0.65rem -14rem;
            margin-bottom: 0;
            margin-top: 20px;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #74788d;
            text-align: center;
            white-space: nowrap;
            background-color: rgba(255, 255, 255, 0.05);
            border: 0px solid;

            border-radius: 4px;
        }

        .input-group i {
            color: #fff;
            line-height: 0;
        }

    </style>
    <link href="{{ asset('assets/css/admin/custom.css') }}" rel="stylesheet" type="text/css" />

</head>

<body
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
    <div class="kt-grid kt-grid--ver kt-grid--root">
        <div class="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin" id="kt_logind">
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
                style="background: linear-gradient(125.71deg, #079D00 10.69%, #55D74F 109.97%);">
                <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
                    <div class="kt-login__container">

                        @yield('content')

                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
