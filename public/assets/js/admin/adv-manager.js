Dropzone.autoDiscover = false;
var Advertise = function () {

    $('.start_date').click(function () {
        $("#start_date").focus();
    });

    $('.end_date').click(function () {
        $("#end_date").focus();
    });

    var initAdd = function () {

        $('#incorrect_div1').hide();
        $('#incorrect_div2').hide();
        $('#incorrect_div3').hide();

        function clearImageDropzone(modelSaveId, disabled = false) {

            $('#img' + modelSaveId + 'PreviewModel .saveModel').attr("data-image-name", '');

            if (modelSaveId == 1) {
                reset1 = 0;
                photoDropzone.removeAllFiles(true);
            } else if (modelSaveId == 2) {
                reset2 = 0;
                photoDropzone2.removeAllFiles(true);
            } else if (modelSaveId == 3) {
                reset3 = 0;
                photoDropzone3.removeAllFiles(true);
            }

            if (disabled) {
                $('#img' + modelSaveId + 'PreviewModel .saveModel').addClass("disabled");
                $('#img' + modelSaveId + 'PreviewModel .saveModel').prop("disabled", true);
            } else {
                $('#img' + modelSaveId + 'PreviewModel .saveModel').removeClass("disabled");
                $('#img' + modelSaveId + 'PreviewModel .saveModel').removeAttr("disabled");
        }
        }

        function imageSavebutton(modelSaveId, disabled = false, resp = "") {
            if (resp.image_name) {
                $('#img' + modelSaveId + 'PreviewModel .saveModel').attr("data-image-name", resp.image_name);
            }

            if (disabled) {
                $('#img' + modelSaveId + 'PreviewModel .saveModel').addClass("disabled");
                $('#img' + modelSaveId + 'PreviewModel .saveModel').prop("disabled", true);
            } else {
                $('#img' + modelSaveId + 'PreviewModel .saveModel').removeClass("disabled");
                $('#img' + modelSaveId + 'PreviewModel .saveModel').removeAttr("disabled");
        }
        }

        imageSavebutton(1, true);
        imageSavebutton(2, true);
        imageSavebutton(3, true);

        var reset1 = reset2 = reset3 = 0;
        var file_name1 = file_name2 = file_name3 = '';
        var maxImageWidth = 350, maxImageHeight = 50;
        var maxImageWidth2 = 320, maxImageHeight2 = 50;
        var maxImageWidth3 = 728, maxImageHeight3 = 90;

        var photoDropzone = new Dropzone('#id1_dropzone', {
            
            url: surl + "ads-manager/upload-advertise-image",
            type: "POST",
            maxFiles: 1,
            addRemoveLinks: true,
            thumbnailWidth: 350,
            thumbnailHeight: 50,
            headers: {
                'X-CSRF-Token': csrfToken
            },
            acceptedFiles: 'image/*',
            init: function () {
                this.on("sending", function (file, xhr, formData) {
                    formData.append("old_image", $('#old_image1_url').val());
                    formData.append("file_no", 1);
                }),
                        this.on('success', function (file, resp) {

                            if (file.width == maxImageWidth && file.height == maxImageHeight) {
                                file.previewElement.querySelector('[data-dz-name]').innerHTML = resp.image_name;
                                file_name1 = resp.image_name;
                                reset1 = 1;
                                imageSavebutton(1, false, resp);
                                $('#incorrect_div1').hide();
                            } else {
                                $('#incorrect_div1').show();
                                this.removeFile(file);
                            }

                        }),
                        this.on('error', function (file, response) {
                            $(file.previewElement).find('.dz-error-message').text(response.messageError);
                        }),
                        this.on('resetFiles', function () {
                            this.removeAllFiles();
                        });
            },
            removedfile: function (file) {
                if (reset1 == 1) {
                    $.ajax({
                        type: 'POST',
                        url: surl + "ads-manager/delete-advertise-image",
                        data: {name: file_name1, request: 1},
                        headers: {
                            'X-CSRF-Token': csrfToken
                        },
                        success: function (data) {
                            imageSavebutton(1, true);
                        }
                    });
                }
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                reset1 = 1;
            }

        });

        var photoDropzone2 = new Dropzone('#id2_dropzone', {
            url: surl + "ads-manager/upload-advertise-image",
            type: "POST",
            maxFiles: 1,
            addRemoveLinks: true,
            thumbnailWidth: 350,
            thumbnailHeight: 50,
            headers: {
                'X-CSRF-Token': csrfToken
            },
            acceptedFiles: 'image/*',
            init: function () {
                this.on("sending", function (file, xhr, formData) {
                    formData.append("old_image", $('#old_image2_url').val());
                    formData.append("file_no", 2);
                }),
                        this.on('success', function (file, resp) {
                            if (file.width == maxImageWidth2 && file.height == maxImageHeight2) {
                                file.previewElement.querySelector('[data-dz-name]').innerHTML = resp.image_name;
                                file_name2 = resp.image_name;
                                reset2 = 1;
                                imageSavebutton(2, false, resp);
                                $('#incorrect_div2').hide();
                            } else {
                                $('#incorrect_div2').show();
                                this.removeFile(file);
                            }

                        }),
                        this.on('error', function (file, response) {
                            $(file.previewElement).find('.dz-error-message').text(response.messageError);
                        }),
                        this.on('resetFiles', function () {
                            this.removeAllFiles();
                        });
            },
            removedfile: function (file) {
                if (reset2 == 1) {
                    $.ajax({
                        type: 'POST',
                        url: surl + "ads-manager/delete-advertise-image",
                        data: {name: file_name2, request: 2},
                        headers: {
                            'X-CSRF-Token': csrfToken
                        },
                        success: function (data) {
                            imageSavebutton(2, true);
                        }
                    });
                }
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                reset2 = 1;
            }

        });

        var photoDropzone3 = new Dropzone('#id3_dropzone', {
            url: surl + "ads-manager/upload-advertise-image",
            type: "POST",
            maxFiles: 1,
            addRemoveLinks: true,
            thumbnailWidth: 728,
            thumbnailHeight: 90,
            headers: {
                'X-CSRF-Token': csrfToken
            },
            acceptedFiles: 'image/*',
            init: function () {
                this.on("sending", function (file, xhr, formData) {
                    formData.append("old_image", $('#old_image3_url').val());
                    formData.append("file_no", 3);
                }),
                        this.on('success', function (file, resp) {

                            if (file.width == maxImageWidth3 && file.height == maxImageHeight3) {
                                file.previewElement.querySelector('[data-dz-name]').innerHTML = resp.image_name;
                                file_name3 = resp.image_name;
                                reset3 = 1;
                                imageSavebutton(3, false, resp);
                                $('#incorrect_div3').hide();
                            } else {
                                $('#incorrect_div3').show();
                                this.removeFile(file);
                            }
                        }),
                        this.on('error', function (file, response) {
                            $(file.previewElement).find('.dz-error-message').text(response.messageError);
                        }),
                        this.on('resetFiles', function () {
                            this.removeAllFiles();
                        });
            },
            removedfile: function (file) {
                if (reset3 == 1) {
                    $.ajax({
                        type: 'POST',
                        url: surl + "ads-manager/delete-advertise-image",
                        data: {name: file_name3, request: 3},
                        headers: {
                            'X-CSRF-Token': csrfToken
                        },
                        success: function (data) {
                            imageSavebutton(3, true);
                        }
                    });
                }
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                reset3 = 1;
            }
        });

        $(".openModel").click(function () {
            var imgId = $(this).attr('data-imgId')
            $('#img' + imgId + 'PreviewModel .saveModel').attr("data-img-id", imgId);
        });

        $(".saveModel").click(function () {
            var imgid = $(this).attr('data-img-id');
            var imgModelId = 'img' + imgid + 'Preview';
            var imgUrl = 'image' + imgid + '_url';
            var imgsrc = '#id' + imgid + '_dropzone .dz-image img';

            document.getElementById(imgModelId).src = $(imgsrc).attr('src');
            document.getElementById(imgUrl).value = $(this).attr('data-image-name');
            document.getElementById('old_image' + imgid + '_url').value = $(this).attr('data-image-name');
            $('#img' + imgid + 'PreviewModel').modal('hide');

            clearImageDropzone(imgid, true);
        });

        $("#addEditForm").validate({
            rules: {
                company_name: {
                    required: true,
                    minlength: 3
                },
                contact_name: {
                    required: true,
                    allowChar: true
                },
                company_address: {
                    required: true,
                },
                company_city: {
                    required: true,
                    allowChar: true
                },
                company_state: {
                    required: true
                },
                company_zip: {
                    required: true,
                    allowZip: true
                },
                contact_email: {
                    required: true,
                    email: true,
                    minlength: 10
                },
                office_phone: {
                    minlength: 1,
                },
//                amount_paid: {
//                    regex: /^\d{0,9}?$/
//                },
                image1_url: {
                    required: true
                },
                image2_url: {
                    required: true
                },
                image3_url: {
                    required: true
                },
                advertise_zip: {
                    allowZip: true
                },
                link: {
                    regex: /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/
                },
            },
            messages: {
                link: {
                    regex: "Please enter a valid URL. For example; https://www.savcoins.com"
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


        $("#office_phone").inputmask("mask", {
            "mask": "999-999-9999"
        });

        $("#paypal_id").keypress(function (e) {
            var keyCode = e.keyCode || e.which;
            var regex = /^[A-Za-z0-9]+$/;
            var isValid = regex.test(String.fromCharCode(keyCode));

            return isValid;
        });

        $("#amount_paid").keypress(function (e) {
            var keyCode = e.keyCode || e.which;
            var regex = /^[0-9.]+$/;
            var isValid = regex.test(String.fromCharCode(keyCode));

            return isValid;
        });

        $('#start_date').datepicker({
            format: 'MM dd, yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            var minDate = new Date(e.date.valueOf());
            minDate.setDate(minDate.getDate());
            $('#end_date').datepicker('setStartDate', minDate);

            $(".formSubmitButton").removeClass("disabled");
            $(".formSubmitButton").removeAttr("disabled");
        });

        $('#end_date').datepicker({
            format: 'MM dd, yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            startDate: $("#end_date").data("startdate"),
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
            disabled: true,
        }).on('changeDate', function (e) {
            var maxDate = new Date(e.date.valueOf());
            maxDate.setDate(maxDate.getDate());
            $('#start_date').datepicker('setEndDate', maxDate);
        });

        $("#calculateDate").click(function () {
            var start_date = $('#start_date').val();
            var end_date = $('#end_date').val();
            if (start_date != "" && end_date != "") {
                var date1 = new Date(start_date);
                var date2 = new Date(end_date);
                var DifferenceInTime = date2.getTime() - date1.getTime();

                var DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
                $('#remaining_days').val(DifferenceInDays);
            }
        });

        var delIcon = '<img src="' + url + 'assets/media/extra/exclamation-round.png" class="my-4" style="width:70px;height:70px;" ><br>';
        var delDescription = 'Are you sure you want to delete this ad? Once it is deleted, it will no longer be accessible, nor will you have the ability to restore the ad. Also, the ad will no longer display anywhere on the SavCoins enterprise.';
        deleteSingleDataWithConformation(surl + 'ads-manager/', 'Delete Ad', delIcon, '', delDescription, 'Permanently Delete', 'Cancel');
    };


    var datatableInit = function () {

        var $table = $('#dataTableList');
        $table.dataTable({
            responsive: true,
            pagingType: 'full_numbers',
            order: [
                [0, 'asc']
            ],
            lengthMenu: [
                [20, 50, 100, 500, -1],
                [20, 50, 100, 500, "All"]
            ],
            pageLength: 20,
            processing: true,
            serverSide: true,

            paging: true,
            searching: false,
            info: false,
            lengthChange: false,
            stripeClasses: ['odd-row', 'even-row'],

            ajax: {
                'url': surl + 'ads-manager/getall',
                'type': 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            },
            'columnDefs': [
                {
                    'searchable': false,
                    'targets': [0]
                },
            ],
            columns: [
                {data: 'action', orderable: false},
                {data: 'company_name'},
                {data: 'company_city'},
                {data: 'company_state'},
                {data: 'company_zip'},
                {data: 'amount_paid'},
                {data: 'status'},
                {data: 'expiration', orderable: false},
            ],
            fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                if (aData.status == 'Expired') {
                    $('td', nRow).css('color', 'red');
                }
            }
        });
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