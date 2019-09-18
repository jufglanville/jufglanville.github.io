let width = screen.width;
let height = screen.height;
let docHeight = $(document).height();
let homeAnchor = 10;
let aboutAnchor = docHeight * 0.1;
let projectsAnchor = docHeight * 0.2;
let timelineAnchor = docHeight * 0.3;
let contactAnchor = docHeight;

// Nav Bar Functions

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function scrollTo(anchor) {
    closeNav(),
    $('html, body').animate({
        scrollTop: anchor
    }, 100);
}

// Nav Function

// $(".home-link").click(scrollTo(homeAnchor));
// $("#about-link").click(scrollTo(aboutAnchor));

$(".home-link").click(function() {
    scrollTo(homeAnchor)
});
$("#about-link").click(function() {
    scrollTo(aboutAnchor)
});
$("#projects-link").click(function() {
    scrollTo(projectsAnchor)
});
$("#timeline-link").click(function() {
    scrollTo(timelineAnchor)
});
$("#contact-link").click(function() {
    scrollTo(contactAnchor)
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
let tl6 = new TimelineMax();

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
td1.from('#year-10', 0.5, {opacity: 0, y: 60});
td1.from('#notes', 2, {opacity: 0, x: -width, scale: 0}, 3);
td1.from('#acm', 2, {opacity: 0, x: width}, 3);
td1.to('#year-10', 0.5, {opacity: 0, y: -60}, 5);

// 2011
td1.from('#year-11', 0.5, {opacity: 0, y: 50}, 6);
td1.to('#notes', 1.5, {opacity: 0, x: width}, 6);
td1.from('#guitar', 2, {opacity: 0, x: -width, scale: 0}, 6);
td1.to('#year-11', 0.5, {opacity: 0, y: -60}, 9);

// 2012
td1.from('#year-12', 0.5, {opacity: 0, y: 50}, 10);
td1.to('#guitar', 1.5, {opacity: 0, x: width}, 10);
td1.from('#electric-guitar', 2, {opacity: 0, x: -width, scale: 0}, 10);
td1.to('#year-12', 0.5, {opacity: 0, y: -60}, 13);

// 2013
td1.from('#year-13', 0.5, {opacity: 0, y: 50}, 14);
td1.to('#electric-guitar', 1.5, {opacity: 0, x: width}, 14);
td1.from('#band', 2, {opacity: 0, x: -width, scale: 0}, 14);
td1.from('.lights', 1.5, {opacity: 0, scale: 0, y: -height}, 14);
td1.to('#year-13', 0.5, {opacity: 0, y: -60}, 17);

// 2014
td1.from('#year-14', 0.5, {opacity: 0, y: 50}, 18);
td1.to('#band', 1.5, {opacity: 0, x: width}, 18);
td1.from('#hat', 2, {opacity: 0, y: -height}, 18);
td1.from('#diploma', 2, {opacity: 0, scale: 0, y: height}, 18);
td1.to('#acm', 1.5, {opacity: 0, x: -width}, 21);
td1.to('#hat', 1.5, {opacity: 0, scale: 4}, 21);
td1.to('#diploma', 1.5, {opacity: 0, scale: 3}, 21);
td1.to('.lights', 1.5, {scale: 0}, 21);
td1.to('#year-14', 0.5, {opacity: 0, y: -60}, 21);



// Ireland Days

// 2015
td1.from('#year-15', 1.5, {opacity: 0, y: 50}, 22);
td1.from('#rainbow', 2, {opacity: 0, scale: 0, y: height}, 22);
td1.from('#clover', 2, {opacity: 0, scale: 0, y: height}, 22);
td1.from('#gold', 2, {opacity: 0, scale: 0, y: height}, 22);
td1.from('#plane', 5, {x: -(2*width), scale: 0}, 22);
td1.from('#flag', 5, {x: -width, scale: 0},22);
td1.from('#new-world', 2, {opacity: 0, scale: 0, x: width}, 26.5);
td1.from('#wax', 2, {opacity: 0, scale: 0, y: -height}, 28.5);
td1.from('#rock', 2, {opacity: 0, scale: 0, x: -width}, 30.5);
td1.to('#year-15', 0.5, {opacity: 0, y: -60}, 33.5);

// 2016
td1.from('#year-16', 0.5, {opacity: 0, y: 50}, 34.5);
td1.to('#year-16', 0.5, {opacity: 0, y: -60}, 36.5);

// 2017
td1.from('#year-17', 0.5, {opacity: 0, y: 50}, 37.5);
td1.to('#rainbow', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#clover', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#gold', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#flag', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#new-world', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#wax', 1.5, {opacity: 0, x: -width}, 37.5);
td1.to('#rock', 1.5, {opacity: 0, x: -width}, 37.5);
td1.from('#boat', 5, {x: (2*width)}, 37.5);
td1.from('#england', 5, {x: (2*width)}, 37.5);
td1.from('#vw', 2, {opacity: 0, scale: 0, y: height}, 42.5);
td1.to('#england', 0.5, {opacity: 0}, 43.5);
td1.to('#year-17', 0.5, {opacity: 0, y: -60}, 44.5);

// 2018
td1.from('#year-18', 0.5, {opacity: 0, y: 50},45.5);
td1.to('#vw', 1.5, {opacity: 0, x: width}, 46.5)
td1.from('#paycircle', 2, {opacity: 0, x: -width, scale: 0}, 46.5)
td1.to('#year-18', 0.5, {opacity: 0, y: -60}, 49);

// 2019
td1.from('#year-19', 0.5, {opacity: 0, y: 50}, 50);
td1.to('#paycircle', 1.5, {opacity: 0, scale: 0}, 51);
td1.from('#treehouse', 2, {opacity: 0, scale: 0, y: -height}, 51);

tl5.to('#email', 1, {opacity: 0}, 0);
tl5.from('#email-2', 1, {opacity: 0, scale: 0, y: height}, 0);
tl5.to('.scroll-icon', 1, {opacity: 0}, 0);

const scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger-1",
    triggerHook: "0"
})
.setPin(".main-background-text")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger-2",
    triggerHook: "0"
})
.setTween(tl2)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger-3",
    triggerHook: "0"
})
.setTween(tl3)
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger-4",
    triggerHook: "0"
})
.setTween(tl4)
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".trigger-5",
    triggerHook: "0"
})
.setTween(tl5)
.addTo(controller);

const timelineScene = new ScrollMagic.Scene({
    triggerElement: ".trigger-date", 
    triggerHook: "0",
    duration: "90%"
})
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
        width: 500,
        height: 500,
        slideLayout: 'contain',
        animation: 'slide3D',
        animationCurve: 'ease',
        animationDuration: 1600,
        animationInterval: 1500,
        slideClass: 'jR3DCarouselCustomSlide',
        autoplay: true
    });
});




