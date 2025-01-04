
document.querySelectorAll('.cada img').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');

        // Exemplo de atribuição de informações, você pode personalizar conforme necessário
        modalImage.src = this.src; // A imagem clicada
        modalDescription.innerText = "Aqui vai uma descrição detalhada do projeto."; // Descrição do projeto

        modal.style.display = 'flex'; // Exibe a modal
    });
});

// Fechar a modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

// Fechar a modal clicando fora da área de conteúdo
window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

