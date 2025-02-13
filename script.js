<!DOCTYPE html>
<html lang="ur">
<head>
  <meta charset="UTF-8">
  <title>آن لائن ارننگ ویب سائٹ</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>آن لائن ارننگ ویب سائٹ</h1>
    
    <!-- Dashboard Section -->
    <div class="section" id="dashboard">
      <h2>ڈیش بورڈ</h2>
      <p>موجودہ بیلنس: <span id="balance">1000</span> روپے</p>
    </div>
    
    <!-- Photo Upload Section -->
    <div class="section" id="photo-upload">
      <h2>اپنی تصویر اپلوڈ کریں</h2>
      <input type="file" id="photoInput" accept="image/*">
      <div id="photoPreview"></div>
    </div>
    
    <!-- Investment Section -->
    <div class="section" id="investment">
      <h2>سرمایہ کاری کے منصوبے</h2>
      <ul id="investmentList">
        <li>منصوبہ A - کم سرمایہ کاری</li>
        <li>منصوبہ B - درمیانی سرمایہ کاری</li>
        <li>منصوبہ C - زیادہ سرمایہ کاری</li>
      </ul>
    </div>
    
    <!-- Referral Section -->
    <div class="section" id="referral">
      <h2>ریفریل سسٹم</h2>
      <p>اپنا ریفریل کوڈ: <strong id="referralCode">ABC123</strong></p>
      <button onclick="copyReferral()">ریفریل کوڈ کاپی کریں</button>
    </div>
    
    <!-- Daily Withdrawal Section -->
    <div class="section" id="withdrawal">
      <h2>روزانہ ودڈرال</h2>
      <button id="withdrawBtn" onclick="processWithdrawal()">ودڈرال کریں</button>
      <p id="withdrawStatus"></p>
    </div>
  </div>
  
  <script src="script.js"></script>
</body>
</html>