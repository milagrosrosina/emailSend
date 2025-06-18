import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Configuración del servidor SMTP y credenciales de inicio de sesión
smtp_server = 'smtp.office365.com'
smtp_port = 587
smtp_user = 'alertaspubliturno@confiar.coop'
smtp_password = 'Alertamientopubliturno.2024*'

# Crear el mensaje MIME
msg = MIMEMultipart()
msg['From'] = smtp_user
msg['To'] = 'destinatario@example.com'
msg['Subject'] = 'Asunto del correo'
body = 'Hola mundo!'
msg.attach(MIMEText(body, 'plain'))
msg.attach(MIMEText('<b>Hola mundo!</b>', 'html'))

# Iniciar sesión en el servidor y enviar el correo
try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()  # Activar la conexión segura
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
    server.quit()
    print('Correo enviado exitosamente')
except smtplib.SMTPException as e:
    print(f'Error al enviar el correo: {e}')
