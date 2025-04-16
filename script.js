// Exemplo simples de interação
document.addEventListener('DOMContentLoaded', function() {
    console.log('O site foi carregado!');
    
    // Alerta quando clicar no título principal
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', function() {
        alert('Clica aqui não caraio!');
    });
});
