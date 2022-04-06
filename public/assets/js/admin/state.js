var State = function () {

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

        $('#country_id, #country_id_validate').select2({
            placeholder: "Select a country"
        });
       
    };

    var datatableInit = function () {

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'state/getall',
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