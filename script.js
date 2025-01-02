document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止頁面重新加載

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = `謝謝您的留言，${name}！我們會盡快聯繫您。`;
    } else {
        document.getElementById('responseMessage').textContent = '請填寫所有欄位。';
    }
});
