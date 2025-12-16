document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        document.body.style.overflow =
            navLinks.classList.contains("show") ? "hidden" : "auto";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            document.body.style.overflow = "auto";
        });
    });
});

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (searchInput.value.trim() === "") {
        alert("Please enter something to search");
        return;
    }

    alert("You searched for: " + searchInput.value);
    searchInput.value = "";
});

const notification = document.getElementById("notification");
const closeNotification = document.getElementById("closeNotification");

if (closeNotification) {
    closeNotification.addEventListener("click", () => {
        notification.style.display = "none";
    });
}

const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");
const formError = document.getElementById("formError");

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
        submitBtn.disabled = false;
        formError.style.display = "none";
        nameInput.classList.remove("error");
    } else {
        submitBtn.disabled = true;
    }
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        formError.style.display = "block";
        nameInput.classList.add("error");
        submitBtn.disabled = true;
    } else {
        alert("Form submitted successfully!");
        nameInput.value = "";
        submitBtn.disabled = true;
    }
});
