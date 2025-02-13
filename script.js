// موجودہ بیلنس کی simulation
let balance = parseInt(document.getElementById('balance').innerText);
const withdrawalAmount = 500; // روزانہ ودڈرال کی رقم

// ریفریل کوڈ کاپی کرنے کا فنکشن
function copyReferral() {
  const code = document.getElementById('referralCode').innerText;
  navigator.clipboard.writeText(code).then(function() {
    alert('ریفریل کوڈ کاپی ہو گیا!');
  }, function(err) {
    alert('کاپی میں مسئلہ آیا: ' + err);
  });
}

// روزانہ ودڈرال پروسس کرنے کا فنکشن
function processWithdrawal() {
  if (balance >= withdrawalAmount) {
    balance -= withdrawalAmount;
    document.getElementById('balance').innerText = balance;
    document.getElementById('withdrawStatus').innerText = "Success: ودڈرال مکمل ہوا!";
  } else {
    document.getElementById('withdrawStatus').innerText = "Pending: بیلنس ناکافی ہے!";
  }
}

// تصویر اپلوڈ اور preview کا فنکشن
document.getElementById('photoInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('photoPreview').innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Photo">';
    }
    reader.readAsDataURL(file);
  }
});