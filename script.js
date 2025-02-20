document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.getElementById("theme-toggle-btn");

  // Проверяем сохраненный цвет фона в localStorage
  const savedColor = localStorage.getItem("backgroundColor");
  if (savedColor) {
    body.classList.add(savedColor);
  } else {
    body.classList.add("white"); // Устанавливаем белый фон по умолчанию
  }

  button.addEventListener("click", () => {
    if (body.classList.contains("black")) {
      body.classList.remove("black");
      body.classList.add("white");
      localStorage.setItem("backgroundColor", "white");
    } else {
      body.classList.remove("white");
      body.classList.add("black");
      localStorage.setItem("backgroundColor", "black");
    }
  });
});
