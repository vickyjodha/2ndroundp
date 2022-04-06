var User = function () {

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
                    regex: /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){3}).*$/
                            /*    /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=(?:.*?[0-9]){3}).*$/ */
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                role: {
                    required: true,
                },
                status: {
                    required: true,
                }
            },
            messages: {
                password: {
                    regex: "You must use must be a minimum of 10 characters, 2 capital characters and 3 digits."
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
    };

    var initEdit = function () {

        $("#addEditForm").validate({
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
                    regex: /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){3}).*$/
                            /*regex: /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=.*?[a-z])(?=(?:.*?[0-9]){3}).*$/*/
                },
                password_confirmation: {
                    equalTo: "#password",
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                role: {
                    required: true,
                },
                status: {
                    required: true,
                }
            },
            messages: {
                password: {
                    regex: "You must use must be a minimum of 10 characters, 2 capital characters and 3 digits."
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

        var delIcon = '<img src="' + url + 'assets/media/extra/exclamation.png" class="img-height-width-50 my-4" ><br>';
        var delTitle = 'YOU ARE ABOUT TO PERMANENTLY DELETE A USER';
        var delDescription = 'Once delete an individual from SavCoins, they cannot be recovered. They will be unable to access the application. If you are sure they should be permanently removed, click the "Delete User".';
        deleteSingleDataWithConformation(surl + 'users/', 'Delete User', delIcon, delTitle, delDescription, "Delete User", 'Cancel');
    };

    var datatableInit = function () {

        var $table = $('#dataTableList');
        $table.dataTable({
            responsive: true,
            pagingType: 'full_numbers',
            order: [
                [0, 'asc']
            ],
            ordering: false,
            lengthMenu: [
                [25, 50, 100, 500, -1],
                [25, 50, 100, 500, "All"]
            ],
            pageLength: 25,
            processing: true,
            serverSide: true,

            paging: true,
            ordering: false,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'users/getall',
                'type': 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            },
            'columnDefs': [
                {
                    'searchable': false,
                    'targets': [0]
                },
            ],
            columns: [
                {data: 'action'},
                {data: 'name'},
                {data: 'last_name'},
                {data: 'role'},
                {data: 'status'},
            ],
            fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData.status == 'Inactive') {
                    $('td', nRow).addClass("inactive-datatable");
                }
            }
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