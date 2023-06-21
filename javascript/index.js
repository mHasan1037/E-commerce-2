import { quickViewFunc } from './quickView.js'
import { bestSellsDisplay } from './bestSellsDisplay.js'
import { productAddCart } from './productOrder.js';

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
        waveUpAnimation(featureBox, idx, 50)
    })


    bigFeatureBoxs.forEach((bigFeatureBox, idx)=>{
        waveUpAnimation(bigFeatureBox, idx, 150)
    })

    //creating a wave during scroll of the element
    function waveUpAnimation(box, idx, delay){
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('animation')
            box.style.animationDelay = `${idx * delay}ms`
        }else{
            box.classList.remove('animation')
        }
    }
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
for(let i = 0; i < popularBtns.length; i++){
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

        // productNotification()
    })
}

// showing the front and back image of every div on mouseover
popularProductDivs.forEach((popularProductDiv, idx) =>{
    const popularFrontImg = popularProductDiv.querySelector('.popular-front-img');
    const popularBackImg = popularProductDiv.querySelector('.popular-back-img');

    popularProductDiv.addEventListener('mouseover', ()=>{
        popularFrontImg.style.display = 'none'
        popularBackImg.style.display = 'block'
        popularHiddenBoxs[idx].style.opacity = '1' 
    })
    popularProductDiv.addEventListener('mouseleave', ()=>{
        popularFrontImg.style.display = 'block'
        popularBackImg.style.display = 'none'
        popularHiddenBoxs[idx].style.opacity = '0'
    })
})

// showing the front and back image of every div on mouseover
const bestProductDivs = document.querySelectorAll('.best-product-div');
bestProductDivs.forEach((bestProductDiv, idx) =>{
    const popularFrontImg = bestProductDiv.querySelector('.popular-front-img');
    const popularBackImg = bestProductDiv.querySelector('.popular-back-img');
    const hiddenBox = bestProductDiv.querySelector('.popular-hidden-box');

    bestProductDiv.addEventListener('mouseover', ()=>{
        popularFrontImg.style.display = 'none'
        popularBackImg.style.display = 'block'
        hiddenBox.style.opacity = 1

    })
    bestProductDiv.addEventListener('mouseleave', ()=>{
        popularFrontImg.style.display = 'block'
        popularBackImg.style.display = 'none'
        hiddenBox.style.opacity = 0
    })
})




// popular products fetching from json file is here........

let popularProductContainer = document.querySelector('.popular-product-container')

let firstSlice = 0
let lastSlice = 10

let changeFirstSlice = 0
let changeLastSlice = 10

popularBtns.forEach((popularBtn, idx) =>{
    popularBtn.addEventListener('click', ()=>{
      firstSlice = (changeFirstSlice + 10) * idx
      lastSlice = (changeLastSlice * idx) + 10
    
      fetchingProducts(quickViewFunc)
    })
})

function fetchingProducts(quickViewFunc){
    fetch('./json/products.json')
    .then(res => res.json())
    .then(products =>{
    let proAll = " "

    products = products.slice(firstSlice, lastSlice)

    
    for(let product of products){
        const {special, frontPic, backPic, type, name, rating, provider, newPrice, prevPrice, id} = product;

        proAll += `
        
        <div class="popular-product-div display" id=${id}>

            <span class= "upper-top ${special === `-14%` ? `orange` : special.toLowerCase()}">${special}</span>

            <a href="#/" class="popular-img-box">
                <img src="${frontPic}" alt=${name} class="popular-front-img">
                <img src="${backPic}" class="popular-back-img">
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
                <a href="#/" class="popular-hidden-element quice-view">
                    <i class="fa-regular fa-eye"></i>
                    <span class="popular-tooltip">Quick View</span>
                    <span class="popular-tooltip-triangle"></span>
                </a>  
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
                <span class="popular-rating">(${rating})</span>
            </div>
            <div class="popular-com-name">
                By <a href="#/">${provider}</a>
            </div>

            <div class="popular-price-add">
                <div class="popular-price-box">
                    <span class="popular-main-price">$<span class="pro-sale-price">${newPrice}</span></span>
                    <span class="popular-prev-price">$${prevPrice}</span>
                </div>
                <a href="#/" class="popular-add-btn">
                    <i class="fa-solid fa-cart-shopping"></i> Add
                </a>
            </div>
        </div>
        `
    }
    popularProductContainer.innerHTML = proAll

        const quiceView = document.querySelectorAll('.quice-view')

        quiceView.forEach((view)=>{
            view.addEventListener('click', ()=>{
                const target = view.parentElement.parentElement.id
                //product id is sent to quickView.js and there targeted product will be fetched from the json file
                quickViewFunc(target)
            })
        })

    productAddCart()
    })
}

fetchingProducts(quickViewFunc)






//Daily Best Sells code goes here........

//Daily Nav active code 
const dailyActive = document.querySelectorAll('.daily-list a');

dailyActive.forEach(active =>{
    active.addEventListener('click', ()=>{
        dailyActive.forEach(active => active.classList.remove('active'))
        active.classList.add('active')
    })
})

//Daily nav onclick different product will show........
const dailyLists = document.querySelectorAll('.daily-list');
dailyLists.forEach((dailyList, idx) =>{
    dailyList.addEventListener('click', ()=>{
        const checking = dailyList.getAttribute('data-best')
        
        const bestSlidesDivs = document.querySelectorAll('.best-product-div');

        bestSlidesDivs.forEach((bestSlidesDiv, idx)=>{
            if(bestSlidesDiv.classList.contains(checking)){
                bestSlidesDiv.style.display = 'block'
            }else{
                bestSlidesDiv.style.display = 'none'
            }
        })
    })
})

bestSellsDisplay(quickViewFunc)



//Deals of the day goes here countdown code is here.........

const countdown = () =>{
    const now = new Date().getTime();
   
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //First countDown Data goes here
    const countDateOne = new Date('Jan 01, 2024 00:00:00').getTime() 
    const gapOne = countDateOne - now

    const textDayOne = Math.floor(gapOne / day);
    let textHourOne = Math.floor((gapOne % day) / hour);
    let textMinuteOne = Math.floor((gapOne % hour) / minute); 
    let textSecondOne = Math.floor((gapOne % minute) / second); 

    document.querySelector('.days').innerText = textDayOne;
    document.querySelector('.hours').innerText = textHourOne < 10 ? "0" + textHourOne : textHourOne;
    document.querySelector('.mins').innerText = textMinuteOne < 10 ? "0" + textMinuteOne : textMinuteOne;
    document.querySelector('.secs').innerText = textSecondOne < 10 ? "0" + textSecondOne : textSecondOne;


    //Second countDown Data goes here
    const countDateTwo =  new Date('May 01, 2024 18:30:00').getTime() 
    const gapTwo = countDateTwo - now

    const textDayTwo = Math.floor(gapTwo / day);
    let textHourTwo = Math.floor((gapTwo % day) / hour);
    let textMinuteTwo = Math.floor((gapTwo % hour) / minute); 
    let textSecondTwo = Math.floor((gapTwo % minute) / second); 

    document.querySelector('.days2').innerText = textDayTwo;
    document.querySelector('.hours2').innerText = textHourTwo < 10 ? "0" + textHourTwo : textHourTwo;
    document.querySelector('.mins2').innerText = textMinuteTwo < 10 ? "0" + textMinuteTwo : textMinuteTwo;
    document.querySelector('.secs2').innerText = textSecondTwo < 10 ? "0" + textSecondTwo : textSecondTwo;


    //Third countDown Data goes here
    const countDateThree =  new Date('Oct 10, 2024 06:00:00').getTime() 
    const gapThree = countDateThree - now

    const textDayThree = Math.floor(gapThree / day);
    let textHourThree = Math.floor((gapThree % day) / hour);
    let textMinuteThree = Math.floor((gapThree % hour) / minute); 
    let textSecondThree = Math.floor((gapThree % minute) / second);

    document.querySelector('.days3').innerText = textDayThree;
    document.querySelector('.hours3').innerText = textHourThree < 10 ? "0" + textHourThree : textHourThree;
    document.querySelector('.mins3').innerText = textMinuteThree < 10 ? "0" + textMinuteThree : textMinuteThree;
    document.querySelector('.secs3').innerText = textSecondThree < 10 ? "0" + textSecondThree : textSecondThree;


   //Forth countdown Data goes here
   const countDateFour =  new Date('Mar 10, 2024 12:30:00').getTime() 
   const gapFour = countDateFour - now

   const textDayFour = Math.floor(gapFour / day);
   let textHourFour = Math.floor((gapFour % day) / hour);
   let textMinuteFour = Math.floor((gapFour % hour) / minute); 
   let textSecondFour = Math.floor((gapFour % minute) / second);

   document.querySelector('.days4').innerText = textDayFour;
   document.querySelector('.hours4').innerText = textHourFour < 10 ? "0" + textHourFour : textHourFour;
   document.querySelector('.mins4').innerText = textMinuteFour < 10 ? "0" + textMinuteFour : textMinuteFour;
   document.querySelector('.secs4').innerText = textSecondFour < 10 ? "0" + textSecondFour : textSecondFour;
}

setInterval(countdown, 1000)

  //fade in code is here. here all the divs that are floading up will show on scroll one after another.

  const dealBoxes = document.querySelectorAll('.deals-box');
  const differentProductDivs = document.querySelectorAll('.different-product-div');


  showDealBox()

  window.addEventListener('scroll', ()=> showDealBox())

  function showDealBox(){
     const windowHeight = window.innerHeight

     dealBoxes.forEach((box, idx) =>{
        const boxTop = box.getBoundingClientRect().top

        if(windowHeight > boxTop){
            
            box.classList.add('animation')
            box.style.animationDelay = `${idx * 150}ms`
        }else{
            box.classList.remove('show')
            box.classList.remove('animation')
        }
    })

    differentProductDivs.forEach((box, idx) =>{
        const boxTop = box.getBoundingClientRect().top

        if(windowHeight > boxTop){
            
            box.classList.add('animation')
            box.style.animationDelay = `${idx * 150}ms`
        }else{
            box.classList.remove('show')
            box.classList.remove('animation')
        }
    })

  }









