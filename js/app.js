// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");

});
// ********** navbar fixed ************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
    if (window.pageYOffset > 500) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links

const topLink = document.querySelector(".top-link");


// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(link => {
//   link.addEventListener("click", e => {
//     // prevent default
//     e.preventDefault();
//     links.classList.remove("show-links");

//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     //
//     let position;
//     if (navbar.classList.contains("fixed")) {
//       position = element.offsetTop - 62;
//     } else {
//       position = element.offsetTop - 124;
//     }
//     if (window.innerWidth < 992) {
//       if (navbar.classList.contains("fixed")) {
//         position = element.offsetTop - 62;
//       } else {
//         position = element.offsetTop - 332 - 62;
//       }
//     }
//     window.scrollTo({
//       left: 0,
//       // top: element.offsetTop,
//       top: position,
//       behavior: "smooth"
//     });
//     links.style.height = 0;
//   });
// });


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();// prevent navigation
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed");
    let position = element.offsetTop - navHeight; //it represents the position of the top element on pixels

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    if(links.classList.contains("show-links")){
      links.classList.remove("show-links"); //this is to collapse teh menu bar if the nav-links are pressed
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
    // close
    links.style.height.toggle;
  });
});
// calculate heights


