
/**Navbar */
document.getElementById(
  "cabecera"
).innerHTML = `<nav class="navbar navbar-light navbar-expand-lg" style="background-color:#463F3A;">
            <div class="container-fluid ms-3">
                <a class="navbar-brand" href="./index.html">
                    <img src="img/nav-icon.png" alt="Logo" width="150" height="50"
                        class="d-inline-block align-text-middle" href="./index.html">

                </a>
                <button class="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="container-fluid d-flex flex-column-reverse align-items-end me-3 my-2 text-end">
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item active">
                            <a class="nav-link linksNavbar" href="./index.html">Mi CV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link linksNavbar" href="./info-personal.html">Información Personal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link linksNavbar" href="./educacion.html">Educación</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link linksNavbar" href="./experiencia.html">Experiencia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link linksNavbar" href="./contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
/**fin Navbar */

$("#anclaPrimerItemLista").on("click", function () {
    $("#item_Uno_lista").css("display", "block");
    $("#item_Dos_lista").css("display", "none");
    $("#item_Tres_lista").css("display", "none");
    $("#item_Cuatro_lista").css("display", "none");
});
$("#anclaSegundoItemLista").on("click", function () {
  $("#item_Uno_lista").css("display", "none");
  $("#item_Dos_lista").css("display", "block");
  $("#item_Tres_lista").css("display", "none");
  $("#item_Cuatro_lista").css("display", "none");
});
$("#anclaTercerItemLista").on("click", function () {
  $("#item_Uno_lista").css("display", "none");
  $("#item_Dos_lista").css("display", "none");
  $("#item_Tres_lista").css("display", "block");
  $("#item_Cuatro_lista").css("display", "none");
});
$("#anclaCuartoItemLista").on("click", function () {
  $("#item_Uno_lista").css("display", "none");
  $("#item_Dos_lista").css("display", "none");
  $("#item_Tres_lista").css("display", "none");
  $("#item_Cuatro_lista").css("display", "block");
});


