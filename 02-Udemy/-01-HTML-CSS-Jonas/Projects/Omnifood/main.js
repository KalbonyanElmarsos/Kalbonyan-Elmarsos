//-----01 Set current Year
let year = document.querySelector("#year");
let currentYear = new Date().getFullYear();
year.textContent = currentYear;
//-------

//-----02  //nav-active

const btnForNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnForNav.addEventListener("click", function () {
  header.classList.toggle("nav-active");
});

//-------

//-----03 Smooth scrolling animation
const links = document.querySelectorAll("a:link");
// console.log(links)
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-active");
  });
});

//-------

//-----03 Sticky navigation
const section = document.querySelector(".section-how");
let he = document.querySelector(".scrolling");

window.onscroll = () => {
  // 
  if (window.scrollY > section.offsetTop) {
    // Add class
    he.classList.add("sticky");
  } else {
    // remove class 
    he.classList.remove("sticky");
    he.classList.remove("nav-active");
  }
};

// -------

//-------4 Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
// -------
