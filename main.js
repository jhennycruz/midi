alert('ola mundo');
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(selectorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('elemento não encontrado');
        console.long('Elemento não encontrado ou seletor inválido');
    
    }
}

const listaDeteclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTlecas[contador];
    
}
