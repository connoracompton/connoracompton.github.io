// Painting class to hold all information
class Painting {
    constructor(name, artist, image, isFramed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFramed = isFramed;
    }
    
    // Get method that returns title and image formatted as HTML
    getDisplay() {
        return `
            <div class="painting-card" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="${this.image}" alt="${this.name}">
            </div>
        `;
    }
}

// Array of paintings
const paintings = [
    new Painting(
        "Winter Tree",
        "Nature Artist",
        "images/tree.png",
        true
    ),
    new Painting(
        "Spring Blossoms",
        "Garden Painter",
        "images/tree1.png",
        false
    ),
    new Painting(
        "Autumn Colors",
        "Landscape Studio",
        "images/tree2.png",
        true
    ),
    new Painting(
        "Summer Shade",
        "Forest Art",
        "images/tree3.png",
        false
    ),
    new Painting(
        "Enchanted Forest",
        "Magical Woods",
        "images/tree.png",
        true
    ),
    new Painting(
        "Ancient Oak",
        "Botanical Dreams",
        "images/tree1.png",
        false
    )
];

// Function to display all paintings in the gallery
function displayGallery() {
    const gallery = document.getElementById('gallery');
    paintings.forEach(painting => {
        gallery.innerHTML += painting.getDisplay();
    });
}

// Function to show modal with painting details
function showModal(paintingName) {
    const painting = paintings.find(p => p.name === paintingName);
    
    if (painting) {
        document.getElementById('modalTitle').textContent = painting.name;
        document.getElementById('modalArtist').textContent = 'by ' + painting.artist;
        
        const modalImage = document.getElementById('modalImage');
        modalImage.src = painting.image;
        modalImage.alt = painting.name;
        
        // Add or remove framed class based on isFramed property
        if (painting.isFramed) {
            modalImage.classList.add('framed');
        } else {
            modalImage.classList.remove('framed');
        }
        
        document.getElementById('paintingModal').style.display = 'block';
    }
}

// Function to close modal
function closeModal() {
    document.getElementById('paintingModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('paintingModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize gallery on page load
displayGallery();