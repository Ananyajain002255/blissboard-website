// BLISSBOARD - WEBSITE INTERACTIONS

const activities = [
  { name: "Acrylic Affair – Canvas Painting", district: 699, bms: 699, category: "painting", tag: "Painting", description: "Create your own colourful canvas and take home a piece of art.", image: "https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png" },
  { name: "Resin Jewellery", district: 899, bms: 899, category: "resin", tag: "Resin Art", description: "Design beautiful personalised resin jewellery.", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85" },
  { name: "Texture Art", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Explore textures, patterns and beautiful artistic details.", image: "https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png" },
  { name: "Dot Mandala Art", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Create calming mandala patterns with colourful dots.", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85" },
  { name: "Lippan Art", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Try traditional mud and mirror art with a modern touch.", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85" },
  { name: "Japanese Kintsugi", district: 799, bms: 799, category: "creative", tag: "Creative Fun", description: "Discover the beautiful art of highlighting broken pieces.", image: "https://blissboardofficial.netlify.app/assets/activities/kintsugi-landscape.png" },
  { name: "Tumbler Painting", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Decorate your tumbler with your own creative designs.", image: "https://blissboardofficial.netlify.app/assets/activities/tumbler-landscape.png" },
  { name: "Resin Beach Art", district: 799, bms: 799, category: "resin", tag: "Resin Art", description: "Bring ocean-inspired waves and beach vibes to your artwork.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85" },
  { name: "Resin Koi Pond", district: 799, bms: 799, category: "resin", tag: "Resin Art", description: "Create a miniature pond-inspired resin artwork.", image: "https://blissboardofficial.netlify.app/assets/activities/resin-koi-landscape.png" },
  { name: "Resin Lotus Pond", district: 799, bms: 799, category: "resin", tag: "Resin Art", description: "Make a beautiful lotus pond inspired resin piece.", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85" },
  { name: "Pottery", district: 499, bms: 499, category: "clay", tag: "Clay & Pottery", description: "Get hands-on with clay and shape something of your own.", image: "https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png" },
  { name: "Clay Therapy", district: 799, bms: 799, category: "clay", tag: "Clay & Pottery", description: "Slow down, relax and enjoy a playful clay session.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=85" },
  { name: "Coffee Painting", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Create warm-toned art using coffee as your painting medium.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
  { name: "Pichwai Painting", district: 699, bms: 699, category: "painting", tag: "Painting", description: "Explore the intricate beauty of traditional Pichwai art.", image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=85" },
  { name: "Madhubani Painting", district: 699, bms: 699, category: "painting", tag: "Painting", description: "Try colourful folk-art patterns inspired by Madhubani painting.", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85" },
  { name: "Clay Flower Bouquet", district: 799, bms: 799, category: "clay", tag: "Clay & Pottery", description: "Craft charming flowers from clay and make a bouquet.", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85" },
  { name: "Knife Painting", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Experiment with palette-knife strokes and bold textures.", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=85" },
  { name: "Clay Mug Painting", district: 699, bms: 699, category: "clay", tag: "Clay & Pottery", description: "Personalise a mug with colours and your favourite designs.", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85" },
  { name: "Moon Lamp", district: 899, bms: 899, category: "creative", tag: "Creative Fun", description: "Create a dreamy moon-inspired lamp for your space.", image: "https://blissboardofficial.netlify.app/assets/activities/moon-lamp-landscape.png" },
  { name: "Trinket Tray", district: 799, bms: 799, category: "resin", tag: "Resin Art", description: "Design a decorative tray to keep your little treasures.", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85" },
  { name: "Miniature Food Plate", district: 699, bms: 699, category: "creative", tag: "Creative Fun", description: "Make adorable miniature food art on a tiny plate.", image: "https://blissboardofficial.netlify.app/assets/activities/miniature-food-landscape.png" },
  { name: "Clay Date – Couple Pass", district: 899, bms: 899, category: "clay", tag: "Clay & Pottery", description: "A creative clay date designed to enjoy together as a couple.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=85" },
  { name: "Clay Ganpati", district: 699, bms: 699, category: "clay", tag: "Clay & Pottery", description: "Shape a beautiful Ganpati idol with your own hands.", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85" },
  { name: "Rage Therapy", district: 799, bms: 799, category: "creative", tag: "Creative Fun", description: "Let go of stress through a fun and energetic experience.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
  { name: "Mandala Coaster Painting", district: 699, bms: 699, category: "painting", tag: "Painting", description: "Paint detailed mandala patterns on your own coasters.", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85" },
  { name: "Playdate with Parents", district: 899, bms: 899, category: "creative", tag: "Creative Fun", description: "Spend quality time with your parents through creativity.", image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85" },
  { name: "Clay Sculpting", district: 699, bms: 699, category: "clay", tag: "Clay & Pottery", description: "Turn a simple piece of clay into a unique sculpture.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=85" },
  { name: "Painting Using Clay", district: 699, bms: 699, category: "clay", tag: "Clay & Pottery", description: "Explore a different way to create art using clay.", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=85" },
  { name: "Resin Geode Art", district: 799, bms: 799, category: "resin", tag: "Resin Art", description: "Create a sparkling geode-inspired resin artwork.", image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=900&q=85" },
  { name: "Boho Texture Art", district: 799, bms: 799, category: "painting", tag: "Painting", description: "Make a textured artwork inspired by bohemian decor.", image: "https://blissboardofficial.netlify.app/assets/activities/texture-landscape.png" },
  { name: "Bedazzle Your Canvas", district: 899, bms: 899, category: "creative", tag: "Creative Fun", description: "Add sparkle, gems and personality to your canvas.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
  { name: "Finger Painting", district: 699, bms: 699, category: "painting", tag: "Painting", description: "Get playful with colours and create art with your fingers.", image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?auto=format&fit=crop&w=900&q=85" },
  { name: "Pottery for Kids", district: 699, bms: 699, category: "clay", tag: "Clay & Pottery", description: "A fun, hands-on pottery experience for young creators.", image: "https://blissboardofficial.netlify.app/assets/activities/pottery-landscape.png" },
  { name: "Vision Board", district: 899, bms: 899, category: "creative", tag: "Creative Fun", description: "Visualise your goals and create a board full of inspiration.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85" }
];

const grid = document.getElementById("experienceGrid");
const searchInput = document.getElementById("experienceSearch");
const sortSelect = document.getElementById("sortExperiences");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

let activeCategory = "all";
let savedOnly = false;
let savedActivities = JSON.parse(localStorage.getItem("blissboardSaved") || "[]");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function renderActivities() {
  let list = activities.map((activity, index) => ({ ...activity, index }));

  if (activeCategory !== "all") {
    list = list.filter(item => item.category === activeCategory);
  }

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    list = list.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query)
    );
  }

  if (savedOnly) {
    list = list.filter(item => savedActivities.includes(item.name));
  }

  if (sortSelect.value === "low") list.sort((a, b) => a.district - b.district);
  if (sortSelect.value === "high") list.sort((a, b) => b.district - a.district);
  if (sortSelect.value === "az") list.sort((a, b) => a.name.localeCompare(b.name));

  resultCount.textContent = `${list.length} experience${list.length === 1 ? "" : "s"}`;
  noResults.hidden = list.length !== 0;

  grid.innerHTML = list.map(item => `
    <article class="experience-card">
      <div class="card-image">
        <img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy"
             onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85';">
        <span class="card-tag">${escapeHTML(item.tag)}</span>
        <button class="save-btn ${savedActivities.includes(item.name) ? "saved" : ""}"
                data-save="${item.index}" aria-label="Save ${escapeHTML(item.name)}">
          ${savedActivities.includes(item.name) ? "♥" : "♡"}
        </button>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(item.name)}</h3>
        <p class="card-description">${escapeHTML(item.description)}</p>
        <div class="price-boxes">
          <div class="price-box">
            <span>District Price</span>
            <strong>₹${item.district}</strong>
          </div>
          <div class="price-box">
            <span>BookMyShow Price</span>
            <strong>₹${item.bms}</strong>
          </div>
        </div>
        <div class="card-actions">
          <button class="details-btn" data-details="${item.index}">View details</button>
          <a class="book-btn" href="${makeWhatsAppLink(item, "booking")}" target="_blank" rel="noopener">Enquire / Book ↗</a>
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("savedCount").textContent = savedActivities.length;
}

function makeWhatsAppLink(item, purpose) {
  const message = purpose === "booking"
    ? `Hi BlissBoard! I am interested in ${item.name}. District price: ₹${item.district}. BookMyShow price: ₹${item.bms}. Please share the available dates, location and booking details.`
    : `Hi BlissBoard! I would like to know more about ${item.name}. Please share the details.`;

  return `https://wa.me/918505807276?text=${encodeURIComponent(message)}`;
}

// Search, filters and sorting
searchInput.addEventListener("input", renderActivities);
sortSelect.addEventListener("change", renderActivities);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.filter;
    savedOnly = false;
    document.getElementById("showSaved").classList.remove("active");
    renderActivities();
  });
});

document.getElementById("showSaved").addEventListener("click", () => {
  savedOnly = !savedOnly;
  document.getElementById("showSaved").classList.toggle("active", savedOnly);
  renderActivities();
});

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  savedOnly = false;
  document.querySelectorAll(".filter").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === "all");
  });
  document.getElementById("showSaved").classList.remove("active");
  renderActivities();
});

// Save favourites and open activity details
grid.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const detailsButton = event.target.closest("[data-details]");

  if (saveButton) {
    const item = activities[Number(saveButton.dataset.save)];
    if (savedActivities.includes(item.name)) {
      savedActivities = savedActivities.filter(name => name !== item.name);
    } else {
      savedActivities.push(item.name);
    }
    localStorage.setItem("blissboardSaved", JSON.stringify(savedActivities));
    renderActivities();
  }

  if (detailsButton) {
    openActivityModal(activities[Number(detailsButton.dataset.details)]);
  }
});

// Activity details modal
const modal = document.getElementById("activityModal");
const modalContent = document.getElementById("modalContent");

function openActivityModal(item) {
  modalContent.innerHTML = `
    <div class="eyebrow">${escapeHTML(item.tag)}</div>
    <h2>${escapeHTML(item.name)}</h2>
    <p>${escapeHTML(item.description)}</p>
    <div class="modal-prices">
      <div><span>District Price</span><strong>₹${item.district}</strong></div>
      <div><span>BookMyShow Price</span><strong>₹${item.bms}</strong></div>
    </div>
    <p>Want to join this experience? Contact BlissBoard to confirm the date, venue and availability.</p>
    <a class="btn btn-primary" href="${makeWhatsAppLink(item, "booking")}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeActivityModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeActivityModal);
document.getElementById("modalBackdrop").addEventListener("click", closeActivityModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeActivityModal();
});

// Calendar: no official dates have been supplied yet.
// Dates can be added to this object when BlissBoard confirms them.
const calendarEvents = {
  // Example format:
  // "2026-11-15": [{ title: "Confirmed Workshop", location: "Delhi", note: "Time: 4 PM" }]
};

const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const calendarEventList = document.getElementById("calendarEventList");

let calendarDate = new Date();
calendarDate.setDate(1);
let selectedDate = "";

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

  monthYear.textContent = calendarDate.toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric"
  });

  calendarDays.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("span");
    calendarDays.appendChild(blank);
  }

  for (let day = 1; day <= totalDays; day++) {
    const key = dateKey(year, month, day);
    const button = document.createElement("button");
    button.className = "calendar-day";
    button.textContent = day;
    button.type = "button";

    if (key === todayKey) button.classList.add("today");
    if (key === selectedDate) button.classList.add("selected");
    if (calendarEvents[key]) button.classList.add("has-event");

    button.addEventListener("click", () => {
      selectedDate = key;
      renderCalendar();
      showCalendarDate(key);
    });

    calendarDays.appendChild(button);
  }
}

function showCalendarDate(key) {
  const [year, month, day] = key.split("-").map(Number);
  selectedDateTitle.textContent = new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const events = calendarEvents[key] || [];

  if (!events.length) {
    calendarEventList.innerHTML = `
      <div class="calendar-empty">
        No confirmed event listed for this date.<br>
        Enquire with BlissBoard about availability.
      </div>
      <button class="btn btn-light calendar-enquiry" type="button">Enquire for this date ↗</button>
    `;
    calendarEventList.querySelector(".calendar-enquiry").addEventListener("click", () => {
      document.getElementById("eventDate").value = key;
      document.getElementById("message").value = `I would like to enquire about an event on ${key}.`;
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
    return;
  }

  calendarEventList.innerHTML = events.map(item => `
    <div class="calendar-event">
      <h4>${escapeHTML(item.title)}</h4>
      <p>${escapeHTML(item.location || "Location to be confirmed")} · ${escapeHTML(item.note || "Details to be confirmed")}</p>
    </div>
  `).join("");
}

document.getElementById("prevMonth").addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  calendarDate.setMonth(calendarDate.getMonth() + 1);
  renderCalendar();
});

// Contact form: prepares an email draft; it does not store data online.
document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("eventType").value;
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("eventDate").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`BlissBoard Enquiry - ${type}`);
  const body = encodeURIComponent(
    `Hello BlissBoard,\n\nI would like to enquire about an event.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nInterested in: ${type}\nNumber of guests: ${guests || "Not provided"}\nPreferred date: ${date || "Not decided"}\nMessage: ${message || "No additional message"}\n\nThank you.`
  );

  window.location.href = `mailto:officialblissboard@gmail.com?subject=${subject}&body=${body}`;
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Dark / light mode
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("blissboardTheme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("blissboardTheme", isDark ? "dark" : "light");
});

// Scroll progress and back-to-top button
const progressBar = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  backTop.classList.toggle("visible", window.scrollY > 450);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Initial render
renderActivities();
renderCalendar();
