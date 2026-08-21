/* Trust Legal Group — блок «Ваша проблема має рішення».
   Заголовок і сітка вирівняні по лівому краю контейнера; сітка нестандартна:
   у кожному рядку одна широка карточка на дві колонки. Знаки — Lottie-анімації
   (draw-in), дані в RozshukIconData.js — прогін один раз при появі в кадрі. */

const PROBLEMS = [
  { ico: "tag", wide: true, t: "У «Резерв+» з'явилась «червона стрічка», а постанови немає", d: "Витребуємо офіційні документи та скасуємо неправомірний статус." },
  { ico: "clock", t: "Ви маєте відстрочку, але все одно в розшуку", d: "Виправимо помилку синхронізації баз і змусимо ТЦК оновити дані." },
  { ico: "scales", t: "Суд уже виграно, а розшук не зняли", d: "Ініціюємо судовий контроль та притягнемо посадовців до відповідальності." },
  { ico: "globe", t: "Ви за кордоном", d: "Усе робимо дистанційно: договір онлайн, представництво за ордером." },
  { ico: "shield", wide: true, t: "Вас уже затримали", d: "Діємо негайно — телефонуйте для термінового залучення адвоката." },
  { ico: "case", t: "Розшук заважає бронюванню на роботі", d: "Знімаємо розшук у зв'язці з оформленням бронювання." },
];

function ProbCard({ ico, t, d, wide }) {
  const box = React.useRef(null);
  const anim = React.useRef(null);
  React.useEffect(() => {
    const data = (window.ROZSHUK_ICONS || {})[ico];
    if (!window.lottie || !box.current || !data) return;
    const a = window.lottie.loadAnimation({
      container: box.current, renderer: "svg", loop: false, autoplay: false,
      animationData: JSON.parse(JSON.stringify(data)),
    });
    anim.current = a;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { a.goToAndPlay(0, true); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(box.current);
    return () => { io.disconnect(); a.destroy(); anim.current = null; };
  }, [ico]);
  return (
    <article className={`prob__card${wide ? " prob__card--wide" : ""}`}>
      <span className="prob__ico" ref={box} aria-hidden="true"></span>
      <div className="prob__body">
        <h3 className="prob__ct">{t}</h3>
        <p className="prob__cd">{d}</p>
      </div>
    </article>
  );
}

function RozshukProblems() {
  return (
    <section className="prob" id="cases-solved" data-screen-label="Ваша проблема має рішення">
      <div className="prob__inner">
        <span className="prob__eyebrow">Ваша проблема має рішення</span>
        <h2 className="prob__title">Зняття з розшуку ТЦК можливе, навіть якщо</h2>
        <div className="prob__grid">
          {PROBLEMS.map((p) => <ProbCard key={p.t} {...p} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { RozshukProblems });
