// Rola suavemente para a seção do mapa ao clicar no botão
document.addEventListener('DOMContentLoaded', function() {
    const botaoMapa = document.querySelector('.btn-mapa');

    botaoMapa.addEventListener('click', function(e) {
        e.preventDefault();
        const mapa = document.querySelector('#mapa');
        mapa.scrollIntoView({ behavior: 'smooth' });
    });
});
