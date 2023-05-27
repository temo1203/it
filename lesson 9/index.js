$(function () {
  var img = ["./Frame.svg", "./Rectangle 2.png"];
  var i = 1;
  $("#first_click").click(function () {
    if ($(this).hasClass("border")) {
      $("*").removeClass("border");
      $(this).next().addClass("border");
      $(".clicked_div").css({ "background-image": "url(" + img[0] + ")" });
    } else {
      $("*").removeClass("border");
      $(this).addClass("border");
    }
  });
  $("#second_click").click(function () {
    if ($(this).hasClass("border")) {
      $("*").removeClass("border");
      $(this).next().addClass("border");
    } else {
      $("*").removeClass("border");
      $(this).addClass("border");
      $(".clicked_div").css({ "background-image": "url(" + img[0] + ")" });
    }
  });
  $("#third_click").click(function () {
    if ($(this).hasClass("border")) {
      $("*").removeClass("border");
      $(this).next().addClass("border");
    } else {
      $("*").removeClass("border");
      $(this).addClass("border");
    }
  });
  $("#fourth_click").click(function () {
    if ($(this).hasClass("border")) {
      $("*").removeClass("border");
      $(this).prev().addClass("border");
    } else {
      $("*").removeClass("border");
      $(this).addClass("border");
    }
  });
});
