//Variables Soluciones Disatel
var solucionesDisatel = [];

function limpiarCampos(){

  //Limpiamos los Inputs
  $("#nombreInput").val("");
  $("#emailInput").val("");
  $("#paisInput").val("");
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

function enviarMail(solucionesDisatel){
  //Obtengo los Valores de los Inputs
  var nombre = $('#nombreInput').val();
  var email = $('#emailInput').val();
  var pais = $('#paisInput').val();
  var telefono = $('#telefonoInput').val();
  var mensaje = $('#mensajeText').val();
  var contenido = "";
  var ruta = "http://cliente.quieroaplicar.com/uploads/logodisateltransparente.png";

  //Aqui se guardaran las soluciones de Disatel ordenadas
  var detalleSoluciones = "";

  //Descomponemos las Soluciones para la vista
  for (var item = 0; item < solucionesDisatel.length; item++){
    detalleSoluciones+= solucionesDisatel[item] + "<br>";
  }


  //Variable SES
  var ses = new AWS.SES({
    apiVersion: '2010-12-01',
    accessKeyId: 'AKIAI2ZNPOJKFLN5Z4LQ',
    secretAccessKey: '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',
    region: 'us-west-2'
  });

  //Variable contenido - Cuerpo del mensaje html
  contenido = '<html>'+
              '<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">'+
              '<body style="font-family: Lato;background-color:#EEE">'+
                 '<div>'+
                 '<div class="contenido" style="padding-left:20%;padding-right:20%;padding-top:5%;font-family: Lato;">'+
                   '<div style="height: 60px; background-color: #E01F26"><h1 style="font-weight: 800;text-align: center;color:#FFF;font-size: 1.8em;">FORMULARIO</h1><hr style="width: 10%;height: 5px;background-color: #FFF;border-top: none !important;"><br><br></div>'+
                   '<div style="margin-top:5%;">'+
                      '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">CLIENTE: </p></strong>'+
                      '<p style="font-size: 1.8em;text-align: left;color: #595A5C;"> '+ nombre +'</p>'+
                   '</div>'+
                   '<div style="margin-top:5%;">'+
                      '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">E-MAIL: </p></strong>'+
                      '<p style="font-size: 1.8em;text-align: left;color: #595A5C;"> '+ email +'</p>'+
                   '</div>'+
                   '<div style="margin-top:5%;">'+
                      '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">TELÉFONO: </p></strong>'+
                      '<p style="font-size: 1.8em;text-align: left;color: #595A5C;"> '+ telefono +'</p>'+
                   '</div>'+
                   '<div style="margin-top:5%;">'+
                      '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">PAIS: </p></strong>'+
                      '<p style="font-size: 1.8em;text-align: left;color: #595A5C;"> '+ pais +'</p>'+
                   '</div>'+
                   '<div style="margin-top:5%;">'+
                       '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">INTERESES: </p></strong>'+
                       '<p style="font-size: 1.8em;text-align: left;color: #595A5C;">'+ detalleSoluciones +'</p>'+
                   '</div>'+
                   '<div style="margin-top:5%;">'+
                      '<strong><p style="font-size: 1.8em;text-align: left;color: #e01f26;">MENSAJE: </p></strong>'+
                      '<p style="font-size: 1.8em;text-align: left;color: #595A5C;"> '+ mensaje +'</p>'+
                   '</div>'+
                   '<div style="display:flex;margin-top:5%;padding-top: 3%;padding-bottom: 10%;">'+
                     '<img class="disatelLogo" style="height:100px;width:200px;align-items: center; margin: auto;" src="'+ ruta +'" alt="Disatel Logo"/><br>'+
                   '</div>'+
                 '</div>'+

               '</body>'+
               '</html>'

  //Parametros a enviar
  var params = {
   Destination: {
     ToAddresses: [
       'kherrera16@gmail.com' /* Receptor */
     ]
   },
   Message: { /* Mensaje */
     Body: { /* required */
     Html: {
       Data: contenido
     }
     },
     Subject: { /* required */
       Data: 'Formulario Disatel', /* Asunto */
     }
   },
   Source: 'kherrera16@gmail.com', /* Emisor  */
   ReplyToAddresses: [
     email, /* Responder A */
   ]
  };

  //Función SES de envío de correo
  ses.sendEmail(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data, params);   // successful response

   //Alerta de E-mail enviado con éxito
   alerta("¡Excelente!", "Formulario enviado éxitosamente", "success");

   //Limpiamos los Campos del Formulario
   limpiarCampos();
  });
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
    enviarMail(solucionesDisatel)
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
  else if ($('#paisInput').val() === ''){
    document.getElementById("paisInput").style.borderColor="blue";
    alerta("¡Alerta!", "Error en campo pais", "warning");
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
        // $("#NS").remove();

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
        // $("#NS").remove();

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
        // $("#NS").remove();

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

//Acceso Usuarios
$(".AU").click(function(){
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


// $(document).ready(function() {
//   if ((screen.width>=768)) {
//     $("#NS").remove();
//     $('.rec1').prepend('<a id="NS"></a>');
//   }
//   else if (screen.width<=767){
//     $("#NS").remove();
//     $('.rec1').append('<a id="NS"></a>');
//   }
// });