//Funcion de Enviar Mail
function enviarMail(email, template){
  //Variable SES
  var ses = new AWS.SES({
    apiVersion: '2010-12-01',
    accessKeyId: 'AKIAINOLQSSVGQL46DAA',
    secretAccessKey: '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',
    region: 'us-west-2'
  });

  //Parametros a enviar
  var params = {
   Destination: {
     ToAddresses: [
       'kherrera16@gmail.com' /* Receptor */
     ]
   },
   Message: { /* Mensaje */
     Body: { /* Cuerpo del Mensaje */
       Html: {
        Data: template /* required */
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
