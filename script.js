document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
          navMenu.classList.toggle('active');
      });
  }

  // Scroll animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const benefitCards = document.querySelectorAll('.benefit-card');
  const productCards = document.querySelectorAll('.product-card');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  // Initial styling for animation elements
  benefitCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  productCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  testimonialCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
      );
  }

  // Function to handle scroll animations
  function handleScrollAnimations() {
      // Animate benefit cards
      benefitCards.forEach((card, index) => {
          if (isInViewport(card)) {
              setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
              }, index * 100);
          }
      });

      // Animate product cards
      productCards.forEach((card, index) => {
          if (isInViewport(card)) {
              setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
              }, index * 100);
          }
      });

      // Animate testimonial cards
      testimonialCards.forEach((card, index) => {
          if (isInViewport(card)) {
              setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
              }, index * 100);
          }
      });
  }

  // Run animation check on load
  handleScrollAnimations();

  // Run animation check on scroll
  window.addEventListener('scroll', handleScrollAnimations);

  // Add to Cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartCount = document.querySelector('.cart-count');
  let itemCount = 0;

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Get product info
          const productCard = this.closest('.product-card');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('.product-price').textContent;
          
          // Update cart count
          itemCount++;
          cartCount.textContent = itemCount;
          
          // Add visual feedback
          this.textContent = 'Added to Cart!';
          this.style.backgroundColor = '#388E3C';
          
          // Create and show notification
          const notification = document.createElement('div');
          notification.classList.add('notification');
          notification.innerHTML = `
              <p><strong>${productName}</strong> added to cart</p>
              <span class="notification-close">&times;</span>
          `;
          document.body.appendChild(notification);
          
          // Style notification
          Object.assign(notification.style, {
              position: 'fixed',
              bottom: '20px',
              left: '20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              zIndex: '1000',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transform: 'translateY(100px)',
              opacity: '0',
              transition: 'all 0.3s ease'
          });
          
          // Animate notification
          setTimeout(() => {
              notification.style.transform = 'translateY(0)';
              notification.style.opacity = '1';
          }, 10);
          
          // Remove notification after 3 seconds
          setTimeout(() => {
              notification.style.transform = 'translateY(100px)';
              notification.style.opacity = '0';
              setTimeout(() => {
                  notification.remove();
              }, 300);
          }, 3000);
          
          // Reset button text after 1.5 seconds
          setTimeout(() => {
              this.textContent = 'Add to Cart';
              this.style.backgroundColor = '';
          }, 1500);
          
          // Store cart data in localStorage (for demo purposes)
          const cartItem = {
              name: productName,
              price: productPrice,
              quantity: 1
          };
          
          // Get existing cart data
          let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
          
          // Check if item already exists in cart
          const existingItemIndex = cartItems.findIndex(item => item.name === productName);
          if (existingItemIndex !== -1) {
              cartItems[existingItemIndex].quantity += 1;
          } else {
              cartItems.push(cartItem);
          }
          
          // Save updated cart data
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
      });
  });

  // Close notification when clicking on X
  document.body.addEventListener('click', function(e) {
      if (e.target.classList.contains('notification-close')) {
          const notification = e.target.parentElement;
          notification.style.transform = 'translateY(100px)';
          notification.style.opacity = '0';
          setTimeout(() => {
              notification.remove();
          }, 300);
      }
  });

  // Load cart count from localStorage on page load
  function loadCartCount() {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      let count = 0;
      
      cartItems.forEach(item => {
          count += item.quantity;
      });
      
      itemCount = count;
      cartCount.textContent = count;
  }
  
  loadCartCount();
  
  // Add smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          
          // Only apply smooth scroll for links to sections on the same page
          if (targetId.startsWith('#') && targetId !== '#') {
              e.preventDefault();
              
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  const offsetTop = targetElement.offsetTop;
                  
                  window.scrollTo({
                      top: offsetTop - 100, // Adjust for header height
                      behavior: 'smooth'
                  });
                  
                  // Close mobile menu if open
                  if (navMenu.classList.contains('active')) {
                      navMenu.classList.remove('active');
                  }
              }
          }
      });
  });
  
  // Add hover animation for WhatsApp fixed button
  const fixedOrderBtn = document.querySelector('.fixed-order-btn a');
  
  if (fixedOrderBtn) {
      fixedOrderBtn.addEventListener('mouseover', function() {
          this.style.transform = 'translateY(-3px) scale(1.05)';
          this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
      });
      
      fixedOrderBtn.addEventListener('mouseout', function() {
          this.style.transform = '';
          this.style.boxShadow = '';
      });
      
      fixedOrderBtn.addEventListener('click', function() {
          this.style.transform = 'translateY(2px) scale(0.95)';
          setTimeout(() => {
              this.style.transform = '';
          }, 200);
      });
  }
});