document.addEventListener('DOMContentLoaded', function() {
    // Function to handle adding a product to the cart
    function addToCart(name, price) {
        try {
            // Retrieve cart items from localStorage or initialize an empty array
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Add the new item to the cartItems array
            cartItems.push({ name: name, price: price });

            // Save updated cartItems back to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Notify user and update UI (if needed)
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add product to cart. Please try again.');
        }
    }

    // Function to handle adding a product to the comparison list
    function addToCompare(name) {
        try {
            // Retrieve compared items from localStorage or initialize an empty array
            var comparedItems = JSON.parse(localStorage.getItem('comparedItems')) || [];

            // Check if the item is already in the comparison list
            if (!comparedItems.includes(name)) {
                // Add the new item to the comparedItems array
                comparedItems.push(name);

                // Save updated comparedItems back to localStorage
                localStorage.setItem('comparedItems', JSON.stringify(comparedItems));

                // Notify user and update UI (if needed)
                alert('Product added to comparison list!');
            } else {
                alert('This item is already in the comparison list!');
            }
        } catch (error) {
            console.error('Error adding to comparison:', error);
            alert('Failed to add product to comparison list. Please try again.');
        }
    }

    // Add click event listeners to all buttons with class 'add-to-cart-btn'
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Get product details from the clicked button's parent product-item
            var productItem = button.closest('.product-item');
            var productName = productItem.querySelector('h3').textContent;
            var productPrice = productItem.querySelector('.price').textContent;

            // Add the product to the cart
            addToCart(productName, productPrice);
        });
    });

    // Add click event listeners to all buttons with class 'compare-btn'
    var compareButtons = document.querySelectorAll('.compare-btn');
    compareButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Get product details from the clicked button's parent product-item
            var productItem = button.closest('.product-item');
            var productName = productItem.querySelector('h3').textContent;

            // Add the product to the comparison list
            addToCompare(productName);
        });
    });
});
