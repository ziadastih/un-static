const formBtn = document.querySelectorAll(".form-btn");
const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.getElementById("close-btn");
const formConfirmation = document.querySelector(".form-confirmation");
formBtn.forEach((btn) => {
  btn.addEventListener("click", async () => {
    formContainer.classList.add("display-flex");
    overlay.classList.add("display-flex");
  });
});

closeBtn.addEventListener("click", () => {
  formContainer.classList.remove("display-flex");
  overlay.classList.remove("display-flex");
});

// ===============const form input  =============
const nameInput = document.querySelector(".name-input");
const familyInput = document.querySelector(".family-input");
const phoneNumber = document.querySelector(".number-input");
const locationBtn = document.querySelector(".location-btn");
const submitForm = document.querySelector(".submit-form");

locationBtn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    if (position) {
      const { longitude, latitude } = position.coords;
      try {
        const coords = await axios.post(
          "https://unhcr-api.onrender.com/api/v1/coords",
          {
            name: nameInput.value,
            Number: phoneNumber.value,
            latitude: latitude,
            longitude: longitude,
          }
        );

        submitForm.addEventListener("click", () => {
          formContainer.classList.remove("display-flex");
          formConfirmation.classList.add("display-flex");

          setTimeout(() => {
            formConfirmation.classList.remove("display-flex");
            overlay.classList.remove("display-flex");
          }, 1000);
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      submitForm.removeEventListener("click", () => {
        formContainer.classList.remove("display-flex");
        formConfirmation.classList.add("display-flex");

        setTimeout(() => {
          formConfirmation.classList.remove("display-flex");
          overlay.classList.remove("display-flex");
        }, 1000);
      });
    }
  });
});
