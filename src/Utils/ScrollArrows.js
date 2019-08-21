  import $ from "jquery";

    var scrollTimer;
    var $document = $(document);
    var scrollOffset = 20;
    var maxScrollOffsetLeft = $document.width() - $("body").innerWidth();

    function scrollContent(scrollDir) {
        var scrollArgs = {
            scrollLeft: ($document.scrollLeft() + (scrollOffset * scrollDir))
        };
        $("html").animate(scrollArgs, 50);
    };

    function scrollLeft() {
        if ($document.scrollLeft() > 0) {
            scrollContent(-1);
        }
    };

    function scrollRight() {
        if ($document.scrollLeft() < maxScrollOffsetLeft) {
            scrollContent(1);
        }
    };

    function scrollStop() {
        clearInterval(scrollTimer);
    };

    $(".left-controls").on("mousedown", function () {
        scrollTimer = setInterval(scrollLeft, 60);
    }).on("mouseup", scrollStop);
    $(".right-controls").on("mousedown", function () {
        scrollTimer = setInterval(scrollRight, 60);
    }).on("mouseup", scrollStop);