// sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');

// Mostra sidebar
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Chiudi sidebar
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Chiudi sidebar quando si fa clic su un link

// Chiudi sidebar quando si clicca fuori
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});



// SLIDER


document.addEventListener('DOMContentLoaded', () => {
    const reviewContainer = document.querySelector('.review-slider');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    const reviews = document.querySelectorAll('.review-card');

    function setupIndicators() {
        indicatorsContainer.innerHTML = '';
        const isLargeScreen = window.innerWidth >= 992;
        const itemsPerPage = isLargeScreen ? 3 : 1;
        const totalPages = Math.ceil(reviews.length / itemsPerPage);

        for (let i = 0; i < totalPages; i++) {
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'review-slider';
            radio.classList.add('mx-1');
            radio.addEventListener('click', () => {
                const scrollAmount = reviewContainer.offsetWidth * i;
                reviewContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            });
            indicatorsContainer.appendChild(radio);
        }
        indicatorsContainer.children[0]?.click();
    }

    function updateIndicatorOnScroll() {
        const scrollLeft = reviewContainer.scrollLeft;
        const width = reviewContainer.offsetWidth;
        const isLargeScreen = window.innerWidth >= 992;
        const itemsPerPage = isLargeScreen ? 3 : 1;
        const currentIndex = Math.round(scrollLeft / width);

        const radios = indicatorsContainer.querySelectorAll('input');
        radios.forEach((r, i) => r.checked = i === currentIndex);
    }

    reviewContainer.addEventListener('scroll', updateIndicatorOnScroll);
    window.addEventListener('resize', setupIndicators);
    setupIndicators();
});


// FAQ
const openBtns = document.querySelectorAll('.bi-plus-lg');
const closeBtns = document.querySelectorAll('.bi-dash-lg');
const faqItems = document.querySelectorAll('.faq-desc');

openBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        faqItems[index].classList.remove('d-none');
        openBtns[index].classList.add('d-none');
        closeBtns[index].classList.remove('d-none');
    });
})

closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        faqItems[index].classList.add('d-none');
        openBtns[index].classList.remove('d-none');
        closeBtns[index].classList.add('d-none');
    });
})