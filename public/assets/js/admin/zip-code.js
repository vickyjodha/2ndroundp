var ZipCode = function () {

    var initAdd = function () {

        $("#addEditForm").validate({
            rules: {
                name: {
                    required: true,
                    number: true
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
            ajaxURL: surl + 'zip/getall',
            columns: [
                {data: 'DT_RowIndex'},
                {data: 'name'},
                {data: 'action', orderable: false},
            ],
            pageLength: 15
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