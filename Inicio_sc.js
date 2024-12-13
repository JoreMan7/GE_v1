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

    // Add click events for dashboard cards
    const citasCard = document.getElementById('citas-card');
    const cursosCard = document.getElementById('cursos-card');
    const encuestaCard = document.getElementById('encuesta-card');
    const tareasCard = document.getElementById('tareas-card');
    const usuariosCard = document.getElementById('usuarios-card');

    // Navigate to corresponding page when a card is clicked
    citasCard.addEventListener('click', function() {
        window.location.href = 'citas.html';  // Redirect to Citas page
    });

    cursosCard.addEventListener('click', function() {
        window.location.href = 'cursos.html';  // Redirect to Cursos page
    });

    encuestaCard.addEventListener('click', function() {
        window.location.href = 'encuesta.html';  // Redirect to Encuesta page
    });

    tareasCard.addEventListener('click', function() {
        window.location.href = 'tareas.html';  // Redirect to Tareas page
    });

    usuariosCard.addEventListener('click', function() {
        window.location.href = 'usuarios.html';  // Redirect to Usuarios page
    });

    // Optional: Add hover effects for dashboard cards
    const cards = document.querySelectorAll('.dashboard-card:not(.disabled)');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
