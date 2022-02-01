const input = document.querySelector("#mensaje");
const output = document.querySelector("#resultado");

const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const botonEscuchar = document.querySelector("#escuchar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonEscuchar.onclick = escuchar;

function encriptar() {
    var textoIngresado = input.value.toLowerCase();
    var textoNuevo = textoIngresado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    output.value = textoNuevo;
    
}
function desencriptar() {
    var textoIngresado = input.value;
    var textoNuevo = textoIngresado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    output.value = textoNuevo;
   

}

function copiar(){
    textoNuevo = output.value;
    navigator.clipboard.writeText(textoNuevo);
    input.value = ""; /*esto es para que cuando presiono copiar quede limpio el input*/
    input.focus(); /*esto es para que cuando presiono copiar el cursor se ponga en el input*/ 
}
function escuchar(){
    textoNuevo = output.value;
    let msj = new SpeechSynthesisUtterance();
    msj.text = textoNuevo;
    msj.lang = "es-Es";
    window.speechSynthesis.speak(msj);
    input.value = ""; /*esto es para que cuando presiono escuchar quede limpio el input*/
}


