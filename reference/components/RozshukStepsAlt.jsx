/* Trust Legal Group — альтернативна подача блоку «Перші кроки»:
   рядки на всю ширину, розділені волосяними лініями. Ліва частина —
   знак у рамці та заголовок, права — опис. Замість фото — власні знаки. */

const AltMarkNo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" aria-hidden="true">
    <path d="M5 5 19 19M19 5 5 19" />
  </svg>
);
const AltMarkYes = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" aria-hidden="true">
    <path d="M4 12.5 9.5 18 20 6" />
  </svg>
);

const ALT_STEPS = [
  { kind: "no", t: "Не платіть «наосліп»", d: "Сплата штрафу не знімає розшук автоматично. Спершу треба з'ясувати підставу." },
  { kind: "yes", t: "Зберігайте усі докази", d: "Робіть скриншоти статусу з «Резерв+», повідомлень та скани документів." },
  { kind: "no", t: "Не йдіть у ТЦК «навмання»", d: "Візит без чіткого плану майже завжди закінчується примусовим ВЛК того ж дня." },
  { kind: "yes", t: "Зателефонуйте адвокату", d: "Первинно зорієнтуємо, що робити й чесно скажемо, чи взагалі потрібен супровід." },
];

function RozshukStepsAlt() {
  return (
    <section className="stepsalt" id="steps-alt" data-screen-label="Перші кроки — альтернатива">
      <div className="stepsalt__inner">
        <h2 className="stepsalt__title">Що робити, якщо ви в розшуку ТЦК</h2>
        <div className="stepsalt__rows">
          {ALT_STEPS.map((s) => (
            <article className="stepsalt__row" key={s.t}>
              <div className="stepsalt__lead">
                <span className={`stepsalt__ico stepsalt__ico--${s.kind}`} aria-hidden="true">
                  {s.kind === "no" ? <AltMarkNo /> : <AltMarkYes />}
                </span>
                <h3 className="stepsalt__rt">{s.t}</h3>
              </div>
              <p className="stepsalt__rd">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { RozshukStepsAlt });
