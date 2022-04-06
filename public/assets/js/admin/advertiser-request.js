var AdvertiserRequest = function () {

    var datatableInit = function () {

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'advertiser-request/getall',
            columns: [
                {data: 'action', orderable: false},
                {data: 'aging'},
                {data: 'date_received'},
                {data: 'first_last_name'},
                {data: 'leed_contacted', orderable: false},
                {data: 'delete', orderable: false},
            ]
        }

        getDataTable(arr);


        $('body').on('click', '.contacted', function () {
            var id = $(this).attr('data-id');

            if ($(this).prop("checked") == true) {
                var contacted = 'Yes';
            } else if ($(this).prop("checked") == false) {
                var contacted = 'No';
            }

            $.ajax({
                url: surl + 'advertiser-request/change-contacted',
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                data: {'id': id, 'contacted': contacted},
                success: function (data) {
                    $("#dataTableList").DataTable().ajax.reload(null, false);
                },
                error: function (errorThrown) {

                }
            });
        });

        function advertiserRequestGetData(id) {

            $("#id_for_update").val('');
            $("#data_first_name").html('');
            $("#data_last_name").html('');
            $("#data_company_name").html('');
            $("#data_city_name").html('');
            $("#data_state_name").html('');
            $("#data_office_phone").html('');
            $("#data_contact_email").html('');
            $("#data_website").html('');
            $("textarea#description").val('');
            $("#advertiserRequest .delete").attr('data-id', '');

            $.ajax({
                url: surl + 'get-advertiser-request-data' + "/" + id,
                type: "GET",
                success: function (data) {

                    data = data.data;

                    $("#id_for_update").val(data.id);
                    $("#data_first_name").html(data.first_name);
                    $("#data_last_name").html(data.last_name);
                    $("#data_company_name").html(data.company_name);
                    $("#data_city_name").html(data.city.name);
                    $("#data_state_name").html(data.state.name);
                    var mobileNumber = data.office_phone;
                    mobileNumber = mobileNumber.replaceAll('-', '');
                    mobileNumber = mobileNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                    $("#data_office_phone").html(mobileNumber);
                    $("#data_contact_email").html(data.contact_email);
                    $("#data_website").html(data.website);
                    $("textarea#description").val(data.description);
                    $("#advertiserRequest .delete").attr('data-id', data.id);
                    $(".showModel").trigger("click");
                },
                error: function (request, message, error) {
                    swal.fire('Cancelled', message, 'error');
                }
            });
        }


        $(document).ready(function () {

            $('body').on("click", ".formSubmitButton", function (e) {
                var id = $("#id_for_update").val();
                e.preventDefault();

                var url = surl + 'update-advertiser-request-data';
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

            });
        });

        $(document).on("click", '.advertiserRequestButton', function () {
            var id = $(this).attr('data-id');
            advertiserRequestGetData(id);
        });

        var delDescription = 'Once you delete an advertising prospect, it cannot be recovered. Click "Delete" to permanently remove the lead from the database, otherwise, click "Cancel".';
        deleteSingleDataWithConformationReload(surl + 'advertiser-request/', 'Delete Advertising Lead', '', '', delDescription, 'Delete', 'Cancel');
    };

    return{
        initView: function () {
            datatableInit();
        }
    };
}();