

//adding an event to wait till window completes loading
window.onload = function() {

    //on init the navbar elements are white
    document.querySelector('.navbar .navbar-brand span').style.color = 'white';
    document.getElementsByClassName('first-line')[0].style.backgroundColor = 'white';
    document.getElementsByClassName('second-line')[0].style.backgroundColor = 'white';

    //the timeline from tweenmax
    tw = new TimelineMax();

    TweenMax.from('#heading', 2, { css: {
        y: -100,
        autoAlpha: 0,
        ease: Expo.easeOut
    }})

    tw
        .from('.my-container h1', 2, { css: {
            delay: .5,
            x: -200,
            autoAlpha: 0,
            ease: Expo.easeOut
        }})
        .add('my-label')
        .from('#sub-heading', 1.5, { css: {
            x: 200,
            autoAlpha: 0,
            ease: Expo.easeOut
        }}, 'my-label-=0.9')
        .from('.header-button', 2.5, {css: {
            autoAlpha: 0,
            ease: Expo.easeOut
        }}, 'my-label+=0.5');


    let doc = document.documentElement;
    let navbar_element = document.getElementsByTagName('nav')[0];

    //scroll event
    window.onscroll = function() {

        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        if ((top+40) > window.innerHeight) {
            document.querySelector('.navbar .navbar-brand span').style.color = 'black';
            document.getElementsByClassName('first-line')[0].style.backgroundColor = 'black';
            document.getElementsByClassName('second-line')[0].style.backgroundColor = 'black';
        } else {
            document.querySelector('.navbar .navbar-brand span').style.color = 'white';
            document.getElementsByClassName('first-line')[0].style.backgroundColor = 'white';
            document.getElementsByClassName('second-line')[0].style.backgroundColor = 'white';
        }

    }

};

//use the sal module
sal();

//for the slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

    // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1} 
    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    let currentSlide = slides[slideIndex-1];
    currentSlide.style.display = "flex";
    TweenMax.from(currentSlide, 1.5, {css: {
        autoAlpha: 0,
        scale: 0.6,
        ease: Power2.easeOut
    }});

    dots[slideIndex-1].className += " active";
}

var isClicked = false;

var more_info = document.querySelector('.more-information');
var item = document.querySelector('div.my-div-animate');

//add handles to the buttons from the info section
const info_buttons = document.getElementsByClassName('info-button');

for(let i=0; i<info_buttons.length; i++) {
    info_buttons[i].addEventListener('click', function() {
        isClicked = false;
        document.querySelector('.navbar .navbar-brand span').style.color = 'black';
        document.getElementsByClassName('first-line')[0].style.backgroundColor = 'black';
        document.getElementsByClassName('second-line')[0].style.backgroundColor = 'black';
        document.querySelector('div.my-div-animate').className = "animate-me my-div-animate";
        more_info.style.display = 'none';
    })
}

//var more_info_container = document.querySelector('.more-information .container');

item.addEventListener('click', function() {
    
    if (isClicked) {
        document.querySelector('.navbar .navbar-brand span').style.color = 'black';
        document.getElementsByClassName('first-line')[0].style.backgroundColor = 'black';
        document.getElementsByClassName('second-line')[0].style.backgroundColor = 'black';
        this.className = "animate-me my-div-animate";
        more_info.style.display = 'none';

    } else {
        document.querySelector('.navbar .navbar-brand span').style.color = '#fff';
        document.getElementsByClassName('first-line')[0].style.backgroundColor = '#fff';
        document.getElementsByClassName('second-line')[0].style.backgroundColor = '#fff';
        this.className = "my-div-animate animate-me-click";
        more_info.style.display = 'flex';
        TweenMax.from(more_info, 1, {
            css: {
                y: -1000, 
            },
            ease: Bounce.easeOut
        })
    }

    isClicked = !isClicked;
})

//working with the pie charts
var ctx_frontEnd = document.getElementById('canvasFront').getContext('2d');
var ctx_backEnd = document.getElementById('canvasBack').getContext('2d');

//for the front end pie chart
data = {
    datasets: [{
        data: [70, 30],
        backgroundColor: [
            'red',
            'yellow'
        ]
    }],

    labels: [
        'Angular',
        'Javascript'
    ]
};

var myDoughnutChart = new Chart(ctx_frontEnd, {
    type: 'doughnut',
    data: data
});

//for the back end pie chart
data = {
    datasets: [{
        data: [66, 34],
        backgroundColor: [
            'orange',
            'green'
        ]
    }],

    labels: [
        'Serverless (firebase, AWS, GCP)',
        'Implemented server (Node, databases)'
    ]
}

var backEndChart = new Chart(ctx_backEnd, {
    type: 'doughnut',
    data: data
})
