/*
=========================
Navigation
=========================
*/
const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

// Open and Close Navbar
navOpen.addEventListener("click", () => {
    const listHeight = navList.getBoundingClientRect().height;
    const containerHeight = navContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        navContainer.style.height = `${listHeight}px`;
    } else {
        navContainer.style.height = "0px";
    }
});


