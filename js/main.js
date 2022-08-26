$(document).ready(function(){
    
    
    
function general(){
    
$('.arrow a').click(function(e){
    e.preventDefault();
}); 
    
$('.row1 .pd_wrap').slick({
    prevArrow : '.row1 .arrow .prev',
    nextArrow : '.row1 .arrow .next',
    mobileFirst : true,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
});
    
$('.row2 .pd_wrap').slick({
    prevArrow : '.row2 .arrow .prev',
    nextArrow : '.row2 .arrow .next',
    mobileFirst : true,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
});
    
$('.m_box_wrap').slick({
       autoplay: true,
        autoplaySpeed: 2000,
       mobileFirst : true,
        arrows : false,
        slidesToShow : 2,
        slidesToScroll:1,
responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick'}]
})
}//general.func
function pc(){
    $('.main_gnb').show();
    $('.main_gnb>li').on('mouseover', function(){
        $(this).find('.pc_sub_gnb').stop().slideDown(200);
    }).on('mouseout', function(){
        $(this).find('.pc_sub_gnb').stop().slideUp(200);
    });
    
$('.s_left_wrap').slick({
    arrows : false,
    asNavFor : '.s_right_wrap,  .b_wrap',
    autoplay:true,
      autoplaySpeed: 2000

});
    
$('.s_right_wrap').slick({
    arrows : false,
    asNavFor : ' .s_left_wrap, .b_wrap',
    autoplay:true,
      autoplaySpeed: 2000

});
    
$('.b_wrap').slick({
      autoplaySpeed: 2000,

    arrows: false,
    asNavFor : '.s_right_wrap, .s_left_wrap',
    autoplay:true,
      autoplaySpeed: 2000

});
    
$('.mid_bn').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
});
}//pc.func
    
function mobile(){
    //$('.main_gnb').hide();
    var gnbWidth = $('.main_gnb').width();
    $('.main_gnb').css('right', -gnbWidth);
    
    var switchGnb = true;
    
    $('.m_all_btn').click(function(){
        switchGnb = !switchGnb;
        if(switchGnb == false){
            $('.main_gnb').stop().animate({
                'right' : 0
            })
        }else{
            $('.main_gnb').stop().animate({
                'right' : -gnbWidth
            });
        }


    });
    
    $('.img_wrap').slick({
        arrows : false,
        autoplay : true,
        autoplaySpeed: 2000
    });
    
    $('.mid_bn').slick({
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
    });
    
    $('.main_gnb>li').on('click', function(){
        $(this).find('.m_sub_gnb').slideToggle();
        $(this).siblings().find('.m_sub_gnb').slideUp();
    })
}//mobile.func
    
    
 function resizeWindow(){
     var winWidth = window.innerWidth;
     if(winWidth >= 1024){
         pc();
     }else{
         mobile();
     }
     general();
 }//resize.func   
    
    
    function init(){
        resizeWindow();
        $(window).resize(resizeWindow);
        general();
    }
    init();
    
})//fn