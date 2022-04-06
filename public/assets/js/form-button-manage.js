function checkRequired(exclude = []) {
    //var exclude = ['password', 'password_confirmation'];
    var count = 0;
    $('.inputModule').each(function (index, value) {
        count++;
        $(".formSubmitButton").removeClass("disabled");
        $(".formSubmitButton").removeAttr("disabled");
        var idName = $(this).attr('id');
        if ($(this).val() == "" && jQuery.inArray(idName, exclude) == -1) {
            $(".formSubmitButton").addClass("disabled");
            $(".formSubmitButton").prop("disabled", true);
            console.log(idName);
            return false;
        }
    });
    //console.log(count);
}