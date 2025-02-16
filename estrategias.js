const ulestrategia = document.getElementById('mejoresjuegos');

// Importante: Asume que el array de estrategias ya está definido en este archivo.
// Si no lo está, debes importar el array desde donde esté definido.
const estrategias = [
    { nombre: "Age of Empires II", desarrollador: "Ensemble Studios", año: 1999 },
    { nombre: "StarCraft", desarrollador: "Blizzard Entertainment", año: 1998 },
    { nombre: "Civilization VI", desarrollador: "Firaxis Games", año: 2016 },
    { nombre: "Total War: Shogun 2", desarrollador: "Creative Assembly", año: 2011 },
    { nombre: "Command & Conquer: Red Alert 2", desarrollador: "Westwood Studios", año: 2000 },
    { nombre: "XCOM 2", desarrollador: "Firaxis Games", año: 2016 },
    { nombre: "Warcraft III: Reign of Chaos", desarrollador: "Blizzard Entertainment", año: 2002 },
    { nombre: "Europa Universalis IV", desarrollador: "Paradox Development Studio", año: 2013 },
    { nombre: "Company of Heroes", desarrollador: "Relic Entertainment", año: 2006 },
    { nombre: "Halo Wars 2", desarrollador: "Creative Assembly y 343 Industries", año: 2017 }
];
  // ... más estrategias


console.log(estrategias); // Para verificar que el array se cargue correctamente

estrategias.forEach(estrategia => {  // Usar 'estrategia' en singular como parámetro

  const li = document.createElement('li');
  const enlace = document.createElement('a');

  enlace.textContent = `${estrategia.nombre} es del game: ${estrategia.juego}`; // Interpolación correcta

  li.appendChild(enlace);
  ulestrategia.appendChild(li);
});
