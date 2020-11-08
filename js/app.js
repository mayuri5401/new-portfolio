$(document).ready(function () {


    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })

    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tool_tip = bar.children[0];
        tool_tip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })

    //counter

    const counters = document.querySelectorAll('.counter');
    // console.log(counters);

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;


            // console.log(target);

            let countIt = function () {
                let displayedCount = +counter.innerText;

                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    // console.log(displayedCount);
                    setTimeout(countIt, 1);
                } else {
                    counter.innerText = target;
                }
            }
            countIt();

        })
    }
    runCounter();

    let counterWrapper = document.querySelector('.counter_wrapper');

    let options = {
        rootMargin: '0px 0px -100px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            //   console.log('intersecting...');
            runCounter();
        }
    }, options)
    sectionObserver.observe(counterWrapper);





    //image filter

    var $wrapper = $('.portfolio_wrapper');


    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    })

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        // console.log('selector');
        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            })
            // e.target.classList.add('active');

            links.forEach(link => {

                link.classList.remove('active');

            })

            e.target.classList.add('active');


        })
    })

    //  magnify popup
    $('.maginify').magnificPopup({

        type:'image',
        gallery: {
            enabled : true
        },
        zoom : {
            enable: true
        }

    });


    //slider 

    $('.slider').slick({

        arrows: false,
        autoplay: true

    });

})



function myPrint(myfrm) {
    window.print();
}