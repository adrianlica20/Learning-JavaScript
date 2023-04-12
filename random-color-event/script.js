const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const body = document.querySelector('body');
const spans = document.querySelectorAll('span');

btn.addEventListener('click', () => {
    let r = randColor();
    let g = randColor();
    let b = randColor();

    let newColor = `rgb(${r}, ${g}, ${b})`;

    if(r < 150 && g < 150 && b < 150){
        h1.style.color = 'white';
        btn.style.color = 'white';
        btn.style.border = '2px solid white';
    } else {
    h1.style.color = 'black';
    btn.style.color = 'black';
        btn.style.border = '2px solid black';
}

    h1.innerText = newColor;
    body.style.backgroundColor = newColor;
})

function randColor(){
    return Math.floor(Math.random() * 255) + 1;
}