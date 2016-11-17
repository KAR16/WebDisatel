//Variables Soluciones Disatel
var solucionesDisatel = [];

//Funcion Limpiar
function limpiarCampos(){

  //Limpiamos los Inputs
  $("#nombreInput").val("");
  $("#emailInput").val("");
  $("#paisInput").val("País*");
  $("#telefonoInput").val("");
  $("#mensajeText").val("");

  //Limpiamos los checkbox
  $("#check1").attr("checked", false);
  $("#check2").attr("checked", false);
  $("#check3").attr("checked", false);
  $("#check4").attr("checked", false);
  $("#check5").attr("checked", false);
  $("#check6").attr("checked", false);
  $("#check7").attr("checked", false);
}

function parametrosMail(solucionesDisatel){
  //Obtengo los Valores de los Inputs
  var nombre = $('#nombreInput').val();
  var email = $('#emailInput').val();
  var pais = $('#paisInput').val();
  var telefono = $('#telefonoInput').val();
  var mensaje = $('#mensajeText').val();


  //Aqui se guardaran las soluciones de Disatel ordenadas
  var detalleSoluciones = "";

  //Descomponemos las Soluciones para la vista
  for (var item = 0; item < solucionesDisatel.length; item++){
    detalleSoluciones+= solucionesDisatel[item] + "<br>";
  }


  enviarMail(nombre, email, pais, telefono, mensaje, detalleSoluciones);

}

//Funcion Sweet Alert
function alerta(titulo, texto, estado){
  swal(
    titulo,
    texto,
    estado
    )
}

//Validacion de Checkbox
function validarCheckbox(){
  solucionesDisatel = [];
  var check = "#check";
  var elemento = "";

  if($('.checkGPS').is(':checked') || $('.checkTMT').is(':checked') || $('.checkSAT').is(':checked') || $('.checkVIDEO').is(':checked') || $('.checkMOVIL').is(':checked') || $('.checkLOCK').is(':checked') || $('.checkWIFI').is(':checked')){

    //Iteramos sobre los checkbox seleccionados e insertamos las soluciones en la lista
    for (var item=1; item<= 7 ; item++){
      elemento = check + item;
      if ($(elemento).is(':checked')){
        var solucion = $(elemento).val();
        solucionesDisatel.push(solucion);
      }
    }

    //Vamos a la funcion enviarMail
    parametrosMail(solucionesDisatel)
  }
  else{
    document.getElementById("checkLista").style.borderColor="blue";
    alerta("¡Alerta!", "Seleccione una opción como mínimo", "warning");

  }
  // validarInputs();
}

function validarInputs(){
  //Expresion regular para validar el email
  var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

  //Validando Nombre
  if ($('#nombreInput').val() === ''){
    document.getElementById("nombreInput").style.borderColor="blue";
    alerta("¡Alerta!", "Error en campo nombre", "warning");
  }
  //Validando Email
  else if ($('#emailInput').val() === '' || !regexp.test($("#emailInput").val())){
    document.getElementById("emailInput").style.borderColor="blue";
    alerta("¡Alerta!", "Error en campo email", "warning");
  }
  //Validando Pais
  else if ($('#paisInput').val() === 'País*'){
    document.getElementById("paisInput").style.borderColor="blue";
    alerta("¡Alerta!", "Error seleccione un país valido", "warning");
  }
  //Validando Telefono
  else if ($('#telefonoInput').val() === '' || $('#telefonoInput').val().length <= 6){
    document.getElementById("telefonoInput").style.borderColor="blue";
    alerta("¡Alerta!", "Error en campo telefono", "warning");
  }
  //Validando Mensaje
  else if ($('#mensajeText').val() === ''){
    document.getElementById("mensajeText").style.borderColor="blue";
    alerta("¡Alerta!", "Error en campo mensaje", "warning");
  }
  else{
    validarCheckbox();
  }
}


//Funcion Enviar
$( ".enviar" ).click(function() {
  //Colocamos los inputs en color rojo nuevamente
  document.getElementById("nombreInput").style.borderColor="#E01F26";
  document.getElementById("emailInput").style.borderColor="#E01F26";
  document.getElementById("paisInput").style.borderColor="#E01F26";
  document.getElementById("telefonoInput").style.borderColor="#E01F26";
  document.getElementById("mensajeText").style.borderColor="#E01F26";
  document.getElementById("checkLista").style.borderColor="#E01F26";

  //Nos dirijimos a la funcion Validar
  validarInputs();
});


//Ocultar el Menú en Móvil
//Inicio
$(".INICIO").click(function(){
    if ($(".navbar-collapse").hasClass('in')){
        //Navbar-Collapse
        $(".navbar-collapse").removeClass("collapse in");
        $(".navbar-collapse").attr('aria-expanded', false);
        $(".navbar-collapse").attr('style', 'height: 1px');
        $(".navbar-collapse").addClass("collapse");

        //Boton Navbar-Toogle
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr('aria-expanded', false);
    }
});

//Misión y Visión
$(".MV").click(function(){
    if ($(".navbar-collapse").hasClass('in')){
        //Navbar-Collapse
        $(".navbar-collapse").removeClass("collapse in");
        $(".navbar-collapse").attr('aria-expanded', false);
        $(".navbar-collapse").attr('style', 'height: 1px');
        $(".navbar-collapse").addClass("collapse");

        //Boton Navbar-Toogle
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr('aria-expanded', false);
    }
});

//Quiénes Somos
$(".QS").click(function(){
    if ($(".navbar-collapse").hasClass('in')){
        //Navbar-Collapse
        $(".navbar-collapse").removeClass("collapse in");
        $(".navbar-collapse").attr('aria-expanded', false);
        $(".navbar-collapse").attr('style', 'height: 1px');
        $(".navbar-collapse").addClass("collapse");

        //Boton Navbar-Toogle
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr('aria-expanded', false);
    }
});

//Nuestras Soluciones
$(".NS").click(function(){
    if ($(".navbar-collapse").hasClass('in')){
        //Navbar-Collapse
        $(".navbar-collapse").removeClass("collapse in");
        $(".navbar-collapse").attr('aria-expanded', false);
        $(".navbar-collapse").attr('style', 'height: 1px');
        $(".navbar-collapse").addClass("collapse");

        //Boton Navbar-Toogle
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr('aria-expanded', false);
    }

    if ((screen.width>=767)) {
      $("#NS").remove();
      $('.AnclaNS').append('<a id="NS"></a>');
    }
    else if (screen.width<=767){
      $("#NS").remove();
      $('.rec1').append('<a id="NS"></a>');
    }
});

//Contáctanos
$(".CONT").click(function(){
    if ($(".navbar-collapse").hasClass('in')){
        //Navbar-Collapse
        $(".navbar-collapse").removeClass("collapse in");
        $(".navbar-collapse").attr('aria-expanded', false);
        $(".navbar-collapse").attr('style', 'height: 1px');
        $(".navbar-collapse").addClass("collapse");

        //Boton Navbar-Toogle
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr('aria-expanded', false);
    }
});

$('[data-submenu]').submenupicker();
//Acceso Usuarios
// $(".AU").click(function(){
//     if ($(".navbar-collapse").hasClass('in')){
//         //Navbar-Collapse
//         $(".navbar-collapse").removeClass("collapse in");
//         $(".navbar-collapse").attr('aria-expanded', false);
//         $(".navbar-collapse").attr('style', 'height: 1px');
//         $(".navbar-collapse").addClass("collapse");
//
//         //Boton Navbar-Toogle
//         $(".navbar-toggle").addClass("collapsed");
//         $(".navbar-toggle").attr('aria-expanded', false);
//     }
// });
