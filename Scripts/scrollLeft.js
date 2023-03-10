
$("#left-scroll").on("click", function(){

    // if ( $('.ln-container').scrollLeft() < ($('.ln-container').width() - $('.ln-container').width()))
    if(scrollAmount > 0)    
        scrollAmount = scrollAmount - 1350;

    $(".ln-container").scrollLeft(scrollAmount);
});
