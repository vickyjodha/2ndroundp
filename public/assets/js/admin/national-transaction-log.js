var NationalTransactionLog = function () {

    var datatableInit = function () {

        var $table = $('#dataTableList');
        $table.dataTable({
            responsive: true,
            pagingType: 'full_numbers',
            order: [
                [0, 'asc']
            ],
            ordering: false,
            lengthMenu: [
                [25, 50, 100, 500, -1],
                [25, 50, 100, 500, "All"]
            ],
            pageLength: 25,
            processing: true,
            serverSide: true,

            paging: true,
            ordering: false,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'national-transaction-log/getall',
                'type': 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: function (d) {
                    d.search_date = $("#search_date").val();
                    d.search_name = $("#search_name").val();
                    d.search_city = $("#search_city").val();
                    d.search_state = $("#search_state").val();
                    d.search_company = $("#search_company").val();
                    d.search_amount = $("#search_amount").val();
                },
            },
            'columnDefs': [
                {
                    'searchable': false,
                    'targets': [0]
                },
            ],
            columns: [
                {data: 'view'},
                {data: 'date'},
                {data: 'consumer_name'},
                {data: 'city'},
                {data: 'state'},
                {data: 'company_name'},
                {data: 'amount', className: "text-right"},
            ]
        });

        $('#search_date').datepicker({
            format: 'mm-dd-yyyy',
            //todayHighlight: true,
            endDate: new Date(),
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            /*$(this).valid();
            var minDate = new Date(e.date.valueOf());
            minDate.setDate(minDate.getDate() + 1);
            $('#search_date').datepicker('setStartDate', minDate);*/
        });

        function getNationalTransactionLogData(id) {

            $("#id_for_update, textarea#description").val('');
            $("#data_first_name, #data_last_name, #data_company_name, #data_city_name, #data_state_name, #data_office_phone, #data_contact_email").html('');
            $("#nationalTransactionLogRequest .delete").attr('data-id', '');

            $.ajax({
                url: surl + 'get-national-transaction-detail' + "/" + id,
                type: "GET",
                success: function (data) {

                    if (data.status == 1) {
                        data = data.data;
                        $("#merchant_company_name").html(data.merchant_details.company_name);
                        $("#merchant_company_id").html(data.merchant_details.company_id);
                        $("#merchant_address_1").html(data.merchant_details.address + ", " + data.merchant_details.apartment_number);
                        $("#merchant_address_2").html(data.merchant_details.city.name + ", " + data.merchant_details.state.name + ", " + data.merchant_details.zip.name);
                        $("#merchant_phone").html(data.merchant_details.phone);
                        $("#merchant_transaction_count").html(data.merchant_details.transaction_count);
                        $("#merchant_transaction_amount").html(data.merchant_details.transaction_amount);

                        $("#consumer_name").html(data.consumer_details.full_name);
                        $("#consumer_member_id").html(data.consumer_details.member_number);
                        $("#consumer_address_1").html(data.consumer_details.address + ", " + data.consumer_details.apartment_number);
                        $("#consumer_address_2").html(data.consumer_details.city.name + ", " + data.consumer_details.state.name + ", " + data.consumer_details.zip.name);
                        $("#consumer_phone").html(data.consumer_details.phone);
                        $("#consumer_transaction_count").html(data.consumer_details.transaction_count);
                        $("#consumer_transaction_amount").html(data.consumer_details.transaction_amount);

                        $("#transaction_amount").html(data.total_amount);
                        $("#confirmation_id").html(data.confirmation_id);
                        $("#confirmation_time").html(data.show_time);

                        $(".showModel").trigger("click");
                    } else {

                    }
                },
                error: function (request, message, error) {
                    swal.fire('Cancelled', message, 'error');
                }
            });
        }

        $(document).on("click", '.showTransactionButton', function () {
            var id = $(this).attr('data-id');
            getNationalTransactionLogData(id);
        });

        $('.search_date').click(function () {
            $("#search_date").focus();
        });

        var count = 1;
        setInterval(function () {
            console.log("Hello : " + count++);
            $('#dataTableList').DataTable().ajax.reload();
        }, (1000 * 300));

//        var delDescription = 'Once you delete an advertising prospect, it cannot be recovered. Click "Delete" to permanently remove the lead from the database, otherwise, click "Cancel".';
//        deleteSingleDataWithConformationReload(surl + 'advertiser-request/', 'Delete Advertising Lead', '', '', delDescription, 'Delete', 'Cancel');
        // deleteSingleDataWithConformationReload(surl+'advertiser-request/', delTitle, delDescription, 'Delete', 'Cancel')

    };

    return{
        initView: function () {
            datatableInit();
        }
    };
}();