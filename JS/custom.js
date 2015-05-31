$(document).ready(function(){
		$(".slideright span").hover(function(){
		$(this).stop().animate({boxShadow : "5px 5px 5px rgba(0,0,0,1)"},300);
		},function(){
		$(this).stop().animate({boxShadow : "5px 5px 5px rgba(0,0,0,0)"},300);
		});
		 $('.holder ul').cycle({
        fx:      'fade',
        timeout:  0,
        prev:    '#prev',
        next:    '#next',
    });
	$(".st thead tr td").css("width","291px");
	 $('.tabledswitch').cycle({
        fx:      'shuffle',
        timeout:  0,
        prev:    '.prev2',
        next:    '.next2',
		width: '303'
    });
		$("#controls #prev").hover(function(){
		$("#controls").css("backgroundPosition","center");
		},function(){
		$("#controls").css("backgroundPosition","top left");
		});
		$("#controls #next").hover(function(){
		$("#controls").css("backgroundPosition","bottom left");
		},function(){
		$("#controls").css("backgroundPosition","top left");
		});
		$(".st tr:even").css("backgroundColor","#f0f0f0");
		$(".st:not(.dc) tr td:even:not(thead tr td)").css("textAlign","right").css("paddingRight","15px");
		
		$('.mainlinks > li').hover(
        function () {
            $('ul', this).slideDown(100);
        }, 
        function () {
            $('ul', this).slideUp(100);         
        }
    );
	
	 $('.mainlinks li ul').hover(
        function () {
            $(this).parent().find("a").slice(0,1).addClass("current");
        }, 
        function () {
           $(this).parent().find("a").slice(0,1).removeClass("current");       
        }
    );
	  $('.mainlinks li').each(function() {
        if ( $(this).children('ul').size() > 0 ) {
            $(this).addClass('parent');
			$(this).append('<span></span>');
        }           
    });
	$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
 $('a[href="#bottom"]').click(function () {
                 $('html, body').animate({
                     scrollTop: $(document).height()
                 },
                 1500);
                 return false;
             });
		$("ul.roster li img").hover(function(){
		$(this).css("zIndex","99");
		$(this).next("div").css("display","block");
		$(this).next("div").stop().animate({opacity: "1"},300);
		},function(){
			$(this).css("zIndex","5");
		$(this).next("div").stop().animate({opacity: "0"},300);
		$(this).next("div").css("display","none");
		});
		$("#style-switcher ul li.close").click(function(){
	 $("#style-switcher").animate({ opacity: '0' }, 400);
   }); 
});	