/**
 * Created by stavr on 29-Jan-17.
 */


$(document).ready(function () {
    console.log("ready!");
    var first = $('.ilp-first');
    var second = $('.ilp-second');
    var third = $('.ilp-third');

    var firstSources = stopLoading(first);
    var secondSources = stopLoading(second);
    var thirdSources = stopLoading(third);


    console.log(firstSources);
    console.log(secondSources);
    console.log(thirdSources);


    startLoading(first, firstSources);

    var firstCount = 0;
    var secondCount = 0;
    var thirdCount = 0;

    first.on("load", function () {
        firstCount++;
        if (firstCount == firstSources.length) {
            startLoading(second, secondSources);
        }
    });

    second.on("load", function () {
        secondCount++;
        if (secondCount == secondSources.length) {
            startLoading(third, thirdSources);
        }
    });

});

function stopLoading(images) {
    var sources = [];
    images.each(function (i) {
        sources[i] = $(this).attr('src');
        $(this).removeAttr('src');
    });
    return sources;
}

function startLoading(images, sources) {
    images.each(function (i) {
        $(this).attr('src', sources[i]);
    });
}

$(window).on("load", function () {
    console.log("window loaded");
});