var Scapni = function () {

    var initAdd = function () {
        $('#state_id, #state_id_validate').select2({
            placeholder: "Select a state"
        });

        $("#contact_phone").inputmask("mask", {
            "mask": "999-999-9999"
        });

        $("#addEditForm").validate({
            rules: {
                street_address: {
                    required: true,
                    minlength: 3
                },
                city: {
                    required: true,
                    allowChar: true
                },
                state_id: {
                    required: true,
                },
                zip: {
                    required: true,
                    allowZip: true
                },
                contact_phone: {
                    required: true,
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
    };

    return{
        initAdd: function () {
            initAdd();
        }
    };
}();