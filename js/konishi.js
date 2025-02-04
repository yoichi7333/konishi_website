

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	var doch = $(document).innerHeight(); //ページ全体の高さ
	var winh = $(window).innerHeight(); //ウィンドウの高さ
	var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
	if ((scroll >= 200) && 
	bottom - 50 > $(window).scrollTop()){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// .page-topをクリックした際の設定
$('.go-page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


//追従するHeader分の高さを引いて適切な場所へスクロール
$('.page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;//idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});


//ハンバーガーメニュー -3本線が×に-
$(".openbtn").click(function () {
    $(this).toggleClass('active');
	$("#g_navi").toggleClass('panelactive');//#g_naviにpanelactiveクラスを付与
	$("#logo_konishi").toggleClass('logoactive');//logo_konishi"にpanelactiveクラスを付与
});

$("#g_navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g_navi").removeClass('panelactive');//#g_naviのpanelactiveクラスも除去
	$("#logo_konishi").removeClass('logoactive');//#logo_konishi"のpanelactiveクラスも除去
});

//横幅が768px以下になった時の処理をまとめる
function fncOpenMenu() {
  //ヘッダーの高さを取得
	var width = $(window).width();
	if(width <= 700) {//横幅が768px以下の場合
		$('.openbtn').addClass('openMenu');//.openbtnにopenMenuというクラス名を付与して
		$('#g_navi').addClass('dnone');//#g_naviにdnoneというクラス名を付与
  	}else{//それ以外は
		$('.openbtn').removeClass('openMenu');//openMenuというクラス名を除き
		$('#g_navi').removeClass('dnone');//#g_naviのdnoneというクラス名を除く
		$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
		$("#g_navi").removeClass('panelactive');//#g_naviのpanelactiveクラスも除去
		$("#logo_konishi").removeClass('logoactive');//#logo_konishi"のpanelactiveクラスも除去
  	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
  fncOpenMenu();//横幅が768px以下、になった時ハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fncOpenMenu();//横幅が768px以下、になった時ハンバーガーメニューに変化するための関数を呼ぶ
});