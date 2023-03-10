let planets = [
    { name: 'mercury',moons: 0 },
    { name: 'Venus', moons: 0},
    { name: 'Earth', moons: 1},
    { name: 'Mars', moons: 2},
    { name: 'Jupiter', moons: 67},
    { name: 'Satur', moons: 62},
    { name: 'Uranus', moons: 27},
    { name: 'Neptune', moons: 14}
];

const listPlanets = document.querySelector('.listPlanets')

planets.forEach(planet =>{
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.name.toLowerCase());
    listPlanets.appendChild(planetDiv);
    
    for (let i=1;i <= planet.moons;i++){
        let moonDiv = document.createElement('div');
        moonDiv.classList.add('moon', planet.name.toLowerCase());
        let moveMoon = (90 +(i*30)) + 'px';
        moonDiv.style.left =moveMoon;
        planetDiv.appendChild(moonDiv);
    }
})