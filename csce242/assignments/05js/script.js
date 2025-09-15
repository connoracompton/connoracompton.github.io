const sunnyTimes = document.getElementById("sunny-times");
const lyricsDiv = document.getElementById("lyrics");

sunnyTimes.addEventListener("click", () => {
    lyricsDiv.innerHTML = `
        <p class="line indent0">Here comes the sun</p>
        <p class="line indent1">Sun</p>
        <p class="line indent2">Sun</p>
        <p class="line indent3">Sun</p>
        <p class="line indent0">Here it comes</p>
    `;
});

// Color Picker
const colorPicker = document.getElementById("colorPicker");
const colorText = document.getElementById("colorText");

colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    colorText.style.color = color;
    colorText.textContent = `Selected Color: ${color}`;
});

// Image Change
const sunImage = document.getElementById("sunImage");
const cloudySrc = "images/cloudy.png";
const sunnySrc = "images/sunny.png";

sunImage.addEventListener("click", () => {
    sunImage.src = sunImage.src.includes("cloudy.png") ? sunnySrc : cloudySrc;
});
