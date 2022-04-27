$('a[href^="#top"]').click(function () {
  if ($("html").width() < 576) {
    var href = $(this).attr("href");
    // console.log(href);////#topが取得できる
    var target = $(href == "#top" || href == "" ? 'html' : href); //hrefに入っているのが#topか空白の時は'html'を、どちらでもない時はhrefの値 *ここのhtmlはページトップに戻る
    console.log(target);
    var position = target.offset().top;
    console.log(position);
    var speed = 2000;
    $("html").animate({
      scrollTop: position
    }, speed, "swing");
    return;
    //対象要素.animate(CSSプロパティ、duration時間, easing, 関数) プロパティ部分は{}でオブジェクト形式で記述する必要がある
    //swing→始めと最後は穏やか、途中ちょい早め　　linear→常に同じ速度
  };
});