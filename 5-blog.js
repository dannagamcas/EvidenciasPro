function iniciar() {
    document.getElementById('guardar').addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {
    const nombre = document.getElementById('clave').value.trim();
    const mensaje = document.getElementById('texto').value.trim();

    if (!nombre || !mensaje) {
        alert("Por favor, completa ambos campos.");
        return;
    }

    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push({ nombre, mensaje });

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
    mostrar();
}

function mostrar() {
    const cajadatos = document.getElementById('caja');
    cajadatos.innerHTML = '';

    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    if (comentarios.length === 0) {
        cajadatos.innerHTML = '<p>No hay comentarios disponibles.</p>';
        return;
    }

    comentarios.forEach(com => {
        cajadatos.innerHTML += `<div><strong>${com.nombre}</strong>: ${com.mensaje}</div>`;
    });
}

window.addEventListener('load', iniciar, false);
