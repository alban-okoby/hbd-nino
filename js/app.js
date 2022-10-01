$(document).ready(function() {
    $('.buttons').click(function() {
        $(this).addClass('active').siblings().removeClass('active');;
    
        let filter = $(this).attr('data-filter');

        if(filter == "tout") {
            $('.image').show(400);
        }else {
            $('.image').not('.'+filter).hide(200);
            $('.image').filter('.'+filter).show(400);
        }
    });

    $('.gallery-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    })
});