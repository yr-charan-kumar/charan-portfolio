(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById("themeBtn");
  const yearElement = document.getElementById("year");
  const savedTheme = localStorage.getItem("charan-portfolio-theme");

  function systemPrefersDark() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeButton.textContent = theme === "dark" ? "☀️" : "🌙";
    themeButton.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  const initialTheme = savedTheme || (systemPrefersDark() ? "dark" : "light");
  applyTheme(initialTheme);

  themeButton.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("charan-portfolio-theme", nextTheme);
  });

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();
