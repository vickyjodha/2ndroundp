var TermsConditions = function () {

    $('.version_date').click(function() {
        $("#datePicker").focus();
    });

    var initSummernote = function () {
        function validationSummernote (contents){
            if (contents == "") {
                formButtonDisabled();
                return false;
            }else{
                formButtonEnbled();
            }
        }

        function formButtonDisabled(){
            $(".formSubmitButton").addClass("disabled");
            $(".formSubmitButton").prop("disabled", true);
            return false;   
        }

        function formButtonEnbled(){
            $(".formSubmitButton").removeClass("disabled");
            $(".formSubmitButton").removeAttr("disabled");       
        }

        validationSummernote($.trim($(".term-policy-desc").val()));

        $('.term-policy-desc').summernote({
            height: 450,
            fontsize: 'fontsize',
            callbacks: {
                onChange: function(contents, $editable) {
                    let lc = contents.replace(/&nbsp;/gi,"");
                    let lct = lc.replace(/<p><br><\/p>/gi,"");
                    if(lct == "" || $.trim($("#version_number").val()) == "")
                    {
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
    };

    var initConsumerEdit = function () {

        $("#addEditForm").validate({
            rules: {
                version_date: {
                    required: true
                },
                version_number: {
                    required: true,
                    regex: /^\d+(\.\d+)*$/
                },
                description: {
                    required: true,
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

        var ex = [];
        $(document).on("blur", '#addEditForm .inputModule', function () {
            checkRequired(ex);
        });
        checkRequired(ex);

        $('#datePicker').datepicker({
            format: 'MM dd, yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
        });

        // $('.term-policy-desc').summernote({
        //     height: 450,
        //     fontsize: 'fontsize'
        // });
    };

    var datatableConsumerInit = function () {

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'consumer-term/getall',
            columns: [
                {data: 'action'},
                {data: 'editor'},
                {data: 'version_number'},
                {data: 'last_update'},
            ],
            //hidePagination:1
        }

        getDataTable(arr);

    };

    var initMerchantEdit = function () {

        $("#addEditForm").validate({
            rules: {
                version_date: {
                    required: true
                },
                version_number: {
                    required: true,
                    regex: /^\d+(\.\d+)*$/
                },
                description: {
                    required: true,
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

        var ex = [];
        $(document).on("blur", '#addEditForm .inputModule', function () {
            checkRequired(ex);
        });
        checkRequired(ex);

        $('#datePicker').datepicker({
            format: 'MM dd, yyyy',
            todayHighlight: true,
            orientation: "bottom left",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            },
            autoclose: true,
        });

        // $('.term-policy-desc').summernote({
        //     height: 450,
        //     fontsize: 'fontsize'
        // });
    };

    var datatableMerchantInit = function () {

        var arr = {
            tableID: '#dataTableList',
            ajaxURL: surl + 'merchant-term/getall',
            columns: [
                {data: 'action'},
                {data: 'editor'},
                {data: 'version_number'},
                {data: 'last_update'},
            ],
            //hidePagination:1
        }

        getDataTable(arr);

    };

    return{
        // initConsumerAdd: function () {
        //     initSummernote();
        //     initConsumerAdd();
        // },
        initConsumerEdit: function () {
            initSummernote();
            initConsumerEdit();
        },
        initConsumerView: function () {
            datatableConsumerInit();
        },
        // initMerchantAdd: function () {
        //     initSummernote();
        //     initMerchantAdd();
        // },
        initMerchantEdit: function () {
            initSummernote();
            initMerchantEdit();
        },
        initMerchantView: function () {
            datatableMerchantInit();
        }
    };
}();