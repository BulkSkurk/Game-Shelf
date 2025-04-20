function openImage(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.classList.add('show');
}

function closeImage() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('show');
}
