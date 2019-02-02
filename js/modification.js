function resize() {
    if ($(window).width() < 575.98) {
     $('#menu-nav').addClass('collapse');
    }
    else {$('#menu-nav').removeClass('collapse');}
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();
});