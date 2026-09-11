const form = document.getElementById("greetingForm");

const formSection =
    document.getElementById("formSection");

const cardSection =
    document.getElementById("cardSection");

const cardName =
    document.getElementById("cardName");

const cardAge =
    document.getElementById("cardAge");

const cardOccasion =
    document.getElementById("cardOccasion");

const cardMessage =
    document.getElementById("cardMessage");

const backButton =
    document.getElementById("backButton");

const moods =
    document.querySelectorAll(".mood");


/* =========================
   MOOD SELECTION
========================= */

moods.forEach(function(mood) {

    mood.addEventListener("click", function() {

        moods.forEach(function(item) {

            item.classList.remove("active");

        });

        mood.classList.add("active");

        const theme =
            mood.getAttribute("data-theme");

        document.body.className = "";

        if (theme !== "dream") {

            document.body.classList.add(theme);

        }

    });

});


/* =========================
   CREATE CARD
========================= */

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value;

    const occasion =
        document.getElementById("occasion").value;

    const message =
        document.getElementById("message").value.trim();


    /* Name */

    cardName.textContent =
        name;


    /* Age */

    cardAge.textContent =
        age;


    /* Occasion */

    cardOccasion.textContent =
        occasion + "!";


    /* Message */

    if (message === "") {

        cardMessage.textContent =
            "May this beautiful moment become the beginning of something extraordinary. Keep believing, keep growing, and keep shining.";

    } else {

        cardMessage.textContent =
            message;

    }


    /* Change screen */

    formSection.style.display =
        "none";

    cardSection.style.display =
        "flex";


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CREATE ANOTHER CARD
========================= */

backButton.addEventListener("click", function() {

    cardSection.style.display =
        "none";

    formSection.style.display =
        "flex";

    form.reset();


    moods.forEach(function(item) {

        item.classList.remove("active");

    });


    moods[0].classList.add("active");


    document.body.className = "";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});