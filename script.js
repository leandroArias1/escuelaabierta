document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const curso = document.getElementById('curso').value;
    const division = document.getElementById('division').value;
    

    if (nombre && apellido && curso && division) {
        
        window.location.href = "invitacion.html";
    } else {
        alert('Por favor, completa todos los campos.');
    }
});