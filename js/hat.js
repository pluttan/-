$(document).on("click", ".hamburger", function () {
  $(".twobar").removeClass("hamburger").addClass("cross");
  $("#hat_head").css({
    "border-bottom-left-radius": "0px",
    "border-top-left-radius": "0px",
  });
  $("#hat").show(200);
  $("#hat").css({display:"inline"});
});

$(document).on("click", ".cross", function () {
  if (entreg){
    $('#black_bg').hide();
    $('.enter_container').hide();
    $('.register_container').hide();
    $(".twobar").removeClass("cross").addClass("hamburger");
    entreg=false;
  }else{
  $(".twobar").removeClass("cross").addClass("hamburger");
  $("#hat_head").css({
    "border-bottom-left-radius": "10px",
    "border-top-left-radius": "10px",
  });
  $("#hat").hide(200);}
});

function hide_onclick(){
$(".twobar").removeClass("cross").addClass("hamburger");
  $("#hat_head").css({
    "border-bottom-left-radius": "10px",
    "border-top-left-radius": "10px",
  });
  $("#hat").hide(200);};
