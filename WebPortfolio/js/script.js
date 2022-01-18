$(function(){
  // フェードイン
  $('header').fadeIn(1500);

  // スクロール フェードイン
  $(window).scroll(function (){
    $('.fade-in').each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass('fade-on');
      } else {
        $(this).removeClass('fade-on');
      }
    });
  });

  // スライドショー
  // next
  $('#nav-btn .next').click(function(){
    $('#slide:not(:animated)').animate({
      'margin-left' : -1*$('#slide li').width()
    },function(){
      // アニメーション完了時
      $('#slide').append($('#slide li:first-child')); //先頭の画像を最後に持ってくる
      $('#slide').css('margin-left','0');
    });
  });
  // prev
  $('#nav-btn .prev').click(function(){
    $('#slide:not(:animated)').prepend($('#slide li:last-child')) //最後の画像を先頭に持ってくる
    .css('margin-left',-1*$('#slide li').width())
    .animate({
      'margin-left' : 0
    });
  });

  // スクロールでフォントカラー変更
  let a =$('.mainvisual img').outerHeight();

  $(window).on('scroll',function(){
    if($(this).scrollTop() > a){
      $('.nav-area li').addClass('scroll');
    } else if ($(this).scrollTop()<a){
      $('.nav-area li').removeClass('scroll');
    }
  });

});
