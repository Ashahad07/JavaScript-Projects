let hours = document.getElementById("hrs");
let mintes = document.getElementById("mins");
let second = document.getElementById("sec");

// let a =hours > 12 ? hours=hours - 12 : hours;
// console.log(a)
        

setInterval(() => {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    
    // Convert hours to 12-hour format
    currentHours = currentHours % 12 || 12;

    hours.innerHTML = currentHours;
    mintes.innerHTML = currentTime.getMinutes();
    second.innerHTML = currentTime.getSeconds();
});







// let hours = document.getElementById("hrs");
// let minutes = document.getElementById("mins");
// let seconds = document.getElementById("sec");

// setInterval(() => {
//     let currentTime = new Date();
//     let currentHours = currentTime.getHours();
  
    
//     // Convert hours to 12-hour format
//     currentHours = currentHours % 12 || 12;

//     hours.innerHTML = currentHours;
//     minutes.innerHTML = currentTime.getMinutes();
//     seconds.innerHTML = currentTime.getSeconds();

//     // Display AM/PM
//     document.getElementById("ampm").innerHTML = ampm;
// });
