/* Trust Legal Group — site footer.
   Left: logo + subtitle + 24/7 block (big tel:) + messenger icons.
   Four columns: Навігація · Практики · Послуги (products + popular) · Контакти.
   Bottom bar: legal data, copyright, legal links, disclaimer.
   Reference-style light grid; brand palette, Onest. Columns become
   accordions on mobile (Контакти open by default). Placeholders are
   left explicit — real legal name / ЄДРПОУ / email domain / office hours
   are not yet provided. */

const { Logo, Icon } = window.TrustLegalGroupDesignSystem_76f407;

const NAV = [
  ["Головна", "#top"], ["Практики", "#practice"], ["Про нас", "#about"],
  ["Команда", "#team"], ["Pro Bono", "#"], ["Новини", "#"], ["Контакти", "#"],
];
const PRACTICES = [
  "Військове право", "Кримінальне право", "ДТП і водійські справи", "Сімейне право",
  "Цивільні справи", "Бізнес і господарське", "Податки і фінмоніторинг", "Медіація",
];
const SERVICE_PRODUCTS = [
  "SOS-адвокат — абонентський захист 24/7",
  "Критичність підприємства та бронювання",
  "Консультація адвоката",
];
const SERVICE_POPULAR = [
  "Зняття з розшуку ТЦК", "Оскарження рішення ВЛК", "Звільнення з військової служби",
  "Адвокат при обшуку", "Супровід допиту", "Повернення вилученого майна",
  "Запобіжні заходи: застава, домашній арешт", "Адвокат при ДТП",
  "Позбавлення прав за ст. 130 КУпАП", "Страхові виплати після ДТП",
  "Розірвання шлюбу", "Розлучення з іноземцем / за кордоном",
];

/* Compact monochrome brand glyphs (currentColor) for messengers + socials. */
const GLYPH = {
  telegram: "m22 3-9.6 18-3.4-8.1L1 9.4 22 3Z M22 3 9 14.9",
  viber: "M11.4 0C9.5 0 5.3.3 3 2.5 1.3 4.2.7 6.7.6 9.8c0 3.1-.1 9 5.5 10.5v2.4s0 1 .6 1.2c.8.2 1.2-.5 1.9-1.3l1.4-1.6c3.9.3 6.8-.4 7.1-.5.8-.3 5.3-.8 6-6.8.7-6.1-.4-10-2.4-11.7C19.7 1.4 17.3.1 11.8 0c0 0-.4 0-.4 0zm0 1.7c.6 0 1 0 1 0 4.7 0 6.9 1.4 7.4 1.9 1.7 1.5 2.6 4.9 1.9 10-.6 4.9-4.2 5.4-4.9 5.6-.3.1-2.9.7-6.1.5 0 0-2.4 2.9-3.2 3.7-.1.1-.3.2-.4.1-.1 0-.2-.2-.2-.4V19c-4.8-1.3-4.5-6.3-4.4-8.9.1-2.6.5-4.7 2-6.2C6.4 2.1 9.9 1.8 11.5 1.8zm.4 2.5c-.2 0-.3.3 0 .3 2.4 0 4.3.8 5.8 2.2 1.4 1.4 2.1 3.4 2.2 6 0 .3.5.3.5 0 0-2.7-.8-4.9-2.3-6.4-1.6-1.5-3.6-2.3-6.2-2.3zm.6 2.1c-.2 0-.3.3 0 .3 1.5.1 2.7.6 3.5 1.5.8.9 1.2 2 1.2 3.4 0 .3.5.3.5 0 0-1.5-.4-2.8-1.4-3.8-.9-1-2.2-1.6-3.8-1.7zm-4.7.2c-.2 0-.4 0-.5.2-.3.3-.6.6-.8 1-.2.3-.3.6-.4.9v.1c0 .3.1.6.3 1 .4.9 1.1 1.9 2.1 2.9l.2.2c1 1 2 1.7 2.9 2.1.4.2.7.3 1 .3h.1c.3 0 .6-.1.9-.3.4-.2.7-.5 1-.8.1-.2.2-.4.2-.5 0-.2-.1-.3-.2-.4-.3-.2-.6-.4-1-.6-.2-.1-.4-.2-.6-.3-.4-.2-.7-.1-.9.2l-.3.4c-.2.2-.5.2-.5.2-2.4-.6-3-3-3-3s0-.3.2-.5l.4-.3c.3-.2.3-.5.2-.9-.1-.2-.2-.4-.3-.6-.2-.3-.4-.7-.6-1 0 0 0-.1-.1-.1-.1-.1-.3-.2-.4-.2z",
  whatsapp: "M.06 24l1.69-6.16A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.89 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.44 0 9.89-4.43 9.89-9.88a9.86 9.86 0 0 0-9.88-9.9c-5.46 0-9.89 4.44-9.89 9.89 0 2.27.7 3.98 1.86 5.76l-1 3.65 3.58-.94zm10.83-5.6c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.94 8.94 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.18-1.41z",
  instagram: "M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5Z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M17.3 6.7h.01",
  tiktok: "M14.5 3c.4 2.3 1.9 4 4.5 4.2v3c-1.6 0-3.1-.5-4.5-1.4v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.1a2.6 2.6 0 1 0 1.7 2.4V3h3Z",
  facebook: "M14 8.5h3V5.5h-3A3.5 3.5 0 0 0 10.5 9v2H8v3h2.5v6.5h3V14H16l.5-3h-3V9c0-.4.1-.5.5-.5Z",
  linkedin: "M4 4.5h16a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z M8 10.5v6 M8 7.5v.01 M12 16.5v-3.5a2 2 0 0 1 4 0v3.5",
};
const FILLED = new Set(["viber", "whatsapp"]);
function Glyph({ name }) {
  const filled = FILLED.has(name);
  return (
    <svg viewBox="0 0 24 24" width="20" height="20"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={GLYPH[name]} />
    </svg>
  );
}

function FootLink({ label, href = "#" }) {
  return <a className="foot__link" href={href} onClick={(e) => { if (href === "#") e.preventDefault(); }}>{label}</a>;
}

function FootCol({ title, defaultOpen, children }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width:719px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const show = !mobile || open;
  return (
    <div className={`foot__col ${open ? "is-open" : ""}`}>
      <button type="button" className="foot__head" onClick={() => mobile && setOpen((o) => !o)}>
        {title}<span className="foot__chev" aria-hidden="true"><Icon name="chevron-right" size={16} /></span>
      </button>
      {show && <div className="foot__list">{children}</div>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="foot__inner">
        <div className="foot__grid">
          <div className="foot__brand">
            <img src="../../assets/logo-full.svg" alt="Trust Legal Group" style={{ height: 62, width: "auto", display: "block" }} />
            <div className="foot__now">
              <span className="foot__now-h">Адвокат на зв'язку 24/7</span>
              <a className="foot__phone" href="tel:+380970979696">+380 97 097 96 96</a>
              <span className="foot__now-note">черговий адвокат, виїзд у будь-який час</span>
            </div>
            <div className="foot__msgr" aria-label="Месенджери">
              <a className="foot__ic" href="#" onClick={(e) => e.preventDefault()} aria-label="Telegram"><Glyph name="telegram" /></a>
              <a className="foot__ic" href="#" onClick={(e) => e.preventDefault()} aria-label="Viber"><Glyph name="viber" /></a>
              <a className="foot__ic" href="#" onClick={(e) => e.preventDefault()} aria-label="WhatsApp"><Glyph name="whatsapp" /></a>
            </div>
          </div>

          <FootCol title="Навігація">
            {NAV.map(([l, h]) => <FootLink key={l} label={l} href={h} />)}
          </FootCol>

          <FootCol title="Практики">
            {PRACTICES.map((l) => <FootLink key={l} label={l} />)}
          </FootCol>

          <FootCol title="Послуги">
            <div className="foot__products">
              {SERVICE_PRODUCTS.map((l) => (
                <a key={l} className="foot__product" href="#" onClick={(e) => e.preventDefault()}>
                  <span>{l}</span><Icon name="arrow-right" size={15} />
                </a>
              ))}
            </div>
            <div className="foot__popular">
              {SERVICE_POPULAR.map((l) => <FootLink key={l} label={l} />)}
            </div>
          </FootCol>

          <FootCol title="Контакти" defaultOpen>
            <a className="foot__link" href="mailto:info@trust-legalgroup.com">info@trust-legalgroup.com</a>
            <span className="foot__meta">Січеславська Набережна, 49А, прим. 72 · ЖК «Фестивальний», Дніпро, Україна</span>
            <span className="foot__meta">Офіс — 09:00 - 19:00</span>
            <div className="foot__social" aria-label="Соцмережі">
              <a className="foot__ic foot__ic--sm" href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram"><Glyph name="instagram" /></a>
              <a className="foot__ic foot__ic--sm" href="#" onClick={(e) => e.preventDefault()} aria-label="TikTok"><Glyph name="tiktok" /></a>
              <a className="foot__ic foot__ic--sm" href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook"><Glyph name="facebook" /></a>
              <a className="foot__ic foot__ic--sm" href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><Glyph name="linkedin" /></a>
            </div>
          </FootCol>
        </div>

        <div className="foot__bar">
          <div className="foot__legal">
            <span className="foot__copy">© 2026 Trust Legal Group LLP</span>
          </div>
          <div className="foot__legal-links">
            <FootLink label="Політика конфіденційності" />
            <FootLink label="Політика cookie" />
            <FootLink label="Умови використання" />
          </div>
          <p className="foot__disclaimer">
            Інформація на сайті має загальний характер і не є юридичною консультацією. Для оцінки вашої ситуації зверніться до адвоката.
          </p>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
