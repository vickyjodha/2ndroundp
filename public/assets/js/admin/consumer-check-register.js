var ConsumerCheckRegister = function () {

    $('.today_date').click(function() {
        $("#today_date").focus();
    });

    $('.sent_date').click(function() {
        $("#sent_date").focus();
    });
    $('.cleared_date').click(function() {
        $("#cleared_date").focus();
    });

    var initEdit = function () {
        $("#addEditForm").validate({
            rules: {
                today_date: {
                    required: true
                },
                check_number: {
                    required: true
                },
                pay_order: {
                    required: true
                },
                amount: {
                    required: true,
//                    equalTo: "#threshold",
                },
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

        $('#today_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#sent_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#cleared_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });
    }

    var datatableInitInbound = function () {
        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'consumer-check-register/getall-inbound-request',
            columns: [
                {data: 'action'},
                {data: 'aging'},
                {data: 'consumer_name'},
                {data: 'check_number'},
                {data: 'member_number'},
                {data: 'member_since'},
                {data: 'threshold'},
                {data: 'acct_balance'},
            ],
            fnRowCallbacka: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData.aging >= 24) {
                    $(nRow).find('td:eq(1)').addClass('inactive-datatable');
                }
            }
        }
        getDataTable(arr);
        
        $('#today_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#sent_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#cleared_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });
    };

    var datatableInit = function () {
        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'consumer-check-register/getall',
            columns: [
                {data: 'action'},
                {data: 'pay_order'},
                {data: 'check_number'},
                {data: 'amount'},
                {data: 'member_number'},
                {data: 'sent_date'},
                {data: 'check_sent', className: "text-center table-checkbox-middle"},
                {data: 'cleared_date'},
            ]
        }
        getDataTable(arr);
        $('#today_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#sent_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });

        $('#cleared_date').datepicker({
            format: 'mm-dd-yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        });
    };

    return{
        initViewInbound: function () {
            datatableInitInbound();
        },
        initView: function () {
            datatableInit();
        },
        initEdit: function () {
            initEdit();
        },

    };
}();