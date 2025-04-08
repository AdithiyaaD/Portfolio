window.onload = function () {
  function updateProgress(progressPercentage, id) {
    const progressBarFill = document.getElementById(id);
    if (progressBarFill) {
      progressBarFill.style.width = `${progressPercentage}%`;
    }
  }
  updateProgress(95, "progress1");
  updateProgress(90, "progress2");
  updateProgress(85, "progress3");
  updateProgress(80, "progress4");
  updateProgress(75, "progress5");
  updateProgress(95, "progress6");
  updateProgress(85, "progress7");
  updateProgress(70, "progress8");
};

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/achievement1.jpg",
    "./assets/achievement2.jpg",
    "./assets/achievement3.jpg",
    "./assets/achievement4.jpg",
    "./assets/achievement5.jpg",
  ];
  let currentIndex = 0;
  const imageElement = document.getElementById("achievement-image");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  function showImage(index) {
    imageElement.src = images[index];
  }
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  setInterval(autoSlide, 3000);
});

function validateForm() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phoneno");
  const messageField = document.getElementById("message");
  const nameError = document.getElementById("nameerr");
  const emailError = document.getElementById("emailerr");
  const phoneError = document.getElementById("phoneerr");
  const messageError = document.getElementById("messageerr");
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";
  messageError.innerHTML = "";
  let isValid = true;
  const name = nameField.value.trim();
  if (!/^[A-Za-z\s]{3,}$/.test(name)) {
    nameError.innerHTML =
      "Name must have at least 3 letters and contain only alphabets";
    isValid = false;
  }
  const email = emailField.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Please enter a valid email address";
    isValid = false;
  }
  const phone = phoneField.value.trim();
  if (!/^\d{10}$/.test(phone)) {
    phoneError.innerHTML = "Phone number must be 10 digits";
    isValid = false;
  }
  const message = messageField.value.trim();
  if (message.length < 1) {
    messageError.innerHTML = "Message can't be empty";
    isValid = false;
  }
  if (isValid) {
    const successPopup = document.getElementById("successpopup");
    successPopup.style.display = "block";
    setTimeout(() => {
      successPopup.style.display = "none";
    }, 3000);
    setTimeout(() => {
      nameField.value = "";
      emailField.value = "";
      phoneField.value = "";
      messageField.value = "";
    }, 500);
    return true;
  }
  return false;
}
