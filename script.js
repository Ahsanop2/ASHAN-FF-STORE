// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    const sellerName = document.getElementById('seller-name').value;
    const idDetails = document.getElementById('id-details').value;
    const buyerName = document.getElementById('buyer-name').value;
    const idRequirements = document.getElementById('id-requirements').value;

    if (!sellerName || !idDetails || !buyerName || !idRequirements) {
        alert("Please fill out all the fields before submitting.");
        event.preventDefault(); // Prevent form submission
    }
});

// Live Chat Integration (Optional: If you want to load chat script dynamically)
window.onload = function() {
    const liveChatLink = document.querySelector('.live-chat a');
    liveChatLink.addEventListener('click', function() {
        alert('You are about to start a live chat!');
    });
}