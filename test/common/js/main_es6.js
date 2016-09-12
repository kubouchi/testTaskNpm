 //課題1
 //右カラムclickの画像をロールオーバーで変わるように動きをつけてください。
 //

$(function(){
  $('.rollover').hover(
    function(){
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    },
    function(){
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
  });
});

 //課題2
 //・ページ上部へのアンカー（以下toトップ）に動きをつけてみましょう。
 //1、画面を少しスクロールさせるとtoトップが表示、ページ上部へ行くとtoトップが非表示
 //2、toトップをクリックするとページ上部へ自動スクロールして移動する

$(function(){
  let $totop = $('.linkToTop');
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $totop.fadeIn();
    } else {
      $totop.fadeOut();
    }
  });

  $totop.click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


 //課題3
 //・左カラムメニューをマウスオーバーすると右のラインが付いてくるようにしてください。

$(function(){
  var $wrapBar = $('.sideCntsWrapBar');

  $('.sideCntsBox1 li').on('mouseover', function() {
    var height = $(this).position().top;
    $wrapBar.stop().animate({top: height}, 200);
  });

});

 //課題4(ES6)
 //・左カラム下の3枠はカルーセルスライダーにしてください。
 //1、記事は全部で9つ作ってください
 //2、下の○を押すと切り替わるようにしてください

$(function(){
  var obj = $('.sideCntsSlider'),
      width = obj.find('ul').outerWidth(true);

  class Slider {
    constructor(obj, width, num){
      this.obj = obj;
      this.num = num;
      this.width = width;
    }
    //class付け替え処理
    changeBtnClass() {
      var btn = $('.sliderBtn li').find('a');
      btn.removeClass('current');
      btn.eq(this.num).addClass('current');
    }
    //ボックススライド処理
    slideItem() {
      this.obj.stop().animate({left: this.width * -(this.num)}, 500);
    }
  }

  $('.sliderBtn li').on('click', function() {
    var num = $('.sliderBtn li').index(this);
    var click = new Slider(obj, width, num);
    click.changeBtnClass(); //class付け替え処理
    click.slideItem(); //ボックススライド処理
  });

});