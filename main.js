// Função para obter o ID da página a partir da URL hash
function getPageIdFromHash() {
  return window.location.hash.substring(1); // Remove o '#' da hash
}

// Função para atualizar a classe 'active' na navbar
function updateActiveClass() {
  // Obtém o ID atual da página
  const currentPageId = getPageIdFromHash();

  // Seleciona todos os links da navbar
  const navbarItems = document.querySelectorAll('.nav-link');

  // Remove a classe 'active' de todos os itens e aplica ao item correto
  navbarItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
          const itemId = href.substring(1); // Remove o '#' do href
          if (itemId === currentPageId) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      }
  });
}

// Atualiza a classe 'active' na carga inicial da página
updateActiveClass();

// Adiciona um event listener para o evento 'hashchange'
window.addEventListener('hashchange', updateActiveClass);
