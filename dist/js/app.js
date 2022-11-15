(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.onload = function() {
        setTimeout((function() {
            let preloader = document.getElementById("preloader_malc");
            if (preloader) document.getElementById("preloader_malc").style.display = "none";
        }), 400);
    };
    window["FLS"] = true;
})();