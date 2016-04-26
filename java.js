/**
 * Created by igor on 26.4.16..
 */

lightbox.option({
    'fitImagesInViewport': false,
    'alwaysShowNavOnTouchDevices': true
})

$('#galleryweb').on('click', function () {
    lightbox.option({
        'fitImagesInViewport': false,
        'alwaysShowNavOnTouchDevices': true
    })

});

$('#gallerylogo').on('click', function () {
    lightbox.option({
        'fitImagesInViewport': true,
        'alwaysShowNavOnTouchDevices': true
    })

});