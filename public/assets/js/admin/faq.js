var Faq = function () {

    var initAdd = function () {

        $("#addEditForm").validate({
            rules: {
                question: {
                    required: true,
                    minlength: 3
                },
                answer: {
                    required: true,
                    minlength: 3
                },
                group: {
                    required: true,
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

    var initEdit = function () {

        $("#addEditForm").validate({
            rules: {
                question: {
                    required: true,
                    minlength: 3
                },
                answer: {
                    required: true,
                    minlength: 3
                },
                group: {
                    required: true,
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

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'faq/getall',
            //pageLength: 100,
            //hidePagination: 1,
            columns: [
                {data: 'action', orderable: false},
                {data: 'question'},
            ],
            //hidePagination: 1
        }

        getDataTable(arr);

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
        }
    };
}();