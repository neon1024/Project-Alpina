
$("#right-scroll").on("click", function(){

    // if ( $('.ln-container').scrollLeft() > ($('.ln-container').width() - $('.ln-container').width()))
    if(scrollAmount < 450 * 5)
        scrollAmount = scrollAmount + 1350;

    $(".ln-container").scrollLeft(scrollAmount);
});
