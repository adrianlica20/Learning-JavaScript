const ball = document.querySelector('.ball');

window.addEventListener('keydown', e => {
    switch(e.code){
        case "ArrowRight": ball.classList.add('move-right'), ball.classList.remove('move-left');
        break;
        case "ArrowLeft": ball.classList.add('move-left'), ball.classList.remove('move-right');
        break;
        case "ArrowDown": ball.classList.add('move-down'), ball.classList.remove('move-up');
        break;
        case "ArrowUp": ball.classList.add('move-up'), ball.classList.remove('move-down');
        break;
    }
})