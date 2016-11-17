//Funcion de Enviar Mail
function enviarMail(nombre, email, pais, telefono, mensaje, detalleSoluciones){
  var url = "https://qi7w3iqsk5.execute-api.us-west-2.amazonaws.com/prod/enviarMail";
  var params = { nombre:nombre, email: email, telefono:telefono, pais:pais, mensaje:mensaje, detalleSoluciones:detalleSoluciones};

  $.ajax({
        type: "POST",
        dataType: "jsonw",
  	    crossDomain: true,
        contentType: 'application/json',
        url:url,
        data: JSON.stringify(params),
        //processData: false,
        success: function(data) {
              var text=JSON.stringify(data);
              alert(text);
              //console.log(data);

        },error: function(data) {
              //console.log(data);
        }
  });

  //Alerta de E-mail enviado con éxito
  alerta("¡Excelente!", "Formulario enviado éxitosamente", "success");

  //Limpiamos los Campos del Formulario
  limpiarCampos();

}
