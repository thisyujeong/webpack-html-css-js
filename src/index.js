import { hello } from './util';
import './style.css';
import './header.css';
import logo from './images/image.png';

const text = hello('<h1>hello webpack</h1>');
const img = `<img src="${logo}" alg="apple wallpaper" width="500"/>`;

document.getElementById('root').innerHTML = text + img;
