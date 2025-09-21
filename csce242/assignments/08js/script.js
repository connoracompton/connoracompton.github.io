let menuOpen = false;

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
    }
}

function showPlanting() {
    document.getElementById('plantingSection').style.display = 'block';
    document.getElementById('digitalClockSection').style.display = 'none';
    
    // Update menu indicators
    document.getElementById('largeMenu1').classList.add('active');
    document.getElementById('largeMenu2').classList.remove('active');
    
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('show');
    menuOpen = false;
}

function showDigitalClock() {
    document.getElementById('plantingSection').style.display = 'none';
    document.getElementById('digitalClockSection').style.display = 'block';
    
    // Update menu indicators
    document.getElementById('largeMenu1').classList.remove('active');
    document.getElementById('largeMenu2').classList.add('active');
    
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('show');
    menuOpen = false;
}

function updatePlant() {
    const days = document.getElementById('daysSlider').value;
    document.getElementById('rangeValue').textContent = days;
    
    const plantMessage = document.getElementById('plantMessage');
    const plantAdvice = document.getElementById('plantAdvice');
    const plantImage = document.getElementById('plantImage');
    
    if (days >= 1 && days <= 2) {
        plantMessage.textContent = `It's been ${days} days since watering your plant`;
        plantAdvice.textContent = "Your plant is healthy and happy";
        plantImage.src = "images/stage1plant.jpg"
        plantImage.alt = "Healthy plant";
    } else if (days >= 3 && days <= 5) {
        plantMessage.textContent = `It's been ${days} days since watering your plant`;
        plantAdvice.textContent = "Your plant needs watering";
        plantImage.src = "images/stage2plant.jpg";
        plantImage.alt = "Plant needs watering";
    } else if (days >= 6 && days <= 9) {
        plantMessage.textContent = `It's been ${days} days since watering your plant`;
        plantAdvice.textContent = "Leaves are drooping the color is changing, water soon";
        plantImage.src = "images/stage3plant.jpg";
        plantImage.alt = "Plant leaves drooping";
    } else if (days >= 10 && days <= 12) {
        plantMessage.textContent = `It's been ${days} days since watering your plant`;
        plantAdvice.textContent = "Sorry, your plant is no longer with us";
        plantImage.src = "images/stage4plant.jpg";
        plantImage.alt = "Dead plant";
    }
}


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutesStr} ${ampm}`;
    
    document.getElementById('currentTime').textContent = timeString;
}

// Initialize
updatePlant();
updateClock();

// Update clock every minute
setInterval(updateClock, 60000);

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.menu-toggle');
    
    if (menuOpen && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
        menuOpen = false;
    }
});
