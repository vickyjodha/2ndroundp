var Country = function () {

    var initAdd = function () {
        $("#addEditForm").validate({
            rules: {
                name: {
                    required: true
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
            ajaxURL: surl + 'country/getall',
            columns: [
                {data: 'DT_RowIndex'},
                {data: 'name'},
                {data: 'action', orderable: false},
            ]
        }
        getDataTable(arr);
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