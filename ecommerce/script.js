// Script para manejar la barra de búsqueda
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value.trim();
  
  // Realizar acciones con el término de búsqueda ingresado
  // Ejemplo: redireccionar a una página de resultados de búsqueda
  window.location.href = `search-results.html?query=${searchTerm}`;
});

// Script para manejar el botón "Agregar al carrito"
const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', function() {
  // Realizar acciones para agregar el producto al carrito
  // Ejemplo: mostrar un mensaje de éxito
  alert('Producto agregado al carrito');
});
