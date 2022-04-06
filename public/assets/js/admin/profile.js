var Profile = function () {

    var initUpdateProfile = function () {

        $('body').on('click', '#showPassword', function(){
            var inputPasswordField = $('.passwordInput');
            if (inputPasswordField.attr('type') === "password") {
                inputPasswordField.attr('type', 'text');
            } else {
                inputPasswordField.attr('type', 'password');
            }
        });


        $("#updateForm").validate({
            rules: {
                name: {
                    required: true,
                    allowChar: true
                },
                last_name: {
                    required: true,
                    allowChar: true
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

        $("#updatePassword").validate({
            rules: {
                current: {
                    required: true,
                },
                password: {
                    required: true,
                    regex: /^(?=.{10,}$)(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){3}).*$/
                },
                password_confirmation: {
                    required: true,
                    equalTo: "#password"
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

    };

    return{
        initUpdateProfile: function () {
            initUpdateProfile();
        }
    };
}();