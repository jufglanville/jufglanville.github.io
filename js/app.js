let width = screen.width;
let height = screen.height;
// let docHeight = $(document).height();

// let docHeight = $(document).height();
// let winHeight = $(window).height();

// let scrollVal = docHeight - winHeight;

let homeAnchor = 0.01;
let aboutAnchor = 0.15;
let projectsAnchor = 0.3;
let timelineAnchor = 0.38;
let contactAnchor = 100;

// Nav Bar Functions

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function scrollTo(anchor) {
    // let docHeight = $(document).height();
    let docHeight = document.documentElement.scrollHeight;
    let winHeight = $(window).height();
    let scrollVal = docHeight - winHeight;

    let linkPosition = scrollVal * anchor
    closeNav(),
    $('html, body').animate({
        scrollTop: linkPosition
    }, 100);
}

// Nav Function

// $(".home-link").click(scrollTo(homeAnchor));
// $("#about-link").click(scrollTo(aboutAnchor));

$(".home-link").click(function() {
    scrollTo(homeAnchor);
});
$("#about-link").click(function() {
    scrollTo(aboutAnchor);
});
$("#projects-link").click(function() {
    scrollTo(projectsAnchor);
});
$("#timeline-link").click(function() {
    scrollTo(timelineAnchor);
});
$("#contact-link").click(function() {
    scrollTo(contactAnchor);
});

$(".closebtn").click(closeNav);

$(".openbtn").click(openNav);

// ScrollMagic Functions

// let tl = new TimelineMax({onUpdate:updatePercentage});
let tl = new TimelineMax();
let tl2 = new TimelineMax();
let tl3 = new TimelineMax();
let tl4 = new TimelineMax();
let tl5 = new TimelineMax();


let td1 = new TimelineMax({onUpdate:updatePercentage});

const controller = new ScrollMagic.Controller();

// Home Page
tl.from('.main-background-text', 1, {opacity: 0, y: 200});
tl.from('.icons', 1.5, {opacity: 0, scale: 0});
tl.from('.logo', 1.5, {opacity: 0, scale: 0}, 0);

// About Me Page
tl2.from('#about', 0.5, {opacity: 0, x: width});
tl2.from('.profile-img', 1, {opacity: 0, x: -width}, 0.5);
tl2.from('.intro-text', 1, {opacity: 0, x: width}, 0.5);
tl2.from('.left', 1.5, {opacity: 0, y: width}, 0.5);
tl2.from('.right', 1.5, {opacity: 0, y: -width}, 0.5);

// Projects Page
tl3.from('#projects', 1, {opacity: 0, x: -width});

// Timeline Page
tl4.from('#timeline', 1, {opacity: 0, x: width});

// Contacts Page
tl5.from('#contact', 1, {opacity: 0, x: -width});

// Timeline Trigger Points
// Uni Days
// 2010
td1.from('#year-10', 1, {opacity: 0, y: 60});
td1.from('#notes', 4, {opacity: 0, x: -width, scale: 0}, 6);
td1.from('#acm', 4, {opacity: 0, x: width}, 6);
td1.to('#year-10', 1, {opacity: 0, y: -60}, 10);

// 2011
td1.from('#year-11', 1, {opacity: 0, y: 50}, 12);
td1.to('#notes', 3, {opacity: 0, x: width}, 12);
td1.from('#guitar', 4, {opacity: 0, x: -width, scale: 0}, 12);
td1.to('#year-11', 1, {opacity: 0, y: -60}, 18);

// 2012
td1.from('#year-12', 1, {opacity: 0, y: 50}, 20);
td1.to('#guitar', 3, {opacity: 0, x: width}, 20);
td1.from('#electric-guitar', 4, {opacity: 0, x: -width, scale: 0}, 20);
td1.to('#year-12', 1, {opacity: 0, y: -60}, 26);

// 2013
td1.from('#year-13', 1, {opacity: 0, y: 50}, 28);
td1.to('#electric-guitar', 3, {opacity: 0, x: width}, 28);
td1.from('#band', 4, {opacity: 0, x: -width, scale: 0}, 28);
td1.from('.lights', 3, {opacity: 0, scale: 0, y: -height}, 28);
td1.to('#year-13', 1, {opacity: 0, y: -60}, 34);

// 2014
td1.from('#year-14', 1, {opacity: 0, y: 50}, 36);
td1.to('#band', 3, {opacity: 0, x: width}, 36);
td1.from('#hat', 4, {opacity: 0, y: -height}, 36);
td1.from('#diploma', 4, {opacity: 0, scale: 0, y: height}, 36);
td1.to('#acm', 3, {opacity: 0, x: -width}, 42);
td1.to('#hat', 3, {opacity: 0, scale: 4}, 42);
td1.to('#diploma', 3, {opacity: 0, scale: 3}, 42);
td1.to('.lights', 3, {scale: 0}, 42);
td1.to('#year-14', 1, {opacity: 0, y: -60}, 42);



// Ireland Days

// 2015
td1.from('#year-15', 3, {opacity: 0, y: 50}, 44);
td1.from('#rainbow', 4, {opacity: 0, scale: 0, y: height}, 44);
td1.from('#clover', 4, {opacity: 0, scale: 0, y: height}, 44);
td1.from('#gold', 4, {opacity: 0, scale: 0, y: height}, 44);
td1.from('#plane', 10, {x: -(2*width), scale: 0}, 44);
td1.from('#flag', 10, {x: -width, scale: 0},44);
td1.from('#new-world', 4, {opacity: 0, scale: 0, x: width}, 53);
td1.from('#wax', 4, {opacity: 0, scale: 0, y: -height}, 57);
td1.from('#rock', 4, {opacity: 0, scale: 0, x: -width}, 61);
td1.to('#year-15', 1, {opacity: 0, y: -60}, 67);

// 2016
td1.from('#year-16', 1, {opacity: 0, y: 50}, 69);
td1.to('#year-16', 1, {opacity: 0, y: -60}, 73);

// 2017
td1.from('#year-17', 1, {opacity: 0, y: 50}, 75);
td1.to('#rainbow', 3, {opacity: 0, x: -width}, 75);
td1.to('#clover', 3, {opacity: 0, x: -width}, 75);
td1.to('#gold', 3, {opacity: 0, x: -width}, 75);
td1.to('#flag', 3, {opacity: 0, x: -width}, 75);
td1.to('#new-world', 3, {opacity: 0, x: -width}, 75);
td1.to('#wax', 3, {opacity: 0, x: -width}, 75);
td1.to('#rock', 3, {opacity: 0, x: -width}, 75);
td1.from('#boat', 10, {x: (2*width)}, 75);
td1.from('#england', 10, {x: (2*width)}, 75);
td1.from('#vw', 4, {opacity: 0, scale: 0, y: height}, 85);
td1.to('#england', 1, {opacity: 0}, 87);
td1.to('#year-17', 1, {opacity: 0, y: -60}, 89);

// 2018
td1.from('#year-18', 1, {opacity: 0, y: 50}, 91);
td1.to('#vw', 3, {opacity: 0, x: width}, 93);
td1.from('#paycircle', 4, {opacity: 0, x: -width, scale: 0}, 93);
td1.to('#year-18', 1, {opacity: 0, y: -60}, 98);

// 2019
td1.from('#year-19', 1, {opacity: 0, y: 50}, 100);
td1.to('#paycircle', 3, {opacity: 0, scale: 0}, 102);
td1.from('#treehouse', 4, {opacity: 0, scale: 0, y: -height}, 102);

tl5.to('#email', 1, {opacity: 0}, 0);
tl5.from('#email-2', 1, {opacity: 0, scale: 0, y: height}, 0);
tl5.to('.scroll-icon', 1, {opacity: 0}, 0);

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger-1",
    triggerHook: "0"
})
// .addIndicators()
.setPin(".main-background-text")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger-2",
    triggerHook: "0"
})
// .addIndicators()
.setTween(tl2)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger-3",
    triggerHook: "0"
})
// .addIndicators()
.setTween(tl3)
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger-4",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl4)
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".trigger-5",
    triggerHook: "0"
})
.addIndicators()
.setTween(tl5)
.addTo(controller);

const timelineScene = new ScrollMagic.Scene({
    triggerElement: ".trigger-date", 
    triggerHook: "0",
    duration: "550%"
})
.addIndicators()
.setPin(".trigger-date")
.setTween(td1)
.addTo(controller);

function updatePercentage() {
    td1.progress();
    console.log(tl.progress());
}

// Project Carousel Functions

$(document).ready(function() {
    $('.jR3DCarouselGalleryCustom').jR3DCarousel({
        width: 450,
        height: 450,
        slideLayout: 'contain',
        animation: 'slide3D',
        animationCurve: 'ease',
        animationDuration: 1600,
        animationInterval: 1500,
        slideClass: 'jR3DCarouselCustomSlide',
        autoplay: true
    });
});


$(document).ready(function() {

    $(window).scroll(function(e){
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent*100);

        console.log('scrollTop : ' + scrollTop);
        console.log('docHeight : ' + docHeight);
        console.log('winHeight : ' + winHeight);
        console.log('scrollPercent : ' + scrollPercent);
        console.log('scrollPercentRounded : ' + scrollPercentRounded);
        $('#scrollPercentLabel>span').html(scrollPercentRounded);
        repositionLabel();
    });

    $(window).resize(function(){
        repositionLabel();
    });

    function repositionLabel() {
        $('#scrollPercentLabel').css({
            position:'fixed',
            left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
            top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
        });
    }

    repositionLabel();

});