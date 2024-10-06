document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalElement = document.getElementById('cartTotal');
    const checkoutButton = document.getElementById('checkoutButton');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            const itemContent = `
                <img src="${item.image}" alt="${item.service}" class="cart-item-image">
                <div>
                    <h3>${item.service}</h3>
                    <p>Price: $${item.price} x ${item.quantity}</p>
                </div>
            `;
            
            cartItemElement.innerHTML = itemContent;
            cartItemsContainer.appendChild(cartItemElement);

            totalAmount += item.price * item.quantity;
        });

        cartTotalElement.textContent = totalAmount.toFixed(2);
    }

    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to your cart before checking out.');
            return;
        }
        window.location.href = 'payment.html';
    });
});
