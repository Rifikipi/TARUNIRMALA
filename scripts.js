document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const price = urlParams.get('price');

    if (product && price) {
        document.getElementById('product').value = product;
        document.getElementById('price').value = price;
    }
});

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = parseFloat(document.getElementById('price').value);
    const total = price * quantity;

    // Save data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('product', product);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('total', total);

    // Redirect to the invoice page
    window.location.href = 'struk.html';
});
