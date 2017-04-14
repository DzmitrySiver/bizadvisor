/**
 * Created by Dzmitry_Siver on 4/10/2017.
 */

$(function() {
    console.log( "ready!" );

    $('.business-item').hover(function (e) {
        $(this).addClass('expanded');
    }, function () {
        $(this).removeClass('expanded');
    });


    // todo: replace with svg and css color ;
   $('.service-item').hover(function (e) {
        $(this).find('img').attr('src', 'img/test-icon-white.png');
    }, function () {
        $(this).find('img').attr('src', 'img/test-icon.png');
    });
});