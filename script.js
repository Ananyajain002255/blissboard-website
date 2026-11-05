
// ========================================
// BLISSBOARD WEBSITE
// ========================================


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


// ========================================
// EXPERIENCE SEARCH, FILTER AND SORT
// ========================================

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


// ADD SAVE BUTTON TO EACH CARD

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

        try {
            localStorage.setItem(
                "blissboardSaved",
                JSON.stringify(savedExperiences)
            );
        } catch (error) {
            console.log("Could not save wishlist.");
        }

        updateSaveButton();
        updateSavedCount();
        updateCards();

    });

});


// UPDATE EXPERIENCE CARDS

function updateCards() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    cards.forEach(function (card) {

        const title = card.querySelector("h3").innerText.toLowerCase();

        const description =
            card.querySelector("p").innerText.toLowerCase();

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

searchInput.addEventListener("input", updateCards);


// SHOW SAVED

showSavedButton.addEventListener("click", function () {

    showOnlySaved = !showOnlySaved;

    showSavedButton.classList.toggle("active");

    filterButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    document.querySelector('[data-filter="all"]')
        .classList.add("active");

    currentFilter = "all";

    updateCards();

});


// SORT

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

updateSavedCount();
updateCards();


// ========================================
// EXPERIENCE DETAILS MODAL
// ========================================

const experienceModal =
    document.getElementById("experienceModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const closeExperienceModal =
    document.getElementById("closeExperienceModal");


const experienceDescriptions = {

    "Tote Bag Painting":
        "Create a tote as unique as you. Explore colours, patterns and personal designs and take home your own creation.",

    "Japanese Kintsugi":
        "Discover the Japanese art of Kintsugi. Embrace imperfections and learn how broken pieces can be transformed into something beautiful.",

    "Resin Koi Pond":
        "Create a miniature pond-inspired artwork using resin, tiny details and creative techniques.",

    "Moon Lamp":
        "Craft your own moon-inspired lamp and create a beautiful decorative piece for your room.",

    "Miniature Food Plate":
        "Make adorable miniature food creations from scratch with tiny details and lots of imagination.",

    "Texture Art":
        "Experiment with layers, textures, shapes and colours to create a unique textured masterpiece.",

    "Tumbler Painting":
        "Sip, paint and let your imagination flow. Personalise a tumbler with your own colours and designs.",

    "Hand-Build Pottery":
        "Get hands-on with clay and explore hand-building techniques to make your own pottery piece."

};


// OPEN MODAL

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


// CLOSE MODAL

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

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.getElementById("modalEnquiryLink")
    .addEventListener("click", closeModal);


// ========================================
// EVENT CALENDAR DATA
// ========================================

// These are demonstration entries.
// Confirm actual dates with the BlissBoard team.

const events = [

    {
        title: "Coaster Painting",
        date: "2026-11-07",
        time: "Time to be confirmed",
        location: "Delhi",
        description: "A creative coaster painting experience."
    },

    {
        title: "Vision Board",
        date: "2026-11-14",
        time: "Time to be confirmed",
        location: "Noida",
        description: "Create a visual board of your dreams and goals."
    }

];


// CALENDAR ELEMENTS

const calendarDays = document.getElementById("calendarDays");

const monthYear = document.getElementById("monthYear");

const selectedDateTitle =
    document.getElementById("selectedDateTitle");

const calendarEventList =
    document.getElementById("calendarEventList");

const prevMonth = document.getElementById("prevMonth");

const nextMonth = document.getElementById("nextMonth");


let calendarDate = new Date(2026, 10, 1);

let selectedDate = null;


// DATE FORMAT

function makeDateKey(year, month, day) {

    const mm = String(month + 1).padStart(2, "0");

    const dd = String(day).padStart(2, "0");

    return year + "-" + mm + "-" + dd;

}


// DISPLAY MONTH CALENDAR

function renderCalendar() {

    const year = calendarDate.getFullYear();

    const month = calendarDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const totalDays = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    monthYear.innerText = calendarDate.toLocaleDateString(
        "en-IN",
        {
            month: "long",
            year: "numeric"
        }
    );

    calendarDays.innerHTML = "";


    // EMPTY SPACES BEFORE FIRST DATE

    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");

        empty.className = "calendar-day empty";

        calendarDays.appendChild(empty);

    }


    // CREATE DATE BUTTONS

    for (let day = 1; day <= totalDays; day++) {

        const dateKey = makeDateKey(year, month, day);

        const button = document.createElement("button");

        button.className = "calendar-day";

        button.innerText = day;


        const isToday =
            today.getFullYear() === year &&
            today.getMonth() === month &&
            today.getDate() === day;

        if (isToday) {
            button.classList.add("today");
        }


        const hasEvent = events.some(function (event) {
            return event.date === dateKey;
        });

        if (hasEvent) {
            button.classList.add("has-event");
        }


        if (selectedDate === dateKey) {
            button.classList.add("selected");
        }


        button.addEventListener("click", function () {

            selectedDate = dateKey;

            renderCalendar();

            showDateEvents(dateKey);

        });


        calendarDays.appendChild(button);

    }

}


// SHOW EVENTS FOR SELECTED DATE

function showDateEvents(dateKey) {

    const dateObject = new Date(dateKey + "T12:00:00");

    selectedDateTitle.innerText =
        dateObject.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    calendarEventList.innerHTML = "";


    const matchingEvents = events.filter(function (event) {
        return event.date === dateKey;
    });


    if (matchingEvents.length === 0) {

        calendarEventList.innerHTML =
            '<p class="empty-calendar">No event is currently listed for this date. Contact BlissBoard to ask about availability.</p>';

        return;

    }


    matchingEvents.forEach(function (event) {

        const card = document.createElement("div");

        card.className = "calendar-event";


        const title = document.createElement("h4");

        title.innerText = event.title;


        const time = document.createElement("p");

        time.innerText = "🕒 " + event.time;


        const location = document.createElement("p");

        location.innerText = "📍 " + event.location;


        const description = document.createElement("p");

        description.innerText = event.description;


        const calendarLink = document.createElement("a");

        calendarLink.href = createGoogleCalendarLink(event);

        calendarLink.target = "_blank";

        calendarLink.rel = "noopener";

        calendarLink.innerText = "Add to Google Calendar ↗";


        card.appendChild(title);

        card.appendChild(time);

        card.appendChild(location);

        card.appendChild(description);

        card.appendChild(calendarLink);


        calendarEventList.appendChild(card);

    });

}


// GOOGLE CALENDAR LINK

function createGoogleCalendarLink(event) {

    const startDate = event.date.replaceAll("-", "");

    const nextDay = new Date(event.date + "T12:00:00");

    nextDay.setDate(nextDay.getDate() + 1);

    const endDate =
        nextDay.getFullYear() +
        String(nextDay.getMonth() + 1).padStart(2, "0") +
        String(nextDay.getDate()).padStart(2, "0");


    const details =
        event.description +
        " Location: " + event.location +
        ". Please confirm event details with BlissBoard.";


    const params = new URLSearchParams({

        action: "TEMPLATE",

        text: "BlissBoard - " + event.title,

        dates: startDate + "/" + endDate,

        details: details,

        location: event.location

    });


    return "https://calendar.google.com/calendar/render?" +
        params.toString();

}


// PREVIOUS MONTH

prevMonth.addEventListener("click", function () {

    calendarDate.setMonth(calendarDate.getMonth() - 1);

    renderCalendar();

});


// NEXT MONTH

nextMonth.addEventListener("click", function () {

    calendarDate.setMonth(calendarDate.getMonth() + 1);

    renderCalendar();

});


// INITIAL CALENDAR

renderCalendar();


// ========================================
// EVENT ENQUIRY BUTTONS
// ========================================

document.querySelectorAll(".event-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const eventName = button.dataset.event;

        const eventDate = button.dataset.date;

        document.getElementById("eventType").value =
            "Creative Workshop";

        document.getElementById("message").value =
            "I am interested in " + eventName +
            ". Please share the latest date, venue, availability and charges.";

        if (eventDate) {
            document.getElementById("eventDate").value = eventDate;
        }

        document.getElementById("plan").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ========================================
// ENQUIRY FORM
// ========================================

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const eventType = document.getElementById("eventType").value;

    const eventDate = document.getElementById("eventDate").value;

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
        "Preferred Date: " + (eventDate || "Not specified") + "\n" +
        "Expected Guests: " + (guests || "Not specified") + "\n" +
        "City: " + (city || "Not specified") + "\n\n" +
        "Message:\n" + (message || "No additional message") +
        "\n\nThank you.";


    const mailLink =
        "mailto:officialblissboard@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);


    window.location.href = mailLink;

});


// ========================================
// DARK AND LIGHT MODE
// ========================================

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
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

    try {
        localStorage.setItem("blissboardTheme", theme);
    } catch (error) {
        console.log("Theme preference could not be saved.");
    }

    updateThemeButton();

});


// ========================================
// SCROLL PROGRESS AND BACK TO TOP
// ========================================

const progressBar = document.getElementById("scrollProgress");

const backTop = document.getElementById("backTop");


window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    progressBar.style.width = progress + "%";


    if (scrollTop > 400) {
        backTop.classList.add("visible");
    } else {
        backTop.classList.remove("visible");
    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ========================================
// FOOTER YEAR
// ========================================

document.getElementById("year").innerText =
    new Date().getFullYear();


// ========================================
// BLISSBOARD WEBSITE READY
// ========================================
