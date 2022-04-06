<script>
    function deleteActoin(id) {
        swal.fire({
            title: "Delete?",
            text: "Please ensure and then confirm!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: !0
        }).then(function(e) {
            if (e.value === true) {
                $.ajax({
                    @yield('url')

                    type: "DELETE",
                    data: {
                        _token: "{{ csrf_token() }}"
                    },
                    success: function(data) {
                        if (data.status == 200) {

                            swal.fire({
                                title: "Deleted !",
                                text: data.message,
                                buttonsStyling: true,
                                confirmButtonText: "Ok",
                            }).then(function(data) {
                                $("#users").DataTable().ajax.reload(null, false);
                            });
                        } else {
                            swal.fire({
                                title: "Erorrs!",
                                text: data.message,
                                buttonsStyling: true,
                                confirmButtonText: "Ok",
                            })
                        }
                    },
                    error: function(request, message, error) {
                        swal.fire({
                            title: error,
                            text: message,
                            buttonsStyling: true,
                            confirmButtonText: "Ok",
                        })
                    }
                });
            }
        });

    }
</script>
