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

const popularBtns = document.querySelectorAll('.popular-btn');
const popularProductDivs = document.querySelectorAll('.popular-product-div');
const popularHiddenBoxs = document.querySelectorAll('.popular-hidden-box');


//Popular nav button active non-active code goes here
popularBtns.forEach((popularBtn)=>{
    popularBtn.addEventListener('click', ()=>{
        popularBtns.forEach(popularBtn => popularBtn.classList.remove('active'))
        popularBtn.classList.add('active')
    })
})

popularProductDivs.forEach(product =>{
    if(product.classList.contains('display')){
        product.style.display = 'block'
    }else{
        product.style.display = 'none'
    }
})

//popular product filter code....

for(i = 0; i < popularBtns.length; i++){
    popularBtns[i].addEventListener('click', (e)=>{
        e.preventDefault()

        const filter = e.target.dataset.filter

        popularProductDivs.forEach((product) =>{
            if(filter == 'all'){
                if(product.classList.contains('display')){
                    product.style.display = 'block'
                }else{
                    product.style.display = 'none'
                }
            }else{
                if(product.classList.contains(filter)){
                    product.style.display = 'block'
                }else{
                    product.style.display = 'none'
                }
            }
        })
    })
}


popularProductDivs.forEach((popularProductDiv, idx) =>{
    popularProductDiv.addEventListener('mouseover', ()=>{
        const popularFrontImg = popularProductDiv.querySelector('.popular-front-img');
        const popularBackImg = popularProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'none'
        popularBackImg.style.display = 'block'
        popularHiddenBoxs[idx].style.opacity = '1' 
    })
    popularProductDiv.addEventListener('mouseleave', ()=>{
        const popularFrontImg = popularProductDiv.querySelector('.popular-front-img');
        const popularBackImg = popularProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'block'
        popularBackImg.style.display = 'none'
        popularHiddenBoxs[idx].style.opacity = '0'
    })
})

const bestProductDivs = document.querySelectorAll('.best-product-div');
bestProductDivs.forEach((bestProductDiv, idx) =>{
    bestProductDiv.addEventListener('mouseover', ()=>{
        const popularFrontImg = bestProductDiv.querySelector('.popular-front-img');
        const popularBackImg = bestProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'none'
        popularBackImg.style.display = 'block'
        const hiddenBox = bestProductDiv.querySelector('.popular-hidden-box');
        hiddenBox.style.opacity = 1

    })
    bestProductDiv.addEventListener('mouseleave', ()=>{
        const popularFrontImg = bestProductDiv.querySelector('.popular-front-img');
        const popularBackImg = bestProductDiv.querySelector('.popular-back-img');
        popularFrontImg.style.display = 'block'
        popularBackImg.style.display = 'none'
        const hiddenBox = bestProductDiv.querySelector('.popular-hidden-box');
        hiddenBox.style.opacity = 0
    })
})



//Daily Best Sells code goes here........

//Daily Nav active code 
const dailyActive = document.querySelectorAll('.daily-list a');

dailyActive.forEach(active =>{
    active.addEventListener('click', ()=>{
        dailyActive.forEach(active => active.classList.remove('active'))
        active.classList.add('active')
    })
})

//Daily slide code goes here........

const sliderContainer = document.querySelector('.daily-product-carosul');
const slide = document.querySelector('.daily-slides');
const bestNextBtn = document.getElementById('best-next-btn');
const bestPrevBtn = document.getElementById('best-prev-btn');
const interval = 2000;

let BestSlides = document.querySelectorAll('.best-product-div');
let index = 1;
let slideId;


const firstClone = BestSlides[0].cloneNode(true);
const lastClone = BestSlides[BestSlides.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone)
slide.prepend(lastClone)

const slideWidth = BestSlides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () =>{
    slideId = setInterval(()=>{
        moveToNextSlide()
    }, interval);
}

const getSlides = () => BestSlides = document.querySelectorAll('.best-product-div')

slide.addEventListener('transitionend', ()=>{
    BestSlides = getSlides()
    if(BestSlides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(BestSlides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
})


const moveToNextSlide = () =>{
    BestSlides = getSlides()
    if(index >= BestSlides.length - 1) return;
    index++
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s'
}

const moveToPreviousSlide = () =>{
    if(index <= 0) return;
   index--
   slide.style.transform = `translateX(${-slideWidth * index}px)`;
   slide.style.transition = '.7s'
}

sliderContainer.addEventListener('mouseenter', ()=>{
    clearInterval(slideId)
})

sliderContainer.addEventListener('mouseleave', startSlide);

bestNextBtn.addEventListener('click', moveToNextSlide)
bestPrevBtn.addEventListener('click', moveToPreviousSlide)

startSlide()