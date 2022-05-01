import helpers from './view'
import '../assets/styles/style.css';
import img1 from '../assets/img/img1.jpg';
import '../assets/styles/style.scss';

const imgPng = require('../assets/img/start-screen-puppy.png');
console.log(imgPng);
const { createImg, createDiv } = helpers;

const wrapper = document.getElementById('wrapper');
console.log('hi');

createImg(img1, wrapper);
createImg(imgPng, wrapper);
createDiv(wrapper);