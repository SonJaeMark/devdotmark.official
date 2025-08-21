
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const business = formData.get('business');
    const package = formData.get('package');
    const message = formData.get('message');
    
    // Show success message
    alert(`Thank you ${name}! I've received your inquiry for the ${package} package. I'll send you a detailed proposal at ${email} within 24 hours. Let's build something amazing together!`);
    
    // Reset form
    event.target.reset();
}

// Modal functions
function openProjectsModal() {
    document.getElementById('projectsModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectsModal() {
    document.getElementById('projectsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectsModal();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all floating cards
document.querySelectorAll('.floating-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Project image slideshow functionality
const projectImages = {
    gymbro: [
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/hero.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/program.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/membership.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/trainers.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/contact.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/gymbro/footer.png'
    ],
    sarah: [
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/hero.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/listing.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/about.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/services.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/testimonials.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/contact.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Sarah%20Mitchell%20Gallery/footer.png'
    ],
    alex: [
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alex%20Rivera%202/1.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alex%20Rivera%202/about.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alex%20Rivera%202/contact.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alex%20Rivera%202/services.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alex%20Rivera%202/footer.png'
    ],
    dental: [
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/hero.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/about.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/services.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/before%20and%20after.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/testimonials.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/tesm.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/contact.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Bright%20Smile%20Dental%20Clinic/footer.png'
    ],
    alexandra: [
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/Home.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/About.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/Service.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/Featured%20Projects.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/Contact.png',
        'https://raw.githubusercontent.com/SonJaeMark/website-image-repo/main/Alexandra%20Chen%20Gallery/Footer.png'
    ]
};

// Initialize slideshow for each project type with smooth transitions
function initializeSlideshow(className, images) {
    const elements = document.querySelectorAll(`.${className}`);
    let currentIndex = 0;
    
    // Preload all images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Set initial image
    elements.forEach(element => {
        element.style.backgroundImage = `url('${images[0]}')`;
    });
    
    // Change image every 2 seconds with smooth transition
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        
        elements.forEach(element => {
            // Set next image on ::after pseudo-element
            element.style.setProperty('--next-image', `url('${images[nextIndex]}')`);
            
            // Add transition class
            element.classList.add('transitioning');
            
            // After transition completes, swap images
            setTimeout(() => {
                element.style.backgroundImage = `url('${images[nextIndex]}')`;
                element.classList.remove('transitioning');
            }, 500); // Half of transition duration
        });
        
        currentIndex = nextIndex;
    }, 2000);
}

// Start slideshows for each project
initializeSlideshow('gymbro-slideshow', projectImages.gymbro);
initializeSlideshow('sarah-slideshow', projectImages.sarah);
initializeSlideshow('alex-slideshow', projectImages.alex);
initializeSlideshow('dental-slideshow', projectImages.dental);
initializeSlideshow('alexandra-slideshow', projectImages.alexandra);

// (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9726c849b31ebc45',t:'MTc1NTc0NDIwMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();