<<<<<<< HEAD
$(function(){
    $('#first_click').click(function(){
        $('*').removeClass('border')
        $(this).addClass('border')
        $('.clicked_div').addClass('img1')
        $('.clicked_div').removeClass('img2 img3 img4')
    })
    $('#second_click').click(function(){
        $('.clicked_div').addClass('img2')
        $('.clicked_div').removeClass('img1 img3 img4')
        $('*').removeClass('border')
        $(this).addClass('border')
        
    })
    $('#third_click').click(function(){
        $('.clicked_div').addClass('img3')
        $('.clicked_div').removeClass('img1 img2 img4')
        $('*').removeClass('border')
        $(this).addClass('border')
    })
    $('#fourth_click').click(function(){
        $('.clicked_div').addClass('img4')
        $('.clicked_div').removeClass('img2 img3 img1')
        $('*').removeClass('border')
        $(this).addClass('border')
    })
    $('.search').change(function(){
        var sr = $('.search')
        var clicked = $('.clicked_div')
        console.log(sr.val())
        if(sr.val() == 'img1'){
            $('.clicked_div').removeClass('img2 img3 img4')
          clicked.addClass('img1')
        }else if(sr.val() == 'img2'){
            $('.clicked_div').removeClass('img1 img3 img4')
            clicked.addClass('img2')
        }else if(sr.val() == 'img3'){
            $('.clicked_div').removeClass('img1 img2 img4')
            clicked.addClass('img3')
        }else if(sr.val() == 'img4'){
            $('.clicked_div').removeClass('img1 img2 img3')
            clicked.addClass('img4')
        }else {
            alert('there is no such a element')
        }
    })
})
=======
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
>>>>>>> bc04891e4f47beed841cb5ffda7e9c0385a24a4e
