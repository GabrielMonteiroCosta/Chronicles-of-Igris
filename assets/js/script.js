'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

// Pesquisa
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");
const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      // Alterar essa linha para buscar pelo seletor dos seus elementos alvo
      // Exemplo: '.place' para todos elementos com classe 'place'
      const candidates = document.querySelectorAll('.place'); 

      let found = false;
      candidates.forEach(element => {
        const textValue = element.textContent.toLowerCase();
        if (textValue.includes(searchTerm) && !found) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight');
          setTimeout(() => element.classList.remove('highlight'), 2000);
          found = true;
        }
      });

      if (!found) {
        alert('Nenhum local encontrado com este nome!');
      }
    }
  });
}

//Cabeçalho
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
