const wishElement = document.querySelector('nav .user .like .no-of-items');
const cartElement = document.querySelector('nav .user .cart .no-of-items');
export default function CheckLocal(){
    if(localStorage.getItem('cart')===null){
        cartElement.innerHTML = 0;
    }else{
        cartElement.innerHTML = localStorage.getItem('cart');
    }
    
    if(localStorage.getItem('wish')===null){
        wishElement.innerHTML = 0;
    }else{
        wishElement.innerHTML = localStorage.getItem('wish');
    }
}