const c = console.log.bind(console)
// HAMBURGER MENU
const hamBtn = document.querySelector('.ham-btn')
const closeBtn = document.querySelector('.close-btn')
const hamMenu = document.querySelector('.ham-menu')

hamBtn.addEventListener('click', () => {
  if (!hamMenu.classList.contains('.show')) {
    hamMenu.classList.add('show')
  }
  hamBtn.setAttribute('id', 'hidden')
});
closeBtn.addEventListener('click', () => {
  hamMenu.classList.remove('show')
  hamBtn.removeAttribute('id')

})

const data = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}
// DESTINATION
const planet = document.querySelectorAll('.planet')
let planetImg = document.querySelector('.planet-img img')
let planetName = document.querySelector('.moon-text h2')
let planetDescription = document.querySelector('.moon-text p')
let planetDistance = document.querySelector('.distance h3')
let planetTravel = document.querySelector('.travel h3')
const [moon,mars,europa,titan]=data.destinations
for (const btn of planet) {
  btn.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Moon':
        for (const btn of planet) {
          if (btn.innerText === 'Moon') {
            btn.classList.add('active')
          } else {
            btn.classList.remove('active')  
          }
        }
        planetImg.src=moon.images.png
        planetName.innerText=moon.name
        planetDescription.innerText=moon.description
        planetDistance.innerText=moon.distance
        planetTravel.innerText=moon.travel

          break;
      case 'Mars':
        for (const btn of planet) {
          if (btn.innerText === 'Mars') {
            btn.classList.add('active')
          } else {
            btn.classList.remove('active')  
          }
        }
        planetImg.src=mars.images.png
        planetName.innerText=mars.name
        planetDescription.innerText=mars.description
        planetDistance.innerText=mars.distance
        planetTravel.innerText=mars.travel

          break;
      case 'Europa':
        for (const btn of planet) {
          if (btn.innerText === 'Europa') {
            btn.classList.add('active')
          } else {
            btn.classList.remove('active')  
          }
        }
        planetImg.src=europa.images.png
        planetName.innerText=europa.name
        planetDescription.innerText=europa.description
        planetDistance.innerText=europa.distance
        planetTravel.innerText=europa.travel

          break;
      case 'Titan':
        for (const btn of planet) {
          if (btn.innerText === 'Titan') {
            btn.classList.add('active')
          } else {
            btn.classList.remove('active')  
          }
        }
        planetImg.src=titan.images.png
        planetName.innerText=titan.name
        planetDescription.innerText=titan.description
        planetDistance.innerText=titan.distance
        planetTravel.innerText=titan.travel

          break;
    
    }
  })
}



