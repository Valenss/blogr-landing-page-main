const menu = document.getElementById('menu');
const nav = document.getElementById('nav-list');
const cross = document.getElementById('cross');
function showMenuMobile(){
    menu.addEventListener('click', () =>{
        nav.classList.toggle('nav-list-active')
        menu.classList.toggle('cross')
        cross.classList.toggle('cross-active')
    })

    cross.addEventListener('click', ()=>{
        nav.classList.toggle('nav-list-active')
        cross.classList.toggle('cross-active')
        menu.classList.toggle('cross')
    })
}

showMenuMobile();



const link1 = document.getElementById('dropdown-link1');
const link2 = document.getElementById('dropdown-link2');
const link3 = document.getElementById('dropdown-link3');

const dropwdownList1 = document.getElementById('dropwdown-list1');
const dropwdownList2 = document.getElementById('dropwdown-list2');
const dropwdownList3 = document.getElementById('dropwdown-list3');



function showDropdown(){
    link1.addEventListener('click', () =>{
        dropwdownList1.classList.toggle('dropwdown-list-active')
    })
    link2.addEventListener('click', () =>{
        dropwdownList2.classList.toggle('dropwdown-list-active')
    })
    link3.addEventListener('click', () =>{
        dropwdownList3.classList.toggle('dropwdown-list-active')
    })
}

showDropdown();
