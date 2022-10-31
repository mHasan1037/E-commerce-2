// categiries fetched from here.....

fetch("./json/snackCategories.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let snackCategory = document.querySelector('.snack-category-box');
    let out = "";
    for(let product of products){
        out += `
        <a href="#/" class="snack-category">
          <div class="snack-intryo">
            <img src="${product.image}" class="snack-cat-icon" />
            <p>${product.category}</p>
          </div>
          <span>${product.count}</span>
        </a>
        `
    }
    snackCategory.innerHTML = out
})


// Category top select options...


const snackItems = document.querySelectorAll('.snack-item-count');
snackItems.forEach((snackItem)=>{
    snackItem.addEventListener('click', ()=>{
        snackItems.forEach(snackItem => snackItem.querySelector('i').classList.remove('fa-check'))
        snackItem.querySelector('.fa-solid').classList.add('fa-check');
        const snackItemShow = document.getElementById('snack-item-show');
        snackItemShow.innerHTML = snackItem.querySelector('span').innerHTML
    })
})

const snackItemsPrice = document.querySelectorAll('.snack-item-price');
snackItemsPrice.forEach((snackItem)=>{
    snackItem.addEventListener('click', ()=>{
        snackItemsPrice.forEach(snackItem => snackItem.querySelector('i').classList.remove('fa-check'))
        snackItem.querySelector('.fa-solid').classList.add('fa-check');
        const snackItemRank = document.getElementById('snack-item-rank');
        snackItemRank.innerHTML = snackItem.querySelector('span').innerHTML
    })
})


//snack product fetching from products.json.....

fetch("./json/products.json")
.then( res => res.json())
.then(products =>{
    let snackProductContainer = document.querySelector('.snack-product-box');
    let proAll = "";

    for(let product of products){
        const {special, frontPic, backPic, type, name, rating, provider, newPrice, prevPrice} = product;
      proAll += `
      

      <div class="popular-product-div display all">
      <span class="upper-top hot">${special}</span>
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
          <a href="#/" class="popular-hidden-element">
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
              <span class="popular-main-price">$${newPrice}</span>
              <span class="popular-prev-price">$${prevPrice}</span>
          </div>
          <a href="#/" class="popular-add-btn">
              <i class="fa-solid fa-cart-shopping"></i> Add
          </a>
      </div>
  </div>

      `
    }

    snackProductContainer.innerHTML = proAll;
})