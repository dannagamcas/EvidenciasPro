function evaluar() {
  const form = document.forms["quizForm"];
  const respuestas = ["q1", "q2", "q3"];
  let total = 0;
  let puntuaciones = [];

  respuestas.forEach((id, index) => {
    const respuesta = form[id].value;
    const puntos = parseInt(respuesta);
    puntuaciones.push(puntos);
    total += puntos;
    sessionStorage.setItem(id, puntos);
  });

  document.getElementById("resultado").textContent = `Tu puntuación es: ${total} / ${respuestas.length}`;

  generarGrafico(puntuaciones);
}

function generarGrafico(datos) {
  const ctx = document.getElementById('grafico').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
      datasets: [{
        label: 'Puntos obtenidos',
        data: datos,
        backgroundColor: '#0288d1'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1
        }
      }
    }
  });
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Resultados del Diagnóstico del Océano", 10, 10);
  doc.text(document.getElementById("resultado").textContent, 10, 20);

  const canvas = document.getElementById("grafico");
  const imgData = canvas.toDataURL("image/png");
  doc.addImage(imgData, "PNG", 10, 30, 180, 80);

  doc.save("diagnostico_oceano.pdf");
}
