const btnSi = document.getElementById("si");
const btnNo = document.getElementById("no");
const pregunta = document.getElementById("pregunta");
const botones = document.querySelector(".botones");
const foto = document.getElementById("fotoLugar");

let etapa = 0;

btnSi.addEventListener("click", function(){

    if(etapa === 0){

        // cambiar gif en segunda pantalla
        foto.src = "pregunta.gif";

        pregunta.innerHTML = "¿A dónde quieres ir? 😏";

        botones.innerHTML = `
        <button onclick="respuesta('Portones')">Portones</button>
        <button onclick="respuesta('Rukito')">Rukito</button>
        <button onclick="respuesta('La Costeñita')">La Costeñita</button>
        `;

        etapa = 1;
    }

});

function respuesta(lugar){

    pregunta.innerHTML = "Perfecto 😍 entonces vamos a " + lugar + " ❤️";
    botones.innerHTML = "";

    if(lugar === "Portones"){
        foto.src = "portones.jpg";
    }

    if(lugar === "Rukito"){
        foto.src = "rukito.jpg";
    }

    if(lugar === "La Costeñita"){
        foto.src = "costeñita.jpg";
    }

    iniciarCorazones();
}

btnNo.addEventListener("mouseover", function(){

    const x = Math.random()*400;
    const y = Math.random()*400;

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
});

function iniciarCorazones(){

    const contenedor = document.getElementById("corazones");

    setInterval(() => {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random()*100 + "vw";
        corazon.style.fontSize = (20 + Math.random()*30) + "px";

        contenedor.appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },5000);

    },300);

}
