/* Trust Legal Group — "Команда" block.
   Horizontal scroll carousel: navy-tone people cards (initial monogram
   instead of an invented headshot), sand experience chip, name + role.
   Footer = index / total + progress bar + prev/next round arrows.
   Experience values are placeholders (10–20 років). Brand palette, Onest. */

const { Eyebrow, ArrowLink, Icon } = window.TrustLegalGroupDesignSystem_76f407;

const TEAM_TONES = ["#1B2A3D"];

const TEAM = [
  { name: "Вдовідченко Вадим Віталійович", role: "Керівник об'єднання", spec: "Адміністративні правопорушення (КУпАП) · Цивільне право · Податкові спори", photo: "../../assets/team/vdovichenko.jpg" },
  { name: "Юлія Латишева", role: "Адвокат", spec: "Цивільне право · Військове право · Сімейні та спадкові спори", photo: "../../assets/team/latysheva.jpg" },
  { name: "Щербинін Юрій", role: "Адвокат", spec: "Захист у кримінальних справах · Адміністративне право", photo: "../../assets/team/shcherbynin.jpg" },
  { name: "Денис Волошинов", role: "Адвокат", spec: "Господарські спори · Адміністративне право · Податкові спори", photo: "../../assets/team/voloshynov.jpg" },
  { name: "Людмила Спіцина", role: "Адвокат", spec: "Цивільне право · Сімейні та спадкові спори · Військове право", photo: "../../assets/team/spitsyna.jpg" },
  { name: "Олексій Фоменко", role: "Адвокат", spec: "Податкові спори · Адміністративне право", photo: "../../assets/team/fomenko.jpg" },
  { name: "Валентин Дмитрієв", role: "Юрист", spec: "Військове право", photo: "../../assets/team/dmytriev.jpg" },
  { name: "Софія Чернишева", role: "Помічник адвоката", spec: "Захист у кримінальних справах · Цивільне право", photo: "../../assets/team/chernysheva.jpg" },
  { name: "Ксенія Кісліцина", role: "Адміністратор юридичної компанії", spec: "", photo: "../../assets/team/kislitsyna.jpg" },
];

function TeamCard({ m, idx }) {
  const tone = TEAM_TONES[idx % TEAM_TONES.length];
  return (
    <article className="team-card" style={{ background: tone }}>
      <div className="team-card__photo">
        <span className="team-card__mono" aria-hidden="true">{m.name.charAt(0)}</span>
        <img className="team-card__img" src={m.photo} alt={m.name} loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }} />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{m.name}</h3>
        <p className="team-card__role">{m.role}</p>
        {m.spec && <p className="team-card__spec">{m.spec}</p>}
      </div>
    </article>
  );
}

function Team() {
  const trackRef = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const total = TEAM.length;

  const stepPx = () => {
    const t = trackRef.current;
    if (!t) return 300;
    const card = t.querySelector(".team-card");
    const gap = parseFloat(getComputedStyle(t).columnGap || "16") || 16;
    return card ? card.getBoundingClientRect().width + gap : 300;
  };
  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const i = Math.round(t.scrollLeft / stepPx());
    setIdx(Math.max(0, Math.min(total - 1, i)));
  };
  const go = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({ left: dir * stepPx(), behavior: "smooth" });
  };

  const atStart = idx <= 0;
  const atEnd = idx >= total - 1;
  const pct = ((idx + 1) / total) * 100;
  const pad2 = (n) => String(n).padStart(2, "0");

  return (
    <section className="team" id="team">
      <div className="team__inner">
        <div className="team__head">
          <div className="team__headleft">
            <Eyebrow tone="gold" size="sm">Команда</Eyebrow>
            <h2 className="team__title">Адвокати Trust Legal Group</h2>
            <p className="team__sub">Практикуючі фахівці з 10+ роками досвіду кожен</p>
          </div>
          <div className="team__headright">
            <ArrowLink href="#" onClick={(e) => e.preventDefault()}>Дивитись всю команду</ArrowLink>
          </div>
        </div>

        <div className="team__track" ref={trackRef} onScroll={onScroll}>
          {TEAM.map((m, i) => <TeamCard key={m.name} m={m} idx={i} />)}
        </div>

        <div className="team__controls">
          <div className="team__meter">
            <span className="team__idx"><b>{pad2(idx + 1)}</b> / {pad2(total)}</span>
            <span className="team__bar"><span style={{ width: pct + "%" }} /></span>
          </div>
          <div className="team__nav">
            <button type="button" onClick={() => go(-1)} disabled={atStart} aria-label="Попередні">
              <Icon name="chevron-left" size={22} />
            </button>
            <button type="button" onClick={() => go(1)} disabled={atEnd} aria-label="Наступні">
              <Icon name="chevron-right" size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Team });
