"use strict";

function showAlert(title = 'Good job!', bodyText = 'You clicked the button!', buttonText = 'Confirm me!', type = 'success') {
    swal.fire({
        title: title,
        text: bodyText,
        type: type,
        buttonsStyling: false,
        // showCancelButton: true,
        confirmButtonText: buttonText,
        // confirmButtonClass: "btn btn-brand"
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: "btn btn-brand",
            cancelButton: "btn btn-brand"
        }
    });
}
function showErrorAlert(title = 'Good job!', bodyText = 'You clicked the button!', buttonText = 'Confirm me!', ) {
    swal.fire({
        title: title,
        text: bodyText,
        type: "success",
        buttonsStyling: false,
        // showCancelButton: true,
        confirmButtonText: buttonText,
        // confirmButtonClass: ""
        showCancelButton: true,
        cancelButtonText: "Cancel",
        customClass: {
            confirmButton: "btn btn-brand",
            cancelButton: "btn btn-brand" //btn btn-default
        }
    });
}
function showSuccessAlert(title = 'Good job!', bodyText = 'You clicked the button!', buttonText = 'Confirm me!', type = 'success') {
    swal.fire({
        title: title,
        text: bodyText,
        type: type,
        buttonsStyling: false,
        showCancelButton: false,
        confirmButtonText: buttonText,
        confirmButtonClass: "btn btn-brand"
    });
}