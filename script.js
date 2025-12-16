console.log("Frontend Internship Day 1 Loaded Successfully");
document.querySelectorAll(".primary-btn").forEach(button => {
    button.addEventListener("click", () => {
        if (button.disabled) return;
        alert("Primary button clicked!");
    });
});

