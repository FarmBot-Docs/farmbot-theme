addEventListener('load', addEventListeners);

/** Change the gallery's featured image when a thumbnail is clicked. */
function addEventListeners() {
  document.querySelectorAll('.gallery-thumbnail').forEach(image => {
    image.addEventListener('click', () => {
      const featuredImage = image.parentElement.firstElementChild;
      featuredImage.alt = image.alt;
      featuredImage.src = image.src;
    });
  });
}
