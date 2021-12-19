$(document).ready(function () {
    let i = 0;
    function blurmain() {
        $("#mainbg").css({ filter: "grayscale(" + String(i / 200) + ") brightness(" + String(1 - i / 200) + ")" });
        i++;
    }
    function interval_of_blur() {
        mainbginterval = setInterval(blurmain, 10);
    }
    setTimeout(() => interval_of_blur(), timeout_of_loading+2000);
    setTimeout(() => clearInterval(mainbginterval), timeout_of_loading+3000);

    function mainh1_animation() {
        $("#mainh1").css({ display: "block" });
        $("#mainh1").textillate({ loop: false, in: { effect: "flipInY" } });
    }
    function mainh2_animation() {
        $("#mainh2").css({ display: "block" });
        $("#mainh2").textillate({ loop: false, in: { effect: "flipInY", delayScale: 10000, sync: true } });
        $("#imgM").show(600);
    }
    setTimeout(() => mainh1_animation(), timeout_of_loading+3000);
    setTimeout(() => mainh2_animation(), timeout_of_loading+5000);

    function bluricon() {
        $("#icons").css({ filter: "blur(" + String(i * i * i) + "px)" });
        i = i - 0.1;
    }

    function interval_of_icon() {
        i = 10.1;
        iconinterval = setInterval(bluricon, 10);
    }

    function end_interval_of_icon() {
        clearInterval(iconinterval);
        $("#icons").css({ filter: "blur(0px)" });
    }

    setTimeout(() => interval_of_icon(), timeout_of_loading+5000);
    setTimeout(() => end_interval_of_icon(), timeout_of_loading+7000);});