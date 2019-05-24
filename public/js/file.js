	
$(document).ready(function(){
    $('.hidden').slideDown(1000);
});


$(document).ready(function () {
    $('div.hidden2').fadeIn(5000).removeClass('hidden2');
});

$('.nav-item a.nav-link').click(function() {
    var navbar_toggle = $('.navbar-toggler');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});

