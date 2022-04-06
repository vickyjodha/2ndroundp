var Announcements = function () {

    var initAdd = function () {

        $('#timePicker').timepicker({
            minuteStep: 1,
        });

        $('.send_time').click(function() {
            $("#timePicker").focus();
        });

        $('.send_date').click(function() {
            $("#datePicker").focus();
        });

        $('#datePicker').datepicker({
            format: 'MM dd, yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            startDate: new Date(),
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
        });

        $("#addEditForm").validate({
            rules: {
                title: {
                    required: true,
                    regex: /^(?=.{1,}$)(?=(?:.*?[A-Za-z0-9]){1}).*$/
                },
                description: {
                    required: true,
                    regex: /^(?=.{1,}$)(?=(?:.*?[A-Za-z0-9]){1}).*$/
                },
                time: {
                    required: true,
                },
                date: {
                    required: true,
                },
                checkbox_consumer: {
                    require_from_group: [1, ".checkboxSender"]
                },
                checkbox_merchant: {
                    require_from_group: [1, ".checkboxSender"]
                },
            },
            messages: {
                title: {
                    regex: "Please fill once a letter or digit."
                },
                description: {
                    regex: "Please fill once a letter or digit."
                }
            },
            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    };

    var datatableInit = function () {
        deleteSingleDataTableReload(surl + 'announcements/')
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
            pageLength: 25,
            processing: true,
            serverSide: true,

            paging: true,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'announcements/getall',
                'type': 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: function (d) {
                    d.search_name = $("#search_name").val();
                    d.search_last_name = $("#search_last_name").val();
                    d.search_city = $("#search_city").val();
                    d.search_state = $("#search_state").val();
                },
            },
            'columnDefs': [
                {
                    'searchable': false,
                    'targets': [0, 1]
                },
            ],
            columns: [
                {data: 'action', orderable: false},
                {data: 'delete', orderable: false},
                {data: 'read'},
                {data: 'title'},
                {data: 'send_time'},
                {data: 'edit', orderable: false},
            ]
        });

    };

    return{
        initAdd: function () {
            initAdd();
        },
        initView: function () {
            datatableInit();
        },

    };
}();