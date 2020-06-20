// import modules
import {addEvent} from './Functions';

// select elements
const labels = document.querySelectorAll('.checkout-details .payment-options label');

// checkout module
export default function RadioSelect(){
    labels.forEach((label)=>{
        addEvent(label,'click',(event)=>{
            console.log('good event click');
            
        })
    })
}
