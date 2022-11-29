//Slider of welcome nest starts from here.....
//Slider of welcome nest starts from here.....
var welCarousel = document.querySelector('.welcome-carousel')
var welCarouselContent = document.querySelector('.welcome-carousel-content')
var welSlides = document.querySelectorAll('.wel-slide');
var WelArrayOfSlides = Array.prototype.slice.call(welSlides) 
var welCarouselDisplaying;
var welScreenSize;
welSetScreenSize()
var welLengthOfSlide;

function addClone(){
    var lastSlide = welCarouselContent.lastElementChild.cloneNode(true)
    lastSlide.style.left = (-welLengthOfSlide) + "px"
    welCarouselContent.insertBefore(lastSlide, welCarouselContent.firstChild)
}

function removeClone(){
    var firstSlide = welCarouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide)
}

function moveSlidesRight(){
    var slides = document.querySelectorAll('.wel-slide');
    var slidesArray = Array.prototype.slice.call(slides)
    var width = 0;

    slidesArray.forEach(function(el, i){
        el.style.left = width + "px"
        width += welLengthOfSlide
    })
    addClone()
}
moveSlidesRight()

function moveSlidesLeft(){
    var slides = document.querySelectorAll('.wel-slide');
    var slidesArray = Array.prototype.slice.call(slides)
    slidesArray = slidesArray.reverse()
    var maxWidth = (slidesArray.length - 1) * welLengthOfSlide;

    slidesArray.forEach(function(el, i){
        maxWidth -= welLengthOfSlide;
        el.style.left = maxWidth + "px"
    })
}


window.addEventListener('resize', welSetScreenSize)

function welSetScreenSize(){
    if(window.innerWidth >= 500){
        welCarouselDisplaying = 3
    }else if(window.innerWidth >= 300){
        welCarouselDisplaying = 2;
    }else{
        welCarouselDisplaying = 1
    }
    welGetScreenSize()
}

function welGetScreenSize(){
    var slides = document.querySelectorAll('.wel-slide')
    var slidesArray = Array.prototype.slice.call(slides)
    welLengthOfSlide = ( welCarousel.offsetWidth / welCarouselDisplaying);
    var initialWidth = -welLengthOfSlide;
    slidesArray.forEach(function(el){
        el.style.width = welLengthOfSlide + "px";
        el.style.left = initialWidth + "px";
        initialWidth += welLengthOfSlide;
    })
}

var rightNav = document.querySelector('.wel-nav-right');
rightNav.addEventListener('click', moveLeft)

var moving = true;

function moveRight(){
    if(moving){
        moving = false;
        var lastSlide = welCarouselContent.lastElementChild;
        lastSlide.parentNode.removeChild(lastSlide)
        welCarouselContent.insertBefore(lastSlide, welCarouselContent.firstChild)
        removeClone()
        var firstSlide = welCarouselContent.firstElementChild
        firstSlide.addEventListener('transitionend', activateAgain)
        moveSlidesRight()
    }
}

function activateAgain(){
    var firstSlide = welCarouselContent.firstElementChild;
    moving = true;
    firstSlide.removeEventListener('transitionend', activateAgain)
}

var leftNav = document.querySelector('.wel-nav-left');
leftNav.addEventListener('click', moveRight)

function moveLeft(){
    if(moving){
        moving = false;
        removeClone()
        var firstSlide = welCarouselContent.firstElementChild
        firstSlide.addEventListener('transitionend', replaceToEnd)
        moveSlidesLeft()
    }
}

setInterval(moveLeft, 2000)

function replaceToEnd(){
    var firstSlide = welCarouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide)
    welCarouselContent.appendChild(firstSlide)
    firstSlide.style.left = (( WelArrayOfSlides - 1) * welLengthOfSlide) + "px"
    addClone()
    moving = true
    firstSlide.removeEventListener('transitionend', replaceToEnd)
}

//Auto counter on scroll starts from here...
//Auto counter on scroll starts from here...

const section_counter = document.querySelector('.counter-container');
const counters = document.querySelectorAll('.count');

let CounterObserver = new IntersectionObserver((entries, observer)=>{
    let [entry] = entries

    if(!entry.isIntersecting) return;

    counters.forEach((counter, index)=>{
        counter.innerText = ''
        function UpdateCounter(){
            const targetNumber = +counter.getAttribute('data-target');
            const c = +counter.innerText

            const increPerNumber = targetNumber / 200;

            if(c < targetNumber){
                counter.innerText = `${Math.ceil(c + increPerNumber)}` 
                setTimeout(UpdateCounter, 10)
            }else{
                counters.innerText = targetNumber
            }
        }
        UpdateCounter()
    })
    observer.unobserve(entries.target)
}, {
    threshold: 1
})


CounterObserver.observe(section_counter)
