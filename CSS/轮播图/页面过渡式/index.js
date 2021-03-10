let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slideshow .slide");
let bars = document.querySelectorAll(".bars .bar");
let dots = document.querySelectorAll(".nav-dots .dot a");
let slideTitles = document.querySelectorAll(".slide-title");
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
let easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";

let staggeredSlideIn = (element, delay) => {
    return element.animate(
        [
            { transform: "scaleY(0)", transformOrigin: "top" },
            { transform: "scaleY(1)", transformOrigin: "top" }
        ],
        {
            duration: 800,
            easing: easeInOutQuart,
            fill: "forwards",
            delay: 80 * delay
        }
    );
};

let staggeredSlideOut = (element, delay) => {
    return element.animate(
        [
            { transorm: "scale(1)", transformOrigin: "top" },
            { transformOrigin: "bottom", offset: 0.001 },
            { transform: "scale(0)", transformOrigin: "bottom" }
        ],
        {
            duration: 800,
            easing: easeInOutQuart,
            fill: "forwards",
            delay: 80 * delay
          }
    )
};

let fadeOut = (element) => {
    return element.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-100%)" }
      ],
      {
        duration: 600,
        easing: easeOutCubic,
        fill: "forwards"
      }
    );
};


let fadeIn = (element) => {
    return element.animate(
        [
          { opacity: 0, transform: "translateY(100%)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 800,
          easing: easeOutCubic,
          fill: "forwards",
          delay: 350
        }
      );
};


let pageTransition = (activeIndex) => {
    slideTitles.forEach(slideTitle => fadeOut(slideTitle));
    Promise.all(
        Array.from(bars).map((bar, i) => staggeredSlideIn(bar, i).finished)
    ).then(() => {
        setActiveIndex(activeIndex);
        bars.forEach((bar, i) => {
            staggeredSlideOut(bar, i);
          });
        slideTitles.forEach(slideTitle => fadeIn(slideTitle));
    })
};

let setActiveIndex = (activeIndex) => {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[activeIndex].classList.add("active");
    slideshow.style.setProperty(
        "--active-index",
        `${activeIndex}`
    );
    slides.forEach(slide => slide.style.zIndex = `-1`);
    slides[activeIndex].style.zIndex = `0`;
};

dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
    dot.addEventListener("click", () => {
        let currentActiveIndex = slideshow.style.getPropertyValue(
            "--active-index"
          );
        
    
        if(Number(currentActiveIndex) !== activeIndex) {
            pageTransition(activeIndex);
        }
    })
});