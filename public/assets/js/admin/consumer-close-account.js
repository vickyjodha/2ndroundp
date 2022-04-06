var ConsumerCloseAccount = function () {

    var datatableInitManager = function () {
        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'consumer-close-account/getall-close-account-manager',
            columns: [
                {data: 'action', orderable: false},
                {data: 'mdc', orderable: false},
                {data: 'consumer', orderable: false, className: "text-center"},
                {data: 'merchant', orderable: false, className: "text-center"},
                {data: 'first_name'},
                {data: 'last_name'},
                {data: 'amount'},
                {data: 'city'},
                {data: 'state'},
            ]
        }
        getDataTable(arr);

        function closeAccountGetData(id) {

            $("#id_for_update").val('');
            $("#role").html('');
            $("#role2").html('');
            $("#role3").html('');
            $("#first_name").html('');
            $("#last_name").html('');
            $("#company_name").html('');
            $("#apartment_number").html('');
            $("#address").html('');
            $("#city_name").html('');
            $("#state_name").html('');
            $("#zip_name").html('');
            $("#created_at").html('');
            $("#phone").html('');
            $("#transaction_count").html('');
            $("#transaction_total_amount").html('');
            $("#amount").html('');
            $("#user_amount").val('');

            $("#noticeTitle").html('');
            $("#description").html('');
            $("div.kt-padding-15").removeClass(["consumer-close-bg", "merchant-close-bg"]);
            $(".text-center.py-1").removeClass(["consumer-close-title-bg", "merchant-close-title-bg"]);
            $("#description").removeClass(["consumer-close-desc-color", "merchant-close-desc-color"]);

            $.ajax({
                url: surl + 'get-consumer-close-account' + "/" + id,
                type: "GET",
                success: function (data) {

                    data = data.data;

                    $("#id_for_update").val(data.id);
                    $("#role").html(data.role);
                    $("#role2").html(data.role);
                    $("#role3").html(data.role);
                    $("#first_name").html(data.name);
                    $("#last_name").html(data.last_name);
                    $("#company_name").html(data.company_name + ' ' + (data.role == 'Consumer') ? "" : "<br/>");
                    $("#apartment_number").html(data.apartment_number);
                    $("#address").html(data.address);
                    $("#city_name").html(data.city.name);
                    $("#state_name").html(data.state.name);
                    $("#zip_name").html(data.zip.name);
                    $("#created_at").html(data.member_since);
                    $("#phone").html(data.phone);
                    $("#transaction_count").html(data.transaction_count);
                    $("#transaction_total_amount").html(data.transaction_total_amount);
                    $("#amount").html(data.amount);
                    $("#user_amount").val(data.user_amount);

                    $("#noticeTitle").html(data.role + ' Account Closure Notice');
                    
                    var description = 'Your are about to permanently close this account. Once an account is closed, it can be reactivated. Once the account is closed, neither consumer members or merchants can access their account. No employees of the merchant will be able to access their account. The account\'s email address is retained for archival purposes, but the email addess can never again be used to establish a new account. You hereby acknowlege you have sent the consumer or merchant a check in the amount shown below, and that there are no remaining funds associated with the members account in SavCoins.';
                    if(data.role == 'Merchant') {
                        description = 'Your are about to permanently close this account. Once an account is closed, it can be reactivated. Once the account is closed, neither merchant and the merchant\'s employees can no longer or login to this account. No employees of the merchant will be able to access their account. The account\'s email address is retained for archival purposes, but the email addess can never again be used to establish a new account. You hereby acknowlege you have sent the merchant a check in the amount shown below, and that there are no remaining funds associated with the merchants account.';
                    }
                    $("#description").html(description);

                    $("div.kt-padding-15").addClass(data.role == 'Consumer' ? "consumer-close-bg" : "merchant-close-bg");
                    $(".text-center.py-1").addClass(data.role == 'Consumer' ? "consumer-close-title-bg" : "merchant-close-title-bg");
                    $("#description").addClass(data.role == 'Consumer' ? "consumer-close-desc-color" : "merchant-close-desc-color");
                    $(".showModel").trigger("click");

                    setTimeout(function () {
                        checkRequired(ex);
                    }, 1000);

                },
                error: function (request, message, error) {
                    swal.fire('Cancelled', message, 'error');
                }
            });
        }


        $(document).ready(function () {

            $("#addEditForm").validate({
                rules: {
                    check_number: {
                        required: true,
                    },
                    amount: {
                        required: true,
                        equalTo: "#user_amount",
                    }
                },
                messages: {
                    amount: {
                        required: 'The amount you have entered does not match the current account balance to be paid. Please correct the amount and click "Close".',
                        equalTo: 'The amount you have entered does not match the current account balance to be paid. Please correct the amount and click "Close".'
                    }
                }
            });

            $('body').on("click", ".formSubmitButton", function (e) {
                var id = $("#id_for_update").val();
                e.preventDefault();
                var val = $("#addEditForm").validate({
                    rules: {
                        check_number: {
                            required: true,
                        },
                        amount: {
                            required: true,
                            equalTo: "#user_amount",
                        },
                    },
                    messages: {
                        amount: {
                            required: 'The amount you have entered does not match the current account balance to be paid. Please correct the amount and click "Close".',
                            equalTo: 'The amount you have entered does not match the current account balance to be paid. Please correct the amount and click "Close".'
                        }
                    }
                });
                if (val.form() != false) {
                    e.preventDefault();

                    var url = surl + 'update-consumer-close-account-data';
                    //var action = "PUT";
                    var fdata = new FormData($("#addEditForm")[0]);

                    $.ajax({
                        url: url,
                        type: 'POST',
                        data: fdata,
                        headers: {
                            'X_CSRF_TOKEN': '{{csrf_token()}}',
                        },
                        processData: false,
                        contentType: false,
                        success: function (data, textStatus, jqXHR) {
                            var res = data;

                            if (data.status == 1) {
                                $('#dataTableList').DataTable().ajax.reload();
                                $(".showModel").trigger("click");

                            } else {
                                swal.fire('Wrong!', data.message, 'error');
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            swal.fire('Wrong!', 'Something went wrong. Please try again.', 'error');
                        }
                    });
                } else {
                    return false;
                }
            });
        });

        $(document).on("click", '.closeAccountButton', function () {
            resetFormAndValidation('#addEditForm');
            var id = $(this).attr('data-id');
            closeAccountGetData(id);
        });

    };

    var datatableInit = function () {
        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'consumer-close-account/getall-close-account',
            columns: [
                {data: 'consumer', orderable: false, className: "text-center"},
                {data: 'merchant', orderable: false, className: "text-center"},
                {data: 'first_name'},
                {data: 'last_name'},
                {data: 'amount'},
                {data: 'check_number'},
                {data: 'close_date'},
                {data: 'close_by'}
            ]
        }
        getDataTable(arr);

    };

    return{
        initViewManager: function () {
            datatableInitManager();
        },
        initView: function () {
            datatableInit();
        }
    };
}();