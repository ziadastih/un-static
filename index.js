const formBtn = document.querySelectorAll(".form-btn");

formBtn.forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { longitude, latitude } = position.coords;
        const coords = await axios.post(
          "https://unhcr-api.onrender.com/api/v1/coords",
          {
            longitude: longitude,
            latitude: latitude,
          }
        );
        console.log(coords);
      });
    } catch (error) {
      console.log(error);
    }
  });
});
