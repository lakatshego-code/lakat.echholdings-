
window.addEventListener("load", () => {
    console.log("Welcome to Laka T.ech Industry!");
});


const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", () => {

        let filter = searchBox.value.toLowerCase();

        let content = document.querySelectorAll(".searchable");

        content.forEach(item => {

            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });
}

const showMoreBtn = document.getElementById("showMoreBtn");

if (showMoreBtn) {

    showMoreBtn.addEventListener("click", () => {

        const extraContent = document.getElementById("extraContent");

        if (extraContent.innerHTML === "") {

            extraContent.innerHTML = `
                <h3>More About Laka T.ech Industry</h3>
                <p>
                    We provide software development, web design,
                    cybersecurity solutions, database management,
                    and IT consulting services.
                </p>
            `;

            showMoreBtn.textContent = "Show Less";

        } else {

            extraContent.innerHTML = "";
            showMoreBtn.textContent = "Show More Information";

        }

    });

}


const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

const headings = document.querySelectorAll("h2");

headings.forEach(heading => {

    heading.addEventListener("mouseover", () => {

        heading.style.color = "#00bfff";
        heading.style.transition = "0.3s";

    });

    heading.addEventListener("mouseout", () => {

        heading.style.color = "";

    });

});

const dateContainer = document.getElementById("currentDate");

if (dateContainer) {

    const today = new Date();

    dateContainer.innerHTML =
        "Today's Date: " + today.toDateString();

}