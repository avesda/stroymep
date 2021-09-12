var menu_open = False;

function ToggleBurger(x) {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');
    const nav_right = document.querySelector('.nav-right');
    const burger = document.querySelector('.burger');
    
    if(!menu_open)
    {
        line1.classList.add('change');
        line2.classList.add('change');
        line3.classList.add('change');
        nav_right.classList.add('open');
        menu_open=true;
    }
    else
    {
        line1.classList.remove('change');
        line2.classList.remove('change');
        line3.classList.remove('change');
        nav_right.classList.remove('open');
        menu_open=false;
    }
}