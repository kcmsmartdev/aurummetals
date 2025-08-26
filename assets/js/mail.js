  emailjs.init("LdPkjs6ODU51u1jAK"); 

  const btn = document.getElementById('button');

  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();

     btn.innerText = 'Enviando...';

     const serviceID = 'default_service'; // ⚡ tu Service ID de EmailJS
     const templateID = 'template_e49zuud'; // ⚡ tu Template ID de EmailJS

     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerText = 'Enviar';
        alert('✅ Mensaje enviado correctamente');
        document.getElementById('form').reset();
      }, (err) => {
        btn.innerText = 'Enviar';
        alert(JSON.stringify(err));
      });
  });