/* Trust Legal Group — FAQ / accordion block (per the supplied reference).
   White background, an eyebrow + large title + subtitle, then expandable
   rows (first open by default), and a closing note about the consultation
   price. Brand palette, Onest, square corners, hairline rules. */

const { Eyebrow, Icon } = window.TrustLegalGroupDesignSystem_76f407;

const FAQ_STEPS = [
  { title: "Скільки коштує консультація і чи можна дізнатися ціну до договору?", desc: "Первинна консультація коштує від 1 500 грн і триває до години. На ній ми детально розбираємо вашу ситуацію, даємо чіткий план дій і називаємо кінцеву вартість усього супроводу. Ця ціна фіксується в договорі й більше не змінюється." },
  { title: "Ви справді на зв'язку 24/7?", desc: "Так. На всі дзвінки відповідає черговий адвокат, а не менеджер. У критичних ситуаціях (обшук, затримання, блокпост) виїжджаємо на місце в будь-який час доби." },
  { title: "Чи можна звернутися за іншу людину, якщо вона сама не може?", desc: "Так. Договір можна укласти в інтересах близької людини — так починається більшість наших військових і кримінальних справ, особливо коли людину вже затримали." },
  { title: "Ви гарантуєте результат?", desc: "Жоден чесний адвокат не може гарантувати рішення суду. Але ми гарантуємо інше: ще до підписання договору ми чесно оцінимо ваші шанси, прорахуємо всі ризики та покажемо реальні кейси з нашої практики з аналогічними результатами." },
  { title: "Чи працюєте з клієнтами з інших міст і з-за кордону?", desc: "Так, більшість справ ведемо дистанційно: договір онлайн, документи в месенджер, представництво за ордером. Ваша присутність зазвичай не потрібна." },
];

function FaqRow({ item, open, onToggle }) {
  return (
    <div className={`faq-row ${open ? "is-open" : ""}`}>
      <button type="button" className="faq-row__head" aria-expanded={open} onClick={onToggle}>
        <span className="faq-row__title">{item.title}</span>
        <span className="faq-row__chev" aria-hidden="true"><Icon name="plus" size={20} /></span>
      </button>
      <div className="faq-row__panel">
        <div className="faq-row__panelin">
          <p className="faq-row__desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

function AccordionFaq() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <header className="faq__head">
          <Eyebrow tone="gold" size="sm">Часті питання</Eyebrow>
          <h2 className="faq__title">Коротко про головне</h2>
          <p className="faq__sub">Відповіді на питання, які клієнти ставлять найчастіше.</p>
        </header>

        <div className="faq__list">
          {FAQ_STEPS.map((s, i) => (
            <FaqRow key={s.title} item={s} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>

        <p className="faq__note">
          Ціна першої консультації — <strong>від 1500 грн</strong>. При укладанні договору на супровід ця сума повністю зараховується у вартість послуги.
        </p>
      </div>
    </section>
  );
}
Object.assign(window, { AccordionFaq });
