var TranscationHistoryRequest = function () {

    var datatableInit = function () {

        function loadDatatable() {
            var arr = {
                tableID: '#dataTableList',
                ajaxURL: surl + 'transaction-history-request/getall',
                columns: [
                    {data: 'first_name'},
                    {data: 'last_name'},
                    {data: 'state'},
                    {data: 'member_type'},
                    {data: 'phone'},
                    {data: 'email'},
                    {data: 'action', orderable: false}
                ]
            }
            getDataTable(arr);
        }
        loadDatatable();

        $('body').on('click', '#sentMail', function () {
            var id = $(this).attr('data-id');
            // var userId = $(this).attr('data-user-id');

            $.ajax({
                url: surl + 'transaction-history-request/sentmail',
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                data: {'id': id},
                success: function (data) {
                    $("#dataTableList").DataTable().ajax.reload(null, false);
                    //$('#dataTableList').DataTable().rows('.selected').remove().draw();
                },
                error: function (errorThrown) {
                    // showAlert("Account Information", "Something went wrong. Please try again.", "Okay", "error");
                }
            });
        });
    };

    return{
        initView: function () {
            datatableInit();
        },

    };
}();