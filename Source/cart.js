let label = document.getElementById('label');

let shoppingcart=document.getElementById('shopping-cart');//Gan id shopping-cart vao bien shoppingcart

let basket = JSON.parse(localStorage.getItem("data")) || [];//if already have data || if not have data

let calculation = () => {
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);//Make the HTML code change innerHTML
};

calculation();//The amount the same as the main page

let generateCartItems = () =>{
    if(basket.length !==0){
        return (shoppingcart.innerHTML = basket.map((x)=>{
            return`
            <div class="cart-item">
                Hello
            </div>`
        }));

    }
    else{
        shoppingcart.innerHTML=``;  
        label.innerHTML=` 
        <h2>The Cart Is Empty</h2>
        <a href="index.html">
            <button class="home">Back To Home</button>
        </a>
        `;//Gan html format vao bien label
        
    }

};

generateCartItems();