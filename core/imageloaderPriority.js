/**
 * Created by stavr on 29-Jan-17.
 */

(function(funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if ( document.readyState === "complete" ) {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function(callback, context) {
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function() {callback(context);}, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({fn: callback, ctx: context});
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("docReady", window);


docReady(function () {
    var first = document.getElementsByClassName('ilp-first');
    var second = document.getElementsByClassName('ilp-second');
    var third = document.getElementsByClassName('ilp-third');

    var firstSources = stopLoading(first);
    var secondSources = stopLoading(second);
    var thirdSources = stopLoading(third);


    console.log(firstSources);
    console.log(secondSources);
    console.log(thirdSources);


    startLoading(first, firstSources);

    for(var i = 0; i < firstSources.length; i++) {
        first[i].onload =  function () {
            if (i == firstSources.length) {
                startLoading(second, secondSources);
            }
        };
    }


    for(var i = 0; i < secondSources.length; i++) {
        second[i].onload =  function () {
            if (i == secondSources.length) {
                startLoading(third, thirdSources);
            }
        };
    }

});

function stopLoading(images) {
    var sources = [];
    for(var i = 0; i < images.length; i++) {
        sources[i] = images[i].src;
        images[i].removeAttribute("src");
    }
    return sources;
}

function startLoading(images, sources) {
    for(var i = 0; i < images.length; i++) {
        images[i].src = sources[i];
    }
}

