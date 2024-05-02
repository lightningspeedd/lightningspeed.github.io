function color()
  {
    
  }
function getIPAddress() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip-address1').innerText = data.ip;
    })
    .catch(error => console.error('Error:', error));
  
}
function geolocate()
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function getIPInformation() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip-address').innerText = data.ip;
      document.getElementById('location').innerText = data.city + ', ' + data.region + ', ' + data.country_name;
      document.getElementById('isp').innerText = data.org;
    })
    .catch(error => console.error('Error:', error));
}

function video()
{
  var video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function dd() {
   
}

function notifactions()
{
  
}


// Call the functions when the page loads

getIPInformation();
getIPAddress();