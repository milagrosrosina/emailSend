const nodemailer = require('nodemailer');

async function sendEmail() {
  // Crear el objeto de transporte con la configuración adecuada
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: 'alertaspubliturno@confiar.coop', // tu dirección de correo
      pass: 'Alertapubliturno.2024*',   // tu contraseña
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });
  //["liliana.mesa@confiar.coop","liliana.agudelo@confiar.coop"]
  let nombreSede = "Sede Rio negro"; // Asumiendo que este valor puede cambiar
  let nombreServicio = "Prioritaria"; // Nombre del servicio
  //let nombreServicio = "PAC"; // Nombre del servicio
  let destinatarios = 'johan@grupodyd.com,liliana.mesa@confiar.coop,liliana.agudelo@confiar.coop';

  const mailOptions = {
    from: 'alertaspubliturno@confiar.coop', // dirección del remitente
    to: destinatarios, // lista de destinatarios
    subject: 'Elevados tiempos de espera en agencia', // Línea de asunto actualizada
    text: ``, // cuerpo del texto plano actualizado
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Elevados tiempos de espera en agencia</h2>
        <p>Hemos observado <strong>tiempos de espera elevados</strong> en el servicio de <strong>${nombreServicio}</strong> en nuestra <strong>${nombreSede}</strong>, lo cual podría afectar la atención y satisfacción de nuestros asociados y clientes.</p>
        <p>Agradecemos revisar la situación y tomar las medidas necesarias para optimizar los procesos de atención.</p>
        <p>Para más detalles, por favor acceda a nuestro sistema de gestión de turnos o póngase en contacto con el equipo de Gestión del Servicio.</p>
        <p>Saludos cordiales,</p>
        <p><b>Equipo de Alertas Publiturno</b></p>
      </div>
    `, // cuerpo del HTML actualizado
  };


  // Enviar correo con el objeto de transporte definido
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
}

sendEmail();