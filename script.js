
// =====================================
// BLISSBOARD WEBSITE - MAIN JAVASCRIPT
// =====================================

// 1. ALL ACTIVITIES AND PRICES
// District price = first price column
// BookMyShow price = second price column

const activities = [
  ["Acrylic Affair – Canvas Painting",699,699,"painting","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Paint your own canvas and take home a colourful creation."],
  ["Resin Jewellery",899,899,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Create beautiful personalised resin jewellery."],
  ["Texture Art",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Explore textures, patterns and artistic details."],
  ["Dot Mandala Art",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Create calming mandala patterns with colourful dots."],
  ["Lippan Art",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Try traditional mirror art with a creative touch."],
  ["Japanese Kintsugi",799,799,"creative","https://blissboardofficial.netlify.app/assets/activities/kintsugi-landscape.png","Discover the Japanese art of celebrating imperfections."],
  ["Tumbler Painting",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/tumbler-landscape.png","Decorate your tumbler with your own designs."],
  ["Resin Beach Art",799,799,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Bring ocean-inspired waves into your artwork."],
  ["Resin Koi Pond",799,799,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Create a miniature pond-inspired resin artwork."],
  ["Resin Lotus Pond",799,799,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Make a beautiful lotus pond-inspired artwork."],
  ["Pottery",499,499,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Get hands-on with clay and shape something of your own."],
  ["Clay Therapy",799,799,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Relax and enjoy a playful clay session."],
  ["Coffee Painting",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Create warm-toned art using coffee as your medium."],
  ["Pichwai Painting",699,699,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Explore the beauty of traditional Pichwai art."],
  ["Madhubani Painting",699,699,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Try colourful folk-art patterns inspired by Madhubani."],
  ["Clay Flower Bouquet",799,799,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Craft charming flowers from clay."],
  ["Knife Painting",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Experiment with palette-knife strokes and textures."],
  ["Clay Mug Painting",699,699,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Personalise a mug with your favourite designs."],
  ["Moon Lamp",899,899,"creative","https://blissboardofficial.netlify.app/assets/activities/moon-lamp-landscape.png","Create a dreamy moon-inspired lamp for your room."],
  ["Trinket Tray",799,799,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Design a decorative tray for your little treasures."],
  ["Miniature Food Plate",699,699,"creative","https://blissboardofficial.netlify.app/assets/activities/miniature-food-landscape.png","Make adorable miniature food art on a tiny plate."],
  ["Clay Date – Couple Pass",899,899,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Enjoy a creative clay date together."],
  ["Clay Ganpati",699,699,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Shape a beautiful Ganpati idol with your hands."],
  ["Rage Therapy",799,799,"creative","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Enjoy an energetic and creative experience."],
  ["Mandala Coaster Painting",699,699,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Paint detailed mandala patterns on your coasters."],
  ["Playdate with Parents",899,899,"creative","https://blissboardofficial.netlify.app/assets/activities/miniature-food-landscape.png","Spend quality time with your parents through creativity."],
  ["Clay Sculpting",699,699,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","Turn a simple piece of clay into a sculpture."],
  ["Painting Using Clay",699,699,"clay","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Explore a different way to create art using clay."],
  ["Resin Geode Art",799,799,"resin","https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png","Create a sparkling geode-inspired artwork."],
  ["Boho Texture Art",799,799,"painting","https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png","Make a textured artwork inspired by bohemian decor."],
  ["Bedazzle Your Canvas",899,899,"creative","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Add sparkle, gems and personality to your canvas."],
  ["Finger Painting",699,699,"painting","https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png","Get playful with colours and finger painting."],
  ["Pottery for Kids",699,699,"clay","https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png","A fun pottery experience for young creators."],
  ["Vision Board",899,899,"creative","https://blissboardofficial.netlify.app/assets/activities/miniature-food-landscape.png","Visualise your goals and create an inspiring board."]
];

// 2. PAST EVENT PHOTOS FROM BLISSBOARD WEBSITE
const pastEvents = [
  {
    title: "Resin Koi Pond Gathering",
    type: "CREATIVE EXPERIENCE",
    image: "https://blissboardofficial.netlify.app/assets/event-1.jpg",
    description: "A lovely creative gathering filled with miniature koi pond art and happy memories."
  },
  {
    title: "Creative Flower Workshop",
    type: "WORKSHOP MOMENTS",
    image: "https://blissboardofficial.netlify.app/assets/event-2.jpg",
    description: "Friends coming together to create colourful handmade pieces."
  },
  {
    title: "Tumbler Painting Moments",
    type: "CREATIVE EXPERIENCE",
    image: "https://blissboardofficial.netlify.app/assets/event-3.jpg",
    description: "A fun day of personalising tumblers and making memories."
  }
];

// 3. HELPER FUNCTION
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function whatsappLink(activity) {
  const message =
    `Hi BlissBoard! I am interested in ${activity[0]}. ` +
    `District price: ₹${activity[1]}. ` +
    `BookMyShow price: ₹${activity[2]}. ` +
    `Please share the available dates, venue and booking details.`;

  return "https://wa.me/918505807276?text=" + encodeURIComponent(message);
}

// 4. EXPERIENCE CARDS
const experienceGrid = document.getElementById("experienceGrid");
const searchInput = document.getElementById("experienceSearch");
const sortSelect = document.getElementById("sortExperiences");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

let activeFilter = "all";
let savedActivities = [];

try {
  savedActivities = JSON.parse(localStorage.getItem("blissboardSaved") || "[]");
  if (!Array.isArray(savedActivities)) savedActivities = [];
} catch {
  savedActivities = [];
}

function renderActivities() {
  let list = activities.map((activity, index) => ({
    activity,
    index
  }));

  if (activeFilter !== "all") {
    list = list.filter(item => item.activity[3] === activeFilter);
  }

  const search = searchInput.value.trim().toLowerCase();

  if (search) {
    list = list.filter(item =>
      item.activity[0].toLowerCase().includes(search) ||
      item.activity[5].toLowerCase().includes(search)
    );
  }

  if (sortSelect.value === "low") {
    list.sort((a, b) => a.activity[1] - b.activity[1]);
  }

  if (sortSelect.value === "high") {
    list.sort((a, b) => b.activity[1] - a.activity[1]);
  }

  if (sortSelect.value === "az") {
    list.sort((a, b) => a.activity[0].localeCompare(b.activity[0]));
  }

  resultCount.textContent =
    `${list.length} experiences available`;

  noResults.hidden = list.length > 0;

  experienceGrid.innerHTML = list.map(({ activity, index }) => {
    const isSaved = savedActivities.includes(index);

    return `
      <article class="experience-card">
        <div class="card-image">
          <img
            src="${activity[4]}"
            alt="${escapeHTML(activity[0])}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://blissboardofficial.netlify.app/assets/activities/tote-bag-landscape.png';"
          >
          <span class="card-tag">${escapeHTML(activity[3])}</span>
          <button
            class="save-btn ${isSaved ? "saved" : ""}"
            data-save="${index}"
            aria-label="Save activity"
            type="button"
          >${isSaved ? "♥" : "♡"}</button>
        </div>

        <div class="card-content">
          <h3>${escapeHTML(activity[0])}</h3>
          <p class="card-description">${escapeHTML(activity[5])}</p>

          <div class="price-boxes">
            <div class="price-box">
              <span>District Price</span>
              <strong>₹${activity[1]}</strong>
            </div>
            <div class="price-box">
              <span>BookMyShow Price</span>
              <strong>₹${activity[2]}</strong>
            </div>
          </div>

          <div class="card-actions">
            <button class="details-btn" data-details="${index}" type="button">
              Details
            </button>
            <a class="book-btn"
               href="${whatsappLink(activity)}"
               target="_blank"
               rel="noopener">
              Enquire / Book ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 5. SEARCH AND SORT
searchInput.addEventListener("input", renderActivities);
sortSelect.addEventListener("change", renderActivities);

// 6. FILTER BUTTONS
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderActivities();
  });
});

// 7. SAVE FAVOURITES
experienceGrid.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const detailsButton = event.target.closest("[data-details]");

  if (saveButton) {
    const index = Number(saveButton.dataset.save);

    if (savedActivities.includes(index)) {
      savedActivities = savedActivities.filter(item => item !== index);
      showToast("Removed from favourites");
    } else {
      savedActivities.push(index);
      showToast("Added to favourites ♥");
    }

    localStorage.setItem(
      "blissboardSaved",
      JSON.stringify(savedActivities)
    );

    renderActivities();
  }

  if (detailsButton) {
    showActivityDetails(Number(detailsButton.dataset.details));
  }
});

// 8. ACTIVITY DETAILS
function showActivityDetails(index) {
  const activity = activities[index];

  const message =
    `Hi BlissBoard! Please share more details about ${activity[0]}.`;

  const link =
    "https://wa.me/918505807276?text=" + encodeURIComponent(message);

  const oldModal = document.querySelector(".activity-modal");
  if (oldModal) oldModal.remove();

  const modal = document.createElement("div");
  modal.className = "activity-modal";

  modal.innerHTML = `
    <div class="activity-modal-backdrop"></div>
    <div class="activity-modal-content">
      <button class="activity-modal-close" type="button">×</button>
      <p class="eyebrow">DISCOVER YOUR NEXT EXPERIENCE</p>
      <h2>${escapeHTML(activity[0])}</h2>
      <p>${escapeHTML(activity[5])}</p>
      <div class="price-boxes">
        <div class="price-box">
          <span>District Price</span>
          <strong>₹${activity[1]}</strong>
        </div>
        <div class="price-box">
          <span>BookMyShow Price</span>
          <strong>₹${activity[2]}</strong>
        </div>
      </div>
      <a class="btn btn-primary" href="${link}" target="_blank" rel="noopener">
        Enquire on WhatsApp ↗
      </a>
    </div>
  `;

  document.body.appendChild(modal);

  function closeModal() {
    modal.remove();
    document.removeEventListener("keydown", escapeClose);
  }

  function escapeClose(event) {
    if (event.key === "Escape") closeModal();
  }

  modal.querySelector(".activity-modal-close").addEventListener("click", closeModal);
  modal.querySelector(".activity-modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", escapeClose);
}

// 9. PAST EVENTS GALLERY
const eventGrid = document.getElementById("eventGrid");

eventGrid.innerHTML = pastEvents.map(event => `
  <article class="event-card">
    <img
      src="${event.image}"
      alt="${escapeHTML(event.title)}"
      loading="lazy"
    >
    <div class="event-caption">
      <span>${escapeHTML(event.type)}</span>
      <h3>${escapeHTML(event.title)}</h3>
      <p>${escapeHTML(event.description)}</p>
    </div>
  </article>
`).join("");

// 10. DARK / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  document.querySelector('meta[name="theme-color"]')
    .setAttribute("content", isDark ? "#211d24" : "#fff8f4");

  try {
    localStorage.setItem("blissboardTheme", theme);
  } catch (error) {
    console.warn("Theme preference could not be saved.", error);
  }
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("blissboardTheme") || "light";
} catch (error) {
  savedTheme = "light";
}

setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentlyDark = document.body.classList.contains("dark");
  setTheme(currentlyDark ? "light" : "dark");
});

// 11. MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent =
    navLinks.classList.contains("open") ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// 12. CONTACT FORM
document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("eventType").value;
  const guests = document.getElementById("guests").value;
  const city = document.getElementById("city").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("BlissBoard Event Enquiry");

  const body = encodeURIComponent(
    `Hello BlissBoard,

I would like to enquire about an event.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Interested in: ${type}
Expected guests: ${guests || "Not provided"}
City: ${city || "Not provided"}

Message:
${message || "No additional message"}

Thank you!`
  );

  window.location.href =
    `mailto:officialblissboard@gmail.com?subject=${subject}&body=${body}`;
});

// 13. BACK TO TOP
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 400);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 14. TOAST MESSAGE
let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// 15. FOOTER YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();

// 16. INITIAL LOAD
renderActivities();
