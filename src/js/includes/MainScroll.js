import {addEvent} from './Functions.js';
function MainScroll(){
    // add scroll event for body
    // catch navigation element
    const navigation = document.querySelector('.navigation');
    // add scroll events using addEvent function
    addEvent(window,'scroll',(event)=>{
        if(document.documentElement.scrollTop > 80){
            navigation.classList.add('shad');
        }else{
            navigation.classList.remove('shad');
    
        }
    })
}
export default MainScroll;
