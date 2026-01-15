function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const form = document.querySelector(".contact-form");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.style.color = "green";
      status.textContent = "Message sent successfully!";
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    status.style.color = "red";
    status.textContent = "Something went wrong. Try again.";
  }
});
