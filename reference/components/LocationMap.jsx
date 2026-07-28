/* Trust Legal Group — location / map block (after the form).
   Sand band; left intro copy ("Розташування"), right an embedded Google
   map of the office (Sicheslavska Naberezhna St, 49, Dnipro). Brand
   palette, Onest, square corners. */

const { Eyebrow, Icon } = window.TrustLegalGroupDesignSystem_76f407;

const MAP_SRC = "https://www.google.com/maps?q=Sicheslavska+Naberezhna+St+49+Dnipro&output=embed";

function LocationMap() {
  return (
    <section className="loc" id="location">
      <div className="loc__inner">
        <div className="loc__head">
          <div>
            <Eyebrow tone="gold" size="sm">Розташування</Eyebrow>
            <h2 className="loc__title">Ми поряд із центром Дніпра</h2>
          </div>
          <div className="loc__addr">
            <span className="loc__addr-ico"><Icon name="map-pin" size={20} /></span>
            <span className="loc__addr-val">Січеславська Набережна, 49, прим. 72<br />Дніпро, Україна, 49000</span>
          </div>
        </div>
        <div className="loc__map">
          <iframe
            src={MAP_SRC}
            title="Trust Legal Group — офіс на мапі"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { LocationMap });
