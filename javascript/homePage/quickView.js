export function quickViewFunc(){
    const quiceView = document.querySelectorAll('.quice-view')

    quiceView.forEach((view)=>{
        view.addEventListener('click', ()=>{
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

function getDataHere(datas, target){
   const ans = datas.filter(data =>{
        return data.id == target
     })

     console.log(ans[0])
}


