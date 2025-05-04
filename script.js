document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
       let current= ''; let currentSectionId = '';

        sections.forEach(section => {
  const sectionTop= section.offsetTop - 80;  const sectionTop = section.offsetTop - 100; // margen más preciso
            if (scrolly>= sectionTop) { const sectionHeight = section.offsetHeight;
current = sectionTop.getAttribute('id');
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

         if (link.getAttribute('herf')=== '#${current}'){ navLinks.forEach(link => {
            link.classList.remove('active');

            const href = link.getAttribute('href').substring(1); // Elimina el #
            if (href === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
});
