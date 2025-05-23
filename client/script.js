console.log('Сторінка завантажена');

    document.addEventListener("DOMContentLoaded", () => {
      const avatar = document.getElementById("userAvatar");
      const dropdown = document.getElementById("userDropdown");

      if (avatar && dropdown) {
        dropdown.classList.remove("active");

        avatar.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.toggle("active");
        });

        document.addEventListener("click", (e) => {
          if (!dropdown.contains(e.target) && e.target !== avatar) {
            dropdown.classList.remove("active");
          }
        });
      }
    });

    // Дані новин і товарів (оновлено з актуальними URL)
const data = [
  { type: 'news', title: 'ТОП-5 стратегій лякання у школах', url: '../news/news1.html' },
  { type: 'news', title: 'Який монстр ти за стилем життя?', url: '../news/news2.html' },
  { type: 'news', title: 'Нові правила використання «бу!» в офісі', url: '../news/news3.html' },
  { type: 'news', title: 'Як змінились стандарти монстрозагроз', url: '../news/news4.html' },
  { type: 'news', title: '10 порад для стажера', url: '../news/news5.html' },
  { type: 'news', title: 'Чи потрібна монстру освіта?', url: '../news/news6.html' },
  { type: 'product', title: 'Слизозбірник PRO+', url: '../products/slimecolector.html' },
  { type: 'product', title: 'Антишумові капці «Тихі Кігті»', url: '../products/silenceclaws.html' },
  { type: 'product', title: 'Вітаміни МонстроМікс', url: '../products/monstermix.html' },
  { type: 'product', title: 'Карманний лякач', url: '../products/pocketscream.html' },
];

const input = document.querySelector('.user-profile input');
const modal = document.createElement('div');
modal.className = 'search-modal';
modal.style.display = 'none';
document.body.appendChild(modal);

const style = document.createElement('style');
style.textContent = `
  .search-modal {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background: white;
    border: 1px solid #0077c8;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    padding: 20px;
  }
  .search-modal h3 {
    margin-top: 0;
    font-size: 18px;
    margin-bottom: 12px;
    color: #0077c8;
  }
  .search-modal ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  .search-modal li {
    margin-bottom: 10px;
  }
  .search-modal a {
    color: #004080;
    text-decoration: none;
    font-weight: bold;
  }
  .search-modal a:hover {
    text-decoration: underline;
  }
`;
document.head.appendChild(style);

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  if (!query) {
    modal.style.display = 'none';
    return;
  }
  const results = data.filter(item => item.title.toLowerCase().includes(query));
  if (results.length === 0) {
    modal.innerHTML = '<h3>Результати пошуку:</h3><p>Нічого не знайдено</p>';
  } else {
    modal.innerHTML = '<h3>Результати пошуку:</h3>' +
      '<ul>' +
      results.map(item => `<li>[${item.type === 'news' ? '📰' : '🛍️'}] <a href="${item.url}">${item.title}</a></li>`).join('') +
      '</ul>';
  }
  modal.style.display = 'block';
});

document.addEventListener('click', (e) => {
  if (!modal.contains(e.target) && e.target !== input) {
    modal.style.display = 'none';
  }
});
