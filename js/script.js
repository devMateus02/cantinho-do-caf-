const frase = 'Torne seu dia ótimo com o nosso café especial. '

const elemento = document.getElementById('frase')


function escreveFrase(texto, i= 0) {
    if(i < texto.length){
         elemento.textContent += texto.charAt(i);
         setTimeout(() => escreveFrase(texto, i + 1), 50);
    }
}

window.addEventListener('load', function() {
    escreveFrase(frase)
  });

  
  // animação da imagem do café

window.addEventListener('load', () => {
  const cafeImg = document.getElementById('cafe');
  cafeImg.classList.add('deslizarEsquerda');

  // animação com IntersectionObserver
  
  const targets = document.querySelectorAll('.nos-img, .food, .carousel-inner .card ');


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry=> {
      if (entry.isIntersecting) {

     
        entry.target.classList.add('visible', 'slideY');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});
 
const galeriaItens = document.querySelectorAll('.galeria-itens');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.galeria-itens');
      items.forEach((item, index) => {
        item.classList.add('slide-delay');
        item.style.animationDelay = `${index * 0.4}s`; // delay crescente
      });
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

const galeriaContainer = document.querySelector('.galeria');
observer.observe(galeriaContainer);

const mobileMenu = document.querySelector('.mobile-menu')
const nav = document.querySelector('.nav')


mobileMenu.addEventListener('click', () => { 
 mobileMenu.classList.toggle("active")
 nav.classList.toggle("active")

} )




