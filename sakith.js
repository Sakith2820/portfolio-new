const form = document.getElementById("email-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
  .then((response) => {
    if (response.ok) {
      alert("Email sent successfully.");
      form.reset();
    } else {
      alert("Email failed to send.");
    }
  })
  .catch((error) => {
    console.error(error);
    alert("Email failed to send.");
  });
});
