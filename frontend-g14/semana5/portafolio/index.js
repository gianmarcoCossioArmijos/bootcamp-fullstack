const scrollButton = document.querySelector(".app_scrolltop");

document.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
    scrollButton.style.visibility = "visible";
    scrollButton.style.opacity = 1;
    } else {
    scrollButton.style.visibility = "hidden";
    scrollButton.style.opacity = 0;
    }
});