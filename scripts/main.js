$('#aboutl').click(function() {
    let location = $(this).attr('href');
    $('html,body').animate({scrollTop: $(location).offset().top}, 900);
    return false;
});
