const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('image-animation'); }
    });
  });
  
  const viewbox = document.querySelectorAll('#fotos1, #fotos2, #fotos3');

  viewbox.forEach(image => {
    observer.observe(image);
  });