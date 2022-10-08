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

//feature section slider starts from here......

const featureContainers = [...document.querySelectorAll('.feature-boxes')];
const featureBox = document.querySelector('.feature-box');
const nxtBtn = document.getElementById('feature-right-btn');
const preBtn = document.getElementById('feature-left-btn');

featureContainers.forEach((item, i)=>{
    let containerDimensions = featureBox.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn.addEventListener('click', ()=>{
        item.scrollLeft += containerWidth
    })

    preBtn.addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth
    })
})


const featureBoxs = document.querySelectorAll('.feature-box')
const bigFeatureBoxs = document.querySelectorAll('.big-feature-box');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    const triggerBottom = window.innerHeight / 100 * 99.9
    
    featureBoxs.forEach((featureBox, idx) =>{
        const boxTop = featureBox.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            featureBox.classList.add('animation')
            featureBox.style.animationDelay = `${idx * 50}ms`
        }else{
            featureBox.classList.remove('animation')
        }
    })


    bigFeatureBoxs.forEach((bigFeatureBox, idx)=>{
        const boxTop = bigFeatureBox.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            bigFeatureBox.classList.add('animation')
            bigFeatureBox.style.animationDelay = `${idx * 150}ms`
        }else{
            bigFeatureBox.classList.remove('animation')
        }
    })
}


// popular products section start from here.........

const popularProductDivs = document.querySelectorAll('.popular-product-div');
const popularHiddenBoxs = document.querySelectorAll('.popular-hidden-box');

popularProductDivs.forEach((popularProductDiv, idx) =>{
    popularProductDiv.addEventListener('mouseover', ()=>{
        const popularFrontImg = popularProductDiv.querySelector('.popular-front-img');
        const popularBackImg = popularProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'none'
        popularBackImg.style.display = 'block'
    })
    popularProductDiv.addEventListener('mouseleave', ()=>{
        const popularFrontImg = popularProductDiv.querySelector('.popular-front-img');
        const popularBackImg = popularProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'block'
        popularBackImg.style.display = 'none'
        popularHiddenBoxs[idx].style.display = 'none'
    })
})

const popularImgBoxs = document.querySelectorAll('.popular-img-box');

popularImgBoxs.forEach((popularImgBox, idx) =>{
    popularImgBox.addEventListener('mouseover', ()=>{
        popularHiddenBoxs[idx].style.display = 'block'   
    })

})






