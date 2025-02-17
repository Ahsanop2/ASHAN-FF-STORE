// WhatsApp number (agar country code add karna ho to add kar sakte hain)
const whatsappNumber = "03182898491";

// Sale form submission: WhatsApp pe message send hoga
document.getElementById("saleForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const lvl = document.getElementById("saleLvl").value;
  const evo = document.getElementById("saleEvo").value;
  const kisper = document.getElementById("saleKisper").value;
  const info = document.getElementById("saleInfo").value;
  
  const message = encodeURIComponent(
    "Free Fire Account Sale Request:%0ALvl: " + lvl + 
    "%0AEvo: " + evo + 
    "%0AKisper: " + kisper + 
    "%0AAdditional Info: " + info
  );
  window.open("https://wa.me/" + whatsappNumber + "?text=" + message, "_blank");
});

// Buy form submission: WhatsApp pe message send hoga
document.getElementById("buyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const renge = document.getElementById("buyRenge").value;
  const buyEvo = document.getElementById("buyEvo").value;
  const idType = document.getElementById("buyIdType").value;
  
  const message = encodeURIComponent(
    "Free Fire Account Buy Request:%0ARenge: " + renge + 
    "%0AEvo Lvl: " + buyEvo + 
    "%0AID Type: " + idType
  );
  window.open("https://wa.me/" + whatsappNumber + "?text=" + message, "_blank");
});