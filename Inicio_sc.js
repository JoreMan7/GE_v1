document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date();
    const options = { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
    };
    currentDateElement.textContent = currentDate.toLocaleDateString('es-ES', options);

    // Add click event for logout button
    const logoutButton = document.querySelector('.btn-logout');
    logoutButton.addEventListener('click', function() {
        // Add logout logic here
        window.location.href = 'index.html'; // Redirect to login page
    });

    // Add click event for help button
    const helpButton = document.querySelector('.btn-help');
    helpButton.addEventListener('click', function() {
        alert('Sistema de Ayuda\n\nPara más información, contacte al administrador.');
    });

    // Add hover effects for dashboard cards
    const cards = document.querySelectorAll('.dashboard-card:not(.disabled)');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('h3').textContent;
            // Add navigation logic here based on card title
            console.log(`Navegando a: ${cardTitle}`);
        });
    });
});