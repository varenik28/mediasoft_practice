document
    .querySelector(".menu-burger")
    .addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector(".menu").classList.toggle("open");
    });

const swiper = new Swiper(".swiper", {

    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: "#next-button",
        prevEl: "#prev-button",
    },
})