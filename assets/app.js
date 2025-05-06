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