/**
 * Created by Dzmitry_Siver on 4/10/2017.
 */

$(function () {
    console.log("ready!");

    $('.business-item').hover(function (e) {
        $(this).addClass('expanded');
    }, function () {
        $(this).removeClass('expanded');
    });

    var galleryElems = document.querySelectorAll('.carousel');

    for (var i = 0, len = galleryElems.length; i < len; i++) {
        var galleryElem = galleryElems[i];
        new Flickity(galleryElem, {
            pageDots: false,
            wrapAround: true
        });
    }

    $('.flickity-prev-next-button').on('click', function (e) {
        e.preventDefault();
    });


    // todo: replace with svg and css color ;
    $('.service-item').hover(function (e) {
        $(this).find('img').attr('src', 'img/test-icon-white.png');
    }, function () {
        $(this).find('img').attr('src', 'img/test-icon.png');
    });


});