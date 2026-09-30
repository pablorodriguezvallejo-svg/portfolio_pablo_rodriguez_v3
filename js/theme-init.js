/*
  Este pequeño script se ejecuta ANTES de cargar el CSS principal.
  Su única misión es recuperar el tema guardado y evitar el flash
  de dark mode cuando el usuario había elegido light mode (o viceversa).
  Normalmente no necesitas modificar este archivo.
*/
(() => {
  try {
    const theme = localStorage.getItem('portfolio-theme') || 'dark';
    const lang = localStorage.getItem('portfolio-lang') || 'es';
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
  } catch {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.lang = 'es';
  }
})();
