import {addEvent} from './Functions.js';
function Scrollup(){
    // view scroll up button when scroll down
    // catch scrollup button
    const scrollBtn = document.querySelector('#scrollup');
    // add scroll event using addEvent function
    addEvent(window,'scroll',(event)=>{
        if(document.documentElement.scrollTop > 350 || document.body.scrollTop > 350){
            scrollBtn.classList.add('view');
        }else{
            scrollBtn.classList.remove('view');
        }
    })
    
    let scroll = new SmoothScroll('#scrollup', {
        speed: 600
    });
}
export default Scrollup;

