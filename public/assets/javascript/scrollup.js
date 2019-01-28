$(document).ready(function () {
    // Scroll to top

    // determine when the button will appear
    // The higher the number, the further the visitor will have to scroll down the page 
    // before the button appears.
    var amountScrolled = 300;


    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            // makes the button appear using a slow fade effect
            $('a.sf-back-to-top').fadeIn('slow');
        } else {
            // make the button fade away when the visitor returns to the top of the page
            $('a.sf-back-to-top').fadeOut('slow');
        }
    });

    // make the page scroll to the top when the visitor clicks the button
    // with a nice animation, instead of jumping to the top of the page
    $('a.sf-back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

});