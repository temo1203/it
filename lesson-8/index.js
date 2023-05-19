$(function(){
    $('#btn1').click(function(){
      $('.div2').append('<p>blabla</p>')
    })
    $('#btn2').click(function(){
        $('.div2').prepend('<p>first</p>')
    })
    $('#btn3').click(function(){
        $('#home1').before("<p>before</p>")
    })
    $('#btn4').click(function(){
        $('#home1').after("<p>after</p>")
    })
    $('#btn5').click(function(){
        $('.div2').empty()
    })
    $('#btn6').click(function(){
        $('.div2').remove()
    })
    $('#btn7').click(function(){
        $('.div2').children().css({'color': 'yellow'})
    })
    $('#btn8').click(function(){
        $(this).parent().css({"backgroundColor": 'red'})
    })
    $('#btn9').click(function(){
        $('p').parentsUntil('div').css({"backgroundColor": 'blue'})
    })
})