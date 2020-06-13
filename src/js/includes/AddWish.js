export default class AddWish{
    constructor(){
        this.wishElement = document.querySelector('nav .user .like .no-of-items');
    }
    increase(){
        this.wishElement.textContent ++;
    }
    decrease(){
        this.wishElement.textContent --;
    }
    addLocal(){
        localStorage.setItem('wish',this.wishElement.textContent);
    }
    removeLocal(){
        localStorage.removeItem('wish');
    }

}