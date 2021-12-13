$(document).on("click", ".hamburger", function () {
  $(".twobar").removeClass("hamburger").addClass("cross");
  $("#hat_head").css({
    "border-bottom-left-radius": "0px",
    "border-top-left-radius": "0px",
  });
  $("#hat").show(200);
});

$(document).on("click", ".cross", function () {
  $(".twobar").removeClass("cross").addClass("hamburger");
  $("#hat_head").css({
    "border-bottom-left-radius": "10px",
    "border-top-left-radius": "10px",
  });
  $("#hat").hide(200);
});
