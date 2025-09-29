function volume_sphere() {
  document.getElementById("submit").addEventListener("click", () => {
    const radiusInput = document.getElementById("radius").value;
    const vol = document.getElementById("volume");

    const radius = parseFloat(radiusInput);

    if (!isNaN(radius) && radius > 0) {
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      const roundedVolume = Math.floor(volume * 10000) / 10000;
      vol.value = `Calculated volume should be approximately ${roundedVolume}.`;
    } else {
      vol.value = `Calculated volume should be 'NaN' due to invalid input.`;
    }
  });
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
