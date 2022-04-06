var TransactionActivity = function () {

    var initReport = function () {

        $('.consumer_start_date').click(function () {
            $("#consumer_start_date").focus();
        });

        $('.consumer_end_date').click(function () {
            $("#consumer_end_date").focus();
        });

        $("#checkConsumerForm").validate({
            rules: {
                consumer_member_id: {
                    minlength: 11,
                    maxlength: 11
                },
                
            },
            
            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                // KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('body').on('click', '.verify-consumer', function () {
            
            var member_id = $('#consumer_member_id').val();

            if (member_id.length == 11) {

                $.ajax({
                    type: 'POST',
                    url: surl + "check-user-member-number",
                    data: {member_id: member_id, role: 'Consumer'},
                    headers: {
                        'X-CSRF-Token': csrfToken
                    },
                    success: function (data) {
                        if (data.status == 1) {
                            $(".consumer-run-report").removeClass("disabled");
                            $(".consumer-run-report").removeAttr("disabled");
                            $('.invalid-consumer-id').hide();
                        } else {
                            $(".consumer-run-report").addClass("disabled");
                            $(".consumer-run-report").prop("disabled", true);
                            $('.invalid-consumer-id').show();
                        }
                    }
                });
            } else {
                $('#consumer_member_id-error').show();
            }

        });

        $('#consumer_start_date').datepicker({
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
            $(this).valid();
            var minDate = new Date(e.date.valueOf());
            minDate.setDate(minDate.getDate());
            $('#consumer_end_date').datepicker('setStartDate', minDate);
            if ($('#consumer_start_date').val() != '' && $('#consumer_end_date').val() != '') {
                $(".consumer-run-report").removeClass("disabled");
                $(".consumer-run-report").removeAttr("disabled");
            }
        });

        $('#consumer_end_date').datepicker({
            format: 'mm-dd-yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            startDate: $("#consumer_end_date").data("startdate"),
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
            $('#consumer_start_date').datepicker('setEndDate', maxDate);
            if ($('#consumer_start_date').val() != '' && $('#consumer_end_date').val() != '') {
                $(".consumer-run-report").removeClass("disabled");
                $(".consumer-run-report").removeAttr("disabled");
            }
        });

        /* Merchant Report */

        $('.merchant_start_date').click(function () {
            $("#merchant_start_date").focus();
        });

        $('.merchant_end_date').click(function () {
            $("#merchant_end_date").focus();
        });

        $("#checkMerchantForm").validate({
            // define validation rules
            rules: {
                merchant_member_id: {
                    // required: true,
                    minlength: 11,
                    maxlength: 11
                },
                
            },
            
            invalidHandler: function (event, validator) {
                var alert = $('#kt_form_1_msg');
                alert.removeClass('kt--hide').show();
                // KTUtil.scrollTop();
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        $('body').on('click', '.verify-merchant', function () {

            var member_id = $('#merchant_member_id').val();

            if (member_id.length == 11) {
                $.ajax({
                    type: 'POST',
                    url: surl + "check-user-member-number",
                    data: {member_id: member_id, role: 'Merchant'},
                    headers: {
                        'X-CSRF-Token': csrfToken
                    },
                    success: function (data) {
                        if (data.status == 1) {
                            $(".merchant-run-report").removeClass("disabled");
                            $(".merchant-run-report").removeAttr("disabled");
                            $('.invalid-merchant-id').hide();
                        } else {
                            $(".merchant-run-report").addClass("disabled");
                            $(".merchant-run-report").prop("disabled", true);
                            $('.invalid-merchant-id').show();
                        }
                    }
                });
            } else {
                $('#merchant_member_id-error').show();
            }
        });

        $('#merchant_start_date').datepicker({
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
            $(this).valid();
            var minDate = new Date(e.date.valueOf());
            minDate.setDate(minDate.getDate());
            $('#merchant_end_date').datepicker('setStartDate', minDate);
            if ($('#merchant_start_date').val() != '' && $('#merchant_end_date').val() != '') {
                $(".merchant-run-report").removeClass("disabled");
                $(".merchant-run-report").removeAttr("disabled");
            }
            
        });

        $('#merchant_end_date').datepicker({
            format: 'mm-dd-yyyy',
            endDate: new Date(),
            orientation: "bottom left",
            startDate: $("#merchant_end_date").data("startdate"),
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
            $('#merchant_start_date').datepicker('setEndDate', maxDate);
            if ($('#merchant_start_date').val() != '' && $('#merchant_end_date').val() != '') {
                $(".merchant-run-report").removeClass("disabled");
                $(".merchant-run-report").removeAttr("disabled");
            }
        });

        $("#consumer_member_id").keyup(function () {
            $('.invalid-consumer-id').hide();
            if ($(this).val().length != 11) {
                $(".consumer-run-report").addClass("disabled");
                $(".consumer-run-report").prop("disabled", true);
            }

            if ($(this).val().length == 0 && $('#consumer_start_date').val() != '' && $('#consumer_end_date').val() != ''){
                $(".consumer-run-report").removeClass("disabled");
                $(".consumer-run-report").removeAttr("disabled");
            }
        });

        $("#merchant_member_id").keyup(function () {
            $('.invalid-merchant-id').hide();

            if ($(this).val().length != 11) {
                $(".merchant-run-report").addClass("disabled");
                $(".merchant-run-report").prop("disabled", true);
            }

            if ($(this).val().length == 0 && $('#merchant_start_date').val() != '' && $('#merchant_end_date').val() != ''){
                $(".merchant-run-report").removeClass("disabled");
                $(".merchant-run-report").removeAttr("disabled");
            }
        });

    };

    return{
        initReport: function () {
            initReport();
        }
    };
}();