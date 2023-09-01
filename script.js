const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const container = document.getElementById('container');

// Aquí se cargan datos desde localStorage, si es que existen
if (localStorage.getItem('name')) {
  nameInput.value = localStorage.getItem('name');
}

if (localStorage.getItem('lastname')) {
  lastnameInput.value = localStorage.getItem('lastname');
}

// Esta función muestra datos en el contenedor y los guarda en localStorage
function updateContainer() {
  const name = nameInput.value;
  const lastname = lastnameInput.value;

  // Aquí se muestra la info en el contenedor
  container.textContent = `Nombre: ${name}, Apellido: ${lastname}`;

  // Aquí se almacenan los datos en localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('lastname', lastname);
}

// Asocia el evento input a la función
nameInput.addEventListener('input', updateContainer);
lastnameInput.addEventListener('input', updateContainer);

updateContainer();