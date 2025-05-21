document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.anketa');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const data = new FormData(form);
      const entries = {};
      for (const [key, value] of data.entries()) {
        if (entries[key]) {
          if (Array.isArray(entries[key])) {
            entries[key].push(value);
          } else {
            entries[key] = [entries[key], value];
          }
        } else {
          entries[key] = value;
        }
      }
  
      console.log('Анкета надіслана:', entries);
      alert('Дякуємо за заповнення анкети! Ми з вами зв’яжемось через магічну сову.');
      form.reset();
    });
  });
  
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