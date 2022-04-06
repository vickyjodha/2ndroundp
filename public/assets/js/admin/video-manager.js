var VideoManager = function () {

    var initAdd = function () {
        
        $("#addEditForm").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 3
                },
                url: {
                    required: true,
                    // regex: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
                    regex: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/
                },
            },
            messages: {
                url: {
                    regex: "Please enter proper youtube url."
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
            ajaxURL: surl + 'video-manager/getall',
            columns: [
                {data: 'action', orderable: false, searchable: false},
                {data: 'title'},
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