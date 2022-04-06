var DailyTransactionReport = function () {

    var initAdd = function () {

        $("#addEditForm").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                    minlength: 10
                }
            },

            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                //KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $("#addEditForm2").validate({
            rules: {
                start_date: {
                    required: true,
                },
                end_date: {
                    required: true,
                }
            },

            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                //KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

//        $('#start_date').datepicker({
//            format: 'MM dd, yyyy',
//            todayHighlight: true,
//            orientation: "bottom left",
//            //startDate: new Date(),
//            templates: {
//                leftArrow: '<i class="la la-angle-left"></i>',
//                rightArrow: '<i class="la la-angle-right"></i>'
//            },
//            autoclose: true,
//        });

        $('#start_date').datepicker({
            format: 'MM dd, yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            $(this).valid();
            var minDate = new Date(e.date.valueOf());
            minDate.setDate(minDate.getDate());
            $('#end_date').datepicker('setStartDate', minDate);
//            if ($('#start_date').val() != '' && $('#end_date').val() != '') {
//                $(".consumer-run-report").removeClass("disabled");
//                $(".consumer-run-report").removeAttr("disabled");
//            }
        });

        $('#end_date').datepicker({
            format: 'MM dd, yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            startDate: $("#end_date").data("startdate"),
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            $(this).valid();
            var maxDate = new Date(e.date.valueOf());
            maxDate.setDate(maxDate.getDate());
            $('#start_date').datepicker('setEndDate', maxDate);
//            if ($('#start_date').val() != '' && $('#end_date').val() != '') {
//                $(".consumer-run-report").removeClass("disabled");
//                $(".consumer-run-report").removeAttr("disabled");
//            }
        });

        $('.start_date').click(function () {
            $("#start_date").focus();
        });
        $('.end_date').click(function () {
            $("#end_date").focus();
        });


        var delIcon = '';
        var delTitle = '';
        var delDescription = 'Permanently delete this person from the distribution list.';
        deleteSingleDataWithConformation(surl + 'daily-transaction-report/', 'Delete Recipient', delIcon, delTitle, delDescription, "Delete", 'Cancel');

    };

    return{
        initAdd: function () {
            initAdd();
        }
    };
}();