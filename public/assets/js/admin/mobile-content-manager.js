var MobileContentManager = function () {
    
    var initAdd = function () {

        $("#addEditForm").validate({
            rules: {
                description: {
                    required: true,
                    minlength: 3
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
            ajaxURL: surl + 'mobile-content-manager/getall',
            columns: [
                {data: 'action', orderable: false, searchable: false},
                {data: 'page_name'},
                {data: 'updated_at'},
                {data: 'editor_name'},
            ],
            searching: false,
            hidePagination: 1
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