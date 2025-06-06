import { generateHTML } from "./appendtoDIV#content";
import "./styles.css";
import { generateMenu } from "./button links/menu.js";
import { generateAbout } from "./button links/about.js";

document.addEventListener('DOMContentLoaded', () => {
    generateHTML()
})


let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let home = document.querySelector('.home');
const contentDiv = document.querySelector('#content');



menu.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    generateMenu();
})

about.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    generateAbout()
})

home.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    generateHTML();
})







