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