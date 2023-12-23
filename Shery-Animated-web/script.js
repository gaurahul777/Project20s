//smooth scroll effect
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//gsap to animate

gsap.from('.nlink',
    {
        stagger: .2,
      y: 10,
      ease:Power2,
        duration:1,
        opacity:0,
  })

  Shery.textAnimate("#headings h1" ,{
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from('.anim2', {
  y: 50,
  stagger:.3,
  opacity: 0,
  ease: Expo,
  duration:1,
})
  
Shery.imageEffect("#imagentext img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11.57, range: [0, 100] },
    uFrequencyY: { value: 4.96, range: [0, 100] },
    uFrequencyZ: { value: 45.45, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.7 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.56, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  // debug: true,
});

Shery.imageEffect(".imgeff img", {
  style: 5,
  config: {
    a: { value: 1.96, range: [0, 30] },
    b: { value: -0.69, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.666666692592187 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.3, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  // debug: true,
});

gsap.from("#imagentext img", {
  y: "70",
  opacity: 0,
  ease:Expo,
  duration: 2,
  
});

Shery.imageEffect("#bimg", {
  style: 5,
  // debug: true,
  gooey: true,

  config: {
    a: { value: 0.46, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.7130432982706285 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.46, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.27, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 3.66, range: [0, 10] },
    metaball: { value: 0.15, range: [0, 2], _gsap: { id: 31 } },
    discard_threshold: { value: 0.67, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.4, range: [0, 2] },
    noise_scale: { value: 8.4, range: [0, 100] },
  },
});


document.querySelector('#ftext button')
  .addEventListener('mouseover', function () {
    gsap.to('#future video', {
      opacity: 1,
      duration: 1,
      ease:Power4,
    })
})
document.querySelector('#ftext button')
  .addEventListener('mouseleave', function () {
    gsap.to("#future video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
    });
})