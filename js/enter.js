
$(document).on("click", "#hat_enter", function () {
    $('#black_bg').show();
    $('.enter_container').show();
    $('.register_container').hide();
    $("#hat_head").css({
        "border-bottom-left-radius": "10px",
        "border-top-left-radius": "10px",
    });
    $("#hat").hide(200);
    entreg = true;
});

$(document).on("click", "#button_enter", function () {
    var arr = $('#email_enter').serializeArray();
    let email = arr[0].value; gemail = false;
    var arr = $('#password_enter').serializeArray();
    let password = arr[0].value; gpassword = false;
    if (email != 0) {
        if (!isValidEmailAddress(email)) {
            $("#email_border_enter").removeClass('webflow-style-input').addClass('webflow-style-input2');
        } else {
            $("#email_border_enter").removeClass('webflow-style-input2').addClass('webflow-style-input');
            gemail = true;
        }
    } else {
        $("#email_border_enter").removeClass('webflow-style-input').addClass('webflow-style-input2')
    }
    if (password.length < 8) {
        $("#password_border_enter").removeClass('webflow-style-input').addClass('webflow-style-input2');
    } else {
        $("#password_border_enter").removeClass('webflow-style-input2').addClass('webflow-style-input');
        gpassword = true;
    }
    if (gemail) {
        if (gpassword) {
            document.location.href = 'index.py?email=' + email + '+password=' + password;
        };
    };

});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    return pattern.test(emailAddress);
}
