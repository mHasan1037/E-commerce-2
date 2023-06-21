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

            console.log(proAddToCart)

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

const addNotificationStyle = {
    position: 'fixed',
    top: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgb(102, 209, 102)',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '10px',
    zIndex: '100'
}

//notification after adding a product that will pop up on top of the page
function productAddedNotification(proName){
    const addNotification = document.createElement('div')
          for(const style in addNotificationStyle){
            addNotification.style[style] = addNotificationStyle[style]
          }
          addNotification.innerHTML = `${proName} is successfully added. Check cart list!`
          document.body.appendChild(addNotification)

          setTimeout(()=>{
                for(const style in addNotificationStyle){
                    addNotification.style[style] = ''
                }
          }, 2500)
}

