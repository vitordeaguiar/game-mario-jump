const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.gameOver');
const restart = document.querySelector('.restart')

// criando a função pulo do mario
const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
}

// não exibindo no display o game over e restart
const hideGameOver = () => {
    gameOver.style.display = 'none';
    restart.style.display = 'none';
}


const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        // parar a animação do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // parar a animação do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // trocando a imagemdo mario
        mario.src = '../images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // removendo o jump do mario pós game over
        mario.classList.remove('jump');

        // trazendo a escrita game over
        gameOver.style.display = 'block';

        // trazendo a escrita restart
        restart.style.display = 'block';

        clearInterval(loop);
        console.log(contador);
    }    
    
}, 10);

const restarGaming = ()=> {
    location.reload();
}

// faz com que a função jump seja acionada pela tecla "space"
document.addEventListener('keydown', (event) => {
    if(event.which == 32){
     jump();
   }
});

//click restart
restart.addEventListener('click',restarGaming);

// chama a função over quando se inicia a tela
window.onload = hideGameOver;


