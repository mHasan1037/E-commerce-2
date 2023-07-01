const cartContainer = document.querySelector('.cart-container')
const localStore = JSON.parse(localStorage.getItem('proAddToCart'))

if(localStore.length === 0){
    cartContainer.innerHTML = ""
    const cartBox = document.createElement('div')
    cartBox.classList.add('cartBox')
    cartBox.innerHTML = `
       <h1>No Product In The Cart</h1>
       <p>Go to the <a href="shop.html">shop page</a></p>
       <img style="margin: 20px 0; max-width: 100%" src="img/empty.webp" />
    `
    cartContainer.appendChild(cartBox)
}else{
    onUpdateCart()
}


function onUpdateCart(){
    cartContainer.innerHTML = ""
    const cartBox = document.createElement('div')
    cartBox.classList.add('cartbox-full')

    // Updating products from localStorage to the cart table

    let productRow = "";

    for(let i = 0; i < localStore.length; i++){
        const item = localStore[i]

        productRow += `
        <tr style="text-align: center;">
            <td><input type="checkbox" /></td>
            <td class="cart-product" style="display: flex; align-items: center; text-align: left;">
                <img class="item-img" src=${item.img} />
                <div>
                     <p>${item.name}</p>
                     <p>Rating: (${2 + Math.floor(Math.random() * 4)})</p>
                </div>
            </td>
            <td>
                ${item.price}
            </td>
            <td>
                <input class="cart-quantity" type="number" placeholder="1"/>
            </td>
            <td>
                ${item.price}
            </td>
            <td>
                <i class="fa-solid fa-trash"></i> 
            </td>
        </tr>
        `
    }


    
    
    let totalPrice = localStore.map(obj => parseFloat(obj.price)).reduce((acc, price)=> acc + price, 0)
    totalPrice = Math.ceil(totalPrice)
    let totalTax = Math.ceil((totalPrice / 100 * 5));
    let delivery = parseFloat(20)
    let payable = (totalPrice + totalTax + delivery)


    cartBox.innerHTML = `
       <div class="cart-header">
           <div class="cart-head">
                <h1>Your Cart</h1>
                <p>There are <span style="color: var(--text-green-one); font-weight: bold;">${localStore.length}</span> ${localStore.length === 1 ? 'product' : 'products'} in your cart</p>
           </div>
           <button class="all-cart-clr">
                <i class="fa-solid fa-trash"></i> Clear Cart
           </button>
       </div>

       <table class="cart-table">
          <tr>
              <th></th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
          </tr>
          ${productRow}
       </table>
       <div class="cart-update-continue-btns">
          <button id="continue-shopping"><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button>
          <button><i class="fa-solid fa-rotate"></i> Update Cart</button>
       </div>

       <table class="cart-table-second">
            <tr>
                <th>Total</th>
                <th>VAT</th>
                <th>Shipping</th>
                <th>Payable</th>
            </tr>
            <tr>
                <td>$${totalPrice}</td>
                <td>$${totalTax}</td>
                <td>$${delivery}</td>
                <td>$${payable}</td>
            </tr>
        </table>
        <button class="proceed-btn">Proceed</button>
    `
    cartContainer.appendChild(cartBox)
}


const continueShopping = document.getElementById('continue-shopping')
continueShopping.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})


const proceedBtn = document.querySelector('.proceed-btn')

proceedBtn.addEventListener('click', ()=>{
    const checkOutContainer = document.createElement('div')
    checkOutContainer.classList.add('checkout-container')
    document.querySelector('.cartbox-full').style.display = 'none'

    checkOutContainer.innerHTML = `
      <div class="checkout-section">
        <div class="check-form-container">
            <button class="cart-goBack"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
            <h1>Checkout</h1>
            <hr>

            <form>
                <h2 style="margin-bottom: 10px;">Shipping address</h2>
                <div class="form-controll">
                    <label for="">Name</label>
                    <input type="text" required />
                </div>
                <div class="form-controll">
                        <label for="">Street</label>
                        <input type="text" required />
                    </div>
                <div class="form-controll">
                    <label for="">City</label>
                    <input type="text" required />
                </div>
                <div class="form-controll">
                    <label for="">State</label>
                    <input type="text" required />
                </div>
                <div class="form-controll">
                        <label for="">Zip code</label>
                        <input type="number" required />
                </div>
                <div class="form-controll">
                    <label for="">Country</label>
                    <input type="text" required />
                </div>
                <div class="form-controll">
                        <label for="">Phone</label>
                        <input type="number" required />
                </div>
                <div class="form-controll">
                    <label for="">Email</label>
                    <input type="email" required />
                </div>

                <button class="place-order-btn">Place Order</button>
            </form>
        </div>
        <div class="cart-details">
            
        </div>
      </div>
    `
    cartContainer.appendChild(checkOutContainer)
    window.scrollTo(0,0);

    const cartGoBack = document.querySelector('.cart-goBack')

    cartGoBack.addEventListener('click', ()=>{
        document.querySelector('.checkout-container').style.display = "none"
        document.querySelector('.cartbox-full').style.display = 'block'
    })
})




 







