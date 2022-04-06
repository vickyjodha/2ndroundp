var Consumer = function () {

    var datatableInit = function () {

        deleteSingleDataTableReload(surl+'temporary-register/')

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'temporary-register/getall',
            columns: [
                {data: 'action', orderable: false},
                {data: 'date'},
                {data: 'time'},
                {data: 'merchants'},
                {data: 'consumers'},
                {data: 'email'},
            ]
        }

        getDataTable(arr);

    };

    return{
        initView: function () {
            datatableInit();
        }
    };
}();