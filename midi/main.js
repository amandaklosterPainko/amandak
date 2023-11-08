function tocasomPom(){
    document.querySelector('#som_tecla_pom').play()
}

document.querySelector('.tecla_pom').onclick = tocasomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocasomPom

let contador = 0;
// Estrutura de repetição - Enquanto
while(contador <8) {}

