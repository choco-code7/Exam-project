let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');

show.addEventListener('click', active);

function active(){
    if(input.type === "password"){
        input.type ="text";
        show.style.color ="#1DA1F2";
        show.textContent= "HIDE";
    }else{
            input.type = "password";
            show.textContent= "SHOW";
            show.style.color ="#111";

        }
    }
