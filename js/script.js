const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signinBtn = document.getElementById('signin');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");

});

// Agregar evento de redirección al botón de Sign In
signinBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Reemplaza 'dashboard.html' con la ruta de tu página de destino
    window.location.href = 'menu_principal.html';
});
