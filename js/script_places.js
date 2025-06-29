function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) modal.style.display = "none";
    });
  }

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.place-card, .card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 1); 
  });
});
