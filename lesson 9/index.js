$(function(){
    var i = 1
    $('#first_click').click(function(){
        $('.clicked_div').addClass('img1')
        if($('#second_click').hasClass('border')){
            $('#first_click').addClass('border')
            $('#second_click').removeClass('border')
        } else if($('#third_click').hasClass('border')){
            $('#first_click').addClass('border')
            $('#third_click').removeClass('border')
        } else if($('#fourth_click').hasClass('border')){
            $('#first_click').addClass('border')
            $('#fourth_click').removeClass('border')
        } else {
            $('#second_click').addClass('border')
            $('#first_click').removeClass('border')
        }
    })
    $('#second_click').click(function(){
        if($('#first_click').hasClass('border')){
            $('#second_click').addClass('border')
            $('#first_click').removeClass('border')
        } else if($('#third_click').hasClass('border')){
            $('#second_click').addClass('border')
            $('#third_click').removeClass('border')
        } else if($('#fourth_click').hasClass('border')){
            $('#second_click').addClass('border')
            $('#fourth_click').removeClass('border')
        } else {
            $('#second_click').removeClass('border')
            $('#third_click').addClass('border')
        }
    })
    $('#third_click').click(function(){
        if($('#first_click').hasClass('border')){
            $('#third_click').addClass('border')
            $('#first_click').removeClass('border')
        } else if($('#second_click').hasClass('border')){
            $('#third_click').addClass('border')
            $('#second_click').removeClass('border')
        } else if($('#fourth_click').hasClass('border')){
            $('#third_click').addClass('border')
            $('#fourth_click').removeClass('border')
        } else {
            $('#third_click').removeClass('border')
            $('#fourth_click').addClass('border')
        }
    })
    $('#fourth_click').click(function(){
        if($('#first_click').hasClass('border')){
            $('#fourth_click').addClass('border')
            $('#first_click').removeClass('border')
        } else if($('#second_click').hasClass('border')){
            $('#fourth_click').addClass('border')
            $('#second_click').removeClass('border')
        } else if($('#third_click').hasClass('border')){
            $('#fourth_click').addClass('border')
            $('#third_class').removeClass('border')
        } else {
            $('#fourth_click').removeClass('border')
            $('#third_click').addClass('border')
        }
    })
    // $('#second_click').click(function(){
    //     $(this).next().addClass("border")
    //     $(this).removeClass('border')
    // })
    // $('#third_click').click(function(){
    //     $(this).next().addClass("border")
    //     $(this).removeClass('border')
    // })
    // $('#fourth_click').click(function(){
    //     $(this).prev().addClass("border")
    //     $(this).removeClass('border')
    // })
})