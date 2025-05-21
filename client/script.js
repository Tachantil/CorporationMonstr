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