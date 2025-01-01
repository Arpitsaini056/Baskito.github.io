// Function to verify seller details and move to the next step
function verifySellerDetails() {
    const panNumber = document.getElementById('pan-number').value;
    const aadhaarNumber = document.getElementById('aadhaar-number').value;

    // Simple validation: check if PAN and Aadhaar are provided
    if (panNumber && aadhaarNumber) {
        // Hide Step 1 and show Step 2
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else {
        alert('Please enter valid PAN and Aadhaar numbers.');
    }
}

// Function to enable the 'Next' button after terms are accepted
document.getElementById('terms-checkbox').addEventListener('change', function() {
    const nextButton = document.getElementById('next-btn');
    nextButton.disabled = !this.checked;
});

// Function to proceed to Step 3 after agreeing to Terms & Conditions
function proceedToNextStep() {
    // Hide Step 2 and show Step 3
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

// Function to handle product submission with category selection
document.getElementById('seller-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected category and product details
    const category = document.getElementById('category').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;

    // You can save these details to your database (or any other storage) here.
    console.log("Product Added!");
    console.log("Category: " + category);
    console.log("Product Name: " + productName);
    console.log("Product Price: " + productPrice);
    console.log("Product Description: " + productDescription);

    // You can also add logic to show a confirmation message after successful submission
    alert("Product added successfully in " + category + " category.");
});
