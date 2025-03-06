// JavaScript Document (메인 롤링 페이지)

$(document).ready(function() {

    var timeonoff; 
    var imageCount=$('.gallery ul li').size(); 
    var cnt=1;  
    var onoff=true; 
    
    $('.mbutton').css('width','20px'); 
    $('.btn1').css('background','rgba(255, 255, 255, 0.613)'); 
    $('.btn1').css('width','180px');  
    $('.btn1').find('span').css({'width':'100%'});
    
    $('.gallery .link1').fadeIn('fast'); 
    $('.gallery .link1 span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow');
    $('.gallery .link1 span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

    function moveg(){
        if(cnt==imageCount+1)cnt=1;
        if(cnt==imageCount)cnt=0;  

        cnt++;  
      
      //  for(var i=1;i<=imageCount;i++){
      //         $('.gallery .link'+i).hide(); 
      //  }
      
      $('.gallery li').fadeOut(200);
      $('.gallery .link'+cnt).fadeIn(400); 
                            
      //  for(var i=1;i<=imageCount;i++){
      //       $('.btn'+i).css('background','#00f'); 
      //      $('.btn'+i).css('width','16'); 
      //   }
        
       
        $('.mbutton').css('width','20px'); 
        $('.mbutton span').css({'width':'0', 'transition':'none'});
        $('.btn'+cnt).css('width','180px');    
        $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});

        $('.gallery li span').css('top',570).css('opacity',0);
        $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow'); 
        $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');



        if(cnt==imageCount)cnt=0;  
     }
     
    timeonoff= setInterval( moveg , 5000);


   $('.mbutton').click(function(event){ 
	     var $target=$(event.target); 
       clearInterval(timeonoff); 
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut(200);

		  if($target.is('.btn1')){  
				 cnt=1;  
		  }else if($target.is('.btn2')){  
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }//else 생략가능. 짜투리가 없음!

		  $('.gallery .link'+cnt).fadeIn(400);  
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
    
      $('.mbutton').css('width','20px');
      $('.mbutton span').css({'width':'0', 'transition':'none'});
      $('.btn'+cnt).css('width','180px');
      $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});
      
      $('.gallery li span').css('top',570).css('opacity',0);
      $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow');
      $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화. 타이머를 다시 생성하기위해 초기화함.
      //맨위에 있어서 또 안써도됨
     
      timeonoff= setInterval( moveg , 5000); 
     
      if(onoff==false){ //중지상태
            onoff=true; 
            $('.dock .ps').removeClass('active');
      };
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.dock .ps').click(function(){ 
     if(onoff==true){ // 타이머 동작 
	       clearInterval(timeonoff);   
		     $(this).addClass('active'); 
         onoff=false;   
	   }else{  
		   timeonoff= setInterval( moveg , 5000); 
       $(this).removeClass('active');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').hover(function(){
      $('i',this).css('color','#3B1D0C')
    },function(){
      $('i',this).css('color','#fff')
    });


    $('.visual .btn').click(function(){

      clearInterval(timeonoff); 

      if($(this).is('.btnRight')){ 
          if(cnt==imageCount)cnt=0;  
          cnt++; 
      }else if($(this).is('.btnLeft')){  
          if(cnt==1)cnt=imageCount+1;   
          if(cnt==0)cnt=imageCount;
          cnt--; 
      }
    
    $('.gallery li').fadeOut(200); 
    $('.gallery .link'+cnt).fadeIn(400); 
                        
   
    $('.mbutton').css('width','20px');
    $('.mbutton span').css({'width':'0', 'transition':'none'});
    $('.btn'+cnt).css('width','180px');
    $('.btn'+cnt).find('span').css({'width':'100%', 'transition':'all 3s'});

    $('.gallery li span').css('top',570).css('opacity',0);
    $('.gallery .link'+cnt).find('span:eq(0)').delay(1500).animate({top:430, opacity:1},'slow'); 
    $('.gallery .link'+cnt).find('span:eq(1)').delay(1900).animate({top:530, opacity:1},'slow');

    if($(this).is('.btnRight')){
      if(cnt==imageCount)cnt=0;
    }else if($(this).is('.btnLeft')){
      if(cnt==1)cnt=imageCount+1;
    }

    timeonoff= setInterval( moveg , 5000); 

    if(onoff==false){ //정지되어있을때 버튼을 누르면 이미지 변경
      onoff=true;
      $('.dock .ps').removeClass('active');
    }
  });


});




