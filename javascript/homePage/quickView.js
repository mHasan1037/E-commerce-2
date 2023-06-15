export function quickViewFunc(){
    const quiceView = document.querySelectorAll('.quice-view')

    quiceView.forEach((view)=>{
        view.addEventListener('click', ()=>{
            console.log('clicked')
            const target = view.parentElement.parentElement.id
            fetchTarget(target)
        })
    })
}

function fetchTarget(target){
    fetch(`../../json/products.json`)
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
                <div>
                    <h2>${name}</h2>
                    <p>${type}</p>
                    <p>Description:- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p>Rating: ${rating}</p>
                    <div style="display: flex; gap: 20px;">
                        <p>Previous price: <span>${prevPrice}</span></p>
                        <p>New price: <span>${newPrice}</span></p>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
     `

     qkViewModalContainerBody.appendChild(qkViewModalContainer)

     console.log(filteredData[0])

     const quickPic = document.querySelector('.quickPic')

     quickPic.addEventListener('mouseover', ()=> quickPic.src = backPic)
     quickPic.addEventListener('mouseout', ()=> quickPic.src = frontPic)
     
     const qkViewModalClose = document.querySelector('.qkView-modal-close')
     qkViewModalClose.addEventListener('click', ()=> {
        qkViewModalContainerBody.classList.remove('show')
     })
}


