$('#page-top a[href^="#"]').click(function () {
  if ($("html").width() < 576) {
    var speed = 2000;
    $("html").animate({scrollTop: 0}, speed, "swing");
    return;
    //対象要素.animate(CSSプロパティ、duration時間, easing, 関数) プロパティ部分は{}でオブジェクト形式で記述する必要がある
    //swing→始めと最後は穏やか、途中ちょい早め　　linear→常に同じ速度
  };
});