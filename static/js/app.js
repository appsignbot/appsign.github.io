/*!
 * Created by rean on 2017/10/8
 */

$(function () {
    'use strict';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".nav-bar").addClass("header-fix");
        } else {
            $(".nav-bar").removeClass("header-fix");
        }
    });

    if ($(window).width() > 990) {
        $('.dropdown').on('mouseenter mouseleave', function () {
            dropdown($(this))
        });
    } else {
        $('.dropdown').on('click', function () {
            dropdown($(this))
        });
    }

    $('.search-trigger').on('click', function () {
        $('.search-pop').fadeIn();
    });
    $('.search-pop .close').on('click', function () {
        $('.search-pop').fadeOut();
    });
    $('.nav-mobile-toggle').on('click', function () {
        var menu = $('.nav-menu');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        } else {
            menu.addClass('open');
        }
    });

    $('#top-back').hide().on('click', function () {
        $('body,html').animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $("#top-back").fadeIn();
        } else {
            $("#top-back").fadeOut();
        }
    });
    $('.cndns-right .cndns-right-btn:first').css({border: "none"});

    // $('.owl-case').owlCarousel({
    //     itemsCustom : [
    //         [0, 1],
    //         [450, 2],
    //         [991, 3]
    //     ]
    // });
    /* case */

    $("#casePrev").bind("click", { type: "prev" }, caseControl);
    $("#caseNext").bind("click", { type: "next" }, caseControl);
    $(".dialog_close").bind("click", closeDialog);
    $("#dialogBtn").bind("click", openDialog);
    isHiddenBackTopBtn();
});

function dropdown(e) {
    if (e.hasClass('open')) {
        e.removeClass('open')
    } else {
        e.addClass('open')
    }
}
function caseControl(e) {
    var i = e.data.type,
        n = $(".case_item").length,
        t = $(".case_item_current").index();
    t = 0 == t ? n: t;
    var o = "next" == i ? (t + 1) % n: t - 1;
    $(".case_item").eq(o).addClass("case_item_current").siblings().removeClass("case_item_current"),
        o = 0 == o ? n: o,
        $(".case_item").eq(o - 1).addClass("case_item_prev").siblings().removeClass("case_item_prev"),
        $(".case_item").eq((o + 1) % n).addClass("case_item_next").siblings().removeClass("case_item_next")
}

function openDialog() {
    $("#dialog").show(),
        $("#dialogBtn").hide()
}
function closeDialog() {
    $("#dialog").hide(),
        $("#dialogBtn").show()
}
function backToTop() {
    $("html,body").animate({
            scrollTop: 0
        },
        500)
}
function isHiddenBackTopBtn() {
    // window.addEventListener("scroll",
    //     function() {
    //         getScrollTop() > window.innerHeight ? $(".back-to-top").addClass('show') : $(".back-to-top").removeClass('show')
    //     },
    //     !1)
}
function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop || 0
}