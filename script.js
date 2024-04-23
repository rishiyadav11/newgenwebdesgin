function loco(){
  const scroll = new LocomotiveScroll({
      el: document.querySelector('main'),
      smooth: true
  });
}

loco();

gsap.from(".nlinks",{
  stagger:.2,
  y:10,
  opacity:0,
  duration:0.5,
  ease: "power1"

})
Shery.textAnimate("#c2-text h1", {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2",{
  stagger:.3,
  y:50,
  opacity:0,
  duration:1,
  ease: Expo
})

Shery.imageEffect("#c2-img-div img", {
  style: 3,
  config:{"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":5.34,"range":[0,100]},"uFrequencyZ":{"value":40.46,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7812555709177488},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});


Shery.imageEffect(".imgff img", {
  style: 5,
  config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.76,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7466803576564989},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});



Shery.imageEffect("#sec-4-img", {
  style: 5,
  config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.6554189018796954},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.11,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
  gooey:true,
});

let join = document.querySelector("#join");
join.addEventListener("mouseover", function(){
  gsap.to("#sec-5 video",{
      opacity:1,
      duration:1,
      ease:"power4"
  })
})





join.addEventListener("mouseleave", function(){
  gsap.to("#sec-5 video",{
      opacity:0,
      duration:1,
      ease:"power4"
  })

})


// Touchstart event listener
join.addEventListener("touchstart", function() {
  join.textContent = "Hold it!";
  gsap.to("#sec-5 video", {
    opacity: 1,
    duration: 1,
    ease: "power4"
  });
});

// Touchend event listener
join.addEventListener("touchend", function() {
  join.textContent = "join the movement";
  gsap.to("#sec-5 video", {
    opacity: 0,
    duration: 1,
    ease: "power4"
  });
});

