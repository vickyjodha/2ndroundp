<script type="text/javascript">
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };


    function showToastrSuccess(bodyText = 'You clicked the button!', title = "Success") {
        toastr.success(bodyText, title);
    }

    function showToastrError(bodyText = 'You clicked the button!', title = "Error") {
        toastr.error(bodyText, title);
    }
</script>

@if ($errors->first('message'))
    @if ($errors->first('status') == 1)
        <script>
            showToastrSuccess("{{ $errors->first('message') }}", "Success");
        </script>
    @else
        <script>
            showToastrError("{{ $errors->first('message') }}", "Error");
        </script>
    @endif
    @if (session('session_success'))
        <script>
            showToastrSuccess("{{ $errors->first('message') }}");
        </script>
    @endif

    @if (session('session_error'))
        <script>
            showToastrError("{{ $errors->first('message') }}");
        </script>
    @endif
@endif
@if (!empty($errors->any()))
    @foreach ($errors->all() as $errors)
        <script>
            toastr.error(`{{ $errors }}`);
        </script>
    @endforeach
@endif
@if (Session::has('message'))
    <script>
        toastr.success(`{{ Session::get('message') }}`);
    </script>
@endif
@if (Session::has('error'))
    <script>
        toastr.error(`{{ Session::get('error') }}`);
    </script>
@endif
