
$(document).ready(function() {
    $('a.info-button').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
        }

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    })

    $('button.header-button').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $('#projects').offset().top
        }, 6000)
    })

})