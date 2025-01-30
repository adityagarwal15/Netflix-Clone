// Text Animations
TweenMax.staggerFrom(".titles > div", 0.8, {
    x: "-60",
    ease: Power3.easeInOut,
    opacity: "0"
}, 2);

TweenMax.staggerTo(".titles > div", 0.8, {
    x: "60",
    ease: Power3.easeInOut,
    delay: 1.2,
    opacity: "0"
}, 2);

TweenMax.staggerFrom("li", 3, {
    x: "-1600",
    delay: 4.2,
    ease: Expo.easeInOut
}, 0.16);

TweenMax.staggerTo("li", 2.6, {
    x: "1600",
    delay: 6.8,
    ease: Expo.easeInOut
}, 0.2);

// Letter Animation
var textWrapper = document.querySelector(".header");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline().add({
    targets: ".header .letter",
    opacity: [0, 1],
    translateY: [80, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 8400 + 40 * i,
});

// Show Arrow After Animations
setTimeout(() => {
    document.getElementById("scrollArrow").style.opacity = "1";
    document.getElementById("scrollArrow").style.transform = "translateY(0)";
}, 9500);

// Redirect to Home Page
function redirectToHome() {
    window.location.href = "home.html";
}
