const rect = document.querySelector('#center');

//mousemove event :-jab bhi rectangle per mouse move hoga yeh function chlega
rect.addEventListener('mousemove', function (details) {
    // console.log('hey');
    // console.log(rect.getBoundingClientRect());//location coordinate dega

    let rectangleLocation=rect.getBoundingClientRect()
    console.log(details.clientX-rectangleLocation.left);//details me mouse ki location mil jati hain aur clientx mouse ki location x-axis me
    const insiderectval = details.clientX - rectangleLocation.left;
    if (insiderectval < rectangleLocation.width/2) {
        // console.log('left');
        let redColor = gsap.utils.mapRange(0, (rectangleLocation.width/2), 255, 0,insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease:Power4,
        })
    } else {
        // console.log('right');
        let blueColor = gsap.utils.mapRange((rectangleLocation.width / 2), rectangleLocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease:Power4,
        })
    }
})

rect.addEventListener('mouseleave', function () {
    // rect.style.backgroundColor = 'white';//yeh chl nhi rha gsap isko overright ker de rha hain to gsap se he kerte hain
    gsap.to(rect, {
        backgroundColor:'white',
    })
})
//documentation for more details this is used to map some value to other
// console.log(gsap.utils.mapRange(inmin,inmax,outmap1,outmap2,valuetomap));
// console.log(gsap.utils.mapRange(0,250,255,0,0));