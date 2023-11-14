$(".error").draggable();

var error = '<div class="error">' + $('.error').html() + '</div>',
x = window.innerWidth / 3.
y = window.innerHeight / 3;


$('body').on('click', '.ok', '.close-button', function(){
    $('body').append(error);
    $('.error').last().css({ top: y + 'px', left: x + 'px'}).draggable();

    x+=4;
    y+=4;
});

$(document).ready(function(){
    $(".start-btn").click(function(){
    $('.start-menu-win').toggleClass('active-menu');
    })
})