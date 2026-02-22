function checkPIN() {
let ingreso = document.getElementById("pinInput").value;

if (ingreso === "6497") {
document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");
} else {
alert("PIN incorrecto");
}
}

// ---------------- CALCULO ----------------

let operacionActual = null;

function calcular() {
let cliente = document.getElementById("cliente").value;
let monto = parseFloat(document.getElementById("monto").value);
let descuento = parseFloat(document.getElementById("descuento").value);

if (!cliente || !monto || !descuento) {
alert("Completar todos los campos");
return;
}

let total = monto - (monto * descuento / 100);

operacionActual = {
cliente: cliente,
total: total
};

document.getElementById("resultadoTexto").innerText =
"Total con descuento: $" + total.toFixed(2);
}

function guardarOperacion() {
if (!operacionActual) return;

let historial = JSON.parse(localStorage.getItem("historial") || "[]");
historial.push(operacionActual);

localStorage.setItem("historial", JSON.stringify(historial));
cargarHistorial();
}

function cargarHistorial() {
let historial = JSON.parse(localStorage.getItem("historial") || "[]");
let div = document.getElementById("historial");
div.innerHTML = "";
let totalMes = 0;

historial.forEach(op => {
div.innerHTML += `<p>${op.cliente} - $${op.total.toFixed(2)}</p>`;
totalMes += op.total;
});

document.getElementById("stats").innerText =
"Total generado: $" + totalMes.toFixed(2);
}
