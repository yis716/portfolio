//패밀리 사이트 
$(document).ready(function() {
   	
	// $('.family .arrow').click(function(){
	// 	$('.family .aList').fadeIn('slow');			  
	// });

	// $('.family .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  +
	// });
  



	
	// fadein = slidedown

	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('slow');
		$(this).children('span').html('<span class="material-symbols-outlined">expand_more</span>');	
		},function(){
	$('.family .aList').fadeOut('slow');	
		$(this).children('span').html('<span class="material-symbols-outlined">expand_less</span>');
		
	});






	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('slow');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});



// move_top 버튼 script

$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
	var scroll = $(window).scrollTop(); //스크롤의 거리
   	// $('.text').text(scroll);

	if(scroll>300){ //300이상의 거리가 발생되면
		$('.movetop').show();  //top보여라~~~~
	}else{
		$('.movetop').fadeOut('fast');//top안보여라~~~~
	}
});

$('.movetop').click(function(e){
   e.preventDefault();  //a태그엔 꼭 넣어줄것
	//상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000);   //해당위치로 스크롤탑 값을 부드럽게 이동시키는 코드
}); 
