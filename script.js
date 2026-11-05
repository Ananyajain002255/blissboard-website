// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function() {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuToggle.innerHTML = "×";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        nav.classList.remove("open");
        menuToggle.innerHTML = "☰";
    });

});


// EXPERIENCE FILTERS

const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".experience-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        cards.forEach(function(card) {

            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// ENQUIRY POPUP

const modal = document.getElementById("enquiryModal");

const closeModal = document.getElementById("closeModal");

const selectedExperience =
    document.getElementById("selectedExperience");

const enquiryButtons = document.querySelectorAll(".card-btn");


// OPEN POPUP

enquiryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const experience = button.dataset.experience;

        selectedExperience.innerText =
            "You selected: " + experience +
            ". Contact us on Instagram for upcoming dates and availability.";

        modal.classList.add("open");

    });

});


// CLOSE POPUP

closeModal.addEventListener("click", function() {

    modal.classList.remove("open");

});


// CLOSE POPUP WHEN CLICKING OUTSIDE

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        modal.classList.remove("open");
    }

});


// CLOSE POPUP USING ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        modal.classList.remove("open");
    }

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").innerText =
    new Date().getFullYear();
