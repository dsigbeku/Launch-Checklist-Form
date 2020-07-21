let destination = [
   {
      "name": "Tatooine",
      "diameter": "10465 km",
      "star": "Tatoo I & Tatoo II",
      "distance": "43000 light years from galactic core",
      "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
      "moons": 3
   },
   {
       "name": "Pern",
       "diameter": "measurement is under dispute",
       "star": "Alpha Sagittarius (a.k.a. Rukbat)",
       "distance": "Varies - find a library",
       "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
       "moons": 2
   },
   {
       "name": "Saturn/Titan",
       "diameter": "5149.5 km",
       "star": "Sol",
       "distance": "1.4 billion km from Earth",
       "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
       "moons": 0
   },
   {
       "name": "Mars",
       "diameter": "6779 km",
       "star": "Sol",
       "distance": "225 million km from Earth",
       "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
       "moons": 2
   },
   {
       "name": "K2-18b",
       "diameter": "34500 km",
       "star": "K2-18",
       "distance": "110 light years from Earth",
       "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
       "moons": "unknown"
   },
   {
       "name": "Jupiter/Europa",
       "diameter": "3,121.6 km",
       "star": "Sol",
       "distance": "628.3 million km from Earth",
       "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
       "moons": 0
   }
]

// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let missionTarget = document.querySelector("#missionTarget");
   let currentDestination = destination[Math.floor(Math.random() * destination.length-1)]
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
      <li>Name: ${currentDestination.name}</li>
      <li>Diameter: ${currentDestination.diameter}</li>
      <li>Star: ${currentDestination.star}</li>
      <li>Distance from Earth: ${currentDestination.distance}</li>
      <li>Number of Moons: ${currentDestination.moons}</li>
   </ol>
   <img src="${currentDestination.image}">`


   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("#pilotName");
      let copilotName = document.querySelector("#copilotName");
      let fuelLevel = document.querySelector("#fuelLevel");
      let cargoMass = document.querySelector("#cargoMass");
      let pilotStatus = document.querySelector("#pilotStatus");
      let copilotStatus = document.querySelector("#copilotStatus");
      let fuelStatus = document.querySelector("#fuelStatus");
      let cargoStatus = document.querySelector("#cargoStatus");
      let faultyItems = document.querySelector("#faultyItems");
      let launchStatus = document.querySelector("#launchStatus");

      if(isNaN(pilotName.value) === false || pilotName.value === "" || isNaN(copilotName.value) === false || copilotName.value === "" || isNaN(fuelLevel.value) === true|| fuelLevel.value === "" || isNaN(cargoMass.value) === true || cargoMass.value === "") {
         alert("All input are required.Please input correct value");
         event.preventDefault();
      }
      else{
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`

         copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`
        
         
         if(Number(fuelLevel.value) < 10000) {
            fuelStatus.innerHTML = 'fuel level too low for launch'
            launchStatus.innerHTML = 'Shuttle not ready for launch'
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible"
            event.preventDefault();
            
         }
         else if(Number(cargoMass.value) > 10000) {
            cargoStatus.innerHTML = 'cargo mass is too high for launch'
            launchStatus.innerHTML = 'Shuttle not ready for launch'
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible"
            event.preventDefault();
         }
         else{
            launchStatus.innerHTML = 'Shuttle ready for launch'
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "visible"
         }
      }
     
   });

   });