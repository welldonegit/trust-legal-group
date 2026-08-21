/* Trust Legal Group — блок «Перші кроки» на сторінці зняття з розшуку.
   Чотири картки-кроки в одному рядку; перша — темно-синя. */

/* Тонкі власні знаки замість цифр: перехрещені лінії = «не робіть цього»,
   галочка = «зробіть». Не дефолтні іконки — намальовані під верстку. */
const MarkNo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" aria-hidden="true">
    <path d="M5 5 19 19M19 5 5 19" />
  </svg>
);
const MarkYes = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" aria-hidden="true">
    <path d="M4 12.5 9.5 18 20 6" />
  </svg>
);

const STEPS = [
  {
    kind: "no",
    t: "Не платіть «наосліп»",
    d: "Сплата штрафу не знімає розшук автоматично. Спершу треба з'ясувати підставу.",
  },
  {
    kind: "yes",
    t: "Зберігайте усі докази",
    d: "Робіть скриншоти статусу з «Резерв+», повідомлень та скани документів.",
  },
  {
    kind: "no",
    t: "Не йдіть у ТЦК «навмання»",
    d: "Візит без чіткого плану майже завжди закінчується примусовим ВЛК того ж дня.",
  },
  {
    kind: "yes",
    t: "Зателефонуйте адвокату",
    d: "Первинно зорієнтуємо, що робити й чесно скажемо, чи взагалі потрібен супровід.",
  },
];

function RozshukSteps() {
  return (
    <section className="steps" id="steps" data-screen-label="Перші кроки">
      <div className="steps__inner">
        <h2 className="steps__title">Що робити, якщо ви в розшуку ТЦК</h2>
        <div className="steps__grid">
          {STEPS.map((s, i) => (
            <article className={`step-card${i === STEPS.length - 1 ? " step-card--navy" : ""}`} key={s.t}>
              <span className={`step-card__ico step-card__ico--${s.kind}`} aria-hidden="true">
                {s.kind === "no" ? <MarkNo /> : <MarkYes />}
              </span>
              <h3 className="step-card__t">{s.t}</h3>
              <p className="step-card__d">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { RozshukSteps });
