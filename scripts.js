function toggleSolucao(button) {
    const solucaoDiv = button.nextElementSibling;
    if (solucaoDiv.classList.contains('visible')) {
        solucaoDiv.classList.remove('visible');
        button.textContent = 'Ver Solução';
    } else {
        solucaoDiv.classList.add('visible');
        button.textContent = 'Ocultar Solução';
    }
}

