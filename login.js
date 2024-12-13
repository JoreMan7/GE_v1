document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const documentType = document.getElementById('document-type').value;
        const documentNumber = document.getElementById('document-number').value;
        const password = passwordInput.value;

        if (!documentType || !documentNumber || !password) {
            showError('Por favor, complete todos los campos.');
            return;
        }

        try {
            // Aquí deberías implementar la lógica real de autenticación con una llamada a tu API
            const response = await simulateApiCall(documentType, documentNumber, password);
            
            if (response.success) {
                errorMessage.textContent = '';
                //alert('Inicio de sesión exitoso');
                // Redirigir a la página de administración
                window.location.href = 'Inicio.html';
            } else {
                showError(response.message);
            }
        } catch (error) {
            showError('Error en el servidor. Por favor, intente más tarde.');
        }
    });

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('show');
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.opacity = '1';
        setTimeout(() => {
            errorMessage.style.opacity = '0';
        }, 3000);
    }

    // Simula una llamada a la API
    async function simulateApiCall(documentType, documentNumber, password) {
        // Simula un retraso de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Aquí deberías hacer una verdadera llamada a tu API de autenticación
        // Por ahora, usaremos una lógica simple para demostración
        const validCredentials = {
            cc: { number: '12345678', password: 'iglesia2024' },
            ce: { number: '87654321', password: 'extranjero2024' },
            pa: { number: 'AB123456', password: 'pasaporte2024' },
            pep: { number: 'PEP78901', password: 'permiso2024' }
        };

        const userCredentials = validCredentials[documentType];

        if (userCredentials && 
            userCredentials.number === documentNumber && 
            userCredentials.password === password) {
            return { success: true };
        } else {
            return { 
                success: false, 
                message: 'Tipo de documento, número de documento o contraseña incorrectos' 
            };
        }
    }
});