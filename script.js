/* =====================================================
   SILENTSIGNAL 2030
   Academic Prototype - JavaScript Logic
   Author: [Your Name]
   Description:
   - Handles navbar scroll effect
   - Controls dynamic growth simulation (Water Fill Model)
   - Minimal JavaScript (frontend prototype only)
   ===================================================== */


/* =====================================================
   NAVBAR SHADOW ON SCROLL
   Adds subtle shadow when user scrolls down
   ===================================================== */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});


/* =====================================================
   GROWTH SIMULATION LOGIC
   Vertical Water Fill Model
   Updates on every 5% change
   ===================================================== */

const sliders = document.querySelectorAll(".slider");
const growthFill = document.getElementById("growthFill");
const statusLabel = document.getElementById("statusLabel");
const insightText = document.getElementById("insightText");
const tankPercentage = document.getElementById("tankPercentage");

/*
   Only execute if simulation elements exist
   Prevents errors on other pages
*/
if (sliders.length > 0 && growthFill && statusLabel) {

    function updateGrowth() {

        let total = 0;

        sliders.forEach(slider => {
            total += parseInt(slider.value);
        });

        // Calculate average behavioral strength
        let average = total / sliders.length;

        // Round to nearest 5%
        average = Math.round(average / 5) * 5;

        // Update water fill height
        if (growthFill) {
            growthFill.style.height = average + "%";
        }

        // Update percentage display
        if (tankPercentage) {
            tankPercentage.textContent = Math.round(average) + "%";
        }


        /* =====================================================
           UPDATE WATER HEIGHT
           Height corresponds directly to percentage
           ===================================================== */

        growthFill.style.height = average + "%";

        /* =====================================================
           DYNAMIC TIER SYSTEM
           Multiple performance levels
           ===================================================== */

        if (average <= 20) {

            statusLabel.textContent = "Critical";
            growthFill.style.background = "linear-gradient(to top, #2F4156, #567C8D)";

            if (insightText) {
                insightText.textContent =
                    "Behavioral signals are significantly underdeveloped. Immediate improvement in collaboration and responsiveness is essential.";
            }

        } 
        else if (average <= 40) {

            statusLabel.textContent = "Emerging";
            growthFill.style.background = "linear-gradient(to top, #567C8D, #6FA3B2)";

            if (insightText) {
                insightText.textContent =
                    "Foundational behaviors are forming. Consistency across signals will strengthen long-term trajectory.";
            }

        } 
        else if (average <= 60) {

            statusLabel.textContent = "Developing";
            growthFill.style.background = "linear-gradient(to top, #6FA3B2, #8CBFCC)";

            if (insightText) {
                insightText.textContent =
                    "Steady behavioral alignment indicates sustainable professional growth.";
            }

        } 
        else if (average <= 80) {

            statusLabel.textContent = "Advancing";
            growthFill.style.background = "linear-gradient(to top, #4E8FA3, #9AD1D4)";

            if (insightText) {
                insightText.textContent =
                    "Strong signal consistency suggests upward career mobility and leadership readiness.";
            }

        } 
        else {

            statusLabel.textContent = "Elite";
            growthFill.style.background = "linear-gradient(to top, #1f6f78, #B8E1E4)";

            if (insightText) {
                insightText.textContent =
                    "Exceptional behavioral coherence. Sustained performance at this level drives accelerated advancement.";
            }
        }
    }

    /* Event Listeners */
    sliders.forEach(slider => {
        slider.addEventListener("input", updateGrowth);
    });

    /* Initialize State */
    updateGrowth();
}