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
