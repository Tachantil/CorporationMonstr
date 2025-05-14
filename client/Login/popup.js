function openPopup() {
    fetch('Login/Login-popup.html')
        .then(response => response.text())
        .then(html => {
            const overlay = document.getElementById('popupOverlay');
            overlay.innerHTML = html;
            overlay.classList.add('active');

            const scripts = overlay.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
            });

            const closeBtn = overlay.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    overlay.classList.remove('active');
                    overlay.innerHTML = '';
                });
            }
        })
        .catch(err => console.error('Помилка завантаження popup:', err));
}
