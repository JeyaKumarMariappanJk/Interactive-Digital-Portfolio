document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Show confirmation
  document.getElementById("formMessage").innerText = 
    `✅ Thank you, ${name}! Your message has been received.`;

  // Clear form
  document.getElementById("contactForm").reset();
});
