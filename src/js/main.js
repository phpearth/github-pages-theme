$("#search_btn").click(function (event) {
    event.preventDefault();
    $('#search_form').submit();
});

$('.message .close').click(function (event) {
    $(this).parent().fadeOut();
});

$(document).ready(function () {
    $('.ui.sticky')
        .sticky({
            silent: true,
            bottomOffset: 100,
            context: '#pe-content'
        })
        ;

    $('.ui.accordion')
        .accordion()
        ;
});

// Cache selectors
var lastId;
var topMenu = $("#sticky-menu");
var menuItems = topMenu.find("a");
var scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));

    if (item.length) {
        return item;
    }
});

// Scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href");
    var offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop();

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) {
            return this;
        }
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .removeClass("active")
            .filter("[href='#" + id + "']").addClass("active");
    }
});
