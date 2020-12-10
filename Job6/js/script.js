window.addEventListener('DOMContentLoaded',()=>{
    class Slider {
        constructor(){
            this.wraper = document.querySelector('.slider_top_wrapper');
            this.wraper.style.left = 0+'px';
            this.items = document.querySelectorAll('.slider_top_slide');
            this.shift = parseFloat(getComputedStyle(this.wraper).width);
            this.circles;
            this.circlesContainer = document.querySelector('.slider_circles');
            this.counter = 1;
            this.countOfSlides = this.items.length;
            this.t;
            this.init();
        }
        init(){
            this.addCircles();
            this.interval();
            this.clickOnCircle();
            this.resizeWindow();

        }
        addCircles(){
            this.circlesContainer.innerHTML = '';

            for (let i = 0; i <this.countOfSlides ; i++) {
                let circle = document.createElement('li');
                if (i===0){
                    circle.classList.add('active')
                }
                this.circlesContainer.appendChild(circle);
            }
            this.circles = document.querySelectorAll('.slider_circles li');

        }
        resizeWindow(){
            window.addEventListener('resize',()=>{
                console.log(1);
                this.shift = parseFloat(getComputedStyle(this.wraper).width);
            })
        }
        move(){
            this.counter = this.counter >= this.countOfSlides ? 0 : this.counter;
            this.circles.forEach((e,i)=>{
                if(i === this.counter){
                    e.classList.add('active');
                }else{
                    e.classList.remove('active')
                }
            });
            this.wraper.style.left =-this.shift*this.counter + 'px';
            this.counter++;
        }
        interval(){
            this.t = setInterval(this.move.bind(this),2000)
        }
        clickOnCircle(){
            this.circlesContainer.addEventListener('click',(e)=>{
                clearInterval(this.t);
                this.circles.forEach((el,i)=>{
                    if (el === e.target) {
                        this.counter = i;
                        this.move();
                        this.interval()
                    }
                });
            })
        }
    }
    if (document.querySelector('.slider_top_wrapper')){
        let slider = new Slider();
    }

    jQuery(document).ready(function($){
        $(".button a").click(function(){
            $(".overlay").fadeToggle(200);
            $(this).toggleClass('btn-open').toggleClass('btn-close');
            $(".button a").hide();
            $(".overlay p").show();
        });
    });

    jQuery(document).ready(function($){
        $('.overlay p').on('click', function(){
            $(".overlay").fadeToggle(200);
            $(".button a ").toggleClass('btn-open').toggleClass('btn-close');
            // open = false;
            $(".button a").show();
            $(".overlay p").hide();
        });
    });
});


