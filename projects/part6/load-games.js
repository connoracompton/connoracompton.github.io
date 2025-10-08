// Load games from JSON and display them
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');

    const jsonURL = 'https://connoracompton.github.io/connoracompton/csce242/projects/part6/games.json';
        
    // Fetch the JSON data
    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(games => {
            // Clear loading message
            productsContainer.innerHTML = '';
            
            // Loop through each game and create HTML
            games.forEach(game => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                productCard.innerHTML = `
                    <div class="img">
                        <img src="${game.img_name}" alt="${game.name}">
                    </div>
                    <h3>${game.name}</h3>
                    <p>$${game.price.toFixed(2)}</p>
                    <p style="font-size: 0.9rem; color: var(--color-text); margin: 0.5rem 0;">
                        <strong>Genre:</strong> ${game.genre}<br>
                        <strong>Platform:</strong> ${game.platform}<br>
                        <strong>Rating:</strong> ${game.rating}
                    </p>
                    <button class="add-to-cart" data-name="${game.name}" data-price="${game.price}">Add to Cart</button>
                `;
                
                productsContainer.appendChild(productCard);
            });
            
            // After creating all buttons, add event listeners
            const addButtons = document.querySelectorAll('.add-to-cart');
            addButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const name = this.getAttribute('data-name');
                    const price = this.getAttribute('data-price');
                    addToCart(name, price);
                });
            });
        })
        .catch(error => {
            console.error('Error loading games:', error);
            productsContainer.innerHTML = `
                <p style="text-align: center; width: 100%; color: #ff6b6b;">
                    Error loading games. Make sure games.json is in the same folder as games.html
                </p>
            `;
        });
});