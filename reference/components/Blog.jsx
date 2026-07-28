/* Trust Legal Group — "Блог / Новини" block (after the FAQ).
   Reference-style: a featured post (large image left, meta + title + excerpt
   + author right) over a hairline, then a 3-up grid of cards (image, tag,
   title, excerpt, author). Brand palette, square corners, Onest. Reuses the
   project's real photography. */

const { Eyebrow, ArrowLink } = window.TrustLegalGroupDesignSystem_76f407;

const FEATURED = {
  image: "../../assets/images/case-military.jpg",
  topic: "Військове право",
  tag: "Коментар",
  date: "25 червня 2026",
  read: "7 хв",
  title: "Повна непридатність\nна ВЛК у 2026 році",
  excerpt: "Чи можна отримати повну непридатність до військової служби у 2026 році, за якими медичними критеріями це вирішується, як виглядає процедура та що робити при незгоді з рішенням комісії.",
  author: "Ірина Сальник",
  role: "Адвокат",
};

const POSTS = [
  {
    image: "../../assets/images/case-white-collar.jpg",
    tag: "Кримінальне право",
    date: "18 червня 2026",
    read: "6 хв",
    title: "Що робити під час обшуку:\nпокрокова інструкція",
    excerpt: "Обшук — це стрес, у якому легко нашкодити собі. Розбираємо, які права має особа, що можна і чого не можна робити до приїзду адвоката.",
    author: "Вдовіченко Вадим",
    role: "Керівник об'єднання",
  },
  {
    image: "../../assets/images/case-tax-control.jpg",
    tag: "Податкові спори",
    date: "11 червня 2026",
    read: "5 хв",
    title: "Блокування податкових накладних:\nяк розблокувати",
    excerpt: "Зупинена реєстрація ПН паралізує бізнес. Пояснюємо алгоритм оскарження, строки та типові помилки при поданні пояснень.",
    author: "Олексій Фоменко",
    role: "Адвокат",
  },
  {
    image: "../../assets/images/case-contract.jpg",
    tag: "Сімейне право",
    date: "3 червня 2026",
    read: "4 хв",
    title: "Розлучення з іноземцем:\nде і як розірвати шлюб",
    excerpt: "Юрисдикція, визнання рішення за кордоном і питання дітей — коротко про те, як провести процедуру дистанційно.",
    author: "Юлія Латишева",
    role: "Адвокат",
  },
];

function BlogCard({ post }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="blog-card">
      <div className="blog-card__media"><img src={post.image} alt="" loading="lazy" /></div>
      <div className="blog-card__body">
        <span className="blog-card__tag">{post.tag}</span>
        <div className="blog-card__meta">
          <span>{post.date}</span>
          <span className="blog-feat__dot">·</span>
          <span>{post.read}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__author">
          <span className="blog-card__name">{post.author}</span>
          <span className="blog-card__role">{post.role}</span>
        </div>
      </div>
    </a>
  );
}

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog__inner">
        <div className="blog__head">
          <div>
            <Eyebrow tone="gold" size="sm">Новини</Eyebrow>
            <h2 className="blog__title">Новини та правові розбори</h2>
          </div>
          <ArrowLink href="#" onClick={(e) => e.preventDefault()}>Усі статті</ArrowLink>
        </div>

        <a href="#" onClick={(e) => e.preventDefault()} className="blog-feat">
          <div className="blog-feat__media"><img src={FEATURED.image} alt="" loading="lazy" /></div>
          <div className="blog-feat__body">
            <span className="blog-card__tag">{FEATURED.topic}</span>
            <div className="blog-feat__meta">
              <span>{FEATURED.date}</span>
              <span className="blog-feat__dot">·</span>
              <span>{FEATURED.read}</span>
            </div>
            <h3 className="blog-feat__title">{FEATURED.title}</h3>            <p className="blog-feat__excerpt">{FEATURED.excerpt}</p>
            <div className="blog-feat__author">
              <span className="blog-card__name">{FEATURED.author}</span>
              <span className="blog-card__role">{FEATURED.role}</span>
            </div>
          </div>
        </a>

        <div className="blog__grid">
          {POSTS.map((p) => <BlogCard key={p.title} post={p} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Blog });
