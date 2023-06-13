//this file makes the order of a product. if you click the "add" button this file will work
setTimeout(()=>{
    const orderBtns = document.querySelectorAll('.popular-add-btn')

    orderBtns.forEach(orderBtn =>{
        orderBtn.addEventListener('click', ()=>{
            const productInfo = orderBtn.closest('.popular-product-div')
            const proImgStr = productInfo.querySelector('.popular-front-img').src
            const proName = productInfo.querySelector('.popular-product-title').innerText
            const proPrice = productInfo.querySelector('.pro-sale-price').innerText
            const proId = new Date().getTime().toString()
           
            const proAddToCart = {
                img : proImgStr,
                name: proName,
                price: proPrice,
                id: proId
            }

            let cart = JSON.parse(localStorage.getItem('proAddToCart')) || []
            cart.push(proAddToCart)
            localStorage.setItem('proAddToCart', JSON.stringify(cart))

            const notification = document.querySelector('.notification') 
            notification.style.display ="block"

            setTimeout(()=>{
                notification.style.display ="none"
            }, 2000)
            
        })
    })
}, 1000)

