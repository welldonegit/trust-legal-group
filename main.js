/* Trust Legal Group — минимальное поведение.
   Фиксированная шапка hero: заливка (navy + blur) появляется после небольшого
   скролла и держится. Логика перенесена из исходного React-компонента. */
const header = document.querySelector(".hero__header");
if (header) {
  const sync = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
}
