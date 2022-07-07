///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
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

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
/***************************************
 * ******************
 * ***ACTIVATE MOBIEL NAVIGATON
 * *****************
 ****************************************  */
const navBtn = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

// adding a listener
navBtn.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});
/***************************************
 * ******************
 * ***Implement smooth scrolling
 * *****************
 ****************************************  */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefAttr = link.getAttribute("href");

    // scroll to top of page
    if (hrefAttr === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (hrefAttr !== "#" && hrefAttr.startsWith("#")) {
      const sectionElement = document.querySelector(hrefAttr);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav--link")) {
      headerElement.classList.toggle("nav-open");
      // console.log(link);
    }
  });
});
/***************************************
 * ******************
 * ***Implement sticky header
 * *****************
 ****************************************  */
const heroSection = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (viewPortEntries) {
    const currentView = viewPortEntries[0];

    if (currentView.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (currentView.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);
// const sectionHeroEl = document.querySelector(".hero-section");
// const virtaulBody = document.querySelector(".virtualBody");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       virtaulBody.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       virtaulBody.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
