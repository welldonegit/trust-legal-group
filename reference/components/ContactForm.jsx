/* Trust Legal Group — contact / callback form block (before the SEO text).
   Left: heading + subtitle, contact details, and four advocate avatars
   ("на зв'язку 24/7"). Right: a white form card (Ім'я, Телефон, Телеграм,
   question select) with a primary submit + consent note. Navy section,
   Onest, square corners. Kept compact so it fits with the fixed header. */

const { Button, Icon } = window.TrustLegalGroupDesignSystem_76f407;

const ON_CALL = [
  "../../assets/team/vdovichenko.jpg",
  "../../assets/team/latysheva.jpg",
  "../../assets/team/voloshynov.jpg",
  "../../assets/team/shcherbynin.jpg",
];

const QUESTION_OPTIONS = [
  "Військове право", "Кримінальне право", "ДТП і водійські справи",
  "Сімейне право", "Цивільні справи", "Бізнес і господарське",
  "Податки і фінмоніторинг", "Інше",
];

const CONTACT_OPTIONS = ["Написати в Telegram", "Написати в Viber", "Зателефонувати"];

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="cta" id="callback">
      <div className="cta__inner">
        <div className="cta__left">
          <h2 className="cta__title">Є запитання? Наші адвокати на зв'язку 24/7</h2>
          <p className="cta__sub">Розкажіть, що сталося — і ми скажемо, що з цим можна зробити.</p>

          <div className="cta__oncall">
            <div className="cta__avatars">
              {ON_CALL.map((src, i) => (
                <span className="cta__avatar" key={i}><img src={src} alt="" loading="lazy" /></span>
              ))}
              <span className="cta__dot" aria-hidden="true"></span>
            </div>
          </div>

          <div className="cta__contacts">
            <div className="cta__c">
              <span className="cta__c-ico"><Icon name="map-pin" size={18} /></span>
              <span className="cta__c-val">Січеславська Набережна, 49А, прим. 72<br />ЖК «Фестивальний», Дніпро</span>
            </div>
            <div className="cta__c">
              <span className="cta__c-ico"><Icon name="phone" size={18} /></span>
              <span className="cta__c-val"><a href="tel:+380970979696">+380 97 097 96 96</a></span>
            </div>
            <div className="cta__c">
              <span className="cta__c-ico"><Icon name="mail" size={18} /></span>
              <span className="cta__c-val"><a href="mailto:info@trust-legalgroup.com">info@trust-legalgroup.com</a></span>
            </div>
            <div className="cta__c">
              <span className="cta__c-ico"><Icon name="clock" size={18} /></span>
              <span className="cta__c-val">Офіс: Пн–Пт 9:00–18:00</span>
            </div>
          </div>
        </div>

        <div className="cta__card">
          {sent ? (
            <div className="cta__done">
              <span className="cta__done-ico"><Icon name="circle-check" size={40} /></span>
              <h3 className="cta__done-t">Дякуємо за звернення</h3>
              <p className="cta__done-d">Черговий адвокат зв'яжеться з вами найближчим часом.</p>
            </div>
          ) : (
            <form className="cta__form" onSubmit={submit} noValidate>
              <h3 className="cta__form-t">Заявка на консультацію</h3>
              <div className="cta__field">
                <label htmlFor="cf-name">Ім'я</label>
                <input id="cf-name" type="text" name="name" autoComplete="name" required />
              </div>
              <div className="cta__field">
                <label htmlFor="cf-phone">Телефон</label>
                <input id="cf-phone" type="tel" name="phone" autoComplete="tel" required />
              </div>
              <div className="cta__field">
                <label htmlFor="cf-reach">Як з вами зв'язатись?</label>
                <div className="cta__select">
                  <select id="cf-reach" name="reach" defaultValue="">
                    <option value="" disabled>Оберіть спосіб</option>
                    {CONTACT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <span className="cta__select-chev" aria-hidden="true"><Icon name="chevron-right" size={16} /></span>
                </div>
              </div>
              <div className="cta__field">
                <label htmlFor="cf-q">З яким питанням звертаєтесь?</label>
                <textarea id="cf-q" name="question" rows={2} placeholder="Коротко опишіть ситуацію"></textarea>
              </div>
              <Button variant="primary" size="lg" arrow type="submit" style={{ width: "100%", marginTop: 4 }}>
                Отримати консультацію
              </Button>
              <p className="cta__consent">Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ContactForm });
