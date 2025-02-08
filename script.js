// WhatsApp Number
const whatsappNumber = "923448089399";

// Seller Data Submission
function sendSellerData() {
    let level = document.getElementById("level").value;
    let evos = document.getElementById("evos").value;
    let likes = document.getElementById("likes").value;
    let diamonds = document.getElementById("diamonds").value;
    let price = document.getElementById("price").value;

    if (!level || !evos || !likes || !diamonds || !price) {
        alert("Please fill all fields before submitting.");
        return;
    }

    let message = `🔥 Free Fire ID for Sale 🔥%0A
    ✅ Level: ${level}%0A
    🔥 Evos: ${evos}%0A
    👍 Likes: ${likes}%0A
    💎 Diamonds: ${diamonds}%0A
    💰 Price: ${price} PKR%0A
    📌 Payment via Easypaisa%0A
    📲 Contact: Rasool Bakhush (03448089399)`;

    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}

// Buyer Data Submission
function sendBuyerData() {
    let idType = document.getElementById("id-type").value;
    let priceRange = document.getElementById("price-range").value;

    if (!idType || !priceRange) {
        alert("Please fill all fields before submitting.");
        return;
    }

    let message = `🔍 Looking for a Free Fire ID 🔍%0A
    🆔 ID Type: ${idType}%0A
    💰 Price Range: ${priceRange} PKR%0A
    📌 Payment via Easypaisa%0A
    📲 Contact: Rasool Bakhush (03448089399)`;

    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");
}