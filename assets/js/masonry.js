$(function () {
    var $demo1 = $('.masonry');   //コンテナとなる要素を指定
  
    $demo1.imagesLoaded(function(){ //imagesLoadedを使用し、画像が読み込みまれた段階でMasonryの関数を実行させる
      //Masonryの関数↓
      $demo1.masonry({              //オプション指定箇所
        itemSelector: '.photo-item',   //コンテンツを指定
        percentPosition : true,
        fitWidth: true,
        gutter: '.gutter-sizer',
        columnWidth: '.photo-item',           //カラム幅を設定
        // fitWidth: true,             //コンテンツ数に合わせ親の幅を自動調整
      });
    });
  });