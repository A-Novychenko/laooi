export const utils = () => {
  // Вибираємо елемент для анімації
  const element = document.getElementById("list-animation");

  // Створюємо новий обсервер
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Додаємо клас для анімації, коли елемент у вюпорті
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__bounce");
          //   entry.target.classList.add("animate__fadeIn");
          // Якщо хочете, щоб анімація спрацьовувала лише один раз:
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.9}
  ); // Спрацьовує, коли 10% елементу у вюпорті

  // Відслідковуємо наш елемент

  if (element) {
    // Якщо елемент знайдено, відслідковуємо його
    console.log("add", "observer");
    observer.observe(element);
  } else {
    console.error("Елемент не знайдено!");
  }
};
