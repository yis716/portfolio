
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다 900px
   var on_off=false;  //false(안오버)  true(오버)
   
    $('#headerArea').mouseenter(function(){
        // var scroll = $(window).scrollTop();
        $(this).css('background','#fff');
        $('.dropdownmenu li.menu a.depth1').css('color','#333'); 
        $('.dropdownmenu li.menu ul li a').css('color','#777'); 
        
        //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
        on_off=true;
    });

    $('#headerArea').mouseleave(function(){
        var scroll = $(window).scrollTop();  //스크롤의 거리
        
        if(scroll<smh-50 ){
            $(this).css('background','rgba(255,255,255,.5)').css('box-shadow','none'); 
            $('.dropdownmenu li.menu a.depth1').css('color','#333'); //비주얼이전 영역에서 마우스리브 후
        }else{
            $(this).css('background','#fff'); 
            $('.dropdownmenu li.menu a.depth1').css('color','#333'); //비주얼이후 영역에서 마우스리브 후
        }
        on_off=false;    
    });

    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  
        //스크롤의 거리를 리턴하는 함수
    //    console.log(scroll);

        if(scroll>smh-100){//스크롤이 비주얼의 높이-header높이 까지 내리면
            $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0, 0, 0, .4)');
            $('.dropdownmenu li.menu a.depth1').css('color','#333');
        }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
            if(on_off==false){
                $('#headerArea').css('background','rgba(255,255,255,.4)').css('box-shadow','none');
                $('.dropdownmenu li.menu a.depth1').css('color','#333');
            }
        }; 
        
    });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn(100,function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:300},100).clearQueue();
        },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:100},100).clearQueue();
    });

  
    
    // 1depth 효과
    $('ul.dropdownmenu li.menu').hover(
       function() { 
            $('.depth1',this).css('color','rgb(134, 229, 255)');
        },function() {
            $('.depth1',this).css('color','#333');
    });
     

    //  2depth 효과
    $('ul.dropdownmenu .menu ul li').hover(
        function() { 
             $('a',this).css('color','#8E684C').css('font-weight','600').css('text-decoration','underline').css('text-underline-offset','5px');
         },function() {
             $('a',this).css('color','#777').css('font-weight','').css('text-decoration','none');
    });

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('fast');
        $('#headerArea').animate({height:300},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:100},'fast').clearQueue();
    });

    // 현재 페이지에 해당하는 메뉴 글자 하이라이팅
    var getPath = window.location.href.split('/'); // 현재 url을 '/'기준으로 자름
    var getSplitIdx = getPath[getPath.length-1].indexOf('_') // 자른 패스에서 숫자를 뽑아낼 기준인 언더바의 인덱스 값을 반환한다.
    var depth1Num = getPath[getPath.length-1].charAt(getSplitIdx-1); // 언더바 앞에 ex)sub"1"_2 글자 반환
    var depth2Num = getPath[getPath.length-1].charAt(getSplitIdx+1); // 언더바 뒤에 ex)sub1_"2" 글자 반환
    var thisMenu = $('.depth1')[depth1Num-1]; // depth1 클래스를 가진 요소들 중 첫번째(인덱스라-1)요소 반환
    var thisMenu2 = $(thisMenu).parent().next().find('a')[depth2Num-1]; // 찾아놓은 depth1에서 부모(h3)의 다음(ul) 자식중 a를 찾고 현재num요소를 가져옴.

    $(thisMenu).css('color', '#8E684C'); // 1depth 글자색
    $(thisMenu2).css('color', '#8E684C !important'); // 2depth 글자색

});
