var deleteLog = false;
var verticalCentered = false;

$(document).ready(function () {
    let i = 0;
    function blurmain() {
        $("#mainbg").css({ filter:"grayscale("+String(i / 200)+") blur(" + String(i / 10) + "px)"});
        i++;
    }
    function interval_of_blur() {
        mainbginterval = setInterval(blurmain, 10);
    }
    setTimeout(() => interval_of_blur(), 3000);
    setTimeout(() => clearInterval(mainbginterval), 4000);

    function mainh1_animation() {
        $("#mainh1").css({ display: "block" });
        $("#mainh1").textillate({loop: false, in: { effect: "flipInY" } });
    }
    function mainh2_animation() {
        $("#mainh2").css({ display: "block" });
        $("#mainh2").textillate({loop: false, in: { effect: "flipInY",delayScale: 10000, sync: true} });
        $("#imgM").show(600);
    }
    setTimeout(() => mainh1_animation(), 4000);
    setTimeout(() => mainh2_animation(), 6000);

    function bluricon(){
        $("#icons").css({ filter:"blur(" + String(i*i*i) + "px)"});
        i=i-0.1;
    }

    function interval_of_icon() {
        i=10.1;
        iconinterval = setInterval(bluricon, 10);
    }

    function end_interval_of_icon() {
        clearInterval(iconinterval);
        $("#icons").css({ filter:"blur(0px)"});
    }

    setTimeout(() => interval_of_icon(), 6000);
    setTimeout(() => end_interval_of_icon(), 7000);

    $("#pagepiling").pagepiling({
        menu: "#menu",
        anchors: ["main", "portfolio", "page3"],
        navigation: {
            textColor: "#f2f2f2",
            bulletsColor: "#ccc",
            position: "right",
            tooltips: ["main", "portfolio", "Page 3", "Page 4"],
        },
    });
});
