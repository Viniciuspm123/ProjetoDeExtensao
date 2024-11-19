document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verMais').addEventListener('click', function(event) {
        event.preventDefault();
        const textoExtra = document.getElementById('textoExtra');
        textoExtra.classList.toggle('hidden'); 
        this.textContent = textoExtra.classList.contains('hidden') ? 'Ver mais' : 'Ver menos';
    });
});