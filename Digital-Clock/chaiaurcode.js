const clock = document.querySelector("#clock");

// const date = new Date();

// const hr = date.getHours().toLocaleString('en-US',{hour12:true})
// const min = date.getMinutes()
// const sec = date.getSeconds()

// const time = date.toLocaleTimeString()

setInterval(() => {
  const date = new Date();
  clock.innerHTML =date.toLocaleTimeString();
}, 1000);


