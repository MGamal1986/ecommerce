export default class AddCart{
    constructor(){
        this.wishElement = document.querySelector('nav .user .cart .no-of-items');
    }
    increase(){
        this.wishElement.textContent ++;
    }
    decrease(){
        this.wishElement.textContent --;
    }
    addLocal(){
        localStorage.setItem('cart',this.wishElement.textContent);
    }
    removeLocal(){
        localStorage.removeItem('cart');
    }

}