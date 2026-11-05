// ======================================
// BLISSBOARD WEBSITE - JAVASCRIPT
// ======================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    menuToggle.innerText =
        navLinks.classList.contains("open") ? "×" : "☰";

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");
        menuToggle.innerText = "☰";

    });

});


// ======================================
// EXPERIENCE SEARCH, FILTER AND SORT
// ======================================

const filterButtons = document.querySelectorAll(".filter");
const cards = Array.from(document.querySelectorAll(".experience-card"));

const searchInput = document.getElementById("experienceSearch");
const sortSelect = document.getElementById("sortExperiences");
const showSavedButton = document.getElementById("showSaved");

const savedCount = document.getElementById("savedCount");
const noResults = document.getElementById("noResults");

let currentFilter = "all";
let showOnlySaved = false;


// LOAD SAVED EXPERIENCES

let savedExperiences = [];

try {

    savedExperiences = JSON.parse(
        localStorage.getItem("blissboardSaved") || "[]"
    );

    if (!Array.isArray(savedExperiences)) {
        savedExperiences = [];
    }

} catch (error) {

    savedExperiences = [];

}


// UPDATE SAVED COUNT

function updateSavedCount() {

    savedCount.innerText = savedExperiences.length;

}


// ADD SAVE BUTTON TO EVERY EXPERIENCE CARD

cards.forEach(function (card) {

    const title = card.querySelector("h3").innerText;

    const saveButton = document.createElement("button");

    saveButton.className = "save-experience";

    saveButton.type = "button";

    card.appendChild(saveButton);


    function updateSaveButton() {

        if (savedExperiences.includes(title)) {

            saveButton.classList.add("saved");
            saveButton.innerText = "♥ Saved";

        } else {

            saveButton.classList.remove("saved");
            saveButton.innerText = "♡ Save Experience";

        }

    }


    updateSaveButton();


    saveButton.addEventListener("click", function () {

        if (savedExperiences.includes(title)) {

            savedExperiences = savedExperiences.filter(
                function (item) {
                    return item !== title;
                }
            );

        } else {

            savedExperiences.push(title);

        }


        localStorage.setItem(
            "blissboardSaved",
            JSON.stringify(savedExperiences)
        );

        updateSaveButton();
        updateSavedCount();
        updateCards();

    });

});


// UPDATE VISIBLE EXPERIENCE CARDS

function updateCards() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;


    cards.forEach(function (card) {

        const title = card.querySelector("h3").innerText.toLowerCase();

        const description = card.querySelector("p").innerText.toLowerCase();

        const category = card.dataset.category;


        const categoryMatch =
            currentFilter === "all" ||
            category === currentFilter;


        const searchMatch =
            title.includes(searchText) ||
            description.includes(searchText);


        const isSaved = savedExperiences.includes(
            card.querySelector("h3").innerText
        );


        const savedMatch = !showOnlySaved || isSaved;


        const shouldShow =
            categoryMatch && searchMatch && savedMatch;


        card.classList.toggle("hidden", !shouldShow);


        if (shouldShow) {
            visibleCount++;
        }

    });


    noResults.classList.toggle("visible", visibleCount === 0);

}


// CATEGORY FILTERS

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });


        button.classList.add("active");

        currentFilter = button.dataset.filter;

        showOnlySaved = false;

        showSavedButton.classList.remove("active");

        updateCards();

    });

});


// SEARCH

searchInput.addEventListener("input", function () {

    updateCards();

});


// SHOW SAVED EXPERIENCES

showSavedButton.addEventListener("click", function () {

    showOnlySaved = !showOnlySaved;

    showSavedButton.classList.toggle("active");

    filterButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    document.querySelector('[data-filter="all"]').classList.add("active");

    currentFilter = "all";

    updateCards();

});


// SORT A-Z AND Z-A

sortSelect.addEventListener("change", function () {

    const grid = document.getElementById("experienceGrid");

    let sortedCards = [...cards];


    if (sortSelect.value === "az") {

        sortedCards.sort(function (a, b) {

            return a.querySelector("h3").innerText.localeCompare(
                b.querySelector("h3").innerText
            );

        });

    }


    if (sortSelect.value === "za") {

        sortedCards.sort(function (a, b) {

            return b.querySelector("h3").innerText.localeCompare(
                a.querySelector("h3").innerText
            );

        });

    }


    if (sortSelect.value === "default") {

        sortedCards = [...cards];

    }


    sortedCards.forEach(function (card) {

        grid.appendChild(card);

    });


    updateCards();

});


// INITIAL EXPERIENCE UPDATE

updateSavedCount();
updateCards();


// ======================================
// EXPERIENCE DETAILS MODAL
// ======================================

const experienceModal = document.getElementById("experienceModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeExperienceModal = document.getElementById(
    "closeExperienceModal"
);


const experienceDescriptions = {

    "Tote Bag Painting":
        "Turn a simple tote bag into your own personalised artwork. Experiment with colours, patterns and designs and take home something you created yourself.",

    "Japanese Kintsugi":
        "Discover the Japanese art of Kintsugi, where imperfections are celebrated and broken pieces are transformed into something beautiful.",

    "Resin Koi Pond":
        "Create a miniature pond-inspired artwork using resin, tiny details and creative techniques.",

    "Moon Lamp":
        "Design a dreamy moon-inspired lamp and make a beautiful decorative piece for your room.",

    "Miniature Food Plate":
        "Explore miniature craft and create tiny food-inspired designs with lots of detail and creativity.",

    "Texture Art":
        "Experiment with layers, textures, shapes and colours to create a unique piece of statement art.",

    "Tumbler Painting":
        "Give your everyday tumbler a creative makeover using colours, patterns and personalised designs.",

    "Hand-Build Pottery":
        "Get hands-on with clay and explore simple hand-building techniques to make your own pottery piece.",

    "Coaster Painting":
        "Transform plain coasters into colourful handmade pieces. Try florals, abstract patterns or your own custom designs.",

    "Vision Board":
        "Create a visual representation of your dreams and goals using pictures, words, stickers and inspiring elements."

};


// OPEN EXPERIENCE MODAL

document.querySelectorAll(".details-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.dataset.title;

        modalTitle.innerText = title;

        modalDescription.innerText =
            experienceDescriptions[title] ||
            "Contact BlissBoard to know more about this experience.";

        experienceModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


// CLOSE EXPERIENCE MODAL

function closeModal() {

    experienceModal.classList.remove("show");

    document.body.style.overflow = "";

}


closeExperienceModal.addEventListener("click", closeModal);


experienceModal.addEventListener("click", function (event) {

    if (event.target === experienceModal) {
        closeModal();
    }

});


// ESCAPE KEY CLOSES MODAL

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


// MODAL ENQUIRY BUTTON

document.getElementById("modalEnquiryLink").addEventListener("click", function () {

    closeModal();

});


// ======================================
// EVENT ENQUIRY BUTTONS
// ======================================

document.querySelectorAll(".event-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName = button.dataset.event;

        document.getElementById("eventType").value =
            "Creative Workshop";

        document.getElementById("message").value =
            "I am interested in the " + eventName +
            " event. Please share the latest date, venue, availability and charges.";

        document.getElementById("plan").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ======================================
// ENQUIRY FORM
// ======================================

const enquiryForm = document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const eventType = document.getElementById("eventType").value;

    const guests = document.getElementById("guests").value;

    const city = document.getElementById("city").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !phone || !eventType) {

        alert("Please fill in all required fields.");

        return;

    }


    const subject = "BlissBoard Event Enquiry - " + eventType;


    const body =
        "Hello BlissBoard Team,\n\n" +

        "I would like to enquire about an event.\n\n" +

        "Name: " + name + "\n" +

        "Email: " + email + "\n" +

        "Phone: " + phone + "\n" +

        "Event Type: " + eventType + "\n" +

        "Expected Guests: " + (guests || "Not specified") + "\n" +

        "City: " + (city || "Not specified") + "\n\n" +

        "Message:\n" + (message || "No additional message") + "\n\n" +

        "Thank you.";


    const mailLink =
        "mailto:officialblissboard@gmail.com" +

        "?subject=" + encodeURIComponent(subject) +

        "&body=" + encodeURIComponent(body);


    window.location.href = mailLink;

});


// ======================================
// DARK AND LIGHT MODE
// ======================================

const themeToggle = document.getElementById("themeToggle");


function updateThemeButton() {

    themeToggle.innerText =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

}


try {

    if (localStorage.getItem("blissboardTheme") === "dark") {

        document.body.classList.add("dark-mode");

    }

} catch (error) {

    console.log("Theme preference could not be loaded.");

}


updateThemeButton();


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const theme =
        document.body.classList.contains("dark-mode") ? "dark" : "light";


    try {

        localStorage.setItem("blissboardTheme", theme);

    } catch (error) {

        console.log("Theme preference could not be saved.");

    }


    updateThemeButton();

});


// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progressBar = document.getElementById("scrollProgress");

const backTop = document.getElementById("backTop");


window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;


    const progress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;


    progressBar.style.width = progress + "%";


    if (scrollTop > 400) {

        backTop.classList.add("visible");

    } else {

        backTop.classList.remove("visible");

    }

});


// ======================================
// BACK TO TOP BUTTON
// ======================================

backTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ======================================
// CURRENT YEAR IN FOOTER
// ======================================

document.getElementById("year").innerText =
    new Date().getFullYear();


// ======================================
// BLISSBOARD WEBSITE COMPLETE
// ======================================
