//querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase')

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// enlaces.forEach((a) =>{
//     if(a.href == window.location.href){
//         a.classList.add('enlace__activo');
//     }
// });


//Generar un enlace nuevo
const nav = document.querySelector('.navegacion');
const nuevoEnlace = document.createElement('a');
nuevoEnlace.textContent = 'creado con js';
nuevoEnlace.href = 'https://www.google.com';
nuevoEnlace.target = '_blank';
nuevoEnlace.classList.add("navegacion__enlace");
nav.appendChild(nuevoEnlace);

// //Eventos

// console.log(1);
// window.addEventListener('load', imprimir);

// window.onload = () =>{
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', () =>{//Solo espera por el HTML, pero no espera por css o imgs
//     console.log(4);
// })

// function imprimir(){
//     console.log(2);
// }
 
// console.log(5);


// //Seleccionar un evento y asociarle un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (evento) =>{
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviar formulario');
// });

//Eventos de los inputs y text area
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener('input', getTexto);
email.addEventListener("input", getTexto);
mensaje.addEventListener("input", getTexto);

//El evento de submit
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //validar formulario
  const {nombre,email,mensaje } = datos;
  if(nombre === '' || email === '' || mensaje === ''){
    mostrarAlerta("Todos los campos son obligatorios", 'error');
    return;//Corta la ejecucion del codigo
  }
  mostrarAlerta("Mensaje enviado correctamente");

  //enviar formulario
  console.log("Enviando...");
});


function getTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}



