document.addEventListener("DOMContentLoaded", () => {
    const phoneIcon = document.querySelector("#phoneImg");
    const phoneBox = document.querySelector(".phone");
    const nameEl = document.querySelector(".name");

    // Update name text
    nameEl.textContent = "Name: Jesus";

    // Show/Hide phone number on hover
    phoneIcon.addEventListener("mouseenter", () => {
        phoneBox.classList.add("visible");
    });

    phoneIcon.addEventListener("mouseleave", () => {
        phoneBox.classList.remove("visible");
    });
});

