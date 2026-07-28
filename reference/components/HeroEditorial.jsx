/* Trust Legal Group — first screen (v3): full-bleed photo hero.
   Photo (team) fills the media area under a navy scrim; the headline sits
   bottom-left in white (with a Playfair-italic accent), a cream card floats
   at the right with the description + CTA, and a navy band of four metrics
   runs beneath. Composition follows the supplied reference; palette, square
   corners and components stay on-brand. Headline font is Helvetica (medium)
   per brief, local to this screen; the accent uses the brand serif. */

const { Logo, NavLink, Button, Icon } = window.TrustLegalGroupDesignSystem_76f407;

/* Transparent header over the photo — white/onDark treatment. */
function HeroHeader() {
  const nav = [
    ["Головна", "#top"],
    ["Практики", "#practice"],
    ["Про нас", "#about"],
    ["Команда", "#team"],
    ["Pro Bono", "#"],
    ["Новини", "#"],
    ["Контакти", "#"],
  ];
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
      <a className="hero__logo" href="#top" aria-label="Trust Legal Group — на головну" style={{ textDecoration: "none", display: "flex" }} onClick={close}>
        <img className="hero__logo-img" src="../../assets/logo-header.svg" alt="Trust Legal Group" style={{ height: 52, width: "auto", display: "block" }} />
      </a>
      <nav className="hero__nav">
        {nav.map(([t, h]) => <NavLink key={t} href={h} tone="onDark">{t}</NavLink>)}
      </nav>
      <a className="hero__call" href="tel:+380970979696" aria-label="Подзвонити">
        <Icon name="phone" size={20} />
      </a>

      <div className="hero__overlay" onClick={close} aria-hidden="true"></div>
      <aside className="hero__panel" role="dialog" aria-modal="true" aria-label="Меню">
        <div className="hero__panel-top">
          <img src="../../assets/logo-full.svg" alt="Trust Legal Group" style={{ height: 40, width: "auto", display: "block" }} />
          <button type="button" className="hero__close" aria-label="Закрити меню" onClick={close}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="hero__menu" onClick={close}>
          {nav.map(([t, h]) => <a key={t} className="hero__menu-link" href={h}>{t}</a>)}
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
  { num: "10", desc: "адвокатів з досвідом у ключових галузях права" },
  { num: "10+", desc: "років юридичного стажу в кожного фахівця" },
  { num: "1000+", desc: "справ, проведених за роки практики" },
  { num: "24/7", desc: "зв'язок з виїздом у критичній ситуації" },
];

function HeroEditorial() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img className="hero__img hero__img--desktop" src="../../assets/images/hero-team.png" alt="Команда юристів Trust Legal Group за роботою" />
        <img className="hero__img hero__img--mobile" src="../../assets/images/hero-team-mobile.jpg" alt="Команда юристів Trust Legal Group за роботою" />
        <div className="hero__scrim" aria-hidden="true"></div>

        <HeroHeader />

        <div className="hero__lower">
          <div className="hero__headline">
            <h1 className="hero__title">
              Професійний юридичний захист у&nbsp;будь-якій кризовій ситуації
            </h1>
          </div>

          <aside className="hero__card" aria-label="Консультація адвоката">
            <p className="hero__card-desc">
              Залиште проблему нам — і повертайтесь до своїх справ. Про все інше подбають наші профільні адвокати.
            </p>
            <div className="hero__card-cta">
              <Button className="hero__card-btn" variant="primary" size="lg" arrow onClick={(e) => e.preventDefault()}>
                Зв'язатись
              </Button>
              <span className="hero__card-note">На дзвінок відповідає адвокат, а не менеджер</span>
            </div>
          </aside>
        </div>
      </div>

      <div className="hero__stats">
        {METRICS.map((m) => (
          <div className="hero__stat" key={m.num + m.desc}>
            <span className="hero__stat-num">{m.num}</span>
            <p className="hero__stat-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
Object.assign(window, { HeroEditorial });
