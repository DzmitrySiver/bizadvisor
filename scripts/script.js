/**
 * Created by Dzmitry_Siver on 4/10/2017.
 */

$(function() {
    console.log( "ready!" );

    $('.business-item').hover(function (e) {
        // $(this).find('.description-wrapper').stop().slideDown(100);
        $(this).addClass('expanded');
    }, function () {
        $(this).removeClass('expanded');
        // $(this).find('.description-wrapper').stop().slideUp(100);
    })
});