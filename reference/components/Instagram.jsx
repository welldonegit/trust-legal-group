/* Trust Legal Group — Instagram feed strip (before the FAQ).
   Header: "INSTAGRAM" + @handle link. A 4-up (desktop) grid of square
   post tiles reusing the project's photography; each links to the account
   and shows a hover overlay. Sand band, brand palette, square corners. */

const { Icon } = window.TrustLegalGroupDesignSystem_76f407;

const HANDLE = "trust.legal.group";
const IG_URL = "https://www.instagram.com/trust.legal.group/";

const TILES = [
  "../../assets/images/probono-press.jpg",
  "../../assets/images/case-military.jpg",
  "../../assets/images/probono-veterans.jpg",
  "../../assets/images/case-white-collar.jpg",
  "../../assets/images/probono-charity.jpg",
  "../../assets/images/case-tax-control.jpg",
  "../../assets/images/probono-highprofile.jpg",
  "../../assets/images/case-contract.jpg",
];

function Instagram() {
  return (
    <section className="ig" id="instagram">
      <div className="ig__inner">
        <div className="ig__head">
          <h2 className="ig__title">Більше корисного — в Instagram</h2>
          <a className="ig__handle" href={IG_URL} target="_blank" rel="noopener noreferrer">
            <span className="ig__handle-ico"><Icon name="instagram" size={20} /></span>
            <span>@{HANDLE}</span>
          </a>
        </div>
        <div className="ig__grid">
          {TILES.map((src, i) => (
            <a key={i} className="ig__tile" href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label={`Пост в Instagram @${HANDLE}`}>
              <img src={src} alt="" loading="lazy" />
              <span className="ig__tile-ov"><Icon name="instagram" size={24} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Instagram });
