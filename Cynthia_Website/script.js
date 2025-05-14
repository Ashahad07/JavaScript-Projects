var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAmin() {
  var tl = gsap.timeline();

  tl.from("#hero-nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      ease: Expo.easeInOut,
      duration: 1,
      delay: -1, // ! just to start anime before it
      stagger: 0.2, // ! This is to get a delay for each element and delay
    })
    .from("#hero-footer", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}


function circleChapta() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    //? It will clear timeout each time when the mouse will stop moving

    //! Two ways to write it
    //* var xdiff;
    //* var ydiff;

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    //! Clamp is used to find a nearist number like Ex:- 100-200 and the number is 204 then it will covert it into 200 when is nearist number betwen 100 to 2

    //* xscale = gsap.utlis.clamp(0.8, 1.2, xdiff);
    //* yscale = gsap.utlis.clamp(0.8, 1.2, ydiff);
    // console.log(xdiff, ydiff);

    circleMouseFollower(xscale, yscale);

   timeout= setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
 window.addEventListener("mousemove", function (dets) {
    //! Know that its working and showing the postion of X and Y
    //  console.log(dets.clientX, dets.clientY)
    var crsr = document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    // console.log(a)
  });
}

circleChapta();
circleMouseFollower();
firstPageAmin();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  // ! Tring to scale bigger after getting hover on it
  // var crsr = document.querySelector("#minicircle");

  // elem.addEventListener("mouseenter", function() {
  //   crsr.style.transform = "scale:(5)";
  //   crsr.style.border = "1px solid #fff";
  //   crsr.style.backgroundColor = "black";
  // });
  
  // elem.addEventListener("mouseleave", function() {
  //   crsr.style.transform = "scale(1)";
  //   crsr.style.border = "0px solid white";
  //   crsr.style.backgroundColor = "white";
  // });

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  

  elem.addEventListener("mousemove", function (dets) {
    // console.log("hello ")
    // console.log(details.clientX, details.clientY)

    // ! it is used to know to difference
    // console.log(details.clientX - elem.getBoundingClientRect().top);

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    // gsap.utils.clamp(-20,20, diff)
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
