const cronometro = document.getElementById("cronometro");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const resetear = document.getElementById("resetear");

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;
let estaCorriendo = false;

function formatearTiempo(valor) {
  return valor < 10 ? "0" + valor : valor;
}
function mostrarTiempo() {
  cronometro.textContent =
    formatearTiempo(horas) +
    ":" +
    formatearTiempo(minutos) +
    ":" +
    formatearTiempo(segundos);
}
function incrementarTiempo() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  mostrarTiempo();
}
function iniciarCronometro() {
  if (!estaCorriendo) {
    intervalo = setInterval(incrementarTiempo, 1000);
    estaCorriendo = true;
  }
}
function pausarCronometro() {
  if (estaCorriendo) {
    clearInterval(intervalo);
    estaCorriendo = false;
  } else {
    iniciarCronometro();
  }
}
function resetearCronometro() {
  clearInterval(intervalo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  estaCorriendo = false;
  mostrarTiempo();
}

iniciar.addEventListener("click", iniciarCronometro);
pausar.addEventListener("click", pausarCronometro);
resetear.addEventListener("click", resetearCronometro);
