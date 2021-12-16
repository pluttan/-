var deleteLog = false;
var verticalCentered = false;

$(document).ready(function () {
    let i = 0;
    function blurmain() {
        $("#mainbg").css({ filter: "grayscale(" + String(i / 200) + ") brightness(" + String(1 - i / 200) + ")" });
        i++;
    }
    function interval_of_blur() {
        mainbginterval = setInterval(blurmain, 10);
    }
    setTimeout(() => interval_of_blur(), 6000);
    setTimeout(() => clearInterval(mainbginterval), 7000);

    function mainh1_animation() {
        $("#mainh1").css({ display: "block" });
        $("#mainh1").textillate({ loop: false, in: { effect: "flipInY" } });
    }
    function mainh2_animation() {
        $("#mainh2").css({ display: "block" });
        $("#mainh2").textillate({ loop: false, in: { effect: "flipInY", delayScale: 10000, sync: true } });
        $("#imgM").show(600);
    }
    setTimeout(() => mainh1_animation(), 6000);
    setTimeout(() => mainh2_animation(), 8000);

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

    setTimeout(() => interval_of_icon(), 8000);
    setTimeout(() => end_interval_of_icon(), 9000);

    $("#pagepiling").pagepiling({
        menu: "#menu",
        anchors: ["main", "portfolio", "about", "order", "comments"],
    });
});
