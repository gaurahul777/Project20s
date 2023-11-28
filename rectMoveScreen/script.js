//puri window per event lagana hain to window per lgao
window.addEventListener('mousemove', function (details) {
    var rect = document.querySelector('#rect');
    //mujhe x axis per he rectangle move kerwana hain to isliye me clientX me jyada interested hu
    // console.log(details.clientX);
    //and me gsap ka use ker rha hu iske bina bhi ker sakta hu
  const xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    this.window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );
//   const yval = gsap.utils.mapRange(
//     0,
//     window.innerHeight,
//     100 + rect.getBoundingClientRect().height / 2,
//     this.window.innerWidth - (100 + rect.getBoundingClientRect().height / 2),
//     details.clientX
//   );

    gsap.to('#rect', {
        // top: details.clientY + 'px',
        // top: yval,
        // left: details.clientX + 'px',
        left: xval,
        ease:Power3,
    });
})

// const rect = document.querySelector('#rect');

