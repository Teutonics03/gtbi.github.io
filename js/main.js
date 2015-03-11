$("#homebtn").hide("fast");

$(document).ready(function () {
    $('#intro').particleground({
        dotColor: '#d4ebc7',
        lineColor: '#d4ebc7',
        particleRadius: 20
    });
});

$(window).scroll(function () {
    var scrollVal = $(window).scrollTop();
    if (scrollVal == 0) {
        $("#homebtn").hide("fast");
    } else {
        $("#homebtn").show("fast");
    }

});

$('.prettySocial').prettySocial();

$('a[href*=#]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 130
    }, "slow");
    return false;
});


jQuery(document).ready(function ($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        $timeline_block.each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});


$(".thumbnail").on("click",function(){
    var s = $(this).find('img').attr("src");
    $("#imgviewer").find('img').attr('src',s);
    $("#imgviewer").modal();
});