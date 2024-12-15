document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseover', () => card.classList.add('hovered'));
        card.addEventListener('mouseout', () => card.classList.remove('hovered'));
    });

    const navbar = document.querySelector('.navbar');
    const navbarOffset = navbar.offsetTop;

    window.addEventListener('scroll', () => navbar.classList.toggle('sticky', window.scrollY >= navbarOffset));

    document.querySelectorAll('.back-to-section-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.querySelector(button.getAttribute('data-target'));
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('fade-in', entry.isIntersecting));
    }, { root: null, threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
});

document.querySelectorAll('.btn-link').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-bs-target'));
        target.classList.toggle('show');
    });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
    scrollToTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 65,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.querySelector('.btn.btn-primary.btn-lg.shadow-lg');

    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', e => {
            e.preventDefault();
            const targetElement = document.getElementById('about');

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 65,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.getElementById('getQuote').addEventListener('click', async () => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await response.json();
    const quote = data[0];

    document.getElementById('quoteText').textContent = quote.quote;
    document.getElementById('quoteAuthor').textContent = `- ${quote.author}`;
});