function getRandomInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
includeHTML();

$(window).on("load", function () {

  $("#main").css({ "z-index": "-1" });
  $("#mainbg").css({ "background-image": "url(img/imgsformainbg/" + String(getRandomInt(18)) + ".webp)", });
  $("#imgM").hide(10);
  entreg = false;
  $("#hat").show(200);
  $(".twobar").removeClass("cross").addClass("hamburger");
  $("#hat_head").css({
    "border-bottom-left-radius": "10px",
    "border-top-left-radius": "10px",
  });
  $("#hat").hide(200);
  function disp() {
    $("#hat_container").css({ "z-index": "1000000000" });
    $(".preloader").css({ display: "none" });
    $("#main").css({ "z-index": "10000" });
    $(".section").css({ display: "flex" });
  }
  setTimeout(() => disp(), 1000);
});
