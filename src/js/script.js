jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
            if ($(".js-drawer, .js-header__drawer-bg").hasClass("is-current")) {
                $(".js-drawer, .js-header__drawer-bg").fadeOut(500, function () {
                    $(this).removeClass("is-current");
                });
                $(".js-hamburger").removeClass("is-current");
            } else {
                $(".js-drawer, .js-header__drawer-bg").hide().addClass("is-current").fadeIn(500);
                $(".js-hamburger").addClass("is-current");
            }
        });
    });

    // スクロールするとロゴの色変更
    $(function () {
        $(window).on("scroll", function () {
            var sliderHeight = $(".js-top-mv").height();
            if (sliderHeight - 30 < $(this).scrollTop()) {
                $(".js-header").addClass("is-header-color-scroll");
            } else {
                $(".js-header").removeClass("is-header-color-scroll");
            }
        });
    });
    // ページ内スクロール
    $(function () {
        // ヘッダーの高さ取得
        const headerHeight = $(".js-header").height();
        $('a[href^="#"]').click(function () {
            const speed = 700;
            let href = $(this).attr("href");
            let target = $(href == "#" || href == "" ? "html" : href);
            // ヘッダーの高さ分下げる
            let position = target.offset().top - headerHeight;
            $("body,html").animate({ scrollTop: position }, speed, "swing");
            return false;
        });
        // ページが読み込まれたときにURLのハッシュをチェック
        const urlHash = location.hash;
        if (urlHash) {
            // ハッシュがある場合はそのIDの要素までスクロール
            const target = $(urlHash);
            if (target.length) {
                const position = target.offset().top - headerHeight;
                $("body,html").animate({ scrollTop: position }, 700, "swing");
            }
        }
    });
});
