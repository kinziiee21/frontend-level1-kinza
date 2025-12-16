document.addEventListener("DOMContentLoaded", () => {

    /* ======================
       DAY 4 - MOBILE NAVBAR
    ====================== */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
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
    }

    /* ======================
       DAY 5 - SEARCH BAR
    ====================== */
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (searchInput.value.trim() === "") {
                alert("Please enter something to search");
                return;
            }

            alert("You searched for: " + searchInput.value);
            searchInput.value = "";
        });
    }

    /* ======================
       DAY 7 - NOTIFICATION
    ====================== */
    const notification = document.getElementById("notification");
    const closeNotification = document.getElementById("closeNotification");

    if (notification && closeNotification) {
        closeNotification.addEventListener("click", () => {
            notification.style.display = "none";
        });
    }

    /* ======================
       DAY 8 - FORM SUBMIT
    ====================== */
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitBtn");
    const formError = document.getElementById("formError");

    if (contactForm && nameInput && submitBtn && formError) {

        nameInput.addEventListener("input", () => {
            if (nameInput.value.trim() !== "") {
                submitBtn.disabled = false;
                formError.style.display = "none";
                nameInput.classList.remove("error");
            } else {
                submitBtn.disabled = true;
            }
        });

        contactForm.addEventListener("submit", (e) => {
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
    }

    /* ======================
       DAY 10 - GO TO TOP
    ====================== */
    const goTopBtn = document.getElementById("goTopBtn");

    if (goTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                goTopBtn.style.display = "block";
            } else {
                goTopBtn.style.display = "none";
            }
        });

        goTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
