
const btn1 = document.getElementById('button-1');
const btn2 = document.getElementById('button-2');
const btn1_1 = document.getElementById('button-1_1');
const btn2_2 = document.getElementById('button-2_2');
const menuVisible = document.getElementById('drop_menu_visible');


function viewdiv(){
    let el=document.getElementById('mydiv');
    if(el.style.display=="block"){
        el.style.display="none";
    } else {
        el.style.display="block";
    };
};


btn1.onclick = function() {
    btn1.classList.toggle("cross");
    viewdiv();
};
btn2.onclick = function() {
    btn1.classList.toggle("cross");
    viewdiv();
};

function viewdivv(){
    let ell=document.getElementById('mydiv2');
    // const dop_wind = document.querySelector('.window_wrap_main');
    if(ell.style.display=="block"){
        ell.style.display="none";
        // dop_wind.style.display="block";
    } else {
        ell.style.display="block";
        // dop_wind.style.display="none";
    };
};
btn1_1.onclick = function() {
    btn1_1.classList.toggle("cross2");
    viewdivv();
};
btn2_2.onclick = function() {
    btn1_1.classList.toggle("cross2");
    viewdivv();
};



const explode = function(){
    const el = document.querySelector('.bar_wrapper');
    el.style.display="block";
};
setTimeout(explode, 1000);



const move = document.getElementById('some');
const load = function () {
    move.classList.toggle("muve_left");
};
setTimeout(load, 1500);



const move2 = document.getElementById('some2');
const loadText = function () {
    move2.classList.toggle("show_txt");
};
setTimeout(loadText, 2000);


const btn3 = document.getElementById('btn_show');
btn3.onclick = function() {
    const down_bar = document.querySelector('.down_bar');
    move2.classList.toggle("show_txt");
    down_bar.classList.toggle("second_screen");
    const screen = document.querySelector('.white_window'); // section white_window
    screen.style.display="block";
};




// __________________________________slider
$(function(){
    $('.slider').slick({
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    adaptiveHeight: false,
                }
            },
        ]
    });

    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text('0' + (currentSlide + 1));
    });
});
// __________________________________/slider