const accounts = [
    { 
        title: "Pro Level Accoun":: "$70", 
        contact: "https://wa.me/923182898491",
        image: "https://github.com/Ahsanop2/ASHAN-FF-STORE/blob/main/Screenshot_2025-02-05-08-21-52-24_998d3425f9e75a0428f0fabdce419960.jpg" 
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
