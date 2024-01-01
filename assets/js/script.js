// DISABLE SCROLL HERO/HOME
const root_element = document.querySelector(":root");
function disbale_scroll(){
    scroll_top = (window.pageYOffset) || document.documentElement.scroll_top;
    scroll_left = (window.pageXOffset) || document.documentElement.scroll_left;

    window.onscroll = function(){
        window.scrollTo(scroll_top, scroll_left);
    }

    root_element.style.scrollBehavior ="auto";
}

function enable_scroll(){
    window.onscroll = function(){ }
    root_element.style.scrollBehavior ="smooth";
    localStorage.setItem('opened', 'true');
}

if(!localStorage.getItem('opened')){
    disbale_scroll();
}
