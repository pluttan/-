
$(document).on("click", "#hat_register", function () {
    $('#black_bg').show();
    console.log("register");
    $('.register_container').show();
    $('.enter_container').hide();
    $("#hat_head").css({
        "border-bottom-left-radius": "10px",
        "border-top-left-radius": "10px",
    });
    $("#hat").hide(200);
    entreg = true;
});

$(document).on("click", "#button_register", function () {

    var arr = $('#password_register').serializeArray();
    let password = arr[0].value; gpassword = false;

    var arr = $('#email_register').serializeArray();
    let email = arr[0].value; gemail = false;

    var arr = $('#name_register').serializeArray();
    let name = arr[0].value; gname = false;

    var arr = $('#reppassword_register').serializeArray();
    let reppassword = arr[0].value; greppassword = false;


    if (!isValidEmailAddress(email)) {
        $("#email_border_register").removeClass('webflow-style-input').addClass('webflow-style-input2');
    } else {
        $("#email_border_register").removeClass('webflow-style-input2').addClass('webflow-style-input');
        gemail = true;
    }

    if (password.length < 8) {
        $("#password_border_register").removeClass('webflow-style-input').addClass('webflow-style-input2');
    } else {
        $("#password_border_register").removeClass('webflow-style-input2').addClass('webflow-style-input');
        gpassword = true;
    }

    if (name.length < 3) {
        $("#name_border_register").removeClass('webflow-style-input').addClass('webflow-style-input2');
    } else {
        $("#name_border_register").removeClass('webflow-style-input2').addClass('webflow-style-input');
        gname = true;
    }

    if (reppassword != password) {
        $("#reppassword_border_register").removeClass('webflow-style-input').addClass('webflow-style-input2');
    } else {
        $("#reppassword_border_register").removeClass('webflow-style-input2').addClass('webflow-style-input');
        greppassword = true;
    }

    if (gemail) {
        if (gpassword) {
            if (gname) {
                if (greppassword) {
                    document.location.href = 'index.py?email=' + email + '+password=' + password + '+name=' + name;
                }
            }
        };
    };

});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    return pattern.test(emailAddress);
}
