import './main.css';
import { Display_HomePage } from './homepage';
import { Display_MenuPage } from './menu';

Display_HomePage();


const Clear_DOM = () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
}

let home_button = document.querySelector('#home');
home_button.addEventListener('click', function(){
    Clear_DOM();
    Display_HomePage();
});

let menu_button = document.querySelector('#menu');
menu_button.addEventListener('click', function(){
    Clear_DOM();
    Display_MenuPage();
});