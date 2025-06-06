import { generateHTML } from "./appendtoDIV#content";
import "./styles.css";
import { generateMenu } from "./button links/menu.js";

generateHTML()

let menu = document.querySelector('.menu');
let about = document.querySelector('.about');



menu.addEventListener('click', () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''
    generateMenu();
})






