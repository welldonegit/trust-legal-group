/* Trust Legal Group — "Про нас" block.
   Left: eyebrow + heading + intro paragraphs. Right: four icon cards
   (the firm's working principles). Navy ground, cream type, sand cards
   with thin-line icons — brand palette, Onest. Sits after the services. */

const { Icon } = window.TrustLegalGroupDesignSystem_76f407;

const ABOUT_POINTS = [
  { icon: "circle-check", title: "Реалістичні обіцянки", desc: "Чесно озвучуємо ваші шанси без порожніх гарантій" },
  { icon: "monitor", title: "Дистанційна робота", desc: "Ведемо справи онлайн без вашої обов'язкової присутності" },
  { icon: "shield-check", title: "Фінансова відповідальність", desc: "Помилки виправляємо за свій рахунок — а не за ваш" },
  { icon: "message-circle", title: "Постійний зв'язок", desc: "Оперативно інформуємо про кожен крок роботи" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__grid">
          <div className="about__col">
            <span className="about__eyebrow">Про нас</span>
            <h2 className="about__title">
              Коли ситуація виходить<br />з-під контролю — ми беремо її під свій
            </h2>
            <div className="about__lead">
              <p>
                <strong>Trust Legal Group</strong> — це 10 досвідчених адвокатів, які створили об'єднання, щоб розв'язувати проблеми, а не плодити бюрократію навколо них.
              </p>
              <p>
                У кожного — від 10 до 25 років практики у своїй галузі, десятки успішних справ і глибоке знання регіональної судової практики.
              </p>
            </div>
          </div>
          <div className="about__photo">
            <img src="../../assets/images/team-office.jpg" alt="Команда Trust Legal Group" loading="lazy" />
          </div>
        </div>

        <div className="about__cards">
          {ABOUT_POINTS.map((p) => (
            <div className="about__card" key={p.title}>
              <span className="about__card-ico"><Icon name={p.icon} size={22} /></span>
              <h3 className="about__card-title">{p.title}</h3>
              <p className="about__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
