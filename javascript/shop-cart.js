const cartContainer = document.querySelector('.cart-container')
const localStore = JSON.parse(localStorage.getItem('proAddToCart'))

if(localStore.length === 0){
    cartContainer.innerHTML = ""
    const cartBox = document.createElement('div')
    cartBox.classList.add('cartBox')
    cartBox.innerHTML = `
       <h1>No Product In The Cart</h1>
       <p>Go to the <a href="shop.html">shop page</a>?</p>
    `
    cartContainer.appendChild(cartBox)
}else{
    onUpdateCart()
}

function onUpdateCart(){
    cartContainer.innerHTML = "hello world"
}



