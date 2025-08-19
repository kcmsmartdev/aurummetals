const mAbrirMenu = document.getElementById("menuBar");
const mAbrirMenuCerrar = document.getElementById("menuBar_cerrar");
const mMenu = document.getElementById("menu-mobil");

const titulo2 = document.getElementById("h2");
const titulo1 = document.getElementById("h1");
const btn1 = document.getElementById("btnTitulo1");
const btn2 = document.getElementById("btnTitulo2");

mAbrirMenu.addEventListener("click", function(){
    mAbrirMenu.classList.toggle("hidden");
    
    mAbrirMenuCerrar.classList.remove("hidden");
    mMenu.classList.remove("hidden");
    
})
mAbrirMenuCerrar.addEventListener("click", function(){
    mAbrirMenu.classList.remove("hidden");
    mAbrirMenuCerrar.classList.toggle("hidden");
    mMenu.classList.toggle("hidden");
})

let mostrarPrimero = true;
function alternarTitulos() {
    if (mostrarPrimero) {
      titulo1.classList.add("hidden");
      titulo2.classList.remove("hidden");
    } else {
      titulo2.classList.add("hidden");
      titulo1.classList.remove("hidden");
    }
    mostrarPrimero = !mostrarPrimero; // cambia el estado
  }
  
btn1.addEventListener("click", function(){
    titulo1.classList.remove("hidden");
    titulo2.classList.add("hidden");
    
})

btn2.addEventListener("click", function(){
    titulo1.classList.add("hidden");
    titulo2.classList.remove("hidden");
    
})

setInterval(alternarTitulos, 10000);