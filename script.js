const accounts = [
    { title: "Pro Level Account", level: 75, skins: 50, price: "$100", contact: "https://wa.me/yourwhatsapplink" },
    { title: "Elite Pass Account", level: 60, skins: 30, price: "$70", contact: "https://wa.me/yourwhatsapplink" }
];

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
