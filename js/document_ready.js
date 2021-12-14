var deleteLog = false;
var verticalCentered = false;

$(document).ready(function () {
    let i = 0;
    function blurmain() {
        $("#mainbg").css({ filter:"grayscale("+String(i / 100)+") blur(" + String(i / 10) + "px)"});
        i++;
    }
    function interval_of_blur() {
        mainbginterval = setInterval(blurmain, 10);
    }
    setTimeout(() => interval_of_blur(), 3000);
    setTimeout(() => clearInterval(mainbginterval), 4000);

    function mainh1_animation() {
        $("#mainh1").css({ display: "flex" });
        $("#mainh1").textillate({ in: { effect: "flipInY" } });
    }
    function mainh2_animation() {
        $("#mainh2").css({ display: "flex" });
        $("#mainh2").textillate({ in: { effect: "flipInY" } });
    }

    setTimeout(() => mainh1_animation(), 4000);
    setTimeout(() => mainh2_animation(), 5000);

    function imgOnMain(){
        $("#imgM").show(1000)
    }
    setTimeout(() => imgOnMain(), 4000);

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
