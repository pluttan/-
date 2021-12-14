function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

$(window).on("load", function () {
  $("#main").css({ "z-index": "-1" });
  $("#mainbg").css({ "background-image":"url(img/imgsformainbg/" + String(getRandomInt(18)) + ".webp)",});

  $("#hat").show(200);
  $("#hat").hide(200);
  $(".twobar").removeClass("hamburger").addClass("cross");
  $("#hat_head").css({
    "border-bottom-left-radius": "0px",
    "border-top-left-radius": "0px",
  });
  $("#hat").show(200);
  function disp() {
    $("#main_head").css({ "z-index": "1000000000" });
    $(".preloader").css({ display: "none" });
    $("#main").css({ "z-index": "10000" });
    $(".section").css({ display: "flex" });
  }
  setTimeout(() => disp(), 1000);
});
