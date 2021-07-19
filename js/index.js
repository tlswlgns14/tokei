$('html, body').stop().animate({
    scrollLeft : 0
},1000)



$('#menu li').eq(0).addClass('on')
var cflag = false;
$('#menu li a').on('click focus', function(e){
    e.preventDefault()
    cflag = true;
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    var num = $(this).parent().index()
    var secDist = $('section').eq(num).offset().left
    $('html,body').stop().animate({
        scrollLeft : secDist
    },1000, function(){
        cflag = false;
    })
})


var sDist0 = $('#sect1').offset().left
var sDist1 = $('#sect2').offset().left
var sDist2 = $('#sect3').offset().left

//마지막구간이 윈도우높이보다 클때
var lastSect = $('#sect4').offset().left

var sct=0;
$(window).on('scroll',function(){
    // var wh = $(this).height()
    var sct = $(this).scrollLeft()
    if ( sct>=sDist0 && sct<sDist1 && !cflag) {
        $('#menu li').eq(0).addClass('on')
        $('#menu li').eq(0).siblings().removeClass('on')
    } else if ( sct>=sDist1 && sct<sDist2 && !cflag) {
        $('#menu li').eq(1).addClass('on')
        $('#menu li').eq(1).siblings().removeClass('on')
    } else if ( sct>=sDist2 && sct<lastSect && !cflag) {
        $('#menu li').eq(2).addClass('on')
        $('#menu li').eq(2).siblings().removeClass('on')
    } else if ( sct>=lastSect && !cflag) {
        $('#menu li').eq(3).addClass('on')
        $('#menu li').eq(3).siblings().removeClass('on')
    }
    
})  
    

$('section').on('mousewheel', function(event,delta){       
    if(delta>0) {   //마우스휠을 위로 굴리면 양수
           $('html, body').stop().animate({
                    scrollLeft: $(this).prev().offset().left
                },600)
            } else if (delta<0) {   //마우스휠을 아래로 굴리면 음수
                $('html, body').stop().animate({
                    scrollLeft: $(this).next().offset().left
                },600)
            }
})


// 햄버거 클릭시 메뉴박스 오픈하기
$('.open').on('click', function(){

    if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
        // $(this).find('i').removeClass('fa-times').addClass('fa-bars')
    } else {
        $(this).addClass('on')
        // $(this).find('i').removeClass('fa-bars').addClass('fa-times')
    }

})