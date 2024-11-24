function toggleFAQ(id) {
  const content = document.getElementById(id) // Seleciona o conteúdo da resposta
  const icon = document.getElementById(`${id}-icon`) // Seleciona o ícone SVG

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden') // Mostra a resposta
    icon.classList.add('rotate-180') // Gira o ícone para indicar que está expandido
  } else {
    content.classList.add('hidden') // Esconde a resposta
    icon.classList.remove('rotate-180') // Volta o ícone para o estado original
  }
}

    function openModal() {
      document.getElementById('modal').classList.remove('hidden')
    }

    // Função para fechar o modal
    function closeModal() {
      document.getElementById('modal').classList.add('hidden')
    }