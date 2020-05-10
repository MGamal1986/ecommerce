// // open cart page
// // catch cart element
// const cartElement = document.querySelector('.nav-header .user .cart');
// // catch overlay layer
// const overlay = document.querySelector('nav .overlay');
// // catch cart contianer in overlay layer
// const cartContainer = document.querySelector('nav .cart-container');

// cartElement.addEventListener('click',(event)=>{
//     overlay.classList.add('overhead');
//     setTimeout(()=>{
//         cartContainer.classList.add('appear');
//     },10)
    
// });

// // catch close x in cart container in samll screen
// const cartCloseX = document.querySelector('nav .cart-container .close-x');
// // add click event to close cart pagein samll screen

// cartCloseX.addEventListener('click',(event)=>{
//     cartContainer.classList.remove('appear');
//     setTimeout(()=>{
//         overlay.classList.remove('overhead');
//     },400)
// })

// // add click event on overlay layer
// overlay.addEventListener('click',(event)=>{
//     if(!event.target.closest('.cart-container')){
//         cartContainer.classList.remove('appear');
//         setTimeout(()=>{
//             overlay.classList.remove('overhead');
//         },400)
//     } 
// })


// // remove items from cart
// // catch remove button
// const removeBtn = document.querySelectorAll('.cart-container .cart-items .item .remove i');
// removeBtn.forEach((btn)=>{
//     btn.addEventListener('click',function(event){
//         console.log('good selector');
//         event.target.parentElement.parentElement.remove();
//     })
// })

// // count items in cart
// const cartItems = document.querySelectorAll('nav .cart-container .cart-items .item');
// // after we add event for selecting product we will remove setInterval function
// setInterval(()=>{
//     let cartLength = cartItems.length;
//     if(cartLength >= 6){
//         cartContainer.classList.add('more-6');
//     }
// },300)

// // increment and decrement items in cart
// // catch input field
// const itemInput = document.querySelector('nav .cart-container .item .number');
// // catch button
// const incrementBtn = document.querySelectorAll('nav .cart-container .item .fa-plus');
// const decrementBtn = document.querySelectorAll('nav .cart-container .item .fa-minus');

// // add increment event
// incrementBtn.forEach((btn)=>{
//     btn.addEventListener('click',(event)=>{
//         event.target.previousElementSibling.value++
//     })
// })

// // add decrement event
// decrementBtn.forEach((btn)=>{
//     btn.addEventListener('click',(event)=>{
//         if(event.target.nextElementSibling.value > 0){
//             event.target.nextElementSibling.value--
//         }
//     })
// })

// show cart on click on cart icon
// catch cart icon in navbar
const cartIcon = document.querySelector('.nav-header .user .cart');
// catch cart element
const cartContainer = document.querySelector('nav .cart-container');
cartIcon.addEventListener('click',(event)=>{
    cartContainer.classList.toggle('expand');
})




