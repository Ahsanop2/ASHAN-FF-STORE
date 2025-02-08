const accounts = [
    { 
        title: "Pro Level Accoun":: "$70", 
        contact: "https://wa.me/923182898491",
        img src="https://github.com/Ahsanop2/ASHAN-FF-STORE/blob/main/screenshot.jpg?raw=true" alt="Screenshot">
    }
];

function loadAccounts() {
    const container = document.getElementById('account-list');
    accounts.forEach(acc => {
        let accountDiv = document.createElement('div');
        accountDiv.classList.add('account');
        accountDiv.innerHTML = `
            <img src="${acc.image}" alt="${acc.title}">
            <h3>${acc.title}</h3>
            <p>Level: ${acc.level} | Skins: ${acc.skins} | Price: ${acc.price}</p>
            <a href="${acc.contact}" target="_blank">Buy Now</a>
        `;
        container.appendChild(accountDiv);
    });
}

window.onload = loadAccounts;
