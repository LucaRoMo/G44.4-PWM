const imagenes = [
    '../Resources/wireframe.png',
    '../Resources/twitter.png',
    '../Resources/LinkedIn.png',
    '../Resources/niños_estudiando.jpg'];
function crearGaleria(contenedor) {
    let cont = 0;

    function mostrarImagen() {
        const img = contenedor.querySelector('img');
        img.src = imagenes[cont];
    }

    function retroceder() {
        cont--;
        if (cont < 0) {
            cont = imagenes.length - 1;
        }
        mostrarImagen();
    }

    function avanzar() {
        cont++;
        if (cont >= imagenes.length) {
            cont = 0;
        }
        mostrarImagen();
    }

    contenedor.innerHTML = `
    <div class="contenedor-imagen">
      <img src="${imagenes[0]}" alt="imagenes">
    </div>
    <div class="contenedor-botones">
      <button class="atras">Atrás</button>
      <button class="adelante">Adelante</button>
    </div>
  `;

    contenedor.querySelector('.atras').addEventListener('click', retroceder);
    contenedor.querySelector('.adelante').addEventListener('click', avanzar);

    mostrarImagen();
}

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.contenedor');
    crearGaleria(contenedor);
});
