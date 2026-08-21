/* Trust Legal Group — блок «Як ми працюємо»: чотири кроки «драбинкою»,
   кожен на власній волосяній вертикалі — номер вгорі, назва й опис знизу.
   Кроки з'являються послідовно, коли блок потрапляє у видиму область,
   після чого драбинка плавно вирівнюється в одну лінію. */

const PROCESS = [
  { n: "01", t: "Офіційний запит", d: "З'ясовуємо юридичну підставу розшуку та перевіряємо, чи існує реальна постанова." },
  { n: "02", t: "Аналіз законності", d: "Перевіряємо вручення повістки, строки, процедуру — часто виявляємо порушення." },
  { n: "03", t: "Оскарження", d: "Готуємо скаргу або позов до суду — обираємо найшвидший шлях під ваш випадок." },
  { n: "04", t: "Контроль виконання", d: "Домагаємось фактичного зняття з розшуку в «Резерв+» чи виключення з бази «Оберіг»." },
];

function RozshukProcess() {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const [flat, setFlat] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setInView(true); setFlat(true); return; }
    let t;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setInView(true);
        io.disconnect();
        t = setTimeout(() => setFlat(true), 1250);
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <section className={"proc" + (inView ? " is-in" : "") + (flat ? " is-flat" : "")} id="process" ref={ref} data-screen-label="Як ми працюємо">
      <div className="proc__inner">
        <h2 className="proc__title">Як ми знімаємо розшук — 4 кроки</h2>
        <div className="proc__grid">
          {PROCESS.map((s, i) => (
            <article className="proc__col" key={s.n} style={{ "--d": i * 150 + "ms", "--dc": i * 150 + 140 + "ms", "--dm": i * 70 + "ms" }}>
              <span className="proc__n">Крок {s.n}</span>
              <span className="proc__gap" aria-hidden="true"></span>
              <h3 className="proc__t">{s.t}</h3>
              <p className="proc__d">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { RozshukProcess });
