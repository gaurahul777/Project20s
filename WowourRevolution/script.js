


const btn = document.querySelector("#throttle");
// Throttling Function
const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    // console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

// btn.addEventListener(
//   "click",
//   throttleFunction(() => {
//     console.log("button is clicked");
//   }, 1500)
// );

const center = document.querySelector("#center");
center.addEventListener("mousemove", throttleFunction((details) => {
    
    //your less repetition code yha ayega
    // console.log('challa')
    let div = document.createElement('div');
    div.classList.add('imagediv')
    
    div.style.left=details.clientX+'px'
    div.style.top=details.clientY+'px'
    // document.querySelector('#center').appendChild(div)//not working properly as suggest do body always to add bcz center is absolute
    
    //apko ek array bna na padega usme images ke url rkhni pdegyi aur ek random num ke bases per ek url pickup kerna pdega
    
    let img = document.createElement('img')
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
        
        div.appendChild(img)
    document.body.appendChild(div)

    gsap.to(img, {
        y: '0',
        ease: Power1,
        duration: .2,
    });

    gsap.to(img, {
        y: '100',
        delay:.3,//uper wali.2 per end hojegyi uske bad .3 per
        ease: Power2,
        // duration: .2,
    });
    setTimeout(function () {
        div.remove()
    },2000)
},500));