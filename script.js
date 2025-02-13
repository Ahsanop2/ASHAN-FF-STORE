let balance = 100;
let referralCode = "INV" + Math.floor(Math.random() * 10000);

function login() {
    let username = document.getElementById("username").value;
    if (username) {
        document.getElementById("user").innerText = username;
        document.getElementById("dashboard").classList.remove("hidden");
        document.querySelector(".login-form").style.display = "none";
        document.getElementById("referral").innerText = referralCode;
    }
}

function invest() {
    if (balance >= 10) {
        balance -= 10;
        document.getElementById("balance").innerText = balance;
        alert("Investment Successful!");
    } else {
        alert("Insufficient Balance!");
    }
}

function withdraw() {
    let status = balance >= 50 ? "Success" : "Pending";
    document.getElementById("withdraw-status").innerText = "Withdrawal Status: " + status;
}