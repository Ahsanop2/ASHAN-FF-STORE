const accounts = [
    { title: "Pro Level Account", level: 75, skins: 8000, price: "Pkr8000", contact: "https://wa.me/03182898491" },
    { title: "Elite Pass Account", level: 60, skins: 3000, price: "pkr3000", contact: "https://wa.me/03182898491" }
];

image: "account1.jpg" // ✅ Image file name
    },
function loadAccounts() {
    const container = document.getElementById('account-list');
    accounts.forEach(acc => {
        let accountDiv = document.createElement('div');
        accountDiv.classList.add('account');
        accountDiv.innerHTML = `<h3>${acc.title}</h3><p>Level: ${acc.level} | Skins: ${acc.skins} | Price: ${acc.price}</p><a href="${acc.contact}" target="_blank">Buy Now</a>`;
        container.appendChild(accountDiv);
    });
}

window.onload = loadAccounts;
