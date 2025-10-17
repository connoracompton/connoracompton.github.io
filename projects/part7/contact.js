// Simple Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    document.getElementById('successMsg').style.display = 'none';
    document.getElementById('errorMsg').style.display = 'none';
    
    // Basic validation
    if (!name || !email || !message) {
        document.getElementById('errorMsg').style.display = 'block';
        return;
    }
    
    try {
        await fetch('https://formsubmit.co/thegameworld153@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });
        
        // Show success
        document.getElementById('successMsg').style.display = 'block';
        document.getElementById('contactForm').reset();
        
    } catch (error) {
        // Show error
        document.getElementById('errorMsg').style.display = 'block';
    }
});