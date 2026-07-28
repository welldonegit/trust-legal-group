/* Trust Legal Group — "Кейси" block (after Про нас).
   Anonymized won-case notes: eyebrow + heading + subtitle, then a grid of
   cards (practice tag, situation, gold "Результат" line), and a CTA button.
   White background, brand palette, square corners, Onest. */

const { Eyebrow, Button, ArrowLink } = window.TrustLegalGroupDesignSystem_76f407;

const CASES = [
  {
    tag: "Військове право",
    text: "Чоловіка зупинили на блокпосту разом з родиною. Два дні дистанційно координували дії родини, щоб частина відмовилася від мобілізації.",
    result: "Батька відпустили, без переведення у військкомат.",
  },
  {
    tag: "Податкові спори",
    text: "ФОП п'ять років платив єдиний соціальний внесок двічі — і як найманий працівник, і як підприємець. Довели переплату в суді, оскаржили незаконні нарахування.",
    result: "Повернуто близько 100 000 грн з бюджету.",
  },
  {
    tag: "Сімейне право",
    text: "Клієнтка в Німеччині звернулася по розлучення в Україні. Дистанційно оформили довіреність, здійснили представництво в суді.",
    result: "Розлучення оформлено без жодної поїздки в Україну.",
  },
  {
    tag: "Кримінальне право",
    text: "Оперативно включились у справу під час обшуку: забезпечили супровід слідчої дії й контроль процесуальних норм.",
    result: "Арешт оскаржено, майно повернуто у найкоротші строки.",
  },
];

function Cases() {
  return (
    <section className="cases" id="cases">
      <div className="cases__inner">
        <div className="cases__head">
          <div>
            <Eyebrow tone="gold" size="sm">Кейси</Eyebrow>
            <h2 className="cases__title">Справи, які ми вже виграли</h2>
          </div>
          <ArrowLink href="#" onClick={(e) => e.preventDefault()}>Всі кейси</ArrowLink>
        </div>

        <div className="cases__grid">
          {CASES.map((c) => (
            <article className="case-card" key={c.tag}>
              <span className="case-card__tag">{c.tag}</span>
              <p className="case-card__text">{c.text}</p>
              <div className="case-card__result">
                <span className="case-card__result-label">Результат</span>
                <span className="case-card__result-text">{c.result}</span>
              </div>
              <div className="case-card__foot">
                <ArrowLink href="#" onClick={(e) => e.preventDefault()}>Детальніше</ArrowLink>
              </div>
            </article>
          ))}
        </div>

        <div className="cases__cta">
          <div className="cases__banner">
            <div className="cases__banner-text">
              <h3 className="cases__banner-title">Потрібне рішення для вашої ситуації?</h3>
              <p className="cases__banner-sub">Залиште номер — черговий адвокат передзвонить протягом робочого дня.</p>
            </div>
            <form className="cases__banner-form" onSubmit={(e) => e.preventDefault()}>
              <input type="tel" name="phone" inputMode="tel" autoComplete="tel" placeholder="+380 __ ___ __ __" aria-label="Ваш телефон" required />
              <button type="submit" className="cases__banner-btn">
                <span>Отримати консультацію</span>
                <span className="cases__banner-btn-arrow" aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Cases });
