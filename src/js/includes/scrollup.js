// view scroll up button when scroll down
// catch scrollup button
const scrollBtn = document.querySelector('#scrollup');
// add scroll event

window.onscroll = (event)=>{
    if(document.documentElement.scrollTop > 350 || document.body.scrollTop > 350){
        scrollBtn.classList.add('view');
    }else{
        scrollBtn.classList.remove('view');
    }
}

let scroll = new SmoothScroll('#scrollup', {
    speed: 600
});

