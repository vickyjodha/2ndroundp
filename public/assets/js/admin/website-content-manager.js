Dropzone.autoDiscover = false;

var WebsiteContentManager = function () {

    function validationSummernote(contents) {
        if (contents == "") {
            formButtonDisabled();
            return false;
        } else {
            formButtonEnbled();
        }
    }

    function formButtonDisabled() {
        $(".formSubmitButton").addClass("disabled");
        $(".formSubmitButton").prop("disabled", true);
        return false;
    }

    function formButtonEnbled() {
        $(".formSubmitButton").removeClass("disabled");
        $(".formSubmitButton").removeAttr("disabled");
    }

    var initHomeEditor = function () {

        var blankCount = 1;
        if ($.trim($("#description").val()) == "" || $.trim($("#description2").val()) == "" || $.trim($("#description3").val()) == "") {
            blankCount = "";
        }
        validationSummernote(blankCount);

        $('#description2').summernote({
            height: 450,
            fontsize: 'fontsize',
            callbacks: {
                onChange: function (contents, $editable) {
                    contents = contents.replace(/&nbsp;/gi, "").replace('<br>', "").replace(new RegExp('<[^>]*>', 'g'), '').replace(/<p><br><\/p>/gi, "").replace(/<p><br><\/p>/gi, "").replace('<p>', "").replace('</p>', "").trim();
                    //console.log(contents);
                    if (contents == "") {
                        formButtonDisabled();
                        return false;
                    }
                    formButtonEnbled();
                }
            },
            toolbar: [
                ['style', ['copy', 'cut', 'paste', 'bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript', 'style']],
                ['insert', ['link', 'unlink', 'linkDialogShow', 'picture']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['fontsize', ['fontsize']],
                ['float', ['floatLeft', 'floatRight']],
                ['color', ['color']],
                ['view', ['fullscreen', 'codeview', 'undo', 'redo']],
                ['table', ['table']],
            ],
            disableResizeEditor: true,
            dialogsInBody: true,
        });

        $('#description3').summernote({
            height: 450,
            fontsize: 'fontsize',
            callbacks: {
                onChange: function (contents, $editable) {
                    contents = contents.replace(/&nbsp;/gi, "").replace('<br>', "").replace(new RegExp('<[^>]*>', 'g'), '').replace(/<p><br><\/p>/gi, "").replace(/<p><br><\/p>/gi, "").replace('<p>', "").replace('</p>', "").trim();
                    //console.log(contents);
                    if (contents == "") {
                        formButtonDisabled();
                        return false;
                    }
                    formButtonEnbled();
                }
            },
            toolbar: [
                ['style', ['copy', 'cut', 'paste', 'bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript', 'style']],
                ['insert', ['link', 'unlink', 'linkDialogShow', 'picture']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['fontsize', ['fontsize']],
                ['float', ['floatLeft', 'floatRight']],
                ['color', ['color']],
                ['view', ['fullscreen', 'codeview', 'undo', 'redo']],
                ['table', ['table']],
            ],
            disableResizeEditor: true,
            dialogsInBody: true,
            followingToolbar: false
        });

        $("#addEditForm").validate({
            rules: {
                title1: {
                    required: true,
                    minlength: 3
                },
                description: {
                    required: true,
                    minlength: 3
                },
                title2: {
                    required: true,
                    minlength: 3
                },
                description2: {
                    required: true,
                    minlength: 3
                },
                title3: {
                    required: true,
                    minlength: 3
                },
                description3: {
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
    }

    var initCommonEditor = function () {
        $('#description').summernote({
            height: 450,
            fontsize: 'fontsize',
            callbacks: {
                onChange: function (contents, $editable) {
                    contents = contents.replace(/&nbsp;/gi, "").replace('<br>', "").replace(new RegExp('<[^>]*>', 'g'), '').replace(/<p><br><\/p>/gi, "").replace(/<p><br><\/p>/gi, "").replace('<p>', "").replace('</p>', "").trim();

                    if ($("#page").val() == "Home") {
                        var contents2 = $("#description2").val();
                        contents2 = contents2.replace(/&nbsp;/gi, "").replace('<br>', "").replace(new RegExp('<[^>]*>', 'g'), '').replace(/<p><br><\/p>/gi, "").replace(/<p><br><\/p>/gi, "").replace('<p>', "").replace('</p>', "").trim();

                        var contents3 = $("#description3").val();
                        contents3 = contents3.replace(/&nbsp;/gi, "").replace('<br>', "").replace(new RegExp('<[^>]*>', 'g'), '').replace(/<p><br><\/p>/gi, "").replace(/<p><br><\/p>/gi, "").replace('<p>', "").replace('</p>', "").trim();
                    }
                    //console.log(contents);
                    if (((contents == "" || contents2 == "" || contents3 == "") && $("#page").val() == "Home") || ((contents == "" || $.trim($("#image").val()) == "") && $("#page").val() != "Home")) {
                        formButtonDisabled();
                        return false;
                    }
                    formButtonEnbled();
                }
            },
            toolbar: [
                ['style', ['copy', 'cut', 'paste', 'bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript', 'style']],
                ['insert', ['link', 'unlink', 'linkDialogShow', 'picture']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['fontsize', ['fontsize']],
                ['float', ['floatLeft', 'floatRight']],
                ['color', ['color']],
                ['view', ['fullscreen', 'codeview', 'undo', 'redo']],
                // ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                ['table', ['table']],
            ],
            disableResizeEditor: true,
            dialogsInBody: true,
        });
    }

    var initEditImage = function () {
        var blankCount = 1;
        if ($.trim($("#description").val()) == "" || $.trim($('#image').val()) == '') {
            blankCount = "";
        }
        validationSummernote(blankCount);

        var file_name1 = '';
        var maxImageWidth = 400, maxImageHeight = 800;

        var photoDropzone = new Dropzone('#id_dropzone', {
            // url: '/superadmin/website-content-manager/check-advertise-image',
            url: surl + "website-content-manager/upload-website-image",
            type: "POST",
            maxFiles: 1,
            addRemoveLinks: true,
            thumbnailWidth: 400,
            thumbnailHeight: 800,
            headers: {
                'X-CSRF-Token': csrfToken
            },
            acceptedFiles: 'image/*',
            init: function () {
                this.on("sending", function (file, xhr, formData) {
                    formData.append("old_image", $("#old_image").val());
                }),
                        this.on('success', function (file, resp) {

                            if (file.width == maxImageWidth && file.height == maxImageHeight) {
                                $('#img1Preview').attr("src", surl + '../public/storage/' + resp.image_name);
                                $('#image').val(resp.image_name);
                                $('#image').removeClass("intro");
                                if ($.trim($("#description").val()) != "") {
                                    formButtonEnbled();
                                }

                                file.previewElement.querySelector('[data-dz-name]').innerHTML = resp.image_name;
                                file_name1 = resp.image_name;

                            } else {
                                showAlert('image', resp.message, 'close', 'error');
                            }
                            this.removeFile(file);

                        }),
                        this.on('error', function (file, response) {
                            $(file.previewElement).find('.dz-error-message').text(response.messageError);
                        }),
                        this.on('resetFiles', function () {
                            this.removeAllFiles();
                        });
            }
        });

        $("#addEditForm").validate({
            rules: {
                description: {
                    required: true,
                },
                image: {
                    required: true
                },
            },
            ignore: ":hidden, [contenteditable='true']:not([description])",
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
            ajaxURL: surl + 'website-content-manager/getall',
            columns: [
                {data: 'action', orderable: false},
                {data: 'title'},
                {data: 'updated_at'},
                {data: 'editor_name'},
            ],
            hidePagination: 1
        }
        getDataTable(arr);
    };

    return{
        initEditHomePage: function () {
            initCommonEditor();
            initHomeEditor();
        },
        initEditOtherPage: function () {
            initCommonEditor();
            initEditImage();
        },
        initView: function () {
            datatableInit();
        },

    };
}();