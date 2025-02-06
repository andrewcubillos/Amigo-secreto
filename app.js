// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

function sortearAmigo(){
    let amigoRandom = Math.floor(Math.random()*listaAmigos.length);
    console.log(listaAmigos.length);
    asignarTextoElemento('resultado',listaAmigos[amigoRandom]);
    console.log(amigoRandom);
    console.log(listaAmigos[amigoRandom]);

    limpiarLista();
    return;
    
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo.length==0){
        alert("Por Favor ingrese un nombre válido");
    }
    else{
        listaAmigos.push(amigo);
        console.log(amigo);
        console.log(listaAmigos);
        asignarTextoElemento( 'listaAmigos'  ,listaAmigos);
        limpiarInput();
    }
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarLista(){
    asignarTextoElemento('listaAmigos','');
    return;
}

function limpiarInput(){
    document.querySelector('#amigo').value = '';
    return;
}



