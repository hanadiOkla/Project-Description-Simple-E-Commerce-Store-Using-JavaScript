
// //////////////////////////
 let allProducts = document.querySelector(".products") 
 let products = [
   { 
    id : 1 ,
    title : 'Oppo A60',
    color: 'Blue',
    ImageUrl: "Images/oppo.png"
    },
   { 
    id : 2 ,
    title : 'Iphone 16',
    color: 'Black',
    ImageUrl: "Images/iphone16.png"
    },
   { 
    id : 3 ,
    title : 'Smart Watch',
    color: 'Orange',
    ImageUrl: "Images/whatch.png"
    },
   { 
    id : 4 ,
    title : 'AirPods',
    color: 'white',
    ImageUrl: "Images/airpods.png"
    }
]

function drowItem(){
    let y = products.map((item) => {
        return `<div class="product_item">
                    <img class="product_item_img" src="${item.ImageUrl}" alt="">
                    <div class="product_item_description">
                        <h2>${item.title}</h2>
                        <p>the mobile from oppo company 6-2022</p>
                        <span> Color :${item.color}</span>
                    </div>
                    <div class="product_item_action">
                        <button class="add_to_cart" onClick="addToCart(${item.id})" > Add To Cart </button>
                        <i class="far fa-heart"></i>
                    </div>
                </div> 
                `

    })
    allProducts.innerHTML = y;
} 

drowItem()

let cartProductsDiv = document.querySelector('.carts_products div')
let badge =  document.querySelector('.badge')

// let addedItem = [];

let addedItem = localStorage.getItem('ProductsInCart') ? JSON.parse(localStorage.getItem('ProductsInCart')): [];

if( addedItem != ''){
    addedItem.map( item => {
        cartProductsDiv.innerHTML += `<p> ${item.title}</p>` ;
    })
    badge.style.display = 'flex';
    badge.innerHTML = addedItem.length;  
}


if(localStorage.getItem=("username")){
    function addToCart(id){
        let choosenItem = products.find((item) => item.id === id)
        cartProductsDiv.innerHTML += `<p> ${choosenItem.title}</p>` 

        addedItem = [...addedItem , choosenItem]
        localStorage.setItem('ProductsInCart',JSON.stringify(addedItem))

        let cartProductLength = document.querySelectorAll('.carts_products div p')
        badge.style.display = 'flex';
        badge.innerHTML = cartProductLength.length;      
        
    }
}else{
    window.location = 'login.html'
}




//  //////////////////////////

 let shoppingCartIcon =  document.querySelector('.shopping_cart')
 let cartsProducts = document.querySelector('.carts_products')
 shoppingCartIcon.addEventListener('click',oppencart)
 
function oppencart(){
    if(cartProductsDiv.innerHTML != '' ){
        if(cartsProducts.style.display == 'block' ){
            cartsProducts.style.display = 'none'
        }else{
            cartsProducts.style.display = 'block' 
        }
    }
} 
// //////////////////////////



