// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let ListaN = 0;
let i = 0;

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.getElementById("listaAmigos").innerHTML = '';
}

function agregarAmigo() {

    if (document.querySelector('#amigo').value == "") {
        alert('El nombre no puede estar vacío');
        
    }
    else {
        amigos.push(document.querySelector('#amigo').value);
        ListaN ++;

        limpiarCaja();

        for (let i = 0; i < ListaN; i++) {
              console.log(amigos[i]);
              document.getElementById("listaAmigos").innerHTML = (`${document.getElementById("listaAmigos").innerHTML}<li>${amigos[i]}</li>`);
        }   

        
    } 
}

function sorteo(ListaN) {
    return Math.floor(Math.random() * ListaN);
}
    
function sortearAmigo() {
    console.log(sorteo(ListaN));
    document.getElementById("resultado").innerHTML = (`El amigo sorteado es ${amigos[sorteo(ListaN)]}`);
        
}