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

  document.addEventListener('keydown', e => {
    e.key == 'Escape' && document.querySelectorAll('.gallery')
      .forEach(gallery => gallery.classList.remove('open'));
  });

  document.querySelectorAll('.gallery-featured-image').forEach(image => {
    image.addEventListener('click', () => {
      image.parentElement.classList.toggle('open');
    });
  });

  document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.addEventListener('click', e => {
      e.target.tagName != 'IMG' && gallery.classList.remove('open');
    });
  });
}
