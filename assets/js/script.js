
import alquilar from './alquiler.js';
import ventas from './venta.js';

const containerVenta = document.getElementById('venta');
const containerAlquiler = document.getElementById('alquiler');
const title = document.title;


const cardTemplate = (property) => {
    return ` 
    <div class="card">
      <img
        src="${property.src}"
        class="card-img-top"
        alt="${property.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${property.nombre}
        </h5>
        <p class="card-text">
          ${property.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${property.ubicacion}
        </p>
        <p>
          bathroom: 1,<i class="fas fa-bed"></i> ${property.habitaciones} |
          <i class="fas fa-bath"></i> ${property.baños}
        </p>
        <p>
        <i class="fas fa-dollar-sign"></i>${property.costo}
        </p>
        <p class=${property.fumar ? 'text-success' : 'text-danger' }>
          <i class="fas ${property.fumar ? 'fa-smoking' : 'fa-smoking-ban' }"></i>
          ${property.fumar ? 'Permitido fumar' : 'No se permite fumar'}
        </p>
        <p class="${property.mascotas ? 'text-success' : 'text-danger' }">
          <i class="fas ${property.mascotas ? 'fa-paw'  : 'fa-ban'}"></i>
          ${property.mascotas ? 'Mascotas permitidas'  : 'No se permiten mascotas'}
        </p>
      </div>
    </div>
    `;
  }	

let rowVenta;
let rowAlquiler;

if (containerVenta) { rowVenta = containerVenta.querySelector('.row')}
if (containerAlquiler) { rowAlquiler = containerAlquiler.querySelector('.row')}


document.addEventListener('DOMContentLoaded', () => { 

if (title === 'Alquiler'){
  alquilar.forEach((property) => {
    card(rowAlquiler, property)
 
  })
}else if(title === 'Ventas'){
  ventas.forEach((property) => {
    card (rowVenta, property)
 
  })
}else{
  ventas.forEach((property, index) => {
        if (index > 2) { return } 
        card (rowVenta, property)
     
      })
        alquilar.forEach((property, index) => {
      if (index > 2) { return } 
      card(rowAlquiler, property)
 
    })
}

})

const card = (fila, property) => {
  const containerCard = document.createElement('div');
    containerCard.classList.add('col-md-4', 'mb-4');
    
    const addCard = cardTemplate(property);
    containerCard.innerHTML += addCard;
    fila.appendChild(containerCard);
}
