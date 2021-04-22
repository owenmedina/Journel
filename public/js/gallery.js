const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__img");
const photosContainer = document.querySelector(".gallery__target-container");
console.log("photosContainer", photosContainer);

const galleryHref = "#gallery";

// Close gallery
gallery.addEventListener("click", function (e) {
  if (!e.target.classList.contains("gallery__img")) {
    window.location.href = "#";
  }
});

// Open gallery
photosContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery__target")) {
    galleryImg.src = e.target.src;
    galleryImg.addEventListener("load", function (e) {
      if (e.target.complete) window.location.href = galleryHref;
    });
    return;
  }
  if (e.target?.querySelector("img").classList.contains("gallery__target")) {
    galleryImg.src = e.target.querySelector("img").src;
    window.location.href = galleryHref;
    return;
  }
});
