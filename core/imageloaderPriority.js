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

    startLoading(first, firstSources);

    var counter = {
        first: 0,
        second: 0
    };

    first.on("load", function () {
        loadNext(firstSources, second, secondSources, counter , 'first')
    });

    second.on("load", function () {
        loadNext(secondSources, third, thirdSources, counter , 'second');
    });

});

function loadNext(currentSource, nextImages, nextSources, counter, item) {
    counter[item]++;
    if (counter[item] == currentSource.length) {
        startLoading(nextImages, nextSources);
    }
}

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