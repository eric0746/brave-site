<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <title>Brave 多語言切換範例</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #fff0f5;
    }
    .lang-btn {
      margin: 5px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: #d63384;
      color: white;
      cursor: pointer;
      font-weight: bold;
    }
    .lang-btn.active {
      background-color: #a32663;
    }
  </style>
</head>
<body>
  <div style="text-align:center; margin-bottom:20px;">
    <button id="btn-zh" class="lang-btn active" onclick="setLang('zh')">中文</button>
    <button id="btn-en" class="lang-btn" onclick="setLang('en')">English</button>
  </div>

  <h1 data-lang-zh="歡迎來到 Brave 網站" data-lang-en="Welcome to Brave Website"></h1>
  <p data-lang-zh="這是一個多語言切換的簡單範例。" data-lang-en="This is a simple example of language switching."></p>
  <p data-lang-zh="請點擊上方按鈕切換語言。" data-lang-en="Please click the buttons above to switch language."></p>

  <script>
    function setLang(lang) {
      // 按鈕切換狀態
      document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
      document.getElementById('btn-en').classList.toggle('active', lang === 'en');

      // 找到所有帶 data-lang-* 的元素，改變內容
      document.querySelectorAll('[data-lang-zh]').forEach(el => {
        el.textContent = el.getAttribute('data-lang-' + lang);
      });
    }

    // 預設語言：中文
    setLang('zh');
  </script>
</body>
</html>
