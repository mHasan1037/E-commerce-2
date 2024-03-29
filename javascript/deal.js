import { quickViewFunc } from './quickView.js'
import { productAddCart } from './productOrder.js';

// main and aside div size is equil by javascript and onscroll main size expand....
    const mainSnackProductHolder = document.getElementById('main-snack-product-holder');
    const snackAside = document.getElementById('snack-aside');

    snackAside.getBoundingClientRect().height;
    mainSnackProductHolder.style.maxHeight = snackAside + "px";

    



// categiries fetched from here.....

fetch("./json/snackCategories.json")
.then(response => response.json())
.then(function(products){
    let snackCategory = document.querySelector('.snack-category-box');
    let out = "";
    for(let product of products){
        out += `
        <a href="#/" class="snack-category">
          <div class="snack-intryo">
            <img src="${product.image}" class="snack-cat-icon" />
            <p id="snack_cat_name">${product.category}</p>
          </div>
          <span>${product.count}</span>
        </a>
        `
    }
    snackCategory.innerHTML = out

   //on click of any category product will be fetched in the fetchDealFunc function
    const allSnacksCategory = document.querySelectorAll('.snack-category')
    allSnacksCategory.forEach((category)=>{
        category.addEventListener('click', ()=>{
           let name = category.querySelector('#snack_cat_name').innerText
           name = name.replace(/\s/g, "")

           fetchDealFunc(quickViewFunc, 0, 20, name)
        })
    })
})




//snack product fetching from products.json.....
let snackProductContainer = document.querySelector('.snack-product-box');

function fetchDealFunc(quickViewFunc, firstProduct = 0, lastProduct = 20, sort = 'none'){
    fetch("./json/products.json")
    .then( res => res.json())
    .then(products =>{
        let proAll = "";

        products = products.slice(firstProduct, lastProduct)

        if(sort === 'lowtohigh'){
            products = products.sort((a, b) => a.newPrice  - b.newPrice)
        }else if(sort === 'hightolow'){
            products = products.sort((a, b) => b.newPrice  - a.newPrice)
        }else if(sort === 'Milks&Dairies'){
            products = products.filter(product => product.type === 'Snack')
        }else if(sort === 'Clothing'){
            products = products.filter(product => product.type === 'Hodo Foods')
        }else if(sort === 'PetFoods'){
            products = products.filter(product => product.type === 'Pet Foods')
        }else if(sort === 'Bakingmeterial'){
            products = products.filter(product => product.type === 'Vegetables')
        }else if(sort === 'FreshFruit'){
            products = products.filter(product => product.type === 'Meats')
        }


        const foundItem = document.getElementById('snack-found-item').querySelector('span')
        foundItem.innerHTML = products.length

        for(let product of products){
          proAll += producthtml(product)
        }

        snackProductContainer.innerHTML = proAll
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

fetchDealFunc(quickViewFunc)

//product html part is here... parameter taken from fetching...
function producthtml(product){
    const {special, frontPic, backPic, type, name, rating, provider, newPrice, prevPrice, id} = product;

    return `
        <div class="popular-product-div display" id=${id}>

            <span class= "upper-top ${special === `-14%` ? `orange` : special.toLowerCase()}">${special}</span>

            <a href="#/" class="popular-img-box">
                <img src="${frontPic}" alt=${name} class="popular-front-img">
                <img src="${backPic}" class="popular-back-img">
            </a>
            <div class="popular-hidden-box">
                <span class="popular-hidden-element">
                    <i class="fa-regular fa-heart"></i>
                    <span class="popular-tooltip">Add to Wishlist</span>
                    <span class="popular-tooltip-triangle"></span>
                </span> 
                <span class="popular-hidden-element">
                    <i class="fa-solid fa-code-compare"></i>
                    <span class="popular-tooltip">Compare</span>
                    <span class="popular-tooltip-triangle"></span>
                </span>    
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
                    <i class="fa-solid fa-cart-shopping"></i> 
                    Add
                </a>
            </div>
    </div>
 `
}


//product sorting html based on number of items and different range..

function prodcutSorting(){
    const snackProductHeader = document.querySelector('.snack-product-header')

    snackProductHeader.innerHTML = `
        <p id="snack-found-item">We found <span></span> items for you!</p>
        <div class="snack-show-options">
            <div class="snack-show">
                <i class="fa-solid fa-eye"></i>
                <p>Show: <span id="snack-item-show">20</span></p>
                <i class="fa-solid fa-angle-down"></i>
                <div class="snack-multiple-options">
                    <div class="snack-item snack-item-count"><i class="fa-solid"></i><span>10</span></div>
                    <div class="snack-item snack-item-count"><i class="fa-solid fa-check"></i><span>20</span></div>
                    <div class="snack-item snack-item-count"><i class="fa-solid"></i><span>30</span></div>
                    <div class="snack-item snack-item-count"><i class="fa-solid"></i><span>40</span></div>
                </div>
            </div>
            <div class="snack-show">
                <i class="fa-solid fa-up-down"></i>
                <p>Sort by: <span id="snack-item-rank">Featured</span></p>
                <i class="fa-solid fa-angle-down"></i>
                <div class="snack-multiple-options">
                    <div class="snack-item snack-item-price"><i class="fa-solid fa-check"></i><span>Featured</span></div>
                    <div class="snack-item snack-item-price"><i class="fa-solid"></i><span>Price: Low to High</span></div>
                    <div class="snack-item snack-item-price"><i class="fa-solid"></i><span>Price: High to Low</span></div>
                </div>
            </div>
        </div>
    `

    //product filter based on amount
    const allCheckedItem = document.querySelectorAll('.snack-item-count .fa-solid')
    const snackItemCount = document.querySelectorAll('.snack-item-count')
    snackItemCount.forEach((snakeItem) =>{
        snakeItem.addEventListener('click', ()=>{
            allCheckedItem.forEach((item) => item.classList.remove('fa-check'))

            const checked = snakeItem.querySelector('.fa-solid')
            checked.classList.add('fa-check')
            let spanIs = snakeItem.querySelector('span').innerText

            const snackItemShow = document.getElementById('snack-item-show')
            snackItemShow.innerText = spanIs

            fetchDealFunc(quickViewFunc, 0, spanIs)
        })
    })



    //product filter based on lower to higher price
    const allPriceFilterOp = document.querySelectorAll('.snack-item-price .fa-solid')
    const snackItemsPrice = document.querySelectorAll('.snack-item-price')
    snackItemsPrice.forEach((snackPrice)=>{
        snackPrice.addEventListener('click', ()=>{
            allPriceFilterOp.forEach((item)=> item.classList.remove('fa-check'))

            const checked = snackPrice.querySelector('.fa-solid')
            checked.classList.add('fa-check')
            let spanIs = snackPrice.querySelector('span').innerText

            const snackItemShow = document.getElementById('snack-item-rank')
            snackItemShow.innerText = spanIs

            let sort = spanIs.replace(/\s/g, "").slice(6).toLowerCase()

            fetchDealFunc(quickViewFunc, 0, 20, sort)
            
        })
    })

}

prodcutSorting()


// product pagination starts from here....

function paginationFunc(){
    let firstProduct = 0;
    let lastProduct = 20;
    let proPerPage = 20
    

    fetch("./json/products.json")
    .then(res => res.json())
    .then(products => {
      
        let totalPage = Math.ceil(products.length / proPerPage)
        const pagination = document.querySelector('.pagination')

        // buttons for pages is created here...
       for(let i = 1; i <= totalPage; i++){
         const button = document.createElement('button')
         button.classList.add('pageButton')
         button.innerHTML = i
         pagination.appendChild(button)
       }


       
        const pageButtons = document.querySelectorAll('.pageButton')
        pageButtons[0].classList.add('active')

        pageButtons.forEach((button, idx) =>{
            button.addEventListener('click', ()=>{
                pageButtons.forEach(button => button.classList.remove('active'))
                button.classList.add('active')

                firstProduct = idx * proPerPage
                lastProduct = firstProduct + 20

                fetchDealFunc(quickViewFunc, firstProduct, lastProduct)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            })
        })

    })
}

paginationFunc()




//Price range code starts from here......

const rangeInput = document.querySelectorAll('.snack-range-input input'),
priceInput = document.querySelectorAll('.snack-price-input input'),
progress = document.querySelector('.snack-price-slider .snack-price-progress');

let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 10000){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    })
})

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    })
})


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

