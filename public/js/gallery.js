const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__img");
const photosContainer = document.querySelector(".photos");

const galleryHref = "#gallery";

// Close gallery
gallery.addEventListener("click", function (e) {
  if (!e.target.classList.contains("gallery__img")) {
    window.location.href = "#";
  }
});

// Open gallery
photosContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("photo")) {
    galleryImg.src = e.target.src;
    window.location.href = galleryHref;
  }
});
