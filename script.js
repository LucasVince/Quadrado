let div = document.querySelector('div');
let color = document.querySelector('#color');
let sizew = document.querySelector('#sizew');
let sizeh = document.querySelector('#sizeh');
let border = document.querySelector('#border');
let bt = document.querySelector('button');

setInterval(() => {
    div.style.backgroundColor = color.value;
    div.style.width = sizew.value;
    div.style.height = sizeh.value;
    div.style.borderRadius = border.value;
}, 1);