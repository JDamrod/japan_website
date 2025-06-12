 function openModal(src) {
      document.getElementById("modalImage").src = src;
      document.getElementById("myModal").style.display = "block";
    }
    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }
    window.onclick = function(event) {
      const modal = document.getElementById("myModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }