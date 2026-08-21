/* Trust Legal Group — сторінка послуги «Зняття з розшуку ТЦК».
   Перший екран повторює герой сторінки практики 1:1 (ті самі розміри,
   сітка, фото під скримом, фіксований хедер, кремова карточка, піщана
   смуга показників). Відрізняється лише контент: заголовок, підзаголовок,
   дві кнопки, підтекст під ними. */

const { NavLink, Button, Icon } = window.TrustLegalGroupDesignSystem_76f407 || {};

const HOME = location.pathname.includes("/ui_kits/website/") ? "hero.html" : "/";
const PRACTICE = location.pathname.includes("/ui_kits/website/") ? "practice-military.html" : "/practice-military.html";

const NAV = [
  ["Головна", HOME],
  ["Практики", HOME + "#practice"],
  ["Про нас", HOME + "#about"],
  ["Команда", HOME + "#team"],
  ["Pro Bono", "#"],
  ["Новини", "#"],
  ["Контакти", "#"],
];

function RozshukHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("scroll", onScroll); };
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`hero__header ${open ? "is-open" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <button type="button" className="hero__burger" aria-label="Меню" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Icon name="menu" size={22} />
      </button>
      <a className="hero__logo" href={HOME} aria-label="Trust Legal Group — на головну" style={{ textDecoration: "none", display: "flex" }} onClick={close}>
        <img className="hero__logo-img" src={window.__AB + "assets/logo-header.svg"} alt="Trust Legal Group" style={{ height: 52, width: "auto", display: "block" }} />
      </a>
      <nav className="hero__nav">
        {NAV.map(([t, h]) => <NavLink key={t} href={h} tone="onDark">{t}</NavLink>)}
      </nav>
      <a className="hero__call" href="tel:+380970979696" aria-label="Подзвонити">
        <Icon name="phone" size={20} />
      </a>

      <div className="hero__overlay" onClick={close} aria-hidden="true"></div>
      <aside className="hero__panel" role="dialog" aria-modal="true" aria-label="Меню">
        <div className="hero__panel-top">
          <img src={window.__AB + "assets/logo-full.svg"} alt="Trust Legal Group" style={{ height: 40, width: "auto", display: "block" }} />
          <button type="button" className="hero__close" aria-label="Закрити меню" onClick={close}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="hero__menu" onClick={close}>
          {NAV.map(([t, h]) => <a key={t} className="hero__menu-link" href={h}>{t}</a>)}
        </nav>
        <div className="hero__panel-foot">
          <a className="hero__panel-phone" href="tel:+380970979696">+380 97 097 96 96</a>
          <Button variant="primary" size="lg" arrow style={{ width: "100%" }} onClick={close}>Отримати консультацію</Button>
        </div>
      </aside>
    </header>
  );
}

const METRICS = [
  { num: "10+ років", desc: "стажу у профільного адвоката" },
  { num: "100+", desc: "успішних справ проти ТЦК" },
  { num: "24/7", desc: "зв'язок з виїздом у критичних ситуаціях" },
  { num: "1 доба", desc: "наш рекорд зняття з розшуку*", note: "*Строки залежать від обставин конкретної справи." },
];

function RozshukHero() {
  return (
    <section className="hero" id="top" data-screen-label="Герой — зняття з розшуку">
      <div className="hero__media">
        <img className="hero__img hero__img--desktop" src={window.__AB + "assets/images/case-military.jpg"} alt="Адвокати Trust Legal Group у справах військового обліку" />
        <img className="hero__img hero__img--mobile" src={window.__AB + "assets/images/case-military.jpg"} alt="Адвокати Trust Legal Group у справах військового обліку" />
        <div className="hero__scrim" aria-hidden="true"></div>

        <RozshukHeader />

        <div className="hero__lower">
          <div className="hero__headline">
            <h1 className="hero__title">Зняття з розшуку ТЦК</h1>
          </div>

          <aside className="hero__card" aria-label="Консультація адвоката">
            <p className="hero__card-desc">
              Знімаємо статус «порушення правил військового обліку» в «Резерв+», скасовуємо незаконні штрафи та оскаржуємо неправомірні дії ТЦК.
            </p>
            <div className="hero__card-cta">
              <Button className="hero__card-btn" variant="primary" size="lg" arrow href="tel:+380970979696">
                Зателефонувати
              </Button>
              <a className="phero__btn-ghost" href="#consult">
                <span>Консультація</span>
                <span className="phero__btn-ghost-arrow" aria-hidden="true">→</span>
              </a>
              <p className="phero__note">
                Телефонуєте за чоловіка, сина чи працівника? Договір можна укласти в чужих інтересах та дистанційно.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="hero__stats">
        {METRICS.map((m) => (
          <div className="hero__stat" key={m.num + m.desc}>
            <span className="hero__stat-num">{m.num}</span>
            <p className="hero__stat-desc">{m.desc}</p>
            {m.note && <p className="phero__footnote">{m.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { RozshukHero });
