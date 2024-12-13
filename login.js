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
            const response = await simulateApiCall(documentType, documentNumber, password);
            
            if (response.success) {
                hideError(); // Borra el mensaje si es necesario
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
        errorMessage.style.display = 'block'; // Asegúrate de mostrar el mensaje
    }

    function hideError() {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none'; // Opcional: para ocultar el mensaje si es necesario
    }

    async function simulateApiCall(documentType, documentNumber, password) {
        await new Promise(resolve => setTimeout(resolve, 1000));
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
