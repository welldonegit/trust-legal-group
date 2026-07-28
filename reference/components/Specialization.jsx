/* Trust Legal Group — "Спеціалізація" block.
   Panels: navy title block (with subtitle) on the left + a bordered cell
   grid on the right — hairline dividers, small uppercase eyebrow tags,
   sand (#F2EFE7) cells with a corner arrow. Brand palette, Onest, square
   corners. Applied to every practice direction. */

const { Eyebrow, Icon } = window.TrustLegalGroupDesignSystem_76f407;

// items may be a string or { label, tag }
const SPEC_DIRECTIONS = [
  {
    title: "Військове право",
    subtitle: "ТЦК, ВЛК, мобілізація та військовий облік.",
    items: [
      { label: "Розшук ТЦК і Резерв+" },
      { label: "Оскарження штрафу ТЦК" },
      { label: "Затримали ТЦК / незаконна мобілізація" },
      { label: "СЗЧ, дезертирство і непокора" },
      { label: "Оскарження рішення ВЛК" },
      { label: "Супровід проходження ВЛК" },
      { label: "Відстрочка від мобілізації" },
      { label: "Звільнення з військової служби" },
    ],
  },
  {
    title: "Кримінальне право",
    subtitle: "Захист на всіх стадіях провадження.",
    items: [
      { label: "Адвокат при обшуку — виїзд 24/7" },
      { label: "Викликали на допит" },
      { label: "Адвокат при затриманні" },
      { label: "Запобіжний захід: СІЗО, застава" },
      { label: "Вручили підозру" },
      { label: "Повернення вилученого майна" },
      { label: "Закриття провадження" },
      { label: "Наркотичні засоби: ст. 307, 309 КК" },
    ],
  },
  {
    title: "ДТП",
    subtitle: "Захист прав водія та страхові виплати.",
    items: [
      { label: "Ст. 130 КУпАП: позбавлення прав" },
      { label: "Відшкодування після ДТП: страхова і винуватець" },
      { label: "ДТП з потерпілими (ст. 286 КК)" },
      { label: "ДТП без постраждалих (ст. 124)" },
      { label: "Залишення місця ДТП" },
      { label: "Позбавлення права керування транспортним засобом та оскарження постанови суду" },
      { label: "Пошкодження авто у ДТП (ст. 124 КУпАП)" },
    ],
  },
  {
    title: "Сімейне право",
    subtitle: "Шлюб, діти та поділ майна.",
    items: [
      { label: "Розірвання шлюбу" },
      { label: "Міжнародні розлучення (з-за кордону)" },
      { label: "Стягнення аліментів" },
      { label: "Поділ майна подружжя" },
      { label: "Дозвіл на виїзд дитини за кордон" },
      { label: "Місце проживання дитини та побачення" },
      { label: "Позбавлення батьківських прав" },
      { label: "Зменшення та перерахунок аліментів" },
    ],
  },
  {
    title: "Цивільні справи",
    subtitle: "Спадщина, борги та побутові спори.",
    items: [
      { label: "Пропущений строк прийняття спадщини" },
      { label: "Оформлення спадщини «під ключ»" },
      { label: "Банкрутство фізосіб — списання боргів" },
      { label: "Кредитні спори з банками та МФО" },
      { label: "Арешти рахунків і майна: розблокування" },
      { label: "Стягнення боргу з фізособи (розписка)" },
      { label: "Відшкодування шкоди: залиття, моральна" },
      { label: "Оскарження виконавчого напису нотаріуса" },
    ],
  },
  {
    title: "Бізнес і господарське",
    subtitle: "Спори, договори та захист інтересів бізнесу.",
    items: [
      { label: "Отримання статусу критично важливого підприємства + бронювання" },
      { label: "Стягнення заборгованості з контрагентів" },
      { label: "Договірна робота: складання та аудит" },
      { label: "Орендні спори" },
      { label: "Тендерний супровід Prozorro" },
      { label: "Юридичний аутсорс для бізнесу" },
      { label: "Трудові питання бізнесу (Держпраця)" },
      { label: "Реєстрація ТОВ і ФОП, зміни" },
    ],
  },
  {
    title: "Податки і фінмоніторинг",
    subtitle: "Перевірки, блокування та нарахування.",
    items: [
      { label: "Перевірки, ППР", tag: "ДПС" },
      { label: "Розблокування накладних" },
      { label: "Банк заблокував рахунок", tag: "Фінмоніторинг" },
      { label: "ПДВ, ЄСВ, штрафи" },
    ],
  },
  {
    title: "Медіація",
    subtitle: "Позасудове врегулювання спорів.",
    items: [
      { label: "Альтернатива суду для сімейних і господарських спорів", tag: "Медіація" },
    ],
  },
];

const norm = (it) => (typeof it === "string" ? { label: it } : it);

function SpecCell({ label, wide, extra }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className={`spec-cell ${wide ? "spec-cell--wide" : ""} ${extra ? "spec-cell--extra" : ""}`}>
      <span className="spec-cell__title">{label}</span>
      <span className="spec-cell__arrow" aria-hidden="true"><Icon name="arrow-right" size={20} style={{ transform: "rotate(-45deg)" }} /></span>
    </a>
  );
}

function SpecPanel({ dir, idx }) {
  const [open, setOpen] = React.useState(false);
  const extraCount = dir.items.length - 3;
  return (
    <article className={`spec-panel spec-panel--editorial ${open ? "is-open" : ""}`}>
      <span className="spec-panel__index" aria-hidden="true">{String(idx + 1).padStart(2, "0")}</span>
      <div className="spec-panel__left">
        <h3 className="spec-panel__title">{dir.title}</h3>
        {dir.subtitle && <p className="spec-panel__sub">{dir.subtitle}</p>}
      </div>
      <div className="spec-panel__grid">
        {dir.items.map((raw, i) => {
          const it = norm(raw);
          const wide = dir.items.length % 2 === 1 && i === dir.items.length - 1;
          return <SpecCell key={it.label} label={it.label} wide={wide} extra={i >= 3} />;
        })}
        {extraCount > 0 && (
          <button type="button" className="spec-more" onClick={() => setOpen((o) => !o)}>
            <span>{open ? "Згорнути" : `Подивитись ще ${extraCount}`}</span>
            <span className="spec-more__ico" aria-hidden="true"><Icon name={open ? "x" : "plus"} size={18} /></span>
          </button>
        )}
      </div>
      <a className="spec-panel__all" href="#" onClick={(e) => e.preventDefault()}>
        <span>Усі послуги</span>
        <Icon name="arrow-right" size={16} />
      </a>
    </article>
  );
}

function Specialization() {
  return (
    <section className="spec" id="practice">
      <div className="spec__inner">
        <div className="spec__head">
          <Eyebrow tone="gold" size="sm">Спеціалізація</Eyebrow>
          <h2 className="spec__title">Знаємо, як вирішується<br />ваша ситуація</h2>
          <p className="spec__sub">
            Вашу справу вестиме спеціаліст саме у вашому напрямку — а не юрист-універсал. В складних випадках до роботи долучиться вся команда — все під одним договором.
          </p>
        </div>
        <div className="spec__list">
          {SPEC_DIRECTIONS.map((dir, idx) => <SpecPanel key={dir.title} dir={dir} idx={idx} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Specialization });
