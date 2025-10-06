// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: 'Khorovats',
        category: 'grills',
        description: 'Traditional Armenian BBQ with premium cuts of meat',
        price: '₽ 4,500',
        image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true,
    },
    {
        id: 2,
        name: 'Dolma',
        category: 'appetizers',
        description: 'Grape leaves stuffed with rice and herbs',
        price: '₽ 1,800',
        image: 'https://images.pexels.com/photos/5840071/pexels-photo-5840071.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true,
    },
    {
        id: 3,
        name: 'Khash',
        category: 'mains',
        description: 'Traditional soup made with beef legs',
        price: '₽ 2,200',
        image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false,
    },
    {
        id: 4,
        name: 'Harisa',
        category: 'mains',
        description: 'Hearty porridge with wheat and meat',
        price: '₽ 1,900',
        image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false,
    },
    {
        id: 5,
        name: 'Ghapama',
        category: 'mains',
        description: 'Pumpkin stuffed with rice, dried fruits and nuts',
        price: '₽ 2,100',
        image: 'https://images.pexels.com/photos/8477867/pexels-photo-8477867.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true,
    },
    {
        id: 6,
        name: 'Gata',
        category: 'desserts',
        description: 'Sweet pastry with buttery filling',
        price: '₽ 800',
        image: 'https://images.pexels.com/photos/5848391/pexels-photo-5848391.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false,
    },
    {
        id: 7,
        name: 'Zhingyalov Hats',
        category: 'appetizers',
        description: 'Flatbread stuffed with herbs',
        price: '₽ 1,200',
        image: 'https://images.pexels.com/photos/3913008/pexels-photo-3913008.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: false,
    },
    {
        id: 8,
        name: 'Lahmajoun',
        category: 'appetizers',
        description: 'Armenian flatbread with minced meat',
        price: '₽ 1,500',
        image: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600',
        popular: true,
    },
];

// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            navMenu.classList.remove('active');
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu Filter Functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItemsContainer = document.getElementById('menu-items');

function renderMenuItems(category) {
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    menuItemsContainer.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
                ${item.popular ? `
                    <div class="popular-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                        </svg>
                        <span>Popular</span>
                    </div>
                ` : ''}
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="order-btn">Order Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderMenuItems(button.dataset.category);
    });
});

// Initialize menu with all items
renderMenuItems('all');

// Gallery Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.querySelector('.modal-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageUrl = item.dataset.image;
        modalImage.src = imageUrl;
        galleryModal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    galleryModal.classList.remove('active');
});

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.classList.remove('active');
    }
});

// Form Submissions
const reservationForm = document.getElementById('reservation-form');
const contactForm = document.getElementById('contact-form');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly to confirm.');
    reservationForm.reset();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Active Section Highlight in Navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
