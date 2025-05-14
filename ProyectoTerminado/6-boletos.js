<script>
    const form = document.getElementById("ticket-form");
    const niños = document.getElementById("niños");
    const adultos = document.getElementById("adultos");
    const tercera = document.getElementById("tercera");
    const total = document.getElementById("total");

    function actualizarTotal() {
        const totalNiños = parseInt(niños.value || 0) * 150;
        const totalAdultos = parseInt(adultos.value || 0) * 200;
        const totalTercera = parseInt(tercera.value || 0) * 150;

        const suma = totalNiños + totalAdultos + totalTercera;
        total.textContent = `Total: $${suma}`;
    }

    niños.addEventListener("input", actualizarTotal);
    adultos.addEventListener("input", actualizarTotal);
    tercera.addEventListener("input", actualizarTotal);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Compra realizada con éxito. Total pagado: " + total.textContent);
    });
</script>
