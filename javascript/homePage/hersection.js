//Hero section starts from here............
const slider = document.querySelector('.hero-section')
const nextBtn = document.querySelector('.right-btn')
const prevBtn = document.querySelector('.left-btn')
const slides = document.querySelectorAll('.hero-box')
const slideIcons = document.querySelectorAll('.hero-dot')
const numberOfSlides = slides.length;
var slideNumber = 0;

nextBtn.addEventListener('click', ()=>{
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    slideIcons.forEach(slideIcon =>{
        slideIcon.classList.remove('active')
    })
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0
    }

    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')

    clearInterval(slideChange)
})

prevBtn.addEventListener('click', ()=>{
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    slideIcons.forEach(slideIcon =>{
        slideIcon.classList.remove('active')
    })

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1
    }
    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')

    clearInterval(slideChange)
})

slideIcons[0].addEventListener('click', ()=>{
    slides[1].classList.remove('active')
    slideIcons[1].classList.remove('active')
    slides[0].classList.add('active')
    slideIcons[0].classList.add('active')
})

slideIcons[1].addEventListener('click', ()=>{
    slides[0].classList.remove('active')
    slideIcons[0].classList.remove('active')
    slides[1].classList.add('active')
    slideIcons[1].classList.add('active')
})



function repeatSlide(){
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
    slideIcons.forEach(slideIcon =>{
        slideIcon.classList.remove('active')
    })
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0
    }

    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')
}

var slideChange = setInterval(repeatSlide, 2000)


//Hero section slide will stop if input is focused
const heroEmailBoxs = document.querySelectorAll('.hero-email-box');
heroEmailBoxs.forEach(heroEmailBox =>{
    heroEmailBox.addEventListener('focus', ()=>{
        heroEmailBox.focus()
        heroEmailBox.value = ''
        clearInterval(slideChange)
    })
})