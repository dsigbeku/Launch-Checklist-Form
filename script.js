

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

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      let currentDestination = json[Math.floor(Math.random() * json.length-1)]
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
      <li>Name: ${currentDestination.name}</li>
      <li>Diameter: ${currentDestination.diameter}</li>
      <li>Star: ${currentDestination.star}</li>
      <li>Distance from Earth: ${currentDestination.distance}</li>
      <li>Number of Moons: ${currentDestination.moons}</li>
   </ol>
   <img src="${currentDestination.image}">`

      });
   });
   

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
            event.preventDefault();
         }
      }
     
   });

   });