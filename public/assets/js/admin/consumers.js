var Consumer = function () {

    $("#phone").inputmask("mask", {
        "mask": "999-999-9999"
    });

    var initAdd = function () {
        $("#addEditForm").validate({
            // define validation rules
            rules: {
                name: {
                    required: true,
                    allowChar: true
                },
                last_name: {
                    required: true,
                    allowChar: true
                },
                password: {
                    required: true,
                    regex: /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){3}).*$/   // /^(?=.{10,20}$)(?=(?:.*?[A-Z]){1})(?=.*?[a-z])(?=(?:.*?[0-9]){2}).*$/
                },
                password_confirmation: {
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                phone: {
                    required: true,
                },
                address: {
                    required: true,
                },
                city: {
                    required: true,
                },
                state: {
                    required: true,
                },
                zip: {
                    required: true,
                    allowZip: true
                },
            },
            messages: {
                password: {
                    regex: "You must use must be a minimum of 10 and maximum 20 characters, 1 capital character and 2 digits."
                }
            },
            //display error alert on form submit
            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('#state, #state_validate').select2({
            placeholder: "-- Select State --"
        });
//        $('#zip, #zip_validate').select2({
//            placeholder: "-- Select Zip Code --"
//        });
    };

    var initEdit = function () {

        $("#addEditForm").validate({
            // define validation rules
            rules: {
                name: {
                    required: true,
                    allowChar: true
                },
                last_name: {
                    required: true,
                    allowChar: true
                },
                password: {
                    regex: /^(?=.{10,20}$)(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2}).*$/
                },
                password_confirmation: {
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                phone: {
                    required: true,
                },
                address: {
                    required: true,
                },
                city: {
                    required: true,
                },
                state: {
                    required: true,
                },
                zip: {
                    required: true,
                    allowZip: true
                },
            },
            messages: {
                password: {
                    regex: "You must use must be a minimum of 10 and maximum 20 characters, 1 capital character and 2 digits."
                }
            },
            //display error alert on form submit
            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('#state, #state_validate').select2({
            placeholder: "-- Select State --"
        });
//        $('#zip, #zip_validate').select2({
//            placeholder: "-- Select Zip Code --"
//        });

    };

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
            pageLength: 25,
            processing: true,
            serverSide: true,

            paging: true,
            //ordering: false,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'consumers/getall',
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
                {data: 'action', width: '8%', orderable: false},
                {data: 'mdc', width: '8%', orderable: false},
                {data: 'name', width: '20%'},
                {data: 'last_name', width: '20%'},
                {data: 'city', width: '20%'},
                {data: 'state', width: '20%'},
            ]
        });
    };

    return{
        initAdd: function () {
            initAdd();
        },
        initEdit: function () {
            initEdit();
        },
        initView: function () {
            datatableInit();
        },

    };
}();