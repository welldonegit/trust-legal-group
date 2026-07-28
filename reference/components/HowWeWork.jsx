/* Trust Legal Group — "Як ми працюємо" block.
   Vertical numbered timeline: a connecting line with navy step badges;
   each step has a title + description. Desktop: sticky heading column on
   the left, timeline on the right. Mobile: heading on top, single-column
   timeline. Brand palette, Onest. Background #F2EFE7. */

const { Eyebrow, Button } = window.TrustLegalGroupDesignSystem_76f407;

const STEPS = [
  { title: "Звернення", desc: "Дзвоните або пишете в месенджер — безкоштовно з'ясовуємо суть питання й орієнтовну сферу, записуємо на консультацію." },
  { title: "Консультація", desc: "Отримуєте чіткий план дій, чесну оцінку шансів у відсотках і точну вартість супроводу, яка фіксується в договорі." },
  { title: "Договір", desc: "Укладаємо онлайн або в офісі. Можна також оформити і в інтересах близької людини, яка не може сама звернутись." },
  { title: "Робота", desc: "Ведемо справу й інформуємо на кожному етапі. Залишаємось на постійному зв'язку, ви бачите рух справи у реальному часі." },
  { title: "Результат", desc: "Отримуєте офіційний документ, який вирішує вашу проблему." },
];

function HowWeWork() {
  return (
    <section className="how" id="how">
      <div className="how__inner">
        <div className="how__aside">
          <Eyebrow tone="gold" size="sm">Як ми працюємо</Eyebrow>
          <h2 className="how__title">Шлях до розв'язання<br />вашої проблеми</h2>
          <p className="how__sub">Чіткі кроки від першого дзвінка до закриття питання</p>
          <div className="how__cta">
            <Button variant="primary" size="lg" arrow onClick={(e) => e.preventDefault()}>Зв'язатись</Button>
          </div>
        </div>

        <ol className="how__steps">
          {STEPS.map((s, i) => (
            <li className="how-step" key={s.title}>
              <div className="how-step__rail" aria-hidden="true">
                <span className="how-step__badge">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="how-step__body">
                <h3 className="how-step__title">{s.title}</h3>
                <p className="how-step__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
Object.assign(window, { HowWeWork });
