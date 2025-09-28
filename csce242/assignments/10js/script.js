const cars = {
    "rusty beetle": { 
        title: "Beetle After Restoration", 
        after: "images/newbeetle.jpg"
    },
    "rusty porsche": { 
        title: "Porsche After Restoration", 
        after: "images/newporsche.jpg"
    },
    "rusty mustang": { 
        title: "Mustang After Restoration", 
        after: "images/newmustang.jpg"
    },
    "rusty camaro": { 
        title: "Camaro After Restoration", 
        after: "images/newcamaro.jpg"
    }
};

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.getElementById("close-btn");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.key; 
        const carInfo = cars[key];

        if (carInfo) {
            popupTitle.textContent = carInfo.title;
            popupImg.src = carInfo.after;
            popupImg.alt = carInfo.title;
            popup.style.display = "block";
        }
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close popup when clicking outside the content
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "block") {
        popup.style.display = "none";
    }
});