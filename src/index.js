import style from './style.css';

const arr = [1,2,3],
    codeESNext = () =>console.log(...arr, 4,5,6);

console.log("Hola mundo sin configuración con Webpack")

codeESNext();