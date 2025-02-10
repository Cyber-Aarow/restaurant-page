import leftImage from './images/left_side_restaurant.jpeg';
import rightImage from './images/right_side_restaurant.jpeg';
import meatballsImage from './images/big_meatballs.avif';
import lasagnaImage from './images/lasagna.jpeg';
import penneImage from './images/penne.avif';
import farfalleImage from './images/farfalle.avif';
import burgerImage from './images/burger.jpeg';

export const Display_MenuPage = () =>{
    let menu_holder = document.createElement('div');
    menu_holder.classList.add('menu-holder');

    let left_image = document.createElement('img');
    left_image.src = leftImage;
    let right_image = document.createElement('img');
    right_image.src = rightImage;
    let menu_div = document.createElement('div');

    let meatballs_entree = document.createElement('div');
    let lasagna_entree = document.createElement('div');
    let penne_entree = document.createElement('div');
    let farfalle_entree = document.createElement('div');
    let hamburger_entree = document.createElement('div');

    meatballs_entree.classList.add('entree');
    lasagna_entree.classList.add('entree');
    penne_entree.classList.add('entree');
    farfalle_entree.classList.add('entree');
    hamburger_entree.classList.add('entree');


    let meatballs_word_holder = document.createElement('div');
    let lasagna_word_holder = document.createElement('div');
    let penne_word_holder = document.createElement('div');
    let farfalle_word_holder = document.createElement('div');
    let hamburger_word_holder = document.createElement('div');

    let meatballs_name = document.createElement('h2');
    let lasagna_name = document.createElement('h2');
    let penne_name = document.createElement('h2');
    let farfalle_name = document.createElement('h2');
    let hamburger_name = document.createElement('h2');

    meatballs_name.innerHTML = "Meatball Spaghetti";
    lasagna_name.innerHTML = "Lasagna";
    penne_name.innerHTML = "Penne";
    farfalle_name.innerHTML = "Farfalle";
    hamburger_name.innerHTML = "Hamburger";


    let meatballs_description = document.createElement('p');
    let lasagna_description = document.createElement('p');
    let penne_description = document.createElement('p');
    let farfalle_description = document.createElement('p');
    let hamburger_description = document.createElement('p');

    meatballs_description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi assumenda officiis ratione rerum inventore alias quis ab. In iste aut laborum voluptatum facilis iusto nobis ullam modi explicabo distinctio.";
    lasagna_description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi assumenda officiis ratione rerum inventore alias quis ab. In iste aut laborum voluptatum facilis iusto nobis ullam modi explicabo distinctio.";
    penne_description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi assumenda officiis ratione rerum inventore alias quis ab. In iste aut laborum voluptatum facilis iusto nobis ullam modi explicabo distinctio.";
    farfalle_description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi assumenda officiis ratione rerum inventore alias quis ab. In iste aut laborum voluptatum facilis iusto nobis ullam modi explicabo distinctio.";
    hamburger_description.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quasi assumenda officiis ratione rerum inventore alias quis ab. In iste aut laborum voluptatum facilis iusto nobis ullam modi explicabo distinctio.";


    let meatballs_img = document.createElement('img');
    let lasagna_img = document.createElement('img');
    let penne_img = document.createElement('img');
    let farfalle_img = document.createElement('img');
    let hamburger_img = document.createElement('img');

    meatballs_img.src = meatballsImage;
    lasagna_img.src = lasagnaImage;
    penne_img.src = penneImage;
    farfalle_img.src = farfalleImage;
    hamburger_img.src = hamburgerImage;



    meatballs_word_holder.appendChild(meatballs_name);
    meatballs_word_holder.appendChild(meatballs_description);
    meatballs_entree.appendChild(meatballs_word_holder);
    meatballs_entree.appendChild(meatballs_img);
    
    lasagna_word_holder.appendChild(lasagna_name);
    lasagna_word_holder.appendChild(lasagna_description);
    lasagna_entree.appendChild(lasagna_word_holder);
    lasagna_entree.appendChild(lasagna_img);

    penne_word_holder.appendChild(penne_name);
    penne_word_holder.appendChild(penne_description);
    penne_entree.appendChild(penne_word_holder);
    penne_entree.appendChild(penne_img);

    farfalle_word_holder.appendChild(farfalle_name);
    farfalle_word_holder.appendChild(farfalle_description);
    farfalle_entree.appendChild(farfalle_word_holder);
    farfalle_entree.appendChild(farfalle_img);

    hamburger_word_holder.appendChild(hamburger_name);
    hamburger_word_holder.appendChild(hamburger_description);
    hamburger_entree.appendChild(hamburger_word_holder);
    hamburger_entree.appendChild(hamburger_img);


    menu_div.appendChild(meatballs_entree);
    menu_div.appendChild(lasagna_entree);
    menu_div.appendChild(penne_entree);
    menu_div.appendChild(farfalle_entree);
    menu_div.appendChild(hamburger_entree);
    

    menu_holder.appendChild(left_image);
    menu_holder.appendChild(menu_div);
    menu_holder.appendChild(right_image);

    let content = document.querySelector('#content');
    content.appendChild(menu_holder);
};