import spaghettiImage from './images/fancy_spaghetti.avif'

export const Display_HomePage = () =>{
    let body = document.querySelector('body');

    let title_div = document.createElement('div');
    let restaurant_name = document.createElement('h1');

    restaurant_name.innerHTML = 'Pinnacle Pasta';
    title_div.appendChild(restaurant_name);
    title_div.classList.add('title');
    body.appendChild(title_div);

    let image_div = document.createElement('div');
    let home_image = document.createElement('img');

    home_image.src = spaghettiImage;
    image_div.appendChild(home_image);
    image_div.classList.add('image-holder');
    body.appendChild(image_div);

    let word_div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    p1.innerHTML = "Welcome to our wonderful restaurant, renown throughout Italy and the world for its spaghetti! Located in Phoenix, Arizona.";
    p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta totam suscipit quas aspernatur. Eos ex quo soluta alias iste accusantium dolorum porro, dolore molestiae temporibus odio facere natus at consequatur?";

    word_div.appendChild(p1);
    word_div.appendChild(p2);
    word_div.classList.add('words');
    body.appendChild(word_div);
};