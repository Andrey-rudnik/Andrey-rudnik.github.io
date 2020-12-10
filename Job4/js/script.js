
jQuery(document).ready(function($){
    $('.autoplay').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


const nav = document.querySelector('.nav_list'),
    link = document.querySelector('.link');

link.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.toggle('nav_list_open');
});
nav.addEventListener('click', function (event) {
    nav.classList.toggle('nav_list_open');
});


// Tabs
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
