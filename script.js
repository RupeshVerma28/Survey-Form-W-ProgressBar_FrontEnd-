let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    showStep(currentStep);
});

function showStep(step) {
    const steps = document.querySelectorAll(".step");
    steps.forEach((s, index) => {
        s.style.display = (index === step) ? "block" : "none";
    });

    // Update button visibility
    document.getElementById("prevBtn").style.display = step === 0 ? "none" : "inline";
    document.getElementById("nextBtn").textContent = step === steps.length - 1 ? "Submit" : "Next";

    // Update progress bar
    const progress = document.querySelector(".progress");
    const progressPercentage = ((step + 1) / steps.length) * 100;
    progress.style.width = progressPercentage + "%";
}

function nextPrev(direction) {
    const steps = document.querySelectorAll(".step");

    // Validate input if moving forward
    if (direction === 1) {
        const currentForm = steps[currentStep].querySelector("input:checked");
        if (!currentForm) {
            alert("Please answer the question before proceeding.");
            return;
        }
    }

    // Adjust current step
    currentStep += direction;

    // If at the end of the survey, show thank you message
    if (currentStep >= steps.length) {
        document.getElementById("surveyForm").style.display = "none";
        document.querySelector(".progress-bar").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "block";
        return;
    }

    showStep(currentStep);
}
