
jQuery(document).ready(function($){
    $('.autoplay').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    arrows: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: false,
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    });




});

jQuery(document).ready(function ($) {
    $('#menu-toggle').click(function () {
        $(this).toggleClass('menu-toggle_open');
    });
});


jQuery(document).ready(function($){
    $("#menu-toggle").click(function(){
        $(".nav_mobile").toggleClass('nav_mobile_open');
    });
    $('ul li a').click(function() {
        if ( $('.nav_mobile').hasClass('nav_mobile_open')) {
            $('.nav_mobile').removeClass('nav_mobile_open');
            $('#menu-toggle').toggleClass('menu-toggle_open');
        }
    })

    /*img zooming*/
    $(function(){
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth())/2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                top: ($(window).height() - $('#magnify').outerHeight())/2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function(event) {
            event.preventDefault();

            $('#overlay, #magnify').fadeOut('fast', function() {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });

});


const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}






