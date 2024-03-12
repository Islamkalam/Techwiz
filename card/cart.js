var cart=document.getElementById('cart')
var cross=document.getElementById('cross')
var cartShow=document.getElementById('cart-show')
var add=document.getElementById('add')
var searchIcon=document.getElementById('search-icon')

searchIcon.addEventListener('click',function(){
    var searchIcon2=document.getElementById('search-item')
    if(searchIcon2.style.display=="none"){
        searchIcon2.style.display="block"
    }else{
        searchIcon2.style.display="none"
    }
        
    
})
cart.addEventListener("click",function(){
        cartShow.style.display="block"
})
cross.addEventListener("click",function(){
        cartShow.style.display="none"
})
var arr = [];
var totalPrice = 0 ;
function getValue(e) {
    document.getElementById("add").innerHTML = ""
    totalPrice = 0;
    var elm=e.target
  
    var elmParent=elm.parentElement
    var elmParent2=elmParent.parentElement
   
    var firstChild=elmParent2.firstElementChild
    var imgSrc=firstChild.getAttribute('src')
   
    var secondChild=firstChild.nextElementSibling
    var secChild2=secondChild.firstElementChild
    var text=secChild2.innerText
    var price = secChild2.nextElementSibling.firstElementChild.innerHTML

    var obj = {
        src: imgSrc,
        title: text,
        price: price,
    }

    arr.push(obj)

    arr.forEach(cart_creator)

}

function remove(i){
    document.getElementById("add").innerHTML = ""
    totalPrice = 0;
    arr.splice(i,1);
    arr.forEach(cart_creator_minus)
}

function cart_creator(i, index){
    document.getElementById("add").innerHTML += `
    <li style="margin-bottom: 5px;">
        <img src=" ${i.src}" alt="">
        <div class="detal">
            <p>${i.title}</p>
            <span>$ ${i.price}</span>
        </div>
        <div class="cross2">
            <i class="fa fa-times" id="delete" aria-hidden="true" onclick="remove(${index})"></i>
        </div>
    </li>
    `

    totalPrice = totalPrice + Number(i.price) ;

    document.getElementById("totalPrice").innerHTML = totalPrice

}
function cart_creator_minus(i, index){
    document.getElementById("add").innerHTML += `
    <li style="margin-bottom: 5px;">
        <img src=" ${i.src}" alt="">
        <div class="detal">
            <p>${i.title}</p>
            <span>$ ${i.price}</span>
        </div>
        <div class="cross2">
            <i class="fa fa-times" id="delete" aria-hidden="true" onclick="remove(${index})"></i>
        </div>
    </li>
    `

    totalPrice = totalPrice - Number(i.price) ;

    document.getElementById("totalPrice").innerHTML = Math.abs(totalPrice)

}

function buy(){
 
    arr = []
    totalPrice = 0;
    document.getElementById("add").innerHTML =""
    document.getElementById("totalPrice").innerHTML = Math.abs(totalPrice)
}

//FOR SEARCH OF PRODUCTS 

function search(){
    var searchbox=document.getElementById('search-item').value.toUpperCase()
    var storeitem=document.getElementById('products-list')
    var products=document.getElementsByClassName('products')
    var pname=storeitem.getElementsByTagName('h1')

    for (let i = 0; i < pname.length; i++) {
        let match=products[i].getElementsByTagName('h1')[0]
        
        if(match){
            let textvalue=match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) >-1){
                products[i].style.display="";
            }else{
                products[i].style.display="none";
            }
        }
    }
}