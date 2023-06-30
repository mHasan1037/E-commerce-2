import { productAddedNotification } from './productAddNotification.js'

export function quickViewFunc(target){
    console.log(target)
    fetch(`json/products.json`)
    .then((res)=> res.json())
    .then((datas)=> 
       getDataHere(datas, target)
    )
}


const qkViewModalContainerBody = document.querySelector('.qkView-modal-container-body')

function getDataHere(datas, target){
   const filteredData = datas.filter(data =>{
        return data.id == target
     })

     const {name, type, rating, newPrice, prevPrice, frontPic, backPic} = filteredData[0]

     qkViewModalContainerBody.innerHTML = '';

     const qkViewModalContainer = document.createElement('div')
     qkViewModalContainer.classList.add('qkView-modal-container')

     qkViewModalContainerBody.classList.add('show')
     qkViewModalContainer.innerHTML = `
            <i class="fa-solid fa-xmark qkView-modal-close"></i>
            <div class="qkView-product-box">
                <img src=${frontPic} class="quickPic"/>
                <div class="modal_product_des">
                    <h2 id='qk-proName'>${name}</h2>
                    <p>${type}</p>
                    <p>Description:- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p>Rating: ${rating}</p>
                    <div style="display: flex; gap: 20px;">
                        <p>Previous price: <span>${prevPrice}</span></p>
                        <p>New price: <span id="qk-proPrice">${newPrice}</span></p>
                    </div>
                    <button class="popular-add-btn">Add to cart</button>
                </div>
            </div>
     `

     qkViewModalContainerBody.appendChild(qkViewModalContainer)

     const quickPic = document.querySelector('.quickPic')

     quickPic.addEventListener('mouseover', ()=> quickPic.src = backPic)
     quickPic.addEventListener('mouseout', ()=> quickPic.src = frontPic)
     
     const qkViewModalClose = document.querySelector('.qkView-modal-close')
     qkViewModalClose.addEventListener('click', ()=> {
        qkViewModalContainerBody.classList.remove('show')
     })


     const addButtons = document.querySelector('.popular-add-btn')
     addButtons.addEventListener('click', ()=>{
        const qkViewDiv = addButtons.closest('.qkView-product-box')
        const proImgStr = qkViewDiv.querySelector('.quickPic').src
        const proName = qkViewDiv.querySelector('#qk-proName').innerText
        const proPrice = qkViewDiv.querySelector('#qk-proPrice').innerText
        const proId = new Date().getTime().toString()

        const proAddToCart = {
            img : proImgStr,
            name: proName,
            price: proPrice,
            id: proId
        }

        window.parent.changeCartList()

        const itemsToStore = (()=>{
            const itemsValue = localStorage.getItem('proAddToCart')
            return itemsValue === null ? [] : JSON.parse(itemsValue)
        })()

        itemsToStore.push(proAddToCart)

        localStorage.setItem('proAddToCart', JSON.stringify(itemsToStore))

        productAddedNotification(proName)
     })
}



