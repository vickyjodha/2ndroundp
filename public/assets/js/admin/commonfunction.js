function getDataTable(arr) {
    var pageLengthLimit = (arr.pageLength != undefined && arr.pageLength != '') ? arr.pageLength : 25;
    var hidePagination = (arr.hidePagination != undefined && arr.hidePagination == 1) ? false : true;

    var dataTable = $(arr.tableID).DataTable({
        responsive: true,
        pagingType: 'full_numbers',
        order: [
            [0, 'asc']
        ],

        order: arr.orderSorting,
        lengthMenu: [
            [pageLengthLimit, 50, 100, 500, -1],
            [pageLengthLimit, 50, 100, 500, "All"]
        ],
        pageLength: pageLengthLimit,
        processing: true,
        serverSide: true,
        searching: arr.searching,

        paging: hidePagination,
        ordering: false,
        searching: false,
        info: false,
        lengthChange: false,
        stripeClasses: ['odd-row', 'even-row'],

        // scrollY: "100%",
        ajax: {
            'url': arr.ajaxURL,
            'type': 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: arr.searchFiled,
        },
        'columnDefs': [
            {
                'searchable': true,
                'targets': [0]
            },
        ],
        "fnRowCallback": arr.fnRowCallbacka,
        columns: arr.columns,
    });
}



/* Form Button Validation */
var ex = [];
$(document).on("blur", '#addEditForm .inputModule', function () {
    checkRequired(ex);
});

$(document).on("change", '#addEditForm select.inputModule', function () {
    checkRequired(ex);
});
/* Form Button Validation */


function deleteSingleData(URL) {
    $('body').on('click', '.delete', function () {
        var dataid = $(this).attr('data-id');
        $.ajax({
            url: URL + dataid,
            type: "DELETE",
            data: {
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data) {
                if (data.status == 1) {
                    $("#dataTableList").DataTable().ajax.reload(null, false);
                    toastr.success(data.message);

                    window.location.href = URL;
                } else {
                    swal.fire('Cancelled', data.message, 'error');
                }
            },
            error: function (request, message, error) {
                swal.fire('Cancelled', message, 'error');
            }
        });
    });
}

function deleteSingleDataTableReload(URL) {
    $('body').on('click', '.delete', function () {
        var dataid = $(this).attr('data-id');
        $.ajax({
            url: URL + dataid,
            type: "DELETE",
            data: {
                _token: $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data) {
                if (data.status == 1) {
                    $("#dataTableList").DataTable().ajax.reload(null, false);
                    toastr.success(data.message);
                    window.location.href = URL;
                } else {
                    swal.fire('Cancelled', data.message, 'error');
                }
            },
            error: function (request, message, error) {
                swal.fire('Cancelled', message, 'error');
            }
        });
    });
}

function deleteSingleDataWithConformation(URL, HEADERTITLE, ICON = '', TITLE = '', TEXT, CONFIRMTITLE = "Delete", CANCELTITLE = "Cancel") {
    
    //console.log(TEXT);
    $('body').on('click', '.delete', function () {
        var dataid = $(this).attr('data-id');
        $('#modal_delete_herder_title').html(HEADERTITLE);
        $('#modal_delete_icon').html(ICON);
        $('#modal_delete_title').html(TITLE);
        $('#modal_delete_description').html(TEXT);
        $('#confirm_delete_title').html(CONFIRMTITLE);
        $('#cancel_delete_title').html(CANCELTITLE);
        $('.yes-sure').attr('data-id', dataid);
    });

    $('.yes-sure').click(function () {
        var dataId = $(this).attr('data-id');
        $.ajax({
            url: URL + dataId,
            type: "DELETE",
            data: {
                _token: csrfToken
            },

            success: function (data) {
                $("#deleteModal").modal('hide');

                if (data.status == 1) {
                    toastr.success(data.message);
                    window.location.href = URL;
                } else {
                    toastr.error(data.message);
                }
            },
            error: function (request, message, error) {
                swal.fire('Cancelled', message, 'error');
            }
        });

    });
}

function deleteSingleDataWithConformationReload(URL, HEADERTITLE, ICON = '', TITLE = '', TEXT, CONFIRMTITLE = "Delete", CANCELTITLE = "Cancel") {
    $('body').on('click', '.delete', function () {
        var dataid = $(this).attr('data-id');
        $('#modal_delete_herder_title').html(HEADERTITLE);
        $('#modal_delete_icon').html(ICON);
        $('#modal_delete_title').html(TITLE);
        $('#modal_delete_description').html(TEXT);
        $('#confirm_delete_title').html(CONFIRMTITLE);
        $('#cancel_delete_title').html(CANCELTITLE);
        $('.yes-sure').attr('data-id', dataid);
    });

    $('.yes-sure').click(function () {
        var dataId = $(this).attr('data-id');
        $.ajax({
            url: URL + dataId,
            type: "DELETE",
            data: {
                _token: csrfToken
            },

            success: function (data) {
                $("#deleteModal").modal('hide');
                toastr.success(data.message);
                $('#dataTableList').DataTable().ajax.reload();
            },
            error: function (request, message, error) {
                swal.fire('Cancelled', message, 'error');
            }
        });

    });
}

function deleteSingleDataWithConformationOld(URL, TITLE, TEXT, CONFIRMTITLE = "Delete", CANCELTITLE = "Cancel") {
    $('body').on('click', '.delete', function () {
        var dataId = $(this).attr('data-id');
        swal.fire({
            title: TITLE,
            text: TEXT,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: CONFIRMTITLE,
            cancelButtonText: CANCELTITLE,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                $.ajax({
                    url: URL + dataId,
                    type: "DELETE",
                    data: {
                        _token: csrfToken
                    },

                    success: function (data) {
                        if (data.status == 1) {
                            /*$('#deleteSection').show();
                             $('#deleteSection').html('<div class="alert alert-success fade show" role="alert" ><div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text"><strong>Success!</strong>  '+data.message+'   </div><div class="alert-close"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><i class="la la-close"></i></span></button></div></div>');
                             $('html,body').animate({scrollTop: $("body").offset().top}, 'slow');
                             hideMsgBox();*/
                            toastr.success(data.message);
                            window.location.href = URL;
//                            setTimeout(function () {
//                            }, 3000);
                        } else {
                            swal.fire('Cancelled', data.message, 'error');
                        }
                    },
                    error: function (request, message, error) {
                        swal.fire('Cancelled', message, 'error');
                    }
                });
            }
        });
    });
}


function deleteSingleDataWithConformationReloadOld(URL, TITLE, TEXT, CONFIRMTITLE = "Delete", CANCELTITLE = "Cancel") {
    //console.log('reload');
    $('body').on('click', '.delete', function () {
        var dataId = $(this).attr('data-id');
        swal.fire({
            title: TITLE,
            text: TEXT,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: CONFIRMTITLE,
            cancelButtonText: CANCELTITLE,
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                $.ajax({
                    url: URL + dataId,
                    type: "DELETE",
                    data: {
                        _token: csrfToken
                    },

                    success: function (data) {
                        if (data.status == 1) {
                            $('#dataTableList').DataTable().ajax.reload();
                            //$("#advertiserRequest").modal('hide');
                            window.location.href = URL;
                        } else {
                            swal.fire('Cancelled', data.message, 'error');
                        }
                    },
                    error: function (request, message, error) {
                        swal.fire('Cancelled', message, 'error');
                    }
                });
            }
        });
    });
}

//$(document).ready(function() {
//    hideMsgBox();
//});

//function hideMsgBox() {
//    
//    setTimeout(function() {
//        $(".alert").slideUp(3000);
//    }, 5000);
//}

$.validator.addMethod("allowChar", function (value, element, regexp) {
    // var  re = new RegExp(/(.*[a-z]){3}/i);                                                                                           
    var re = new RegExp(/^(.*[A-Za-z ']{3,})$/i);
    var red = new RegExp(/^([^0-9]*)$/i);
    var res = new RegExp(/^([^_]*)$/i);
    return  this.optional(element) || re.test(value) && red.test(value) && res.test(value);
}, "Please enter only characters and please minimum 3 characters.");

$.validator.addMethod("allowZip", function (value, element, regexp) {
    var re = new RegExp(/^[0-9]{5}$/i);
    return  this.optional(element) || re.test(value);
}, "Please enter valid zip code.");

$(".allowChar").keypress(function (e) {
    var keyCode = e.keyCode || e.which;
    var re = /^(.*[A-Za-z '])$/;
    var red = /^([^0-9]*)$/;
    var res = /^([^_]*)$/;
    return   re.test(String.fromCharCode(keyCode)) && red.test(String.fromCharCode(keyCode)) && res.test(String.fromCharCode(keyCode));
});

$(".allowZip").keypress(function (e) {
    var keyCode = e.keyCode || e.which;
    var re = /^[0-9]$/;
    return   re.test(String.fromCharCode(keyCode));
});

$(".allowVersion").keypress(function (e) {
    var keyCode = e.keyCode || e.which;
    var re = /^[0-9.]$/;
    return   re.test(String.fromCharCode(keyCode));
});

var Tooltip = function () {
    var initTooltip = function (el) {
        console.log("asdasd");
        var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
        var placement = el.data('placement') ? el.data('placement') : 'left';

        el.tooltip({
            trigger: triggerValue,
            template: '<div class="tooltip tooltop-auto-width" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
        });
    }

    var initTooltips = function () {
        // init bootstrap tooltips
        $('[data-toggle="kt-tooltip"]').each(function () {
            initTooltip($(this));
        });
    }

    return{
        initTooltips: function () {
            initTooltips();
        }
    };
}();

$('[data-toggle="tooltip"]').tooltip();




function formatDateMonthFirst(date) {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [month, day, year].join('-');
}

function resetFormAndValidation(id) {
    var form = $(id);
    validator = form.validate();
    validator.resetForm();
    form.find(".error").removeClass("error");
}