var FeeManager = function () {
    var initConsumer = function () {
        $("#addEditForm").validate({
            rules: {
                biannual: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
                },
                annual: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
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
    var initMerchant = function () {
        $("#addEditForm").validate({
            rules: {
                biannual: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
                },
                annual: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
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

    var initExtra = function () {
        $("#addEditForm").validate({
            rules: {
                processing_fee: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
                },
                savcoins_fee: {
                    min: 0.01,
                    max: 99.99,
                    regex: /^\d{0,9}\.\d{0,2}?$/i,
                    require_from_group: [1, ".inputAmount"]
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
            hidePagination: 1,
            ajaxURL: surl + 'fee-manager/getall',
            columns: [
                {data: 'action'},
                {data: 'name'},
                {data: 'last_update'},
            ],
            hidePagination: 1,
            searching: false,
            searchFiled: function (d) {
                d.page_name = $("#page_name").val();
            },
        }
        getDataTable(arr);

    };

    return{
        initView: function () {
            datatableInit();
        },
        initConsumer: function () {
            initConsumer();
        },
        initExtra: function () {
            initExtra();
        },
        initMerchant: function () {
            initMerchant();
        }
    };
}();