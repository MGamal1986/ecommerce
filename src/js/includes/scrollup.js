// view scroll up button when scroll down
// catch scrollup button
const scrollBtn = document.querySelector('#scrollup');
// add scroll event

window.onscroll = (event)=>{
    if(document.documentElement.scrollTop > 350){
        scrollBtn.classList.add('view');
    }else{
        scrollBtn.classList.remove('view');
    }
}
document.documentElement.classList.add('scroll-smooth');
// add click event on scrollup button
scrollBtn.onclick = (event)=>{
    document.documentElement.scrollTop = 0;
}
