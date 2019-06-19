$(window).on('scroll', function(){
if($(window).scrollTop()){
	$('nav').addClass('black');
}
else {
	$('nav').removeClass('black');
}
})

$('.menu').click( function () {
	$(this).toggleClass('close');
});

$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function() {
      // $('nav').toggle();

      if (contador == 1) {
      	$('nav').animate({
      		left: '0'
      	});
      	contador = 0;
      } else {
      	contador = 1;
      	$('nav').animate({
      		left: '-100%'
      	});	
      }
    });
}