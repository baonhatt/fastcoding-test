
document.addEventListener("DOMContentLoaded", function () {
    const resBtn = document.querySelector(".res-btn");
    const topNav = document.querySelector(".topnav");

    resBtn.addEventListener("click", function () {
        topNav.classList.toggle("active");
    });
});