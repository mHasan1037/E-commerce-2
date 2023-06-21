export function bestSellsDisplay(quickViewFunc){
    fetch('../json/products.json')
    .then(res => res.json())
    .then(data =>{
        let selectedProduct = data.slice(20, 50)
        let dailySlides = document.querySelector('.daily-slides')

        for(let product of selectedProduct){
            const {special, frontPic, backPic, type, name, rating, provider, newPrice, prevPrice, id} = product;

            const bestProductDiv = document.createElement('div')
            bestProductDiv.classList.add('best-product-div')
            bestProductDiv.id = id
            bestProductDiv.innerHTML = `
                <span class="upper-top ${special === `-14%` ? `orange` : special.toLowerCase()}">${special}</span>
                <a href="#/" class="popular-img-box">
                    <img src=${frontPic} class="popular-front-img">
                    <img src=${backPic} class="popular-back-img">
                </a>
                <div class="popular-hidden-box">
                    <a href="#/" class="popular-hidden-element">
                        <i class="fa-regular fa-heart"></i>
                        <span class="popular-tooltip">Add to Wishlist</span>
                        <span class="popular-tooltip-triangle"></span>
                    </a> 
                    <a href="#/" class="popular-hidden-element">
                        <i class="fa-solid fa-code-compare"></i>
                        <span class="popular-tooltip">Compare</span>
                        <span class="popular-tooltip-triangle"></span>
                    </a>    
                    <span class="popular-hidden-element quice-view">
                        <i class="fa-regular fa-eye"></i>
                        <span class="popular-tooltip">Quick View</span>
                        <span class="popular-tooltip-triangle"></span>
                    </span>  
                </div>
                <div><a href="#/" class="popular-inner-category">${type}</a></div>
                <a href="#/" class="popular-product-title">${name}</a>
                <div class="popular-rating-box">
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </span>
                </div>

                <div class="popular-price-box">
                    <span class="popular-main-price">${newPrice}</span>
                    <span class="popular-prev-price">${prevPrice}</span>
                </div>
                <progress class="best-sell-progress-bar" value="52" max="100"></progress>
                <div class="best-sold-quantity">
                    Sold: 90/120
                </div>

                <a href="#/" class="best-add-cart">
                    <i class="fa-solid fa-cart-shopping"></i> Add To Cart
                </a>
            `
        dailySlides.appendChild(bestProductDiv)
        }


        const quiceView = document.querySelectorAll('.quice-view')

        quiceView.forEach((view)=>{
            view.addEventListener('click', ()=>{
                const target = view.parentElement.parentElement.id
                //product id is sent to quickView.js and there targeted product will be fetched from the json file
                quickViewFunc(target)
            })
        })

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

    })
}