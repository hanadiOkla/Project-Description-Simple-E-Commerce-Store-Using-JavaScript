let productsInCart =  localStorage.getItem('ProductsInCart')  
let allProducts = document.querySelector(".products") 

if( productsInCart ){
    let  item = JSON.parse(productsInCart);
    drawCartProducts(item)
}

function drawCartProducts(products){
    let y = products.map((item) => {
        return `<div class="product_item">
                    <img class="product_item_img" src="${item.ImageUrl}" alt="">
                    <div class="product_item_description">
                        <h2>${item.title}</h2>
                        <p>the mobile from oppo company 6-2022</p>
                        <span> Color :${item.color}</span>
                    </div>
                    <div class="product_item_action">
                        <button class="add_to_cart" onClick="removeFromCart(${item.id})" > Remove From Cart </button>
                    </div>
                </div> 
                `

    })
    allProducts.innerHTML = y;
} 


function removeFromCart(idToRemove) {
    let items = JSON.parse(productsInCart || '[]');

    const updatedProducts = items.filter(item => item.id !== idToRemove);
    cartProducts = updatedProducts;

    localStorage.setItem('ProductsInCart', JSON.stringify(updatedProducts));

    drawCartProducts(updatedProducts);
    setTimeout( () => {
        window.location = "cartproducts.html"
    },1500)


}

