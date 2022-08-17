
let palabrita;
let cant_errores = 0; //cuantos errores
let cant_aciertos = 0; //cuantas letras acerte

const palabras = [
    'alura',     //0
    'html',      //1
    'ahorcado',  //2
    'oracle',    //3
    'programar', //4
    'javascript', //5
    'ganador',    //6
    'estudiar'    //7

];

const btn = document.getElementById("jugar");
const btn_letras = document.querySelectorAll("#letras button");
const imagen = document.getElementById('imagen');
const term = document.getElementById('terminar');
//Click en iniciar juego
btn.addEventListener('click', iniciar);

  

function iniciar(event) {
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0; //cuantos errores
    cant_aciertos = 0; //cuantas letras acer

    term.addEventListener("click", () => {
        parrafo.innerHTML = "Vuelve a intentarlo";
    });

    const parrafo = id('palabra_a_adivinar');
    

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    const cant_letras = palabrita.length;

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = false;
    }

    for (let i = 0; i < cant_letras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }
}


for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener("click", click_letras);
}
// click en adivinar letras
function click_letras(event) {
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target; //cual de todas las letras, llamo a la funcion
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabrita.toLowerCase(); // .toUpperCase()- mayuscula y minusculas       

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            // la variable i es la posicion de la letra en la plabar
            //que 
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if (acerto == false) {
        cant_errores++;
        const source = `img/img${cant_errores}.png`
        imagen.src = source;
    }

    if (cant_errores == 8) {
        id('resultado').innerHTML = alert("Perdiste, la palabra era " + palabrita);
        game_over();
        

    } else if (cant_aciertos == palabrita.length) {
        id('resultado').innerHTML = alert ("Ganaste, Felicidades!!!");
        game_over();
        
    }
    console.log("la letra" + letra + "en la palabra" + palabra + "¿existe?: " + acerto);

}
//fin del juego
function game_over() {
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = true;
    
    }

    btn.disabled = false;
}


game_over();