document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todos los elementos <a> dentro de la clase "navegacion"
    var enlacesNavegacion = document.querySelectorAll(".navegacion a");

    // Maneja el evento clic en los enlaces de navegación
    enlacesNavegacion.forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();

            // Elimina la clase "activo" de todos los enlaces
            enlacesNavegacion.forEach(function (e) {
                e.classList.remove("activo");
            });

            // Agrega la clase "activo" al enlace clicado
            enlace.classList.add("activo");
        });
    });
});
