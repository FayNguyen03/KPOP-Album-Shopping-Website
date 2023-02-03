let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || [];//if already have data || if not have data


let generateShop = () => {  //es6 function
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let { id,name,price,desc,img } = x;
        let search = basket.find((x)=> x.id === id) || [];//search specifically for the id and item; if avail on local storage, just get the item and put the item there 
        return ` 
        <div id=product-id-${id} class="item">
            <img width=" 220" src=${img} alt="">
            <div class="detail">
                <h3>${name}</h3>
                <p>${desc}
                </p>
                <div class="price-quantity">
                    <h3>${price}</h3>
                    <div class="buttons">
                        <i onclick="decreasing(${id})" class="bi bi-dash-circle"></i>
                        <div id=${id} class="quantity"> 
                            ${search.item === undefined ? 0 : search.item} 
                        </div> 
                        <i onclick="increasing(${id})" class="bi bi-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>`//sample
    //!Error on line 23
    }).join(" "))//x: targeting all items one by will run four times
    
}; 

generateShop();

let increasing = (id) => {
    let selectedItem = id;//!Check this one
    let search = basket.find((x)=>x.id ===  selectedItem)//Check all the objects one by one
    if(search === undefined){
        basket.push({
            id: selectedItem,
            item:1,
        });
    }
    else{
        search.item +=1;
    }
    
    updating(selectedItem);

    localStorage.setItem("data", JSON.stringify(basket) );//set up a local storage (Application) named data


};

let decreasing = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=>x.id ===  selectedItem)//Check all the objects one by one

    if(search === undefined)//at the beginning, no action when pressing the minus
        return;
    
    else if(search.item === 0)//the moment the thing hits zero
        return;//even if afterwards you click on this, it still unavailable
    else{
        search.item -=1;
    }
    
    updating(selectedItem);

    basket=basket.filter((x) => x.item !== 0);//filter to keep the item above one
    localStorage.setItem("data", JSON.stringify(basket));//set up a local storage named data

};

let updating = (id) => {
    let search= basket.find((x)=>x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y,0);//Make the HTML code change innerHTML
};

calculation();//Everytime the page reloaded, the cartamout remains

