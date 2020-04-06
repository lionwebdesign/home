$(document).ready(function () {
  var scroll = $(window).scrollTop();
  $("#posicion").text(scroll);
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $("#posicion").text(scroll);
    /*Cambia el color del div cuando es distinto a 0*/
    if (scroll != 0) {
      $("#nav-dinamico").css({
        background: "rgba(38, 38, 38, 0.95)",
      });
    } else {
      $("#nav-dinamico").css({
        background: "transparent",
      });
    }
  });
});
