// add scroll event for body
// catch navigation element
const navigation = document.querySelector('.navigation');
window.addEventListener('scroll',(e)=>{
    if(document.documentElement.scrollTop > 80){
        navigation.classList.add('shad');
    }else{
        navigation.classList.remove('shad');

    }
})
