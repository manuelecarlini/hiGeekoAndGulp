$(window).on("load", resizeLayout);

function resizeLayout() {
  var docHeight = $("section").height();
  $(".container").css("height",docHeight);
  $(".sidebar").css("height",docHeight);
  $(".description-box").css("height", docHeight - 159)
};


function showtext(obj) {
  $(".hide_text").hide();
  $("#"+obj).toggle();
  $(window).scrollTop(0);
  resizeLayout()
};


