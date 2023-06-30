import {productAddedNotification} from './productAddNotification.js'

export function productAddCart(){
    const popularAddBtns = document.querySelectorAll('.popular-add-btn')
        
    popularAddBtns.forEach((button)=>{
        button.addEventListener('click', ()=>{
            const productInfo = button.closest('.popular-product-div')
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


            window.parent.changeCartList()

            const itemsToStore = (() =>{
                const itemsValue = localStorage.getItem('proAddToCart')
                return itemsValue === null ? [] : JSON.parse(itemsValue)
            })()

            itemsToStore.push(proAddToCart)

            localStorage.setItem('proAddToCart', JSON.stringify(itemsToStore))

            productAddedNotification(proName)

        })
    })
}

