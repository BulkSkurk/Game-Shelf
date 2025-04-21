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

function openTerms() {
  document.getElementById('termsModal').style.display = 'block';
}

function closeTerms() {
  document.getElementById('termsModal').style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('termsModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

fetch('terms.html')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('termsModal').innerHTML = data;
  });
