var InAppPurchase = function () {

    var datatableInit = function () {

        var $table = $('#dataTableList');
        $table.dataTable({
            responsive: true,
            pagingType: 'full_numbers',
            order: [
                [0, 'asc']
            ],
            lengthMenu: [
                [25, 50, 100, 500, -1],
                [25, 50, 100, 500, "All"]
            ],
            pageLength: 50,
            processing: true,
            serverSide: true,
            paging: true,
            ordering: false,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'inapp-manager/getall',
                'type': 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: function (d) {
                    var reStatus = '';
                    if ($('#reYes').is(":checked")) {
                        reStatus = 'Yes';
                    }
                    if ($('#reNo').is(":checked")) {
                        reStatus = 'No';
                    }

                    d.search_start_date = $("#search_start_date").val();
                    d.search_end_date = $("#search_end_date").val();
                    d.search_transaction_id = $("#search_transaction_id").val();
                    d.search_reconciled = reStatus;
                },
            },
            'columnDefs': [
                {
                    'searchable': false,
                    'targets': [0]
                },
            ],
            columns: [
                {data: 'view'},
                {data: 'date'},
                {data: 'store'},
                {data: 'transaction_id'},
                {data: 'consumer'},
                {data: 'reconciled'},
            ]
        });

        $('#search_start_date').datepicker({
            format: 'mm-dd-yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            var minDate = new Date(e.date.valueOf());
            console.log(minDate);
            minDate.setDate(minDate.getDate());
            $('#search_end_date').datepicker('setStartDate', minDate);
            if ($('#search_start_date').val() != '' && $('#search_end_date').val() != '') {
                $(".search-report").removeClass("disabled");
                $(".search-report").removeAttr("disabled");
            }
        });

        $('#search_end_date').datepicker({
            format: 'mm-dd-yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            startDate: $("#search_start_date").data("startdate"),
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            var maxDate = new Date(e.date.valueOf());
            maxDate.setDate(maxDate.getDate());
            $('#search_start_date').datepicker('setEndDate', maxDate);
            if ($('#search_start_date').val() != '' && $('#search_end_date').val() != '') {
                $(".search-report").removeClass("disabled");
                $(".search-report").removeAttr("disabled");
            }
        });

        $('.search_start_date').click(function () {
            $("#search_start_date").focus();
        });

        $('.search_end_date').click(function () {
            $("#search_end_date").focus();
        });

        $(document).on("keyup", '#search_transaction_id', function () {
            var length = $.trim($('#search_transaction_id').val()).length;
            if (length >= 5) {
                $(".search-report").removeClass("disabled");
                $(".search-report").removeAttr("disabled");
            } else {
                $(".search-report").addClass("disabled");
                $(".search-report").addAttr("disabled");
            }
        });

        $('body').on('click', '.reconciled', function () {
            var id = $(this).attr('data-id');
            if ($(this).prop("checked") == true) {
                var reconciled = 'Yes';
            } else if ($(this).prop("checked") == false) {
                var reconciled = 'No';
            }

            $.ajax({
                url: surl + 'inapp-manager/change-reconciled',
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                data: {'id': id, 'reconciled': reconciled}, success: function (data) {
                    $("#dataTableList").DataTable().ajax.reload(null, false);
                },
                error: function (errorThrown) {

                }
            });
        });

    };

    return{
        initView: function () {
            datatableInit();
        }
    };
}();