<script>
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
</script>
