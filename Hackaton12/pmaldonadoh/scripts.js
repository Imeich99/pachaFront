function ListaItems() {
    this.lista = document.querySelectorAll('.item');
    this.boton = document.querySelector('button');
    this.visible = true;
  
    this.boton.addEventListener('click', () => {
      this.visible = !this.visible;
      this.actualizarVisibilidad();
    });
  
    this.actualizarVisibilidad = function () {
      if (this.visible) {
        this.lista.forEach(item => item.style.display = 'block');
      } else {
        this.lista.forEach(item => item.style.display = 'none');
      }
    };
  }


  function ListaInteractiva(elementoLi) {
    this.li = elementoLi;
    this.parrafo = this.li.querySelector("p");
    this.visible = false;
  
    // Inicializar el estado y eventos
    this.init = function() {
      this.parrafo.style.display = "none";
      this.li.addEventListener("click", this.toggle.bind(this));
    };
  
    // Alternar la visibilidad del párrafo
    this.toggle = function() {
      if (this.visible) {
        this.parrafo.style.display = "none";
        this.visible = false;
      } else {
        this.parrafo.style.display = "block";
        this.visible = true;
      }
    };
  }
  
  // Crear instancias de ListaInteractiva para cada "li"
  const itemsLi = document.querySelectorAll("li");
  const listasInteractivas = [];
  itemsLi.forEach(function(item) {
    const listaInteractiva = new ListaInteractiva(item);
    listaInteractiva.init();
    listasInteractivas.push(listaInteractiva);
  });
  
  
  