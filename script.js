document.addEventListener('DOMContentLoaded', function() {

    setTimeout(() => {
        document.querySelector('.loader').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 2000);
    

    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled', 'hide');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide') && currentScroll > 100) {
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            header.classList.remove('hide');
        }
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                

                if (mainNav.classList.contains('active')) {
                    mobileMenuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
                

                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    

    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            

            menuCategories.forEach(category => {
                category.classList.remove('active');
                if (category.classList.contains(tabId)) {
                    setTimeout(() => {
                        category.classList.add('active');
                    }, 10);
                }
            });
        });
    });
    

    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active', 'prev');
            if (i === index) {
                setTimeout(() => {
                    testimonial.classList.add('active');
                }, 10);
            } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
                testimonial.classList.add('prev');
            }
        });
    }
    

    showTestimonial(currentTestimonial);
    

    const testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    

    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    });
    

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;

                    input.classList.add('shake');
                    setTimeout(() => {
                        input.classList.remove('shake');
                    }, 500);
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.textContent = 'Thank you for your message! We will get back to you soon.';
                successMsg.style.opacity = '0';
                successMsg.style.transform = 'translateY(20px)';
                contactForm.appendChild(successMsg);
                
                setTimeout(() => {
                    successMsg.style.opacity = '1';
                    successMsg.style.transform = 'translateY(0)';
                }, 10);
                
                setTimeout(() => {
                    successMsg.style.opacity = '0';
                    successMsg.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        successMsg.remove();
                    }, 300);
                }, 3000);
                
                this.reset();
            }
        });
    }
    
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightbox.classList.add('active');
            lightbox.innerHTML = `
                <img src="${img.src}" alt="${img.alt}">
                <span class="close-btn">&times;</span>
            `;
           
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
 
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
 
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .menu-item, .gallery-item, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.about-content, .menu-item, .gallery-item, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});