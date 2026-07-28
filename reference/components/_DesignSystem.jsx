/* @ds-bundle: {"format":4,"namespace":"TrustLegalGroupDesignSystem_76f407","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ArrowLink","sourcePath":"components/button/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"OverlayCard","sourcePath":"components/cards/OverlayCard.jsx"},{"name":"PracticeCard","sourcePath":"components/cards/PracticeCard.jsx"},{"name":"StatItem","sourcePath":"components/cards/StatItem.jsx"},{"name":"ContactItem","sourcePath":"components/contact/ContactItem.jsx"},{"name":"Divider","sourcePath":"components/eyebrow/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/eyebrow/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Figure","sourcePath":"components/media/Figure.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"8e8f868c01e8","components/button/ArrowLink.jsx":"7f5e13dab010","components/button/Button.jsx":"7d1bedaa4110","components/cards/OverlayCard.jsx":"432d8299457e","components/cards/PracticeCard.jsx":"afbb5ad07b62","components/cards/StatItem.jsx":"57754897b9da","components/contact/ContactItem.jsx":"49a00c63fc5d","components/eyebrow/Divider.jsx":"175c5c63c80a","components/eyebrow/Eyebrow.jsx":"774231a22410","components/icon/Icon.jsx":"993b25fd9440","components/media/Figure.jsx":"d46675c15179","components/navigation/NavLink.jsx":"ffa69f7b9b76","components/overlays/Dialog.jsx":"580d9690dba0","ui_kits/website/About.jsx":"ae12bd3e4625","ui_kits/website/AccordionFaq.jsx":"1670741116e3","ui_kits/website/ActiveCases.jsx":"fdeb5b432b75","ui_kits/website/Blog.jsx":"b1a2ec7c77bc","ui_kits/website/Cases.jsx":"9949bb8456d5","ui_kits/website/Contact.jsx":"91dd7cf73586","ui_kits/website/ContactForm.jsx":"8d6a388924ec","ui_kits/website/CookieConsent.jsx":"78f344aab370","ui_kits/website/Footer.jsx":"3251b17b0090","ui_kits/website/Header.jsx":"52ffe3d19b32","ui_kits/website/Hero.jsx":"194d0776fad8","ui_kits/website/HeroEditorial.jsx":"acb83826d092","ui_kits/website/HowWeWork.jsx":"015ac950015c","ui_kits/website/Instagram.jsx":"26ee45992058","ui_kits/website/LocationMap.jsx":"1faa372ffe27","ui_kits/website/Mission.jsx":"034e7e8986f0","ui_kits/website/ProBono.jsx":"6654cfc3d26b","ui_kits/website/SeoText.jsx":"4c334f64d49e","ui_kits/website/Specialization.jsx":"edb6bcf454ee","ui_kits/website/Team.jsx":"06fa89b5bf19","ui_kits/website/Tradition.jsx":"2cc3a0c39acc"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/icon/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.TrustLegalGroupDesignSystem_76f407 = window.TrustLegalGroupDesignSystem_76f407 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Logo
   The brand lockup. The real mark is an "LG" seal (navy L + gilt G in a
   ring) beside the "TRUST LEGAL GROUP" wordmark. The wordmark is set in
   Playfair Display; the gilt/cream image version reads only on dark, so
   the default `type` and `lockup` render the wordmark as live type whose
   colour follows `theme`. Pass `sealSrc` / `wordmarkSrc` to use the real
   PNGs (they live in the design system's assets/). */

function Logo({
  variant = "type",
  // "type" | "seal" | "lockup" | "wordmarkImage"
  theme = "onLight",
  // "onLight" | "onDark"
  size = 40,
  sealSrc,
  wordmarkSrc,
  title = "Trust Legal Group",
  style = {},
  ...rest
}) {
  const typeColor = theme === "onDark" ? "var(--cream)" : "var(--navy)";
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: Math.round(size * 0.6),
      lineHeight: 1,
      letterSpacing: "0.11em",
      textTransform: "uppercase",
      color: typeColor,
      whiteSpace: "nowrap"
    }
  }, title);
  if (variant === "seal") {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: sealSrc,
      alt: title,
      style: {
        height: size,
        width: "auto",
        display: "block",
        ...style
      }
    }, rest));
  }
  if (variant === "wordmarkImage") {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: wordmarkSrc,
      alt: title,
      style: {
        height: size,
        width: "auto",
        display: "block",
        ...style
      }
    }, rest));
  }
  if (variant === "lockup") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: Math.round(size * 0.34),
        ...style
      }
    }, rest), sealSrc && /*#__PURE__*/React.createElement("img", {
      src: sealSrc,
      alt: "",
      "aria-hidden": "true",
      style: {
        height: size,
        width: "auto",
        display: "block"
      }
    }), word);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), word);
}
Object.assign(__ds_scope, { Logo, __ds_default_components_brand_Logo_1q8yv4x: Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/button/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — ArrowLink
   The quiet "read more" link used at the foot of cards: tiny, uppercase,
   wide-tracked, muted ink with a trailing →. `block` spreads label and
   arrow to opposite edges (the card-footer treatment). */

if (typeof document !== "undefined" && !document.getElementById("tlg-arrowlink-css")) {
  const s = document.createElement("style");
  s.id = "tlg-arrowlink-css";
  s.textContent = `
.tlg-alink{display:inline-flex;align-items:center;gap:12px;text-decoration:none;cursor:pointer;
  font-family:var(--font-sans);font-weight:400;font-size:11px;line-height:16.5px;letter-spacing:0.55px;
  text-transform:uppercase;color:var(--ink-muted);transition:color .2s ease}
.tlg-alink--block{display:flex;justify-content:space-between;width:100%}
.tlg-alink__arrow{transition:transform .2s ease;flex-shrink:0}
.tlg-alink:hover{color:var(--ink)}
.tlg-alink:hover .tlg-alink__arrow{transform:translateX(4px)}
.tlg-alink:focus-visible{outline:2px solid var(--gold);outline-offset:3px}`;
  document.head.appendChild(s);
}
function ArrowLink({
  children,
  href = "#",
  block = false,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `tlg-alink ${block ? "tlg-alink--block" : ""} ${className}`.trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    className: "tlg-alink__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink, __ds_default_components_button_ArrowLink_v0wd9a: ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
/* Trust Legal Group — Button
   Squared, uppercase, letter-spaced. Navy is the primary action; ink is
   used inside dialogs; outline is the quiet secondary. An optional arrow
   (→) trails the label and nudges right on hover. */

if (typeof document !== "undefined" && !document.getElementById("tlg-button-css")) {
  const s = document.createElement("style");
  s.id = "tlg-button-css";
  s.textContent = `
.tlg-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;
  font-family:var(--font-sans);font-weight:400;text-transform:uppercase;text-align:center;white-space:nowrap;
  text-decoration:none;border:1px solid transparent;border-radius:var(--radius,0);cursor:pointer;
  transition:background-color .2s ease,border-color .2s ease,color .2s ease,opacity .2s ease;}
.tlg-btn__arrow{transition:transform .2s ease;display:inline-block}
.tlg-btn:hover .tlg-btn__arrow{transform:translateX(4px)}
.tlg-btn:focus-visible{outline:2px solid var(--gold);outline-offset:2px}
.tlg-btn:active{transform:translateY(1px)}
.tlg-btn--primary{background:var(--navy);color:#fff}
.tlg-btn--primary:hover{background:var(--navy-hover)}
.tlg-btn--dark{background:var(--ink);color:#fff}
.tlg-btn--dark:hover{background:#000}
.tlg-btn--outline{background:transparent;color:var(--ink-muted);border-color:var(--rule)}
.tlg-btn--outline:hover{color:var(--ink);border-color:var(--ink);background:var(--bg-secondary)}
.tlg-btn--gold{background:var(--gold);color:var(--ink)}
.tlg-btn--gold:hover{background:var(--gold-hover)}
.tlg-btn[disabled],.tlg-btn[aria-disabled="true"]{opacity:.45;pointer-events:none}`;
  document.head.appendChild(s);
}
const SIZES = {
  sm: {
    height: 38,
    padding: "0 17px",
    fontSize: 12,
    letterSpacing: "0.6px"
  },
  md: {
    height: 48,
    padding: "0 24px",
    fontSize: 14,
    letterSpacing: "0.7px"
  },
  lg: {
    height: 56,
    padding: "0 32px",
    fontSize: 16,
    letterSpacing: "0.8px"
  }
};
function Button({
  children,
  variant = "primary",
  // "primary" | "dark" | "outline" | "gold"
  size = "md",
  // "sm" | "md" | "lg"
  arrow = false,
  href,
  disabled = false,
  className = "",
  style = {},
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const sz = SIZES[size] || SIZES.md;
  const props = {
    className: `tlg-btn tlg-btn--${variant} ${className}`.trim(),
    style: {
      ...sz,
      lineHeight: 1.5,
      ...style
    },
    ...(href ? {
      href
    } : {
      type: rest.type || "button"
    }),
    ...(disabled ? href ? {
      "aria-disabled": "true"
    } : {
      disabled: true
    } : {}),
    ...rest
  };
  return /*#__PURE__*/React.createElement(Tag, props, /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    className: "tlg-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button, __ds_default_components_button_Button_15323s1: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/OverlayCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — OverlayCard
   Full-bleed image with a bottom-anchored black gradient and a white
   heading. Used in the pro-bono carousel. Square by default. */

if (typeof document !== "undefined" && !document.getElementById("tlg-overlaycard-css")) {
  const s = document.createElement("style");
  s.id = "tlg-overlaycard-css";
  s.textContent = `
.tlg-ocard{position:relative;display:block;overflow:hidden;text-decoration:none;border-radius:var(--radius,0)}
.tlg-ocard img{transition:transform .6s cubic-bezier(.2,.6,.2,1)}
.tlg-ocard:hover img{transform:scale(1.05)}`;
  document.head.appendChild(s);
}
function OverlayCard({
  image,
  imageAlt = "",
  title,
  aspect = "1 / 1",
  href,
  className = "",
  style = {},
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, href ? {
    href
  } : {}, {
    className: `tlg-ocard ${className}`.trim(),
    style: {
      aspectRatio: aspect,
      background: "var(--surface-photo)",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      minHeight: 81,
      padding: 24,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "flex-end",
      background: "var(--scrim-grad-bottom)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "33px",
      color: "#fff",
      whiteSpace: "pre-line"
    }
  }, title)));
}
Object.assign(__ds_scope, { OverlayCard, __ds_default_components_cards_OverlayCard_1h9dt6a: OverlayCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/OverlayCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — StatItem
   A single fact set against a thin navy left-rule: a large 30px navy
   label, line-breaks allowed. Used in the "tradition" stat grid. */

function StatItem({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderLeft: "1px solid var(--navy)",
      paddingLeft: 25,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 30,
      lineHeight: "37.5px",
      color: "var(--navy)",
      whiteSpace: "pre-line"
    }
  }, children));
}
Object.assign(__ds_scope, { StatItem, __ds_default_components_cards_StatItem_1q03w75: StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/eyebrow/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Divider
   Two rules do all the work: a full-width hairline in the beige rule
   colour, and a short 20px GOLD tick used beside figure captions. */

function Divider({
  variant = "hairline",
  // "hairline" | "accent"
  orientation = "horizontal",
  // "horizontal" | "vertical"
  length,
  className = "",
  style = {},
  ...rest
}) {
  const isAccent = variant === "accent";
  const color = isAccent ? "var(--gold)" : "var(--rule)";
  const thickness = 1;
  const base = orientation === "vertical" ? {
    width: thickness,
    height: length || (isAccent ? 20 : "100%"),
    background: color
  } : {
    height: thickness,
    width: length || (isAccent ? 20 : "100%"),
    background: color
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: className,
    style: {
      display: "block",
      flexShrink: 0,
      ...base,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider, __ds_default_components_eyebrow_Divider_173deh9: Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/eyebrow/Divider.jsx", error: String((e && e.message) || e) }); }

// components/eyebrow/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Eyebrow
   The tracked, uppercase micro-label that opens almost every section and
   tags every card. Two tones carry meaning: GOLD introduces a section
   ("Наша місія"); NAVY tags a category. Muted is for figure captions. */

const SIZES = {
  xs: {
    fontSize: 10,
    letterSpacing: "1.5px",
    lineHeight: "15px"
  },
  sm: {
    fontSize: 12,
    letterSpacing: "3.6px",
    lineHeight: "16px"
  },
  md: {
    fontSize: 14,
    letterSpacing: "2.8px",
    lineHeight: "20px"
  }
};
const TONES = {
  gold: "var(--gold)",
  navy: "var(--navy)",
  muted: "var(--ink-muted)",
  onDark: "var(--on-dark-muted)"
};
function Eyebrow({
  children,
  tone = "gold",
  // "gold" | "navy" | "muted" | "onDark"
  size = "sm",
  // "xs" | "sm" | "md"
  as = "span",
  className = "",
  style = {},
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      textTransform: "uppercase",
      color: TONES[tone] || TONES.gold,
      ...(SIZES[size] || SIZES.sm),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow, __ds_default_components_eyebrow_Eyebrow_3ftqf7: Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/cards/PracticeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — PracticeCard
   The signature editorial card used across the site for practice areas
   and case notes: a 4:3 image over a navy category tag, a tight title,
   a body paragraph (often with a bold lead-in), a full-bleed hairline
   and an arrow link. White surface, square corners, 24px padding. */

function PracticeCard({
  image,
  imageAlt = "",
  category,
  title,
  lead,
  // optional bold lead-in phrase
  children,
  linkLabel = "Детальніше",
  href = "#",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      background: "var(--bg)",
      padding: 24,
      boxSizing: "border-box",
      borderRadius: "var(--radius, 0)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 268,
      background: "var(--surface-photo)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), category && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "navy",
    size: "xs"
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "23px",
      letterSpacing: "-0.5px",
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--ink-muted)",
      flexGrow: 1
    }
  }, lead && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, lead, " "), children), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    style: {
      marginLeft: -24,
      marginRight: -24,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href,
    block: true
  }, linkLabel));
}
Object.assign(__ds_scope, { PracticeCard, __ds_default_components_cards_PracticeCard_13swrmj: PracticeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PracticeCard.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Icon
   INTENTIONAL ADDITION. The source uses a set of custom thin-line icons
   (map-pin, phone, mail, chevrons, arrows) that the .fig only carried as
   rasterised masks. This wraps the closest open equivalent — the Lucide
   line set (MIT), vendored — at the brand's slightly-thin stroke. Only
   the glyphs the site actually uses are included. */

const PATHS = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17 17 7M7 7h10v10",
  "chevron-left": "M15 18l-6-6 6-6",
  "chevron-right": "M9 18l6-6-6-6",
  "map-pin": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10a2 2 0 1 0 0-.01",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z",
  mail: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2",
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6 6 18M6 6l12 12",
  scale: "M12 3v18M7 7l-4 8h8Zm10 0-4 8h8ZM5 21h14",
  "circle-check": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M8.5 12.5l2.5 2.5 4.5-5",
  monitor: "M4 3h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z M8 21h8 M12 17v4",
  "shield-check": "M12 3 5 6v6c0 4 3 6.6 7 8 4-1.4 7-4 7-8V6l-7-3Z M9 12l2 2 4-4",
  "message-circle": "M21 11.5a8.5 8.5 0 0 1-11.9 7.8L3 21l1.7-6.1A8.5 8.5 0 1 1 21 11.5Z",
  instagram: "M2 8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z M17.4 6.6h.01",
  plus: "M12 5v14M5 12h14"
};
function Icon({
  name,
  size = 20,
  stroke = 1.6,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, rest), d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : null);
}
const iconNames = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, iconNames, __ds_default_components_icon_Icon_e7wouz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/contact/ContactItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — ContactItem
   An icon (navy, thin line) beside a label and one or more value lines.
   The row treatment used throughout the contact block. Pass either an
   `icon` node or an `iconName` (rendered via the Icon component). */

function ContactItem({
  icon,
  iconName,
  label,
  children,
  style = {},
  ...rest
}) {
  const glyph = icon || (iconName ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName
  }) : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      ...style
    }
  }, rest), glyph && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4,
      color: "var(--navy)",
      flexShrink: 0,
      lineHeight: 0
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--ink-muted)",
      whiteSpace: "pre-line"
    }
  }, children)));
}
Object.assign(__ds_scope, { ContactItem, __ds_default_components_contact_ContactItem_im92ls: ContactItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contact/ContactItem.jsx", error: String((e && e.message) || e) }); }

// components/media/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Figure
   An image with the brand's caption treatment: a short gold tick followed
   by a tracked, uppercase, muted caption. */

function Figure({
  image,
  imageAlt = "",
  caption,
  aspect = "4 / 3",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      background: "var(--surface-photo)",
      aspectRatio: aspect
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    variant: "accent"
  }), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    size: "xs",
    as: "span"
  }, caption)));
}
Object.assign(__ds_scope, { Figure, __ds_default_components_media_Figure_19kx80b: Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Figure.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — NavLink
   Header navigation item: uppercase, lightly tracked. Over dark imagery
   it sits at 60% white and brightens on hover / when current; on light
   chrome it runs muted-ink → ink. */

if (typeof document !== "undefined" && !document.getElementById("tlg-navlink-css")) {
  const s = document.createElement("style");
  s.id = "tlg-navlink-css";
  s.textContent = `
.tlg-navlink{font-family:var(--font-sans);font-weight:400;font-size:14.4px;line-height:21.6px;
  letter-spacing:0.72px;text-transform:uppercase;text-decoration:none;cursor:pointer;
  transition:color .2s ease;white-space:nowrap}
.tlg-navlink--onDark{color:var(--on-dark-muted)}
.tlg-navlink--onDark:hover,.tlg-navlink--onDark[aria-current="page"]{color:#fff}
.tlg-navlink--onLight{color:var(--ink-muted)}
.tlg-navlink--onLight:hover,.tlg-navlink--onLight[aria-current="page"]{color:var(--ink)}
.tlg-navlink:focus-visible{outline:2px solid var(--gold);outline-offset:3px}`;
  document.head.appendChild(s);
}
function NavLink({
  children,
  href = "#",
  tone = "onDark",
  // "onDark" | "onLight"
  active = false,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `tlg-navlink tlg-navlink--${tone} ${className}`.trim(),
    "aria-current": active ? "page" : undefined,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink, __ds_default_components_navigation_NavLink_zxfsmk: NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Trust Legal Group — Dialog
   The floating consent / prompt card: white surface, 1px beige border and
   the one true drop shadow. A gold eyebrow, an 18px question, then a dark
   confirm + outline dismiss. This is the site's cookie dialog, generalised. */

function Dialog({
  label,
  title,
  children,
  acceptLabel = "Прийняти",
  declineLabel = "Відхилити",
  onAccept,
  onDecline,
  width = 448,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-label": typeof title === "string" ? title : label,
    style: {
      width,
      maxWidth: "100%",
      boxSizing: "border-box",
      background: "var(--bg)",
      border: "1px solid var(--rule)",
      boxShadow: "var(--shadow-dialog)",
      borderRadius: "var(--radius, 0)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "gold",
    size: "xs",
    style: {
      letterSpacing: "3px"
    }
  }, label), title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "24.75px",
      color: "var(--ink)"
    }
  }, title), children, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "md",
    onClick: onAccept,
    style: {
      flex: 1
    }
  }, acceptLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "md",
    onClick: onDecline,
    style: {
      flex: 1
    }
  }, declineLabel)));
}
Object.assign(__ds_scope, { Dialog, __ds_default_components_overlays_Dialog_yxmby: Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* Trust Legal Group — "Про нас" block.
   Left: eyebrow + heading + intro paragraphs. Right: four icon cards
   (the firm's working principles). Navy ground, cream type, sand cards
   with thin-line icons — brand palette, Onest. Sits after the services. */

const {
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const ABOUT_POINTS = [{
  icon: "circle-check",
  title: "Реалістичні обіцянки",
  desc: "Чесно озвучуємо ваші шанси без порожніх гарантій"
}, {
  icon: "monitor",
  title: "Дистанційна робота",
  desc: "Ведемо справи онлайн без вашої обов'язкової присутності"
}, {
  icon: "shield-check",
  title: "Фінансова відповідальність",
  desc: "Помилки виправляємо за свій рахунок — а не за ваш"
}, {
  icon: "message-circle",
  title: "Постійний зв'язок",
  desc: "Оперативно інформуємо про кожен крок роботи"
}];
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "about__eyebrow"
  }, "\u041F\u0440\u043E \u043D\u0430\u0441"), /*#__PURE__*/React.createElement("h2", {
    className: "about__title"
  }, "\u041A\u043E\u043B\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044F \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u044C", /*#__PURE__*/React.createElement("br", null), "\u0437-\u043F\u0456\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E \u2014 \u043C\u0438 \u0431\u0435\u0440\u0435\u043C\u043E \u0457\u0457 \u043F\u0456\u0434 \u0441\u0432\u0456\u0439"), /*#__PURE__*/React.createElement("div", {
    className: "about__lead"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Trust Legal Group"), " \u2014 \u0446\u0435 10 \u0434\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u0438\u0445 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0456\u0432, \u044F\u043A\u0456 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0438 \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u043D\u044F, \u0449\u043E\u0431 \u0440\u043E\u0437\u0432'\u044F\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0430 \u043D\u0435 \u043F\u043B\u043E\u0434\u0438\u0442\u0438 \u0431\u044E\u0440\u043E\u043A\u0440\u0430\u0442\u0456\u044E \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u043D\u0438\u0445."), /*#__PURE__*/React.createElement("p", null, "\u0423 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u2014 \u0432\u0456\u0434 10 \u0434\u043E 25 \u0440\u043E\u043A\u0456\u0432 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0443 \u0441\u0432\u043E\u0457\u0439 \u0433\u0430\u043B\u0443\u0437\u0456, \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u0438\u0445 \u0441\u043F\u0440\u0430\u0432 \u0456 \u0433\u043B\u0438\u0431\u043E\u043A\u0435 \u0437\u043D\u0430\u043D\u043D\u044F \u0440\u0435\u0433\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457 \u0441\u0443\u0434\u043E\u0432\u043E\u0457 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438."))), /*#__PURE__*/React.createElement("div", {
    className: "about__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/team-office.jpg",
    alt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Trust Legal Group",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "about__cards"
  }, ABOUT_POINTS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "about__card",
    key: p.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "about__card-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "about__card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "about__card-desc"
  }, p.desc))))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AccordionFaq.jsx
try { (() => {
/* Trust Legal Group — FAQ / accordion block (per the supplied reference).
   White background, an eyebrow + large title + subtitle, then expandable
   rows (first open by default), and a closing note about the consultation
   price. Brand palette, Onest, square corners, hairline rules. */

const {
  Eyebrow,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const FAQ_STEPS = [{
  title: "Скільки коштує консультація і чи можна дізнатися ціну до договору?",
  desc: "Первинна консультація коштує від 1 500 грн і триває до години. На ній ми детально розбираємо вашу ситуацію, даємо чіткий план дій і називаємо кінцеву вартість усього супроводу. Ця ціна фіксується в договорі й більше не змінюється."
}, {
  title: "Ви справді на зв'язку 24/7?",
  desc: "Так. На всі дзвінки відповідає черговий адвокат, а не менеджер. У критичних ситуаціях (обшук, затримання, блокпост) виїжджаємо на місце в будь-який час доби."
}, {
  title: "Чи можна звернутися за іншу людину, якщо вона сама не може?",
  desc: "Так. Договір можна укласти в інтересах близької людини — так починається більшість наших військових і кримінальних справ, особливо коли людину вже затримали."
}, {
  title: "Ви гарантуєте результат?",
  desc: "Жоден чесний адвокат не може гарантувати рішення суду. Але ми гарантуємо інше: ще до підписання договору ми чесно оцінимо ваші шанси, прорахуємо всі ризики та покажемо реальні кейси з нашої практики з аналогічними результатами."
}, {
  title: "Чи працюєте з клієнтами з інших міст і з-за кордону?",
  desc: "Так, більшість справ ведемо дистанційно: договір онлайн, документи в месенджер, представництво за ордером. Ваша присутність зазвичай не потрібна."
}];
function FaqRow({
  item,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `faq-row ${open ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "faq-row__head",
    "aria-expanded": open,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq-row__title"
  }, item.title), /*#__PURE__*/React.createElement("span", {
    className: "faq-row__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-row__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-row__panelin"
  }, /*#__PURE__*/React.createElement("p", {
    className: "faq-row__desc"
  }, item.desc))));
}
function AccordionFaq() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "faq",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "faq__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u0427\u0430\u0441\u0442\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("h2", {
    className: "faq__title"
  }, "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043F\u0440\u043E \u0433\u043E\u043B\u043E\u0432\u043D\u0435"), /*#__PURE__*/React.createElement("p", {
    className: "faq__sub"
  }, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u043D\u0430 \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438 \u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0435.")), /*#__PURE__*/React.createElement("div", {
    className: "faq__list"
  }, FAQ_STEPS.map((s, i) => /*#__PURE__*/React.createElement(FaqRow, {
    key: s.title,
    item: s,
    open: openIdx === i,
    onToggle: () => setOpenIdx(openIdx === i ? -1 : i)
  }))), /*#__PURE__*/React.createElement("p", {
    className: "faq__note"
  }, "\u0426\u0456\u043D\u0430 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457 \u2014 ", /*#__PURE__*/React.createElement("strong", null, "\u0432\u0456\u0434 1500 \u0433\u0440\u043D"), ". \u041F\u0440\u0438 \u0443\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u0456 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u043D\u0430 \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u0446\u044F \u0441\u0443\u043C\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0440\u0430\u0445\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043F\u043E\u0441\u043B\u0443\u0433\u0438.")));
}
Object.assign(window, {
  AccordionFaq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AccordionFaq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ActiveCases.jsx
try { (() => {
/* Trust Legal Group — "Активні кейси" grid of practice/case cards. */
const {
  PracticeCard
} = window.TrustLegalGroupDesignSystem_76f407;
const CASES = [{
  image: "../../assets/images/case-white-collar.jpg",
  category: "White-Collar Crime",
  title: "White-Collar Crime",
  lead: "Оперативно",
  body: "включившись у справу під час обшуку, ми забезпечили повний юридичний супровід слідчої дії та контроль за дотриманням процесуальних норм. Клієнт утримався від небажаних свідчень, перелік вилученого майна суттєво обмежено.",
  link: "Захист у кримінальних справах"
}, {
  image: "../../assets/images/case-military.jpg",
  category: "Військовий правопорядок",
  title: "Захист прав військовослужбовців",
  lead: "На сьогодні",
  body: "це поширена проблема. В одному з кейсів ми представляли інтереси військовослужбовця у спорі щодо невиплати додаткової винагороди — із загального боргу 480 000 грн частину виплачено досудово, решту стягнуто в суді.",
  link: "Військове право"
}, {
  image: "../../assets/images/case-tax-control.jpg",
  category: "Податкові питання",
  title: "Податковий контроль",
  lead: "Успішно захистили інтереси",
  body: "клієнта у спорі з податковим органом щодо нереальності господарських операцій. Збережено податковий кредит і право на витрати, уникнуто суттєвих донарахувань та штрафних санкцій.",
  link: "Податкові спори"
}, {
  image: "../../assets/images/case-contract.jpg",
  category: "Цивільне право",
  title: "Розірвання господарського договору",
  lead: "Досудове врегулювання",
  body: "спору. Завдяки своєчасному правовому супроводу клієнт уникнув тривалого судового процесу; сторони припинили договірні відносини, а договір розірвано без звернення до суду.",
  link: "Цивільне право"
}, {
  image: "../../assets/images/case-tax-authority.jpg",
  category: "Податкові питання",
  title: "Комунікації з контролюючим органом",
  lead: "Реакція на запит ДПС",
  body: "супроводили клієнта під час опрацювання запиту щодо надання інформації та документів. Питання контролюючого органу усунуто без перевірки, донарахувань і негативних фінансових наслідків.",
  link: "Податкові спори"
}, {
  image: "../../assets/images/case-enforcement.jpg",
  category: "Цивільне право",
  title: "Виконавче провадження",
  lead: "Супроводження",
  body: "виконавчих проваджень: взаємодія з органами ДВС і приватними виконавцями, підготовка заяв і скарг, оскарження незаконних дій та контроль за своєчасним вчиненням виконавчих дій.",
  link: "Цивільне право"
}];
function ActiveCases() {
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    style: {
      background: "var(--bg)",
      padding: "160px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 96px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 64,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 736,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 72,
      lineHeight: "75.6px",
      letterSpacing: "-1.8px",
      color: "var(--ink)"
    }
  }, "\u0410\u043A\u0442\u0438\u0432\u043D\u0456 \u043A\u0435\u0439\u0441\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 408,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--ink-muted)"
    }
  }, "\u041E\u043A\u0440\u0435\u043C\u0456 \u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F \u0437 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0457 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0444\u0456\u0440\u043C\u0438 \u2014 \u0437\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u0430\u043C\u0438, \u043D\u0430 \u044F\u043A\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0441\u044C\u043A\u0438\u0439 \u0437\u0430\u043F\u0438\u0442 \u0437\u0430\u0440\u0430\u0437 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0435.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--rule)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, CASES.map(c => /*#__PURE__*/React.createElement(PracticeCard, {
    key: c.title,
    image: c.image,
    category: c.category,
    title: c.title,
    lead: c.lead,
    linkLabel: c.link,
    href: "#"
  }, c.body)))));
}
Object.assign(window, {
  ActiveCases
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ActiveCases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
/* Trust Legal Group — "Блог / Новини" block (after the FAQ).
   Reference-style: a featured post (large image left, meta + title + excerpt
   + author right) over a hairline, then a 3-up grid of cards (image, tag,
   title, excerpt, author). Brand palette, square corners, Onest. Reuses the
   project's real photography. */

const {
  Eyebrow,
  ArrowLink
} = window.TrustLegalGroupDesignSystem_76f407;
const FEATURED = {
  image: "../../assets/images/case-military.jpg",
  topic: "Військове право",
  tag: "Коментар",
  date: "25 червня 2026",
  read: "7 хв",
  title: "Повна непридатність\nна ВЛК у 2026 році",
  excerpt: "Чи можна отримати повну непридатність до військової служби у 2026 році, за якими медичними критеріями це вирішується, як виглядає процедура та що робити при незгоді з рішенням комісії.",
  author: "Ірина Сальник",
  role: "Адвокат"
};
const POSTS = [{
  image: "../../assets/images/case-white-collar.jpg",
  tag: "Кримінальне право",
  date: "18 червня 2026",
  read: "6 хв",
  title: "Що робити під час обшуку:\nпокрокова інструкція",
  excerpt: "Обшук — це стрес, у якому легко нашкодити собі. Розбираємо, які права має особа, що можна і чого не можна робити до приїзду адвоката.",
  author: "Вдовіченко Вадим",
  role: "Керівник об'єднання"
}, {
  image: "../../assets/images/case-tax-control.jpg",
  tag: "Податкові спори",
  date: "11 червня 2026",
  read: "5 хв",
  title: "Блокування податкових накладних:\nяк розблокувати",
  excerpt: "Зупинена реєстрація ПН паралізує бізнес. Пояснюємо алгоритм оскарження, строки та типові помилки при поданні пояснень.",
  author: "Олексій Фоменко",
  role: "Адвокат"
}, {
  image: "../../assets/images/case-contract.jpg",
  tag: "Сімейне право",
  date: "3 червня 2026",
  read: "4 хв",
  title: "Розлучення з іноземцем:\nде і як розірвати шлюб",
  excerpt: "Юрисдикція, визнання рішення за кордоном і питання дітей — коротко про те, як провести процедуру дистанційно.",
  author: "Юлія Латишева",
  role: "Адвокат"
}];
function BlogCard({
  post
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "blog-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-card__tag"
  }, post.tag), /*#__PURE__*/React.createElement("div", {
    className: "blog-card__meta"
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", {
    className: "blog-feat__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.read)), /*#__PURE__*/React.createElement("h3", {
    className: "blog-card__title"
  }, post.title), /*#__PURE__*/React.createElement("p", {
    className: "blog-card__excerpt"
  }, post.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "blog-card__author"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-card__name"
  }, post.author), /*#__PURE__*/React.createElement("span", {
    className: "blog-card__role"
  }, post.role))));
}
function Blog() {
  return /*#__PURE__*/React.createElement("section", {
    className: "blog",
    id: "blog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u041D\u043E\u0432\u0438\u043D\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "blog__title"
  }, "\u041D\u043E\u0432\u0438\u043D\u0438 \u0442\u0430 \u043F\u0440\u0430\u0432\u043E\u0432\u0456 \u0440\u043E\u0437\u0431\u043E\u0440\u0438")), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    onClick: e => e.preventDefault()
  }, "\u0423\u0441\u0456 \u0441\u0442\u0430\u0442\u0442\u0456")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "blog-feat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-feat__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: FEATURED.image,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "blog-feat__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-card__tag"
  }, FEATURED.topic), /*#__PURE__*/React.createElement("div", {
    className: "blog-feat__meta"
  }, /*#__PURE__*/React.createElement("span", null, FEATURED.date), /*#__PURE__*/React.createElement("span", {
    className: "blog-feat__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, FEATURED.read)), /*#__PURE__*/React.createElement("h3", {
    className: "blog-feat__title"
  }, FEATURED.title), "            ", /*#__PURE__*/React.createElement("p", {
    className: "blog-feat__excerpt"
  }, FEATURED.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "blog-feat__author"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-card__name"
  }, FEATURED.author), /*#__PURE__*/React.createElement("span", {
    className: "blog-card__role"
  }, FEATURED.role)))), /*#__PURE__*/React.createElement("div", {
    className: "blog__grid"
  }, POSTS.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.title,
    post: p
  })))));
}
Object.assign(window, {
  Blog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cases.jsx
try { (() => {
/* Trust Legal Group — "Кейси" block (after Про нас).
   Anonymized won-case notes: eyebrow + heading + subtitle, then a grid of
   cards (practice tag, situation, gold "Результат" line), and a CTA button.
   White background, brand palette, square corners, Onest. */

const {
  Eyebrow,
  Button,
  ArrowLink
} = window.TrustLegalGroupDesignSystem_76f407;
const CASES = [{
  tag: "Військове право",
  text: "Чоловіка зупинили на блокпосту разом з родиною. Два дні дистанційно координували дії родини, щоб частина відмовилася від мобілізації.",
  result: "Батька відпустили, без переведення у військкомат."
}, {
  tag: "Податкові спори",
  text: "ФОП п'ять років платив єдиний соціальний внесок двічі — і як найманий працівник, і як підприємець. Довели переплату в суді, оскаржили незаконні нарахування.",
  result: "Повернуто близько 100 000 грн з бюджету."
}, {
  tag: "Сімейне право",
  text: "Клієнтка в Німеччині звернулася по розлучення в Україні. Дистанційно оформили довіреність, здійснили представництво в суді.",
  result: "Розлучення оформлено без жодної поїздки в Україну."
}, {
  tag: "Кримінальне право",
  text: "Оперативно включились у справу під час обшуку: забезпечили супровід слідчої дії й контроль процесуальних норм.",
  result: "Арешт оскаржено, майно повернуто у найкоротші строки."
}];
function Cases() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cases",
    id: "cases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u041A\u0435\u0439\u0441\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "cases__title"
  }, "\u0421\u043F\u0440\u0430\u0432\u0438, \u044F\u043A\u0456 \u043C\u0438 \u0432\u0436\u0435 \u0432\u0438\u0433\u0440\u0430\u043B\u0438")), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    onClick: e => e.preventDefault()
  }, "\u0412\u0441\u0456 \u043A\u0435\u0439\u0441\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "cases__grid"
  }, CASES.map(c => /*#__PURE__*/React.createElement("article", {
    className: "case-card",
    key: c.tag
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-card__tag"
  }, c.tag), /*#__PURE__*/React.createElement("p", {
    className: "case-card__text"
  }, c.text), /*#__PURE__*/React.createElement("div", {
    className: "case-card__result"
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-card__result-label"
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"), /*#__PURE__*/React.createElement("span", {
    className: "case-card__result-text"
  }, c.result)), /*#__PURE__*/React.createElement("div", {
    className: "case-card__foot"
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    onClick: e => e.preventDefault()
  }, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"))))), /*#__PURE__*/React.createElement("div", {
    className: "cases__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases__banner-text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cases__banner-title"
  }, "\u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0457 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457?"), /*#__PURE__*/React.createElement("p", {
    className: "cases__banner-sub"
  }, "\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u2014 \u0447\u0435\u0440\u0433\u043E\u0432\u0438\u0439 \u0430\u0434\u0432\u043E\u043A\u0430\u0442 \u043F\u0435\u0440\u0435\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0434\u043D\u044F.")), /*#__PURE__*/React.createElement("form", {
    className: "cases__banner-form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    name: "phone",
    inputMode: "tel",
    autoComplete: "tel",
    placeholder: "+380 __ ___ __ __",
    "aria-label": "\u0412\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "cases__banner-btn"
  }, /*#__PURE__*/React.createElement("span", null, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"), /*#__PURE__*/React.createElement("span", {
    className: "cases__banner-btn-arrow",
    "aria-hidden": "true"
  }, "\u2192")))))));
}
Object.assign(window, {
  Cases
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Trust Legal Group — "Контакти" band (cream): heading, contact rows, map placeholder. */
const {
  Eyebrow,
  ContactItem,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--bg-secondary)",
      padding: "128px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 96px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 96,
      flexWrap: "wrap",
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "navy",
    size: "md",
    style: {
      marginBottom: 16
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 48,
      lineHeight: "60px",
      color: "var(--ink)"
    }
  }, "\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u043E\u0432\u0443 \u0437 \u043D\u0430\u043C\u0438.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 448px",
      maxWidth: 448,
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(ContactItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin"
    }),
    label: "\u0410\u0434\u0440\u0435\u0441\u0430 \u043E\u0444\u0456\u0441\u0443"
  }, "Січеславська Набережна, 49А, прим 72\nДніпро, ЖК «Фестивальний», Україна"), /*#__PURE__*/React.createElement(ContactItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone"
    }),
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
  }, "+380 97 097 96 96"), /*#__PURE__*/React.createElement(ContactItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    }),
    label: "Email"
  }, "office@trustlegal.group"), /*#__PURE__*/React.createElement(ContactItem, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock"
    }),
    label: "\u0413\u043E\u0434\u0438\u043D\u0438 \u043F\u0440\u0438\u0439\u043E\u043C\u0443"
  }, "Пн–Пт · 09:00 — 19:00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 420,
      background: "var(--bg)",
      border: "1px solid var(--rule)",
      backgroundImage: "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(238,233,229,.35), rgba(238,233,229,.7))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      color: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 40,
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--ink)"
    }
  }, "\u0414\u043D\u0456\u043F\u0440\u043E \xB7 \u0421\u0456\u0447\u0435\u0441\u043B\u0430\u0432\u0441\u044C\u043A\u0430 \u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430, 49\u0410"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color: "var(--ink-muted)"
    }
  }, "\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u043C\u0430\u043F\u0430 Google \u043D\u0430 \u0436\u0438\u0432\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456"))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactForm.jsx
try { (() => {
/* Trust Legal Group — contact / callback form block (before the SEO text).
   Left: heading + subtitle, contact details, and four advocate avatars
   ("на зв'язку 24/7"). Right: a white form card (Ім'я, Телефон, Телеграм,
   question select) with a primary submit + consent note. Navy section,
   Onest, square corners. Kept compact so it fits with the fixed header. */

const {
  Button,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const ON_CALL = ["../../assets/team/vdovichenko.jpg", "../../assets/team/latysheva.jpg", "../../assets/team/voloshynov.jpg", "../../assets/team/shcherbynin.jpg"];
const QUESTION_OPTIONS = ["Військове право", "Кримінальне право", "ДТП і водійські справи", "Сімейне право", "Цивільні справи", "Бізнес і господарське", "Податки і фінмоніторинг", "Інше"];
const CONTACT_OPTIONS = ["Написати в Telegram", "Написати в Viber", "Зателефонувати"];
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "cta",
    id: "callback"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cta__title"
  }, "\u0404 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F? \u041D\u0430\u0448\u0456 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0438 \u043D\u0430 \u0437\u0432'\u044F\u0437\u043A\u0443 24/7"), /*#__PURE__*/React.createElement("p", {
    className: "cta__sub"
  }, "\u0420\u043E\u0437\u043A\u0430\u0436\u0456\u0442\u044C, \u0449\u043E \u0441\u0442\u0430\u043B\u043E\u0441\u044F \u2014 \u0456 \u043C\u0438 \u0441\u043A\u0430\u0436\u0435\u043C\u043E, \u0449\u043E \u0437 \u0446\u0438\u043C \u043C\u043E\u0436\u043D\u0430 \u0437\u0440\u043E\u0431\u0438\u0442\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "cta__oncall"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__avatars"
  }, ON_CALL.map((src, i) => /*#__PURE__*/React.createElement("span", {
    className: "cta__avatar",
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "cta__dot",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cta__contacts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cta__c-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "cta__c-val"
  }, "\u0421\u0456\u0447\u0435\u0441\u043B\u0430\u0432\u0441\u044C\u043A\u0430 \u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430, 49\u0410, \u043F\u0440\u0438\u043C. 72", /*#__PURE__*/React.createElement("br", null), "\u0416\u041A \xAB\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C\u043D\u0438\u0439\xBB, \u0414\u043D\u0456\u043F\u0440\u043E")), /*#__PURE__*/React.createElement("div", {
    className: "cta__c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cta__c-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "cta__c-val"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+380970979696"
  }, "+380 97 097 96 96"))), /*#__PURE__*/React.createElement("div", {
    className: "cta__c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cta__c-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "cta__c-val"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@trust-legalgroup.com"
  }, "info@trust-legalgroup.com"))), /*#__PURE__*/React.createElement("div", {
    className: "cta__c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cta__c-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "cta__c-val"
  }, "\u041E\u0444\u0456\u0441: \u041F\u043D\u2013\u041F\u0442 9:00\u201318:00")))), /*#__PURE__*/React.createElement("div", {
    className: "cta__card"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "cta__done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cta__done-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 40
  })), /*#__PURE__*/React.createElement("h3", {
    className: "cta__done-t"
  }, "\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "cta__done-d"
  }, "\u0427\u0435\u0440\u0433\u043E\u0432\u0438\u0439 \u0430\u0434\u0432\u043E\u043A\u0430\u0442 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C.")) : /*#__PURE__*/React.createElement("form", {
    className: "cta__form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cta__form-t"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"), /*#__PURE__*/React.createElement("div", {
    className: "cta__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-name"
  }, "\u0406\u043C'\u044F"), /*#__PURE__*/React.createElement("input", {
    id: "cf-name",
    type: "text",
    name: "name",
    autoComplete: "name",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "cta__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-phone"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("input", {
    id: "cf-phone",
    type: "tel",
    name: "phone",
    autoComplete: "tel",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "cta__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-reach"
  }, "\u042F\u043A \u0437 \u0432\u0430\u043C\u0438 \u0437\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044C?"), /*#__PURE__*/React.createElement("div", {
    className: "cta__select"
  }, /*#__PURE__*/React.createElement("select", {
    id: "cf-reach",
    name: "reach",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u043F\u043E\u0441\u0456\u0431"), CONTACT_OPTIONS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    className: "cta__select-chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cta__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-q"
  }, "\u0417 \u044F\u043A\u0438\u043C \u043F\u0438\u0442\u0430\u043D\u043D\u044F\u043C \u0437\u0432\u0435\u0440\u0442\u0430\u0454\u0442\u0435\u0441\u044C?"), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-q",
    name: "question",
    rows: 2,
    placeholder: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043E\u043F\u0438\u0448\u0456\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044E"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    type: "submit",
    style: {
      width: "100%",
      marginTop: 4
    }
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"), /*#__PURE__*/React.createElement("p", {
    className: "cta__consent"
  }, "\u041D\u0430\u0442\u0438\u0441\u043A\u0430\u044E\u0447\u0438 \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456.")))));
}
Object.assign(window, {
  ContactForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CookieConsent.jsx
try { (() => {
/* Trust Legal Group — cookie consent, docked bottom-right, dismissible. */
const {
  Dialog
} = window.TrustLegalGroupDesignSystem_76f407;
function CookieConsent() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 60,
      width: 448,
      maxWidth: "calc(100vw - 48px)"
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    label: "Cookies",
    title: "\u0427\u0438 \u0434\u0430\u0454\u0442\u0435 \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookies?",
    acceptLabel: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438",
    declineLabel: "\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438",
    onAccept: () => setOpen(false),
    onDecline: () => setOpen(false)
  }));
}
Object.assign(window, {
  CookieConsent
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CookieConsent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Trust Legal Group — site footer.
   Left: logo + subtitle + 24/7 block (big tel:) + messenger icons.
   Four columns: Навігація · Практики · Послуги (products + popular) · Контакти.
   Bottom bar: legal data, copyright, legal links, disclaimer.
   Reference-style light grid; brand palette, Onest. Columns become
   accordions on mobile (Контакти open by default). Placeholders are
   left explicit — real legal name / ЄДРПОУ / email domain / office hours
   are not yet provided. */

const {
  Logo,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const NAV = [["Головна", "#top"], ["Практики", "#practice"], ["Про нас", "#about"], ["Команда", "#team"], ["Pro Bono", "#"], ["Новини", "#"], ["Контакти", "#"]];
const PRACTICES = ["Військове право", "Кримінальне право", "ДТП і водійські справи", "Сімейне право", "Цивільні справи", "Бізнес і господарське", "Податки і фінмоніторинг", "Медіація"];
const SERVICE_PRODUCTS = ["SOS-адвокат — абонентський захист 24/7", "Критичність підприємства та бронювання", "Консультація адвоката"];
const SERVICE_POPULAR = ["Зняття з розшуку ТЦК", "Оскарження рішення ВЛК", "Звільнення з військової служби", "Адвокат при обшуку", "Супровід допиту", "Повернення вилученого майна", "Запобіжні заходи: застава, домашній арешт", "Адвокат при ДТП", "Позбавлення прав за ст. 130 КУпАП", "Страхові виплати після ДТП", "Розірвання шлюбу", "Розлучення з іноземцем / за кордоном"];

/* Compact monochrome brand glyphs (currentColor) for messengers + socials. */
const GLYPH = {
  telegram: "m22 3-9.6 18-3.4-8.1L1 9.4 22 3Z M22 3 9 14.9",
  viber: "M11.4 0C9.5 0 5.3.3 3 2.5 1.3 4.2.7 6.7.6 9.8c0 3.1-.1 9 5.5 10.5v2.4s0 1 .6 1.2c.8.2 1.2-.5 1.9-1.3l1.4-1.6c3.9.3 6.8-.4 7.1-.5.8-.3 5.3-.8 6-6.8.7-6.1-.4-10-2.4-11.7C19.7 1.4 17.3.1 11.8 0c0 0-.4 0-.4 0zm0 1.7c.6 0 1 0 1 0 4.7 0 6.9 1.4 7.4 1.9 1.7 1.5 2.6 4.9 1.9 10-.6 4.9-4.2 5.4-4.9 5.6-.3.1-2.9.7-6.1.5 0 0-2.4 2.9-3.2 3.7-.1.1-.3.2-.4.1-.1 0-.2-.2-.2-.4V19c-4.8-1.3-4.5-6.3-4.4-8.9.1-2.6.5-4.7 2-6.2C6.4 2.1 9.9 1.8 11.5 1.8zm.4 2.5c-.2 0-.3.3 0 .3 2.4 0 4.3.8 5.8 2.2 1.4 1.4 2.1 3.4 2.2 6 0 .3.5.3.5 0 0-2.7-.8-4.9-2.3-6.4-1.6-1.5-3.6-2.3-6.2-2.3zm.6 2.1c-.2 0-.3.3 0 .3 1.5.1 2.7.6 3.5 1.5.8.9 1.2 2 1.2 3.4 0 .3.5.3.5 0 0-1.5-.4-2.8-1.4-3.8-.9-1-2.2-1.6-3.8-1.7zm-4.7.2c-.2 0-.4 0-.5.2-.3.3-.6.6-.8 1-.2.3-.3.6-.4.9v.1c0 .3.1.6.3 1 .4.9 1.1 1.9 2.1 2.9l.2.2c1 1 2 1.7 2.9 2.1.4.2.7.3 1 .3h.1c.3 0 .6-.1.9-.3.4-.2.7-.5 1-.8.1-.2.2-.4.2-.5 0-.2-.1-.3-.2-.4-.3-.2-.6-.4-1-.6-.2-.1-.4-.2-.6-.3-.4-.2-.7-.1-.9.2l-.3.4c-.2.2-.5.2-.5.2-2.4-.6-3-3-3-3s0-.3.2-.5l.4-.3c.3-.2.3-.5.2-.9-.1-.2-.2-.4-.3-.6-.2-.3-.4-.7-.6-1 0 0 0-.1-.1-.1-.1-.1-.3-.2-.4-.2z",
  whatsapp: "M.06 24l1.69-6.16A11.87 11.87 0 0 1 .16 11.9C.16 5.34 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.41c0 6.56-5.34 11.9-11.89 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.44 0 9.89-4.43 9.89-9.88a9.86 9.86 0 0 0-9.88-9.9c-5.46 0-9.89 4.44-9.89 9.89 0 2.27.7 3.98 1.86 5.76l-1 3.65 3.58-.94zm10.83-5.6c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.94 8.94 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.18-1.41z",
  instagram: "M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5Z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M17.3 6.7h.01",
  tiktok: "M14.5 3c.4 2.3 1.9 4 4.5 4.2v3c-1.6 0-3.1-.5-4.5-1.4v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.1a2.6 2.6 0 1 0 1.7 2.4V3h3Z",
  facebook: "M14 8.5h3V5.5h-3A3.5 3.5 0 0 0 10.5 9v2H8v3h2.5v6.5h3V14H16l.5-3h-3V9c0-.4.1-.5.5-.5Z",
  linkedin: "M4 4.5h16a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5Z M8 10.5v6 M8 7.5v.01 M12 16.5v-3.5a2 2 0 0 1 4 0v3.5"
};
const FILLED = new Set(["viber", "whatsapp"]);
function Glyph({
  name
}) {
  const filled = FILLED.has(name);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: filled ? "currentColor" : "none",
    stroke: filled ? "none" : "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: GLYPH[name]
  }));
}
function FootLink({
  label,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "foot__link",
    href: href,
    onClick: e => {
      if (href === "#") e.preventDefault();
    }
  }, label);
}
function FootCol({
  title,
  defaultOpen,
  children
}) {
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
  return /*#__PURE__*/React.createElement("div", {
    className: `foot__col ${open ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "foot__head",
    onClick: () => mobile && setOpen(o => !o)
  }, title, /*#__PURE__*/React.createElement("span", {
    className: "foot__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))), show && /*#__PURE__*/React.createElement("div", {
    className: "foot__list"
  }, children));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "Trust Legal Group",
    style: {
      height: 62,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "foot__now"
  }, /*#__PURE__*/React.createElement("span", {
    className: "foot__now-h"
  }, "\u0410\u0434\u0432\u043E\u043A\u0430\u0442 \u043D\u0430 \u0437\u0432'\u044F\u0437\u043A\u0443 24/7"), /*#__PURE__*/React.createElement("a", {
    className: "foot__phone",
    href: "tel:+380970979696"
  }, "+380 97 097 96 96"), /*#__PURE__*/React.createElement("span", {
    className: "foot__now-note"
  }, "\u0447\u0435\u0440\u0433\u043E\u0432\u0438\u0439 \u0430\u0434\u0432\u043E\u043A\u0430\u0442, \u0432\u0438\u0457\u0437\u0434 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441")), /*#__PURE__*/React.createElement("div", {
    className: "foot__msgr",
    "aria-label": "\u041C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0438"
  }, /*#__PURE__*/React.createElement("a", {
    className: "foot__ic",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Telegram"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "telegram"
  })), /*#__PURE__*/React.createElement("a", {
    className: "foot__ic",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Viber"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "viber"
  })), /*#__PURE__*/React.createElement("a", {
    className: "foot__ic",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "WhatsApp"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "whatsapp"
  })))), /*#__PURE__*/React.createElement(FootCol, {
    title: "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F"
  }, NAV.map(([l, h]) => /*#__PURE__*/React.createElement(FootLink, {
    key: l,
    label: l,
    href: h
  }))), /*#__PURE__*/React.createElement(FootCol, {
    title: "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"
  }, PRACTICES.map(l => /*#__PURE__*/React.createElement(FootLink, {
    key: l,
    label: l
  }))), /*#__PURE__*/React.createElement(FootCol, {
    title: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__products"
  }, SERVICE_PRODUCTS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "foot__product",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    className: "foot__popular"
  }, SERVICE_POPULAR.map(l => /*#__PURE__*/React.createElement(FootLink, {
    key: l,
    label: l
  })))), /*#__PURE__*/React.createElement(FootCol, {
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    defaultOpen: true
  }, /*#__PURE__*/React.createElement("a", {
    className: "foot__link",
    href: "mailto:info@trust-legalgroup.com"
  }, "info@trust-legalgroup.com"), /*#__PURE__*/React.createElement("span", {
    className: "foot__meta"
  }, "\u0421\u0456\u0447\u0435\u0441\u043B\u0430\u0432\u0441\u044C\u043A\u0430 \u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430, 49\u0410, \u043F\u0440\u0438\u043C. 72 \xB7 \u0416\u041A \xAB\u0424\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C\u043D\u0438\u0439\xBB, \u0414\u043D\u0456\u043F\u0440\u043E, \u0423\u043A\u0440\u0430\u0457\u043D\u0430"), /*#__PURE__*/React.createElement("span", {
    className: "foot__meta"
  }, "\u041E\u0444\u0456\u0441 \u2014 09:00 - 19:00"), /*#__PURE__*/React.createElement("div", {
    className: "foot__social",
    "aria-label": "\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456"
  }, /*#__PURE__*/React.createElement("a", {
    className: "foot__ic foot__ic--sm",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    className: "foot__ic foot__ic--sm",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "TikTok"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "tiktok"
  })), /*#__PURE__*/React.createElement("a", {
    className: "foot__ic foot__ic--sm",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "facebook"
  })), /*#__PURE__*/React.createElement("a", {
    className: "foot__ic foot__ic--sm",
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "linkedin"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "foot__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot__legal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "foot__copy"
  }, "\xA9 2026 Trust Legal Group LLP")), /*#__PURE__*/React.createElement("div", {
    className: "foot__legal-links"
  }, /*#__PURE__*/React.createElement(FootLink, {
    label: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"
  }), /*#__PURE__*/React.createElement(FootLink, {
    label: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 cookie"
  }), /*#__PURE__*/React.createElement(FootLink, {
    label: "\u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F"
  })), /*#__PURE__*/React.createElement("p", {
    className: "foot__disclaimer"
  }, "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456 \u043C\u0430\u0454 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0456 \u043D\u0435 \u0454 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0454\u044E. \u0414\u043B\u044F \u043E\u0446\u0456\u043D\u043A\u0438 \u0432\u0430\u0448\u043E\u0457 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457 \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430."))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Trust Legal Group — site header. Transparent over the hero, solid ink once scrolled. */
const {
  Logo,
  NavLink,
  Button,
  Divider
} = window.TrustLegalGroupDesignSystem_76f407;
function Header({
  solid
}) {
  const nav = [["Практики", "#cases"], ["Блог", "#top"], ["Pro bono", "#probono"], ["Про нас", "#about"], ["Контакти", "#contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: 80,
      display: "flex",
      alignItems: "center",
      background: solid ? "var(--ink)" : "transparent",
      boxShadow: solid ? "0 1px 0 var(--rule-on-dark)" : "none",
      transition: "background .35s ease, box-shadow .35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 72px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Trust Legal Group \u2014 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443",
    style: {
      textDecoration: "none",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    theme: "onDark",
    size: 42,
    sealSrc: "../../assets/logo-seal.png"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 26
    }
  }, nav.map(([t, h]) => /*#__PURE__*/React.createElement(NavLink, {
    key: t,
    href: h,
    tone: "onDark"
  }, t)), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    length: 16,
    style: {
      background: "var(--color-white-30)",
      margin: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    href: "#contact"
  }, "\u0417\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Trust Legal Group — hero. Full-bleed cinematic image, 50% scrim, left-set headline. */
const {
  Button
} = window.TrustLegalGroupDesignSystem_76f407;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      minHeight: 900,
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/case-white-collar.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 96px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768,
      display: "flex",
      flexDirection: "column",
      gap: 23
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 60,
      lineHeight: 1.06,
      letterSpacing: "-1px"
    }
  }, "\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430, \u0449\u043E \u043F\u0440\u0430\u0446\u044E\u0454 \u043D\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 620,
      color: "rgba(255,255,255,0.85)",
      fontFamily: "var(--font-sans)",
      fontSize: 20,
      lineHeight: "32px"
    }
  }, "\u041A\u0432\u0430\u043B\u0456\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u0440\u0430\u0434\u043D\u0438\u043A \u0434\u043B\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0442\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0445 \u043E\u0441\u0456\u0431 \u0443 \u0441\u043F\u043E\u0440\u0430\u0445, \u0443\u0433\u043E\u0434\u0430\u0445 \u0456 \u0449\u043E\u0434\u0435\u043D\u043D\u0438\u0445 \u043F\u0438\u0442\u0430\u043D\u043D\u044F\u0445."), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 17
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    href: "#contact"
  }, "\u0417\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u043F\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96,
      bottom: 48,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--on-dark-muted)",
      fontSize: 12,
      letterSpacing: "1.2px",
      textTransform: "uppercase"
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 48,
      background: "rgba(255,255,255,0.2)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: "rgba(255,255,255,0.6)"
    }
  }))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroEditorial.jsx
try { (() => {
/* Trust Legal Group — first screen (v3): full-bleed photo hero.
   Photo (team) fills the media area under a navy scrim; the headline sits
   bottom-left in white (with a Playfair-italic accent), a cream card floats
   at the right with the description + CTA, and a navy band of four metrics
   runs beneath. Composition follows the supplied reference; palette, square
   corners and components stay on-brand. Headline font is Helvetica (medium)
   per brief, local to this screen; the accent uses the brand serif. */

const {
  Logo,
  NavLink,
  Button,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;

/* Transparent header over the photo — white/onDark treatment. */
function HeroHeader() {
  const nav = [["Головна", "#top"], ["Практики", "#practice"], ["Про нас", "#about"], ["Команда", "#team"], ["Pro Bono", "#"], ["Новини", "#"], ["Контакти", "#"]];
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onKey = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement("header", {
    className: `hero__header ${open ? "is-open" : ""} ${scrolled ? "is-scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hero__burger",
    "aria-label": "\u041C\u0435\u043D\u044E",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 22
  })), /*#__PURE__*/React.createElement("a", {
    className: "hero__logo",
    href: "#top",
    "aria-label": "Trust Legal Group \u2014 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443",
    style: {
      textDecoration: "none",
      display: "flex"
    },
    onClick: close
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__logo-img",
    src: "../../assets/logo-header.svg",
    alt: "Trust Legal Group",
    style: {
      height: 52,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hero__nav"
  }, nav.map(([t, h]) => /*#__PURE__*/React.createElement(NavLink, {
    key: t,
    href: h,
    tone: "onDark"
  }, t))), /*#__PURE__*/React.createElement("a", {
    className: "hero__call",
    href: "tel:+380970979696",
    "aria-label": "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__overlay",
    onClick: close,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("aside", {
    className: "hero__panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\u041C\u0435\u043D\u044E"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__panel-top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.svg",
    alt: "Trust Legal Group",
    style: {
      height: 40,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hero__close",
    "aria-label": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E",
    onClick: close
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "hero__menu",
    onClick: close
  }, nav.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    className: "hero__menu-link",
    href: h
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "hero__panel-foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hero__panel-phone",
    href: "tel:+380970979696"
  }, "+380 97 097 96 96"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    style: {
      width: "100%"
    },
    onClick: close
  }, "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E"))));
}
const METRICS = [{
  num: "10",
  desc: "адвокатів з досвідом у ключових галузях права"
}, {
  num: "10+",
  desc: "років юридичного стажу в кожного фахівця"
}, {
  num: "1000+",
  desc: "справ, проведених за роки практики"
}, {
  num: "24/7",
  desc: "зв'язок з виїздом у критичній ситуації"
}];
function HeroEditorial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__img hero__img--desktop",
    src: "../../assets/images/hero-team.png",
    alt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u044E\u0440\u0438\u0441\u0442\u0456\u0432 Trust Legal Group \u0437\u0430 \u0440\u043E\u0431\u043E\u0442\u043E\u044E"
  }), /*#__PURE__*/React.createElement("img", {
    className: "hero__img hero__img--mobile",
    src: "../../assets/images/hero-team-mobile.jpg",
    alt: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u044E\u0440\u0438\u0441\u0442\u0456\u0432 Trust Legal Group \u0437\u0430 \u0440\u043E\u0431\u043E\u0442\u043E\u044E"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(HeroHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "hero__lower"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__headline"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0439 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 \u0443\xA0\u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u043A\u0440\u0438\u0437\u043E\u0432\u0456\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457")), /*#__PURE__*/React.createElement("aside", {
    className: "hero__card",
    "aria-label": "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__card-desc"
  }, "\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u043D\u0430\u043C \u2014 \u0456 \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u0441\u0432\u043E\u0457\u0445 \u0441\u043F\u0440\u0430\u0432. \u041F\u0440\u043E \u0432\u0441\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0434\u0431\u0430\u044E\u0442\u044C \u043D\u0430\u0448\u0456 \u043F\u0440\u043E\u0444\u0456\u043B\u044C\u043D\u0456 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "hero__card-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "hero__card-btn",
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: e => e.preventDefault()
  }, "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044C"), /*#__PURE__*/React.createElement("span", {
    className: "hero__card-note"
  }, "\u041D\u0430 \u0434\u0437\u0432\u0456\u043D\u043E\u043A \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0430\u0434\u0432\u043E\u043A\u0430\u0442, \u0430 \u043D\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, METRICS.map(m => /*#__PURE__*/React.createElement("div", {
    className: "hero__stat",
    key: m.num + m.desc
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__stat-num"
  }, m.num), /*#__PURE__*/React.createElement("p", {
    className: "hero__stat-desc"
  }, m.desc)))));
}
Object.assign(window, {
  HeroEditorial
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroEditorial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowWeWork.jsx
try { (() => {
/* Trust Legal Group — "Як ми працюємо" block.
   Vertical numbered timeline: a connecting line with navy step badges;
   each step has a title + description. Desktop: sticky heading column on
   the left, timeline on the right. Mobile: heading on top, single-column
   timeline. Brand palette, Onest. Background #F2EFE7. */

const {
  Eyebrow,
  Button
} = window.TrustLegalGroupDesignSystem_76f407;
const STEPS = [{
  title: "Звернення",
  desc: "Дзвоните або пишете в месенджер — безкоштовно з'ясовуємо суть питання й орієнтовну сферу, записуємо на консультацію."
}, {
  title: "Консультація",
  desc: "Отримуєте чіткий план дій, чесну оцінку шансів у відсотках і точну вартість супроводу, яка фіксується в договорі."
}, {
  title: "Договір",
  desc: "Укладаємо онлайн або в офісі. Можна також оформити і в інтересах близької людини, яка не може сама звернутись."
}, {
  title: "Робота",
  desc: "Ведемо справу й інформуємо на кожному етапі. Залишаємось на постійному зв'язку, ви бачите рух справи у реальному часі."
}, {
  title: "Результат",
  desc: "Отримуєте офіційний документ, який вирішує вашу проблему."
}];
function HowWeWork() {
  return /*#__PURE__*/React.createElement("section", {
    className: "how",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "how__aside"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u042F\u043A \u043C\u0438 \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E"), /*#__PURE__*/React.createElement("h2", {
    className: "how__title"
  }, "\u0428\u043B\u044F\u0445 \u0434\u043E \u0440\u043E\u0437\u0432'\u044F\u0437\u0430\u043D\u043D\u044F", /*#__PURE__*/React.createElement("br", null), "\u0432\u0430\u0448\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "how__sub"
  }, "\u0427\u0456\u0442\u043A\u0456 \u043A\u0440\u043E\u043A\u0438 \u0432\u0456\u0434 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0434\u0437\u0432\u0456\u043D\u043A\u0430 \u0434\u043E \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("div", {
    className: "how__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: e => e.preventDefault()
  }, "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044C"))), /*#__PURE__*/React.createElement("ol", {
    className: "how__steps"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("li", {
    className: "how-step",
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-step__rail",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "how-step__badge"
  }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
    className: "how-step__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "how-step__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "how-step__desc"
  }, s.desc)))))));
}
Object.assign(window, {
  HowWeWork
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowWeWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Instagram.jsx
try { (() => {
/* Trust Legal Group — Instagram feed strip (before the FAQ).
   Header: "INSTAGRAM" + @handle link. A 4-up (desktop) grid of square
   post tiles reusing the project's photography; each links to the account
   and shows a hover overlay. Sand band, brand palette, square corners. */

const {
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const HANDLE = "trust.legal.group";
const IG_URL = "https://www.instagram.com/trust.legal.group/";
const TILES = ["../../assets/images/probono-press.jpg", "../../assets/images/case-military.jpg", "../../assets/images/probono-veterans.jpg", "../../assets/images/case-white-collar.jpg", "../../assets/images/probono-charity.jpg", "../../assets/images/case-tax-control.jpg", "../../assets/images/probono-highprofile.jpg", "../../assets/images/case-contract.jpg"];
function Instagram() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ig",
    id: "instagram"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ig__title"
  }, "\u0411\u0456\u043B\u044C\u0448\u0435 \u043A\u043E\u0440\u0438\u0441\u043D\u043E\u0433\u043E \u2014 \u0432 Instagram"), /*#__PURE__*/React.createElement("a", {
    className: "ig__handle",
    href: IG_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig__handle-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  })), /*#__PURE__*/React.createElement("span", null, "@", HANDLE))), /*#__PURE__*/React.createElement("div", {
    className: "ig__grid"
  }, TILES.map((src, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "ig__tile",
    href: IG_URL,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `Пост в Instagram @${HANDLE}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ig__tile-ov"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 24
  })))))));
}
Object.assign(window, {
  Instagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Instagram.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LocationMap.jsx
try { (() => {
/* Trust Legal Group — location / map block (after the form).
   Sand band; left intro copy ("Розташування"), right an embedded Google
   map of the office (Sicheslavska Naberezhna St, 49, Dnipro). Brand
   palette, Onest, square corners. */

const {
  Eyebrow,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const MAP_SRC = "https://www.google.com/maps?q=Sicheslavska+Naberezhna+St+49+Dnipro&output=embed";
function LocationMap() {
  return /*#__PURE__*/React.createElement("section", {
    className: "loc",
    id: "location"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loc__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loc__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u0420\u043E\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("h2", {
    className: "loc__title"
  }, "\u041C\u0438 \u043F\u043E\u0440\u044F\u0434 \u0456\u0437 \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0414\u043D\u0456\u043F\u0440\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "loc__addr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "loc__addr-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "loc__addr-val"
  }, "\u0421\u0456\u0447\u0435\u0441\u043B\u0430\u0432\u0441\u044C\u043A\u0430 \u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430, 49, \u043F\u0440\u0438\u043C. 72", /*#__PURE__*/React.createElement("br", null), "\u0414\u043D\u0456\u043F\u0440\u043E, \u0423\u043A\u0440\u0430\u0457\u043D\u0430, 49000"))), /*#__PURE__*/React.createElement("div", {
    className: "loc__map"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: MAP_SRC,
    title: "Trust Legal Group \u2014 \u043E\u0444\u0456\u0441 \u043D\u0430 \u043C\u0430\u043F\u0456",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }))));
}
Object.assign(window, {
  LocationMap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LocationMap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Mission.jsx
try { (() => {
/* Trust Legal Group — mission band. Gold eyebrow, tight heading, line-illustration figure. */
const {
  Eyebrow,
  Figure
} = window.TrustLegalGroupDesignSystem_76f407;
function Mission() {
  return /*#__PURE__*/React.createElement("section", {
    id: "mission",
    style: {
      background: "#F2EFE7",
      padding: "112px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 clamp(24px,6vw,96px)",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "1fr 440px",
      gap: "24px 96px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm",
    style: {
      marginBottom: 19
    }
  }, "\u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 24px",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 44,
      lineHeight: "49.28px",
      letterSpacing: "-1.1px",
      color: "var(--ink)"
    }
  }, "\u041D\u0435 \u0443\u0441\u043A\u043B\u0430\u0434\u043D\u044E\u0432\u0430\u0442\u0438,", /*#__PURE__*/React.createElement("br", null), "\u0430 \u0432\u0438\u0440\u0456\u0448\u0443\u0432\u0430\u0442\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "29.25px",
      color: "var(--ink-muted)"
    }
  }, "\u041C\u0438 \u2014 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F, \u044F\u043A\u0430 \u0441\u0442\u0430\u0454 \u0432\u0430\u0448\u0438\u043C \u0431\u0456\u0437\u043D\u0435\u0441-\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C, \u0430 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u043E\u043C. \u0411\u0443\u0434\u0443\u0454\u043C\u043E \u0434\u043E\u0432\u0433\u043E\u0441\u0442\u0440\u043E\u043A\u043E\u0432\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438 \u043D\u0430 \u0434\u043E\u0432\u0456\u0440\u0456 \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456.")), /*#__PURE__*/React.createElement(Figure, {
    image: "../../assets/images/mission-figure.png",
    imageAlt: "A way through every case",
    caption: "A way through every case",
    aspect: "4 / 3"
  })));
}
Object.assign(window, {
  Mission
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Mission.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProBono.jsx
try { (() => {
/* Trust Legal Group — "Pro bono" band with an interactive image carousel. */
const {
  OverlayCard,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const TILES = [{
  image: "../../assets/images/probono-press.jpg",
  title: "Свобода преси"
}, {
  image: "../../assets/images/probono-charity.jpg",
  title: "Благодійні та\nгромадські\nорганізації"
}, {
  image: "../../assets/images/probono-highprofile.jpg",
  title: "Резонансні справи"
}, {
  image: "../../assets/images/probono-veterans.jpg",
  title: "Ветерани 1ОШП"
}];
function RoundBtn({
  dir,
  onClick,
  disabled
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "aria-label": dir === "prev" ? "Попередні" : "Наступні",
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--rule)",
      background: "var(--bg)",
      color: "var(--ink)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.35 : 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-sm)",
      transition: "opacity .2s ease"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dir === "prev" ? "chevron-left" : "chevron-right",
    size: 22
  }));
}
function ProBono() {
  const [i, setI] = React.useState(0);
  const cardW = 302,
    gap = 32,
    visible = 3;
  const maxIndex = Math.max(0, TILES.length - visible);
  const step = cardW + gap;
  return /*#__PURE__*/React.createElement("section", {
    id: "probono",
    style: {
      background: "var(--bg)",
      padding: "144px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "0 96px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 23
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 60,
      lineHeight: "72px",
      color: "var(--ink)"
    }
  }, "Pro bono \u0442\u0430 \u0433\u0440\u043E\u043C\u0430\u0434\u044F\u043D\u0441\u044C\u043A\u0430 \u043F\u043E\u0437\u0438\u0446\u0456\u044F."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "29.25px",
      color: "var(--ink-muted)"
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u043D\u0430 \u043D\u0430\u0448\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u043D\u0435 \u043E\u043F\u043B\u0430\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C\u0438. \u041C\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0454\u043C\u043E \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0446\u0456\u0432 \u0442\u0430 \u0457\u0445\u043D\u0456 \u0441\u0456\u043C'\u0457, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0438\u0445 \u0436\u0443\u0440\u043D\u0430\u043B\u0456\u0441\u0442\u0456\u0432, \u0433\u0440\u043E\u043C\u0430\u0434\u0441\u044C\u043A\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u0431\u0435\u0440\u0435\u043C\u043E \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u0440\u0435\u0437\u043E\u043D\u0430\u043D\u0441\u043D\u0438\u0445 \u0441\u043F\u0440\u0430\u0432\u0430\u0445 \u2014 \u0442\u0430\u043C, \u0434\u0435 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441\u0456\u0432 \u043D\u0435 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u043E\u0437\u043D\u0430\u0447\u0430\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0437\u0430\u0445\u0438\u0441\u0442\u0443.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 64,
      padding: "0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap,
      transform: `translateX(-${i * step}px)`,
      transition: "transform .5s cubic-bezier(.2,.6,.2,1)"
    }
  }, TILES.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      flex: `0 0 ${cardW}px`
    }
  }, /*#__PURE__*/React.createElement(OverlayCard, {
    image: t.image,
    title: t.title,
    href: "#"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 96,
      background: "linear-gradient(90deg, var(--bg), rgba(255,255,255,0))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: 96,
      background: "linear-gradient(270deg, var(--bg), rgba(255,255,255,0))",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(RoundBtn, {
    dir: "prev",
    onClick: () => setI(v => Math.max(0, v - 1)),
    disabled: i === 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, Array.from({
    length: maxIndex + 1
  }).map((_, d) => /*#__PURE__*/React.createElement("button", {
    key: d,
    "aria-label": `Слайд ${d + 1}`,
    onClick: () => setI(d),
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: d === i ? "var(--navy)" : "var(--rule)"
    }
  }))), /*#__PURE__*/React.createElement(RoundBtn, {
    dir: "next",
    onClick: () => setI(v => Math.min(maxIndex, v + 1)),
    disabled: i === maxIndex
  })));
}
Object.assign(window, {
  ProBono
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProBono.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SeoText.jsx
try { (() => {
/* Trust Legal Group — pre-footer SEO copy. Muted, small editorial text on
   the cream band; a subheading rhythm with hairline rules. Expand/collapse
   to keep it unobtrusive. Brand palette, Onest. */

function SeoText() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: `seo ${open ? "is-open" : ""}`,
    id: "seo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "seo__inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "seo__h1"
  }, "\u0410\u0434\u0432\u043E\u043A\u0430\u0442 \u0443 \u0414\u043D\u0456\u043F\u0440\u0456 \u2014 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 24/7"), /*#__PURE__*/React.createElement("div", {
    className: "seo__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, "Trust Legal Group \u2014 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0441\u044C\u043A\u0435 \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0432 \u0414\u043D\u0456\u043F\u0440\u0456. \u041C\u0438 \u0432\u0435\u0434\u0435\u043C\u043E \u0441\u043F\u0440\u0430\u0432\u0438 \u0443 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u043C\u0443, \u043A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443, \u0441\u0456\u043C\u0435\u0439\u043D\u043E\u043C\u0443, \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u043E\u043C\u0443, \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u043E\u043C\u0443 \u0442\u0430 \u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u043C\u0443 \u043F\u0440\u0430\u0432\u0456. \u041F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u0432 \u0414\u043D\u0456\u043F\u0440\u0456 \u0442\u0430 \u043F\u043E \u0432\u0441\u0456\u0439 \u0423\u043A\u0440\u0430\u0457\u043D\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0439\u043D\u043E \u2014 \u0437 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u044E\u0442\u044C \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C."), /*#__PURE__*/React.createElement("h3", {
    className: "seo__h"
  }, "\u0417 \u044F\u043A\u0438\u043C\u0438 \u043F\u0438\u0442\u0430\u043D\u043D\u044F\u043C\u0438 \u0434\u043E \u043D\u0430\u0441 \u0437\u0432\u0435\u0440\u0442\u0430\u044E\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u041A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0441\u043F\u0440\u0430\u0432\u0438:"), " \u0441\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u0434\u043E\u043F\u0438\u0442\u0443, \u043F\u0440\u0438\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043E\u0431\u0448\u0443\u043A\u0443, \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0432\u0438\u043B\u0443\u0447\u0435\u043D\u043E\u0433\u043E \u043C\u0430\u0439\u043D\u0430, \u043E\u0441\u043A\u0430\u0440\u0436\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u043E\u0431\u0456\u0436\u043D\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432. ", /*#__PURE__*/React.createElement("strong", null, "\u0412\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0435 \u043F\u0440\u0430\u0432\u043E:"), " \u0437\u043D\u044F\u0442\u0442\u044F \u0437 \u0440\u043E\u0437\u0448\u0443\u043A\u0443 \u0422\u0426\u041A, \u043E\u0441\u043A\u0430\u0440\u0436\u0435\u043D\u043D\u044F \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0412\u041B\u041A, \u043F\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u043C\u0443 \u043E\u0431\u043B\u0456\u043A\u0443, \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u0437 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0457 \u0441\u043B\u0443\u0436\u0431\u0438, \u0432\u0438\u043F\u043B\u0430\u0442\u0438 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0441\u043B\u0443\u0436\u0431\u043E\u0432\u0446\u044F\u043C \u0456 \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0430\u043C. ", /*#__PURE__*/React.createElement("strong", null, "\u0414\u0422\u041F \u0456 \u0432\u043E\u0434\u0456\u0439\u0441\u044C\u043A\u0456 \u0441\u043F\u0440\u0430\u0432\u0438:"), " \u0437\u0430\u0445\u0438\u0441\u0442 \u0443 \u0441\u043F\u0440\u0430\u0432\u0430\u0445 \u0437\u0430 \u0441\u0442. 130 \u041A\u0423\u043F\u0410\u041F, \u043F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0432, \u0441\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0438\u0445 \u0432\u0438\u043F\u043B\u0430\u0442. ", /*#__PURE__*/React.createElement("strong", null, "\u0421\u0456\u043C\u0435\u0439\u043D\u0456 \u0442\u0430 \u0441\u043F\u0430\u0434\u043A\u043E\u0432\u0456 \u0441\u043F\u043E\u0440\u0438:"), " \u0440\u043E\u0437\u0456\u0440\u0432\u0430\u043D\u043D\u044F \u0448\u043B\u044E\u0431\u0443, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u0437 \u0456\u043D\u043E\u0437\u0435\u043C\u0446\u0435\u043C, \u0441\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0430\u043B\u0456\u043C\u0435\u043D\u0442\u0456\u0432, \u043F\u043E\u0434\u0456\u043B \u043C\u0430\u0439\u043D\u0430, \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0430. ", /*#__PURE__*/React.createElement("strong", null, "\u0414\u043B\u044F \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0442\u0430 \u0424\u041E\u041F:"), " \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u0456 \u0441\u043F\u043E\u0440\u0438, \u0441\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0437\u0430\u0431\u043E\u0440\u0433\u043E\u0432\u0430\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438, \u0444\u0456\u043D\u043C\u043E\u043D\u0456\u0442\u043E\u0440\u0438\u043D\u0433, \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u0456\u0441\u0442\u044C \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u0430 \u0442\u0430 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0456\u0432."), /*#__PURE__*/React.createElement("h3", {
    className: "seo__h"
  }, "\u0427\u043E\u043C\u0443 \u043A\u043B\u0456\u0454\u043D\u0442\u0438 \u043E\u0431\u0438\u0440\u0430\u044E\u0442\u044C Trust Legal Group"), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0410\u0434\u0432\u043E\u043A\u0430\u0442 \u043D\u0430 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0446\u0456\u043B\u043E\u0434\u043E\u0431\u043E\u0432\u043E."), " \u0423 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0456\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457 \u2014 \u043E\u0431\u0448\u0443\u043A, \u0437\u0430\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F, \u0437\u0443\u043F\u0438\u043D\u043A\u0430 \u043D\u0430 \u0431\u043B\u043E\u043A\u043F\u043E\u0441\u0442\u0456 \u2014 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0431\u0435\u0440\u0435 \u0430\u0434\u0432\u043E\u043A\u0430\u0442, \u0430 \u043D\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440, \u0456 \u0432\u0438\u0457\u0436\u0434\u0436\u0430\u0454 \u0434\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441."), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u041E\u0431'\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0456\u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0439."), " \u041E\u0434\u0438\u043D \u0434\u043E\u0433\u043E\u0432\u0456\u0440 \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u0454 \u0441\u0443\u043C\u0456\u0436\u043D\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F: \u044F\u043A\u0449\u043E \u0441\u043F\u0440\u0430\u0432\u0430 \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u0437\u0430 \u043C\u0435\u0436\u0456 \u043E\u0434\u043D\u043E\u0433\u043E \u043D\u0430\u043F\u0440\u044F\u043C\u0443, \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0444\u0456\u043B\u044C\u043D\u0438\u0439 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442."), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0414\u043E\u0441\u0432\u0456\u0434 \u0432\u0456\u0434 10 \u0440\u043E\u043A\u0456\u0432 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0432 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430.")), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0427\u0435\u0441\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432."), " \u041C\u0438 \u043D\u0435 \u043E\u0431\u0456\u0446\u044F\u0454\u043C\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043D\u0430\u043F\u0435\u0440\u0435\u0434, \u0430 \u043F\u043E\u044F\u0441\u043D\u044E\u0454\u043C\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u0456 \u0448\u0430\u043D\u0441\u0438 \u0442\u0430 \u0440\u0438\u0437\u0438\u043A\u0438, \u0449\u043E\u0431 \u0432\u0438 \u0443\u0445\u0432\u0430\u043B\u044E\u0432\u0430\u043B\u0438 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u0432\u0456\u0434\u043E\u043C\u043E."), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, /*#__PURE__*/React.createElement("strong", null, "\u0406\u043D\u0444\u043E\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u043A\u043E\u0436\u043D\u043E\u043C\u0443 \u0435\u0442\u0430\u043F\u0456."), " \u0412\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u0437\u043D\u0430\u0454\u0442\u0435, \u043D\u0430 \u044F\u043A\u0456\u0439 \u0441\u0442\u0430\u0434\u0456\u0457 \u0432\u0430\u0448\u0430 \u0441\u043F\u0440\u0430\u0432\u0430 \u0456 \u0449\u043E \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0434\u0430\u043B\u0456."), /*#__PURE__*/React.createElement("h3", {
    className: "seo__h"
  }, "\u042F\u043A \u043F\u043E\u0447\u0430\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "seo__p"
  }, "\u0417\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0443 \u043C\u0435\u0441\u0435\u043D\u0434\u0436\u0435\u0440 \u2014 \u043C\u0438 \u0437'\u044F\u0441\u0443\u0454\u043C\u043E \u0441\u0443\u0442\u044C \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457 \u0442\u0430 \u0437\u0430\u043F\u0438\u0448\u0435\u043C\u043E \u0432\u0430\u0441 \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E \u0437 \u043F\u0440\u043E\u0444\u0456\u043B\u044C\u043D\u0438\u043C \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u043E\u043C. \u0423 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u0432\u0438\u0445 \u0432\u0438\u043F\u0430\u0434\u043A\u0430\u0445 \u0430\u0434\u0432\u043E\u043A\u0430\u0442 \u0432\u0438\u0457\u0436\u0434\u0436\u0430\u0454 \u043E\u0434\u0440\u0430\u0437\u0443.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "seo__toggle",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, open ? "Згорнути" : "Читати повністю")));
}
Object.assign(window, {
  SeoText
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SeoText.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Specialization.jsx
try { (() => {
/* Trust Legal Group — "Спеціалізація" block.
   Panels: navy title block (with subtitle) on the left + a bordered cell
   grid on the right — hairline dividers, small uppercase eyebrow tags,
   sand (#F2EFE7) cells with a corner arrow. Brand palette, Onest, square
   corners. Applied to every practice direction. */

const {
  Eyebrow,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;

// items may be a string or { label, tag }
const SPEC_DIRECTIONS = [{
  title: "Військове право",
  subtitle: "ТЦК, ВЛК, мобілізація та військовий облік.",
  items: [{
    label: "Розшук ТЦК і Резерв+"
  }, {
    label: "Оскарження штрафу ТЦК"
  }, {
    label: "Затримали ТЦК / незаконна мобілізація"
  }, {
    label: "СЗЧ, дезертирство і непокора"
  }, {
    label: "Оскарження рішення ВЛК"
  }, {
    label: "Супровід проходження ВЛК"
  }, {
    label: "Відстрочка від мобілізації"
  }, {
    label: "Звільнення з військової служби"
  }]
}, {
  title: "Кримінальне право",
  subtitle: "Захист на всіх стадіях провадження.",
  items: [{
    label: "Адвокат при обшуку — виїзд 24/7"
  }, {
    label: "Викликали на допит"
  }, {
    label: "Адвокат при затриманні"
  }, {
    label: "Запобіжний захід: СІЗО, застава"
  }, {
    label: "Вручили підозру"
  }, {
    label: "Повернення вилученого майна"
  }, {
    label: "Закриття провадження"
  }, {
    label: "Наркотичні засоби: ст. 307, 309 КК"
  }]
}, {
  title: "ДТП",
  subtitle: "Захист прав водія та страхові виплати.",
  items: [{
    label: "Ст. 130 КУпАП: позбавлення прав"
  }, {
    label: "Відшкодування після ДТП: страхова і винуватець"
  }, {
    label: "ДТП з потерпілими (ст. 286 КК)"
  }, {
    label: "ДТП без постраждалих (ст. 124)"
  }, {
    label: "Залишення місця ДТП"
  }, {
    label: "Позбавлення права керування транспортним засобом та оскарження постанови суду"
  }, {
    label: "Пошкодження авто у ДТП (ст. 124 КУпАП)"
  }]
}, {
  title: "Сімейне право",
  subtitle: "Шлюб, діти та поділ майна.",
  items: [{
    label: "Розірвання шлюбу"
  }, {
    label: "Міжнародні розлучення (з-за кордону)"
  }, {
    label: "Стягнення аліментів"
  }, {
    label: "Поділ майна подружжя"
  }, {
    label: "Дозвіл на виїзд дитини за кордон"
  }, {
    label: "Місце проживання дитини та побачення"
  }, {
    label: "Позбавлення батьківських прав"
  }, {
    label: "Зменшення та перерахунок аліментів"
  }]
}, {
  title: "Цивільні справи",
  subtitle: "Спадщина, борги та побутові спори.",
  items: [{
    label: "Пропущений строк прийняття спадщини"
  }, {
    label: "Оформлення спадщини «під ключ»"
  }, {
    label: "Банкрутство фізосіб — списання боргів"
  }, {
    label: "Кредитні спори з банками та МФО"
  }, {
    label: "Арешти рахунків і майна: розблокування"
  }, {
    label: "Стягнення боргу з фізособи (розписка)"
  }, {
    label: "Відшкодування шкоди: залиття, моральна"
  }, {
    label: "Оскарження виконавчого напису нотаріуса"
  }]
}, {
  title: "Бізнес і господарське",
  subtitle: "Спори, договори та захист інтересів бізнесу.",
  items: [{
    label: "Критичність і бронювання"
  }, {
    label: "Стягнення заборгованості з контрагентів"
  }, {
    label: "Договірна робота: складання та аудит"
  }, {
    label: "Орендні спори"
  }, {
    label: "Тендерний супровід Prozorro"
  }, {
    label: "Юридичний аутсорс для бізнесу"
  }, {
    label: "Трудові питання бізнесу (Держпраця)"
  }, {
    label: "Реєстрація ТОВ і ФОП, зміни"
  }]
}, {
  title: "Податки і фінмоніторинг",
  subtitle: "Перевірки, блокування та нарахування.",
  items: [{
    label: "Перевірки, ППР",
    tag: "ДПС"
  }, {
    label: "Розблокування накладних"
  }, {
    label: "Банк заблокував рахунок",
    tag: "Фінмоніторинг"
  }, {
    label: "ПДВ, ЄСВ, штрафи"
  }]
}, {
  title: "Медіація",
  subtitle: "Позасудове врегулювання спорів.",
  items: [{
    label: "Альтернатива суду для сімейних і господарських спорів",
    tag: "Медіація"
  }]
}];
const norm = it => typeof it === "string" ? {
  label: it
} : it;
function SpecCell({
  label,
  wide,
  extra
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: `spec-cell ${wide ? "spec-cell--wide" : ""} ${extra ? "spec-cell--extra" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "spec-cell__title"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "spec-cell__arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20,
    style: {
      transform: "rotate(-45deg)"
    }
  })));
}
function SpecPanel({
  dir,
  idx
}) {
  const [open, setOpen] = React.useState(false);
  const extraCount = dir.items.length - 3;
  return /*#__PURE__*/React.createElement("article", {
    className: `spec-panel spec-panel--editorial ${open ? "is-open" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "spec-panel__index",
    "aria-hidden": "true"
  }, String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "spec-panel__left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "spec-panel__title"
  }, dir.title), dir.subtitle && /*#__PURE__*/React.createElement("p", {
    className: "spec-panel__sub"
  }, dir.subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "spec-panel__grid"
  }, dir.items.map((raw, i) => {
    const it = norm(raw);
    const wide = dir.items.length % 2 === 1 && i === dir.items.length - 1;
    return /*#__PURE__*/React.createElement(SpecCell, {
      key: it.label,
      label: it.label,
      wide: wide,
      extra: i >= 3
    });
  }), extraCount > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "spec-more",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null, open ? "Згорнути" : `Подивитись ще ${extraCount}`), /*#__PURE__*/React.createElement("span", {
    className: "spec-more__ico",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "plus",
    size: 18
  })))), /*#__PURE__*/React.createElement("a", {
    className: "spec-panel__all",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("span", null, "\u0423\u0441\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })));
}
function Specialization() {
  return /*#__PURE__*/React.createElement("section", {
    className: "spec",
    id: "practice"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spec__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spec__head"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u0421\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F"), /*#__PURE__*/React.createElement("h2", {
    className: "spec__title"
  }, "\u0417\u043D\u0430\u0454\u043C\u043E, \u044F\u043A \u0432\u0438\u0440\u0456\u0448\u0443\u0454\u0442\u044C\u0441\u044F", /*#__PURE__*/React.createElement("br", null), "\u0432\u0430\u0448\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "spec__sub"
  }, "\u0412\u0430\u0448\u0443 \u0441\u043F\u0440\u0430\u0432\u0443 \u0432\u0435\u0441\u0442\u0438\u043C\u0435 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442 \u0441\u0430\u043C\u0435 \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u2014 \u0430 \u043D\u0435 \u044E\u0440\u0438\u0441\u0442-\u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0430\u043B. \u0412 \u0441\u043A\u043B\u0430\u0434\u043D\u0438\u0445 \u0432\u0438\u043F\u0430\u0434\u043A\u0430\u0445 \u0434\u043E \u0440\u043E\u0431\u043E\u0442\u0438 \u0434\u043E\u043B\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0432\u0441\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u2014 \u0432\u0441\u0435 \u043F\u0456\u0434 \u043E\u0434\u043D\u0438\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C.")), /*#__PURE__*/React.createElement("div", {
    className: "spec__list"
  }, SPEC_DIRECTIONS.map((dir, idx) => /*#__PURE__*/React.createElement(SpecPanel, {
    key: dir.title,
    dir: dir,
    idx: idx
  })))));
}
Object.assign(window, {
  Specialization
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Specialization.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Team.jsx
try { (() => {
/* Trust Legal Group — "Команда" block.
   Horizontal scroll carousel: navy-tone people cards (initial monogram
   instead of an invented headshot), sand experience chip, name + role.
   Footer = index / total + progress bar + prev/next round arrows.
   Experience values are placeholders (10–20 років). Brand palette, Onest. */

const {
  Eyebrow,
  ArrowLink,
  Icon
} = window.TrustLegalGroupDesignSystem_76f407;
const TEAM_TONES = ["#1B2A3D"];
const TEAM = [{
  name: "Вдовідченко Вадим Віталійович",
  role: "Керівник об'єднання",
  spec: "Адміністративні правопорушення (КУпАП) · Цивільне право · Податкові спори",
  photo: "../../assets/team/vdovichenko.jpg"
}, {
  name: "Юлія Латишева",
  role: "Адвокат",
  spec: "Цивільне право · Військове право · Сімейні та спадкові спори",
  photo: "../../assets/team/latysheva.jpg"
}, {
  name: "Щербинін Юрій",
  role: "Адвокат",
  spec: "Захист у кримінальних справах · Адміністративне право",
  photo: "../../assets/team/shcherbynin.jpg"
}, {
  name: "Денис Волошинов",
  role: "Адвокат",
  spec: "Господарські спори · Адміністративне право · Податкові спори",
  photo: "../../assets/team/voloshynov.jpg"
}, {
  name: "Людмила Спіцина",
  role: "Адвокат",
  spec: "Цивільне право · Сімейні та спадкові спори · Військове право",
  photo: "../../assets/team/spitsyna.jpg"
}, {
  name: "Олексій Фоменко",
  role: "Адвокат",
  spec: "Податкові спори · Адміністративне право",
  photo: "../../assets/team/fomenko.jpg"
}, {
  name: "Валентин Дмитрієв",
  role: "Юрист",
  spec: "Військове право",
  photo: "../../assets/team/dmytriev.jpg"
}, {
  name: "Софія Чернишева",
  role: "Помічник адвоката",
  spec: "Захист у кримінальних справах · Цивільне право",
  photo: "../../assets/team/chernysheva.jpg"
}, {
  name: "Ксенія Кісліцина",
  role: "Адміністратор юридичної компанії",
  spec: "",
  photo: "../../assets/team/kislitsyna.jpg"
}];
function TeamCard({
  m,
  idx
}) {
  const tone = TEAM_TONES[idx % TEAM_TONES.length];
  return /*#__PURE__*/React.createElement("article", {
    className: "team-card",
    style: {
      background: tone
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-card__photo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "team-card__mono",
    "aria-hidden": "true"
  }, m.name.charAt(0)), /*#__PURE__*/React.createElement("img", {
    className: "team-card__img",
    src: m.photo,
    alt: m.name,
    loading: "lazy",
    onError: e => {
      e.currentTarget.style.display = "none";
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "team-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "team-card__name"
  }, m.name), /*#__PURE__*/React.createElement("p", {
    className: "team-card__role"
  }, m.role), m.spec && /*#__PURE__*/React.createElement("p", {
    className: "team-card__spec"
  }, m.spec)));
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
  const go = dir => {
    const t = trackRef.current;
    if (!t) return;
    t.scrollBy({
      left: dir * stepPx(),
      behavior: "smooth"
    });
  };
  const atStart = idx <= 0;
  const atEnd = idx >= total - 1;
  const pct = (idx + 1) / total * 100;
  const pad2 = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("section", {
    className: "team",
    id: "team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team__headleft"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "gold",
    size: "sm"
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement("h2", {
    className: "team__title"
  }, "\u0410\u0434\u0432\u043E\u043A\u0430\u0442\u0438 Trust Legal Group"), /*#__PURE__*/React.createElement("p", {
    className: "team__sub"
  }, "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u044E\u0447\u0456 \u0444\u0430\u0445\u0456\u0432\u0446\u0456 \u0437 10+ \u0440\u043E\u043A\u0430\u043C\u0438 \u0434\u043E\u0441\u0432\u0456\u0434\u0443 \u043A\u043E\u0436\u0435\u043D")), /*#__PURE__*/React.createElement("div", {
    className: "team__headright"
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    onClick: e => e.preventDefault()
  }, "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0432\u0441\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443"))), /*#__PURE__*/React.createElement("div", {
    className: "team__track",
    ref: trackRef,
    onScroll: onScroll
  }, TEAM.map((m, i) => /*#__PURE__*/React.createElement(TeamCard, {
    key: m.name,
    m: m,
    idx: i
  }))), /*#__PURE__*/React.createElement("div", {
    className: "team__controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team__meter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "team__idx"
  }, /*#__PURE__*/React.createElement("b", null, pad2(idx + 1)), " / ", pad2(total)), /*#__PURE__*/React.createElement("span", {
    className: "team__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: pct + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "team__nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(-1),
    disabled: atStart,
    "aria-label": "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(1),
    disabled: atEnd,
    "aria-label": "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0456"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  }))))));
}
Object.assign(window, {
  Team
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Tradition.jsx
try { (() => {
/* Trust Legal Group — "Традиція досконалості" about + stats band (cream). */
const {
  StatItem
} = window.TrustLegalGroupDesignSystem_76f407;
function Tradition() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-secondary)",
      padding: "128px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 96px",
      boxSizing: "border-box",
      display: "flex",
      gap: 96,
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 520px",
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 31px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 48,
      lineHeight: "60px",
      color: "var(--ink)"
    }
  }, "\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u044F \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u043E\u0441\u0442\u0456 \u0443 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u043C\u0443 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0443\u0432\u0430\u043D\u043D\u0456."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 23
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "29.25px",
      color: "var(--ink-muted)"
    }
  }, "\u041D\u0430\u0448 \u043F\u0456\u0434\u0445\u0456\u0434 \u2014 \u0446\u0435 \u043F\u043E\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0433\u043B\u0438\u0431\u043E\u043A\u043E\u0457 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0438 \u0442\u0430 \u0431\u0435\u0437\u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0456\u0441\u043D\u043E\u0457 \u043E\u0440\u0456\u0454\u043D\u0442\u0430\u0446\u0456\u0457 \u043D\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: "29.25px",
      color: "var(--ink-muted)"
    }
  }, "\u041C\u0438 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u0454\u043C\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u043F\u043E \u0432\u0441\u0456\u0439 \u0423\u043A\u0440\u0430\u0457\u043D\u0456, \u043F\u0440\u0430\u0446\u044E\u044E\u0447\u0438 \u0437 \u0431\u0456\u0437\u043D\u0435\u0441\u043E\u043C \u0456 \u0444\u0456\u0437\u0438\u0447\u043D\u0438\u043C\u0438 \u043E\u0441\u043E\u0431\u0430\u043C\u0438. Trust Legal Group \u2014 \u0441\u0443\u0447\u0430\u0441\u043D\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F, \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0430 \u0443 2026 \u0440\u043E\u0446\u0456."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 440px",
      minWidth: 320,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px 48px",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(StatItem, null, "Private"), /*#__PURE__*/React.createElement(StatItem, null, "Business"), /*#__PURE__*/React.createElement(StatItem, null, "Індивідуальний\nпідхід"), /*#__PURE__*/React.createElement(StatItem, null, "10+ років\nпрактики"))));
}
Object.assign(window, {
  Tradition
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Tradition.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.OverlayCard = __ds_scope.OverlayCard;

__ds_ns.PracticeCard = __ds_scope.PracticeCard;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.ContactItem = __ds_scope.ContactItem;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
