
// add scroll event for body
// catch navigation element
const navigation = document.querySelector('.navigation');
window.addEventListener('scroll',(e)=>{
    if(document.documentElement.scrollTop > 350){
        navigation.classList.add('shad');
    }else{
        navigation.classList.remove('shad');

    }
})

// on focus increase width of search input
// catch input 
const searchInput = document.querySelector('.nav-header input');
const searchClass = searchInput.parentElement;
// add focus event
searchInput.addEventListener('focus',(e)=>{
    searchClass.style.width = "450px";
});
// add blur event
searchInput.addEventListener('blur',(e)=>{
    searchClass.style.width = "240px";
});
