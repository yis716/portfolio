//메인 비쥬얼 처리 코드


//상품갤러리 처리 코드

// JavaScript Document (메인 롤링 페이지)



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


    function gallery_change(){
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

    }


    function moveg(){
        if(cnt==imageCount+1)cnt=1;
        if(cnt==imageCount)cnt=0;  

        cnt++;  
      
      //  for(var i=1;i<=imageCount;i++){
      //         $('.gallery .link'+i).hide(); 
      //  }
      
      gallery_change();


        if(cnt==imageCount)cnt=0;  
     }
     
    timeonoff= setInterval( moveg , 5000);


   $('.mbutton').click(function(event){ 
	     var $target=$(event.target); 
       clearInterval(timeonoff); 
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	   

		  if($target.is('.btn1')){  
				 cnt=1;  
		  }else if($target.is('.btn2')){  
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }//else 생략가능. 짜투리가 없음!

		  gallery_change();

      if(cnt==imageCount)cnt=0;  //카운트 초기화. 타이머를 다시 생성하기위해 초기화함.
      //맨위에 있어서 또 안써도됨
     
      timeonoff= setInterval( moveg , 6000); 
     
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
		   timeonoff= setInterval( moveg , 6000); 
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
    
      gallery_change();

    if($(this).is('.btnRight')){
      if(cnt==imageCount)cnt=0;
    }else if($(this).is('.btnLeft')){
      if(cnt==1)cnt=imageCount+1;
    }

    timeonoff= setInterval( moveg , 6000); 

    if(onoff==false){ //정지되어있을때 버튼을 누르면 이미지 변경
      onoff=true;
      $('.dock .ps').removeClass('active');
    }
  });



   //issue
   var swiper1 = new Swiper('.swiper1',{
    slidesPerView:'auto',  // 3단수, 'auto'는 내가 원하는 단의 너비
    spaceBetween:40,  //단사이 여백
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //initialSlides: 8, //시작
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination: {   //페이지 네이션
    //     el: '.swiper-pagination',
    //     //dynamicBullets: true,
    //     clickable: true,
    //     //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    //  },
    autoplay: {  //자동
        delay: 2000,
        disableOnInteraction: false
     },
    // scrollbar: {  //하단 스크롤바
    //     el: '.swiper-scrollbar',
    //     hide: true
    // },
});







  //gallery 
  var swiper2 = new Swiper('.swiper2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
    rotate: -15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows : true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
    });


    // var text = document.getElementById('text');
    // var output ='';

    // output +='<dl>';
    // output +='<dt>'+ gdata[0].title +'</dt>';
    // output +='<dd>'+ gdata[0].desc +'</dd>';
    // output +='</dt>';  
    // text.innerHTML = output;

    // swiper.on('transitionEnd', function() {
    //     //console.log(swiper.realIndex);
    //     var sind = swiper.realIndex;  // 0~9
        
    //     output ='<dl>';
    //     output +='<dt>'+ gdata[sind].title +'</dt>';
    //     output +='<dd>'+ gdata[sind].desc +'</dd>';
    //     output +='</dt>';  
    //     text.innerHTML = output;
    // });





