document.getElementById("plantForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted successfully!");
});



function sendMail() {
  let Message = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    location: document.getElementById("location").value,
    total_space: document.getElementById("total_space").value,
    length: document.getElementById("length").value,
    width: document.getElementById("width").value,
    height: document.getElementById("height").value,
    space_type: document.getElementById("space_type").value,
    roof: document.getElementById("roof").value,
    sunlight_access: document.getElementById("sunlight_access").value,
    sunlight_exposure: document.getElementById("sunlight_exposure").value,
    sunlight_duration: document.getElementById("sunlight_duration").value,
    sunlight_time: document.getElementById("sunlight_time").value,
    temperature_range: document.getElementById("temperature_range").value,
    ventilation: document.getElementById("ventilation").value,
    fan: document.getElementById("fan").value,
  }
  emailjs.send("service_qmigx0w","template_7dj7xrv",Message).then(alert("email send!!!!!"))
}


















































// document.addEventListener("DOMContentLoaded", function () {
//   emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
// });

// document.getElementById("consultation-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent default form submission

//   const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
//   const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID

//   const templateParams = {
//       first_name: document.getElementById("first-name").value,
//       last_name: document.getElementById("last-name").value,
//       email: document.getElementById("email").value,
//       plant_type: document.getElementById("plant-type").value,
//       concern: document.getElementById("concern").value,
//   };

//   emailjs.send(serviceID, templateID, templateParams)
//       .then(response => {
//           document.getElementById("status-message").innerText = "Request sent successfully!";
//           document.getElementById("consultation-form").reset();
//       })
//       .catch(error => {
//           document.getElementById("status-message").innerText = "Failed to send request. Try again.";
//           console.error("Error sending email:", error);
//       });
// });
