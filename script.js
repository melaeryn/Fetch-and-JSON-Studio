// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    //hmmmm 
    response.json().then(function(json) {
        //so this should output the json file to the console?????? I think. which would be an array.
        console.log(json);
        //since this gets the JSON, we need to "add the astronauts dynamically" (see 26.3.2.3 of book?)
        //pull the container the astronauts will go into
        const containMe = document.getElementById("container");
        //idk if .length works for json, but here we go wheeeeeeeeee
        for (let i = 0; i < json.length; i++){
            containMe.innerHTML += `
            <div class="astronaut">
            <div class="bio">
               <h3>${json[i].firstName} ${json[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li>Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills}</li>
               </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
         </div>`
        }

    });
} );
})