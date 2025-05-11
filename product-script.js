document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    const searchInput = document.getElementById('product-search');
    const searchBtn = document.getElementById('search-btn');
    const sortSelect = document.getElementById('sort-select');
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const modalAddToCartBtn = document.querySelector('.modal-add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const wishlistBtn = document.querySelector('.modal-wishlist');
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.querySelector('.quantity-btn.minus');
    const increaseBtn = document.querySelector('.quantity-btn.plus');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Product data (simulated database)
    const productData = {
        1: {
            id: 1,
            name: "Mixed Berry Blend",
            price: 12.99,
            description: "A perfect mix of strawberries, blueberries, and raspberries packed with antioxidants.",
            category: "fruits",
            image: "/api/placeholder/800/800",
            rating: 4.5,
            reviews: 24,
            nutritional: {
                calories: "110 kcal",
                protein: "1.2g",
                carbs: "22g",
                fat: "0.5g",
                fiber: "4g"
            },
            benefits: [
                "Rich in antioxidants",
                "High in vitamin C",
                "Supports immune health",
                "Promotes healthy skin"
            ]
        },
        2: {
            id: 2,
            name: "Tropical Fruit Mix",
            price: 14.99,
            description: "Sweet mango, pineapple, and banana. A tropical paradise in every bite.",
            category: "fruits",
            image: "/api/placeholder/800/800",
            rating: 5,
            reviews: 37,
            nutritional: {
                calories: "120 kcal",
                protein: "1g",
                carbs: "28g",
                fat: "0.3g",
                fiber: "3g"
            },
            benefits: [
                "Rich in vitamin A and C",
                "Natural energy booster",
                "Promotes digestive health",
                "Supports hydration"
            ]
        },
        3: {
            id: 3,
            name: "Veggie Crisps",
            price: 9.99,
            description: "Crunchy mix of kale, sweet potato, and beet chips. A nutritious alternative to regular snacks.",
            category: "vegetables",
            image: "/api/placeholder/800/800",
            rating: 4,
            reviews: 19,
            nutritional: {
                calories: "90 kcal",
                protein: "2.5g",
                carbs: "15g",
                fat: "1g",
                fiber: "3.5g"
            },
            benefits: [
                "High in fiber",
                "Source of plant-based proteins",
                "Contains essential minerals",
                "Low in calories"
            ]
        },
        4: {
            id: 4,
            name: "Apple Cinnamon Chips",
            price: 8.99,
            description: "Sweet and tangy apple slices with a hint of cinnamon. A perfect healthy snack.",
            category: "fruits",
            image: "/api/placeholder/800/800",
            rating: 4.5,
            reviews: 42,
            nutritional: {
                calories: "95 kcal",
                protein: "0.5g",
                carbs: "23g",
                fat: "0.2g",
                fiber: "4.5g"
            },
            benefits: [
                "Good source of fiber",
                "Contains natural antioxidants",
                "Supports digestive health",
                "No added sugars"
            ]
        },
        5: {
            id: 5,
            name: "Green Superfood Mix",
            price: 15.99,
            description: "Blend of spinach, kale, and broccoli. Add to smoothies for an extra nutrient boost.",
            category: "vegetables",
            image: "/api/placeholder/800/800",
            rating: 4,
            reviews: 16,
            nutritional: {
                calories: "45 kcal",
                protein: "4g",
                carbs: "8g",
                fat: "0.3g",
                fiber: "5g"
            },
            benefits: [
                "High in iron and calcium",
                "Rich in antioxidants",
                "Supports immune function",
                "Excellent source of vitamins K and A"
            ]
        },
        6: {
            id: 6,
            name: "Healthy Breakfast Mix",
            price: 17.99,
            description: "A nutritious blend of fruits, nuts, and seeds. Perfect for boosting your morning routine.",
            category: "mixes",
            image: "/api/placeholder/800/800",
            rating: 5,
            reviews: 31,
            nutritional: {
                calories: "150 kcal",
                protein: "5g",
                carbs: "20g",
                fat: "7g",
                fiber: "6g"
            },
            benefits: [
                "Complete morning nutrition",
                "Sustained energy release",
                "Rich in omega-3 fatty acids",
                "Contains essential vitamins and minerals"
            ]
        },
        7: {
            id: 7,
            name: "Protein Bites Mix",
            price: 13.99,
            description: "High-protein blend of nuts, seeds, and berries for post-workout recovery.",
            category: "snacks",
            image: "/api/placeholder/800/800",
            rating: 3.5,
            reviews: 22,
            nutritional: {
                calories: "180 kcal",
                protein: "8g",
                carbs: "12g",
                fat: "10g",
                fiber: "4g"
            },
            benefits: [
                "High in plant-based protein",
                "Supports muscle recovery",
                "Contains healthy fats",
                "Perfect post-workout snack"
            ]
        },
        8: {
            id: 8,
            name: "Immunity Booster Mix",
            price: 16.99,
            description: "A powerful blend of antioxidant-rich superfoods to support your immune system.",
            category: "mixes",
            image: "/api/placeholder/800/800",
            rating: 4.5,
            reviews: 28,
            nutritional: {
                calories: "130 kcal",
                protein: "3g",
                carbs: "25g",
                fat: "2g",
                fiber: "7g"
            },
            benefits: [
                "Rich in vitamins C and D",
                "Contains zinc and selenium",
                "Antioxidant properties",
                "Supports overall immune health"
            ]
        },
        9: {
            id: 9,
            name: "Crunchy Trail Mix",
            price: 12.99,
            description: "A satisfying blend of dehydrated fruits, vegetables, and nuts for on-the-go energy.",
            category: "snacks",
            image: "/api/placeholder/800/800",
            rating: 4,
            reviews: 25,
            nutritional: {
                calories: "160 kcal",
                protein: "6g",
                carbs: "18g",
                fat: "9g",
                fiber: "5g"
            },
            benefits: [
                "Balanced macronutrients",
                "Perfect for hiking and outdoor activities",
                "Sustained energy release",
                "Portable and convenient"
            ]
        }
    };

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Category Filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter products
            filterProducts(filter);
        });
    });

    // Product Filtering function
    function filterProducts(filter) {
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Search Functionality
    searchBtn.addEventListener('click', function() {
        performSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // If search is empty, show all products (or current category filter)
            const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-filter');
            filterProducts(activeCategory);
            return;
        }
        
        productCards.forEach(card => {
            const productName = card.getAttribute('data-name').toLowerCase();
            const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Sort Functionality
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const productsArray = Array.from(productCards);
        
        switch(sortValue) {
            case 'price-low':
                sortProducts(productsArray, (a, b) => {
                    return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
                });
                break;
            case 'price-high':
                sortProducts(productsArray, (a, b) => {
                    return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
                });
                break;
            case 'name-asc':
                sortProducts(productsArray, (a, b) => {
                    return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
                });
                break;
            case 'name-desc':
                sortProducts(productsArray, (a, b) => {
                    return b.getAttribute('data-name').localeCompare(a.getAttribute('data-name'));
                });
                break;
            default:
                // Default sort (featured)
                sortProducts(productsArray, (a, b) => {
                    return parseInt(a.getAttribute('data-product-id')) - parseInt(b.getAttribute('data-product-id'));
                });
        }
    });

    function sortProducts(productsArray, compareFunction) {
        productsArray.sort(compareFunction).forEach(product => {
            product.parentElement.appendChild(product);
        });
    }

    // Quick View Modal
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            openProductModal(productId);
        });
    });

    function openProductModal(productId) {
        const product = productData[productId];
        
        if (!product) return;
        
        // Populate modal with product data
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-reviews').textContent = `(${product.reviews} reviews)`;
        document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('modal-description').textContent = product.description;
        
        // Nutritional info
        document.getElementById('modal-calories').textContent = product.nutritional.calories;
        document.getElementById('modal-protein').textContent = product.nutritional.protein;
        document.getElementById('modal-carbs').textContent = product.nutritional.carbs;
        document.getElementById('modal-fat').textContent = product.nutritional.fat;
        document.getElementById('modal-fiber').textContent = product.nutritional.fiber;
        
        // Benefits
        const benefitsList = document.getElementById('modal-benefits-list');
        benefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        
        // Set quantity to 1
        quantityInput.value = 1;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Quantity Control
    decreaseBtn.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        if (parseInt(quantityInput.value) < 99) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });

    quantityInput.addEventListener('change', function() {
        if (this.value < 1) {
            this.value = 1;
        } else if (this.value > 99) {
            this.value = 99;
        }
    });

    // Cart Functionality
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartCount();

    // Add to cart buttons on product cards
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.querySelector('.quick-view-btn').getAttribute('data-product-id');
            addToCart(productId, 1);
        });
    });

    // Add to cart from modal
    modalAddToCartBtn.addEventListener('click', function() {
        const productId = document.querySelector('.quick-view-btn[data-product-id]').getAttribute('data-product-id');
        const quantity = parseInt(quantityInput.value);
        addToCart(productId, quantity);
        showAddedToCartMessage();
    });

    function addToCart(productId, quantity) {
        const product = productData[productId];
        
        if (!product) return;
        
        // Check if product already exists in cart
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        
        if (existingItemIndex !== -1) {
            // Update quantity if item exists
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        // Save cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Update cart count
        updateCartCount();
    }

    function updateCartCount() {
        let totalItems = 0;
        
        cartItems.forEach(item => {
            totalItems += item.quantity;
        });
        
        cartCount.textContent = totalItems;
    }

    function showAddedToCartMessage() {
        // Create a custom notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = '<i class="fas fa-check-circle"></i> Added to cart!';
        
        // Add to body
        document.body.appendChild(notification);
        
        // Add active class to trigger animation
        setTimeout(() => {
            notification.classList.add('active');
        }, 10);
        
        // Remove after animation
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    // Wishlist Functionality
    wishlistBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            // Add to wishlist
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
        } else {
            // Remove from wishlist
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
        }
    });

    // Add some CSS for the notification
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1200;
            transform: translateY(-20px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .cart-notification.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .cart-notification i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
});