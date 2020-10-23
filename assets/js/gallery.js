/** Change the gallery's featured image when a thumbnail is clicked. */
document.querySelectorAll(".gallery-thumbnail").forEach(item => {
  item.addEventListener("click", event => {
    item.parentElement.firstElementChild.alt = item.alt;
    item.parentElement.firstElementChild.src = item.src;
  })
})
