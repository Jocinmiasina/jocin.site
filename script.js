document.getElementById("whatsappForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "261346099392"; // 🔴 METS TON NUMÉRO ICI

  let text = `Bonjour, je vous contacte depuis votre portfolio.%0A%0A
Nom : ${name}%0A
Email : ${email}%0A
Message : ${message}`;

  let whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
});

