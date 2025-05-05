document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const mensajeExito = document.getElementById("mensajeExito");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío real

    // Simula un envío (aquí podrías hacer una petición fetch/POST real)
    setTimeout(() => {
      mensajeExito.style.display = "block";
      form.reset();
    }, 500);
  });
});
