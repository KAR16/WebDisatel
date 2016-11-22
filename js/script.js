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
//Body
// $('body').click(function(){
//   if ($(".navbar-collapse").hasClass('in')){
//       //Navbar-Collapse
//       $(".navbar-collapse").removeClass("collapse in");
//       $(".navbar-collapse").attr('aria-expanded', false);
//       $(".navbar-collapse").attr('style', 'height: 1px');
//       $(".navbar-collapse").addClass("collapse");
//
//       //Boton Navbar-Toogle
//       $(".navbar-toggle").addClass("collapsed");
//       $(".navbar-toggle").attr('aria-expanded', false);
//   }
// });

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

//Pop Up
$('.AVISO').click(function() {
  // alerta("¡Aviso de Privacidad!", "Estimados, muy buenos días\nEspero que estén muy bien y agradezco mucho su apoyo.\nDurante el fin de semana tuvimos a las personas de las filiales de Disatel probando la nueva página y surgieron ciertos inconvenientes que quisiéramos arreglar para poder tenerla lista. Los puntos que detallo a continuación son los que más surgieron. Con estos puntos ya queda funcionando bien la página. De ahí el 8-9 de diciembre tenemos la visita de todos los Gerentes Generales de las filiales y de ahí habrá un espacio para que den mejoras y con eso terminaríamos la página.\nLos cambios que más nos urgen son:\n1.       Cuando vemos la página en algún dispositivo móvil no está el menú desplegable de acceso a usuario. Esto está funcionando solamente en la computadora.\n\n2.       Cuando en el menú de hasta arriba das click en Nuestras Soluciones te lleva a Nuestra Presencia. ", "warning");

  swal({
  title: '¡Aviso de Privacidad!',
  // text: 'Estimados, muy buenos días\nEspero que estén muy bien y agradezco mucho su apoyo.\nDurante el fin de semana tuvimos a las personas de las filiales de Disatel probando la nueva página y surgieron ciertos inconvenientes que quisiéramos arreglar para poder tenerla lista. Los puntos que detallo a continuación son los que más surgieron. Con estos puntos ya queda funcionando bien la página. De ahí el 8-9 de diciembre tenemos la visita de todos los Gerentes Generales de las filiales y de ahí habrá un espacio para que den mejoras y con eso terminaríamos la página.\nLos cambios que más nos urgen son:\n1.       Cuando vemos la página en algún dispositivo móvil no está el menú desplegable de acceso a usuario. Esto está funcionando solamente en la computadora.\n\n2.       Cuando en el menú de hasta arriba das click en Nuestras Soluciones te lleva a Nuestra Presencia.',
  html:
   '<p style="text-align:left">Estimados, muy buenos días</p><br><br> ' +
   '<p style="text-align:left">Espero que estén muy bien y agradezco mucho su apoyo.\nDurante el fin de semana tuvimos a las personas de las filiales de Disatel probando la nueva página y surgieron ciertos inconvenientes que quisiéramos arreglar para poder tenerla lista. Los puntos que detallo a continuación son los que más surgieron. Con estos puntos ya queda funcionando bien la página. De ahí el 8-9 de diciembre tenemos la visita de todos los Gerentes Generales de las filiales y de ahí habrá un espacio para que den mejoras y con eso terminaríamos la página.</p><br><br> ' +
   '<p style="text-align:left">Los cambios que más nos urgen son:</p><br> ' +
   '<p style="text-align:left">1. Cuando vemos la página en algún dispositivo móvil no está el menú desplegable de acceso a usuario. Esto está funcionando solamente en la computadora.</p><br><br> ' +
   '<p style="text-align:left">2. Cuando en el menú de hasta arriba das click en Nuestras Soluciones te lleva a Nuestra Presencia.</p>',
  type: 'warning',
  width: 800,
  confirmButtonColor: '#E01F26',
  confirmButtonText: 'ENTENDIDO',
  dropShadow: "#FFF"
  // padding: 100,
  // background: '#fff url(//bit.ly/1Nqn9HU)'
  })
});

$('[data-submenu]').submenupicker();
