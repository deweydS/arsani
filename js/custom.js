$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});



	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




// $(window).scroll(function(){                              // отслеживаем событие
//     if ( $(window).$(".spoiler-ul").length >= 2 ){                   // ставим условие
//         $('.spoiler-ul').css("overflow-y", "scroll");
//     }
// });










$(document).ready(function () {
    $('.navigation__block1').click(function () {
//        $('.arrow').css('background', 'url("../../img/sprite1.png") -5px -10px');
        $(this).toggleClass("active");
                // $('.spoiler-ul').scroll();

        // $( ".spoiler-ul" ).css('overflow-y', 'scroll');
    });
});


$(document).ready(function() {
    $('.spoiler-body').css({'display':'none'});
    $('.spoiler-body1').css({'display':'none'});
    $('.arrow').click(function(){
        $(this).next('.spoiler-body').slideToggle(500);
        $(this).next('.spoiler-body1').slideToggle(500);
    });
});
$('.slider_').slick(
    {
        dots: true,
        arrows:true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerMode:false
                }
            }


        ]

        // centerPadding: '100px'


    }
);

$('.shop__item-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1086,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 6,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 7,
                infinite: true,
                dots: true
            }
        }

    ]
    // prevArrow: $('.pv'),
    // nextArrow: $('.nx')
});