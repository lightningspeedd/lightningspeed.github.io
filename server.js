function SendMail()
{
  let parms = {
    name : document.getElementById("username").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value 
  }
  emailjs.send("service_ore4o4m","template_e67g598",parms).then(alert("Message Sent"));
}

SendMail();