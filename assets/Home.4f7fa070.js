import {
  t as $,
  c as B,
  v as G,
  i as H,
  l as I,
  s as J,
  f as K,
  q as L,
  e as M,
  k as O,
  g as P,
  u as Q,
  h as S,
  m as U,
  p as X,
  x as Z,
  r as a,
  d as c,
  o as d,
  y as ee,
  b as f,
  j as g,
  _ as h,
  F as k,
  a as s,
  n as v,
  w as y,
} from "./index.5553c785.js";
const te = "/assets/logo.png",
  ne = { name: "Logo", props: { footer: { type: Boolean, default: !1 } } },
  oe = s("img", { src: te, alt: "", class: "h-16 w-16" }, null, -1);
function se(e, n, t, r, l, u) {
  const o = a("router-link");
  return (
    d(),
    B(
      o,
      { to: "/", class: "flex items-center gap-5" },
      {
        default: y(() => [
          oe,
          s(
            "h1",
            {
              class: v([
                "font-bold text-2xl",
                { "text-white": t.footer, "text-black": !t.footer },
              ]),
            },
            " WALL STREET BABY ",
            2
          ),
        ]),
        _: 1,
      }
    )
  );
}
const V = h(ne, [["render", se]]),
  re = {
    props: {
      title: { type: String, default: "Button" },
      isLink: { type: Boolean, default: !1 },
      link: { type: String },
      light: { type: Boolean, default: !1 },
    },
  },
  ae = ["href"];
function le(e, n, t, r, l, u) {
  return t.isLink
    ? (d(),
      f(
        "a",
        {
          key: 0,
          class: v([
            "text-base flex items-center justify-center rounded-md p-4 hover:text-opacity-80 cursor-pointer font-bold",
            {
              "bg-main-dark text-white": !t.light,
              "bg-light text-black": t.light,
            },
          ]),
          href: t.link,
          target: "_blank",
        },
        $(t.title),
        11,
        ae
      ))
    : (d(),
      f(
        "button",
        {
          key: 1,
          class: v([
            "text-base flex items-center justify-center rounded-md p-4 hover:text-opacity-80 font-bold",
            {
              "bg-main-dark text-white": !t.light,
              "bg-light text-black": t.light,
            },
          ]),
        },
        $(t.title),
        3
      ));
}
const E = h(re, [["render", le]]),
  ie = {},
  ce = {
    class: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
  },
  de = s(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 6h16M4 12h16M4 18h16",
    },
    null,
    -1
  ),
  ue = [de];
function fe(e, n) {
  return d(), f("svg", ce, ue);
}
const pe = h(ie, [["render", fe]]),
  me = {},
  _e = {
    class: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
  },
  he = s(
    "path",
    {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12",
    },
    null,
    -1
  ),
  we = [he];
function xe(e, n) {
  return d(), f("svg", _e, we);
}
const ge = h(me, [["render", xe]]),
  ye = {
    name: "Nav",
    components: { Logo: V, Button: E, IconMenu: pe, IconClose: ge },
    data() {
      return {
        expandMenu: !1,
        links: [
          { name: "Home", url: "/" },
          {
            name: "Chart",
            url: "chartlink",
            anchor: !0,
          },
          {
            name: "Buy $WSB",
            url: "buylink",
            anchor: !0,
          },
          { name: "Twitter", url: "twitterlink", anchor: !0 },
          {
            name: "Telegram",
            url: "tglink",
            anchor: !0,
          },
        ],
        scrolled: !1,
      };
    },
    mounted() {
      window.addEventListener("scroll", () => {
        window.pageYOffset > 0 ? (this.scrolled = !0) : (this.scrolled = !1);
      });
    },
  },
  ve = {
    class:
      "flex items-center justify-between py-5 w-full max-w-8xl mx-auto 3xl:px-0 px-8",
  },
  be = { class: "xl:flex items-center gap-7 hidden" },
  $e = ["href"],
  ke = { class: "flex xl:hidden" },
  Be = s("span", { class: "sr-only" }, "Open main menu", -1),
  Se = {
    class:
      "mobile-nav fixed top-0 inset-x-0 transition transform origin-top xl:hidden z-50",
  },
  Te = {
    class:
      "rounded-b-lg shadow-md bg-black text-white bg-opacity-95 ring-1 ring-black ring-opacity-5 overflow-hidden",
  },
  Ce = { class: "py-5 px-8 flex items-center justify-between" },
  Ee = s("span", { class: "sr-only" }, "Close menu", -1),
  We = { class: "flex flex-col gap-3 border-t pt-4 border-gray-800" },
  Le = ["href"];
function je(e, n, t, r, l, u) {
  const o = a("Logo"),
    p = a("router-link"),
    m = a("Button"),
    w = a("IconMenu"),
    x = a("IconClose");
  return (
    d(),
    f(
      "nav",
      {
        class: v([
          "fixed top-0 w-full z-50",
          l.scrolled ? "bg-white bg-opacity-80" : "bg-transparent",
        ]),
      },
      [
        s("div", ve, [
          c(o),
          s("div", be, [
            (d(!0),
            f(
              k,
              null,
              M(
                l.links,
                (i, _) => (
                  d(),
                  f(
                    k,
                    { key: _ },
                    [
                      i.anchor
                        ? (d(),
                          f(
                            "a",
                            {
                              key: 0,
                              class: "text-xl hover:font-bold",
                              href: i.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            $(i.name),
                            9,
                            $e
                          ))
                        : (d(),
                          B(
                            p,
                            {
                              key: 1,
                              to: i.url,
                              class: "text-xl hover:font-bold",
                              exact: "",
                            },
                            { default: y(() => [P($(i.name), 1)]), _: 2 },
                            1032,
                            ["to"]
                          )),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ]),
          c(m, {
            class: "xl:flex hidden",
            "is-link": "",
            link: "buylink",
            title: "Buy $WSB",
          }),
          s("div", ke, [
            s(
              "button",
              {
                type: "button",
                class:
                  "inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                "aria-controls": "mobile-menu",
                "aria-expanded": "false",
                onClick: n[0] || (n[0] = (i) => (l.expandMenu = !l.expandMenu)),
              },
              [Be, c(w, { class: "block" })]
            ),
          ]),
        ]),
        K(
          s(
            "div",
            Se,
            [
              s("div", Te, [
                s("div", Ce, [
                  c(o),
                  s(
                    "button",
                    {
                      type: "button",
                      class:
                        "rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600",
                      onClick: n[1] || (n[1] = (i) => (l.expandMenu = !1)),
                    },
                    [Ee, c(x)]
                  ),
                ]),
                s("div", We, [
                  (d(!0),
                  f(
                    k,
                    null,
                    M(
                      l.links,
                      (i, _) => (
                        d(),
                        f("div", { key: _ }, [
                          i.anchor
                            ? (d(),
                              f(
                                "a",
                                {
                                  key: 0,
                                  class:
                                    "px-4 block text-base font-medium bg-transparent border-b pb-4 border-b-gray-800",
                                  href: i.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                $(i.name),
                                9,
                                Le
                              ))
                            : (d(),
                              B(
                                p,
                                {
                                  key: 1,
                                  to: i.url,
                                  class:
                                    "px-4 block text-base font-medium bg-transparent border-b pb-4 border-b-gray-800",
                                  onClick:
                                    n[2] || (n[2] = (b) => (l.expandMenu = !1)),
                                },
                                { default: y(() => [P($(i.name), 1)]), _: 2 },
                                1032,
                                ["to"]
                              )),
                        ])
                      )
                    ),
                    128
                  )),
                  c(m, {
                    "is-link": "",
                    light: "",
                    link: "buylink",
                    title: "Buy $WSB",
                    class: "mx-4 mb-4",
                  }),
                ]),
              ]),
            ],
            512
          ),
          [[G, l.expandMenu]]
        ),
      ],
      2
    )
  );
}
const Me = h(ye, [["render", je]]),
  Oe = {
    name: "TextBlock",
    props: {
      title: { type: String },
      description: { type: String },
      center: { type: Boolean, default: !1 },
      fullDescription: { type: Boolean, default: !1 },
      primary: { type: Boolean, default: !0 },
      white: { type: Boolean },
    },
  },
  Ae = { class: "flex items-center gap-5" };
function De(e, n, t, r, l, u) {
  return (
    d(),
    f(
      "div",
      {
        class: v([
          "flex flex-col gap-5 z-10 relative",
          { "items-center justify-center": t.center, "items-start": !t.center },
        ]),
      },
      [
        s(
          "h1",
          {
            class: v([
              "w-full max-w-main font-bold",
              {
                "text-center": t.center,
                "xl:text-8xl text-6xl leading-none": t.primary,
                "text-5xl xl:leading-none leading-none": !t.primary,
                "text-white": t.white,
              },
            ]),
          },
          $(t.title),
          3
        ),
        s(
          "p",
          {
            class: v([
              "xl:text-2xl text-xl w-full",
              { "text-center": t.center, "max-w-prose": !t.fullDescription },
            ]),
          },
          $(t.description),
          3
        ),
        s("div", Ae, [S(e.$slots, "button")]),
      ],
      2
    )
  );
}
const T = h(Oe, [["render", De]]);
var Pe = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, l] of n) t[r] = l;
  return t;
};
const Ie = H({
    props: {
      direction: { type: String, default: "normal" },
      duration: { type: Number, default: 20 },
      delay: { type: Number, default: 0 },
      loop: { type: Number, default: 0 },
      clone: { type: Boolean, default: !1 },
      gradient: { type: Boolean, default: !1 },
      gradientColor: { type: Array, default: [255, 255, 255] },
      gradientWidth: { type: String, default: "200px" },
      pauseOnHover: { type: Boolean, default: !1 },
      pauseOnClick: { type: Boolean, default: !1 },
    },
    emits: ["onComplete", "onLoopComplete", "onPause", "onResume"],
    setup(e, { emit: n }) {
      let t = g(0),
        r = g("100%"),
        l = g(0),
        u = g(0),
        o = g(0),
        p = g(0),
        m = g(null),
        w = g(!1),
        x = g(null),
        i = g(null);
      const _ = async () => {
          await b(), l.value++;
        },
        b = async () => {
          setInterval(() => {
            if (((r.value = "0%"), x.value !== null && i.value !== null))
              if (x.value && i.value)
                if ("clientWidth" in x.value && "clientWidth" in i.value) {
                  (o.value = x.value.clientWidth),
                    (u.value = i.value.clientWidth);
                  const j = Math.ceil(u.value / o.value);
                  return (t.value = isFinite(j) ? j : 0), t.value;
                } else return (r.value = "100%"), 0;
              else return (r.value = "100%"), 0;
            else return (r.value = "100%"), 0;
          }, 100);
        };
      O(o, async () => {
        e.clone && _();
      }),
        O(u, async () => {
          e.clone && _();
        });
      const C = () => {
          e.pauseOnHover && n("onPause");
        },
        q = () => {
          e.pauseOnHover && n("onResume");
        },
        Y = () => {
          e.pauseOnClick && n("onPause");
        },
        N = () => {
          e.pauseOnClick && n("onResume");
        },
        F = I(() => ({
          "--duration": `${e.duration}s`,
          "--delay": `${e.delay}s`,
          "--direction": `${e.direction}`,
          "--pauseOnHover": `${e.pauseOnHover ? "paused" : "running"}`,
          "--pauseOnClick": `${e.pauseOnClick ? "paused" : "running"}`,
          "--loops": `${e.loop === 0 ? "infinite" : e.loop}`,
          "--gradient-color": `rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 1), rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 0)`,
          "--gradient-width": `${e.gradientWidth}`,
          "--min-width": `${r.value}`,
        })),
        z = I(() => !!e.gradient),
        D = async () => {
          e.clone && (await b(), _()), (w.value = !0);
        };
      return (
        U(async () => {
          D(),
            (m.value = setInterval(() => {
              p.value++,
                e.loop !== 0 &&
                  p.value === e.loop &&
                  (n("onComplete"), clearInterval(m.value)),
                n("onLoopComplete");
            }, e.duration * 1e3));
        }),
        X(() => {
          clearInterval(m.value);
        }),
        {
          ready: w,
          contentWidth: o,
          containerWidth: u,
          loopCounter: p,
          loopInterval: m,
          minWidth: r,
          marqueeContent: x,
          marqueeContainer: i,
          componentKey: l,
          showGradient: z,
          cloneAmount: t,
          ForcesUpdate: _,
          checkForClone: b,
          setupMarquee: D,
          getCurrentStyle: F,
          hoverStarted: C,
          hoverEnded: q,
          mouseDown: Y,
          mouseUp: N,
        }
      );
    },
  }),
  Re = { class: "transparent-overlay", ref: "marqueeContainer" },
  He = { key: 0, class: "overlay" },
  Ue = { class: "marquee", ref: "marqueeContent" },
  Ve = { class: "marquee" };
function qe(e, n, t, r, l, u) {
  return e.ready
    ? (d(),
      f(
        "div",
        {
          class: "vue3-marquee",
          style: J(e.getCurrentStyle),
          key: e.componentKey,
          onMouseenter:
            n[0] || (n[0] = (...o) => e.hoverStarted && e.hoverStarted(...o)),
          onMouseleave:
            n[1] || (n[1] = (...o) => e.hoverEnded && e.hoverEnded(...o)),
          onMousedown:
            n[2] || (n[2] = (...o) => e.mouseDown && e.mouseDown(...o)),
          onMouseup: n[3] || (n[3] = (...o) => e.mouseUp && e.mouseUp(...o)),
        },
        [
          s("div", Re, null, 512),
          e.showGradient ? (d(), f("div", He)) : L("", !0),
          s("div", Ue, [S(e.$slots, "default")], 512),
          s("div", Ve, [S(e.$slots, "default")]),
          (d(!0),
          f(
            k,
            null,
            M(
              e.cloneAmount,
              (o) => (
                d(),
                f("div", { class: "marquee cloned", key: o }, [
                  S(e.$slots, "default"),
                ])
              )
            ),
            128
          )),
        ],
        36
      ))
    : L("", !0);
}
var Ye = Pe(Ie, [["render", qe]]);
const Ne = {
    name: "Banner",
    components: { Vue3Marquee: Ye },
    props: { direction: { type: String, default: "normal" } },
  },
  Fe = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1),
  ze = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1),
  Ke = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1),
  Ge = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1),
  Xe = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1),
  Je = s("h1", { class: "mx-2" }, "WALL STREET BABY", -1);
function Qe(e, n, t, r, l, u) {
  const o = a("Vue3Marquee");
  return (
    d(),
    B(
      o,
      {
        clone: !0,
        duration: 60,
        direction: t.direction,
        class:
          "bg-main-dark w-full p-6 text-white flex items-center xl:text-4xl text-xl",
      },
      { default: y(() => [Fe, ze, Ke, Ge, Xe, Je]), _: 1 },
      8,
      ["direction"]
    )
  );
}
const A = h(Ne, [["render", Qe]]),
  Ze = "/assets/hero.png";
const et = {
    components: { TextBlock: T, Divider: A, Button: E },
    data() {
      return {};
    },
  },
  tt = {
    class: "relative flex items-center flex-col h-screen hero-min-height",
  },
  nt = {
    class:
      "relative w-full flex flex-col items-center justify-center h-screen hero-min-height",
  },
  ot = {
    class:
      "w-full flex items-center sm:justify-between justify-center max-w-8xl 3xl:px-0 px-12",
  },
  st = { class: "mt-4 flex gap-5 flex-wrap xl:mb-0 mb-10" },
  rt = s(
    "img",
    {
      src: Ze,
      alt: "",
      class:
        "sm:h-3/4 h-1/2 w-auto mix-blend-luminosity absolute xl:bottom-30 2xl:bottom-48 bottom-10 lg:bottom-24 md:bottom-20 right-0 opacity-50 xl:opacity-100 object-contain bg-white rounded-full",
    },
    null,
    -1
  );
function at(e, n, t, r, l, u) {
  const o = a("Button"),
    p = a("TextBlock"),
    m = a("Divider");
  return (
    d(),
    f("div", tt, [
      s("div", nt, [
        s("div", ot, [
          c(
            p,
            {
              title: "Release The Inner Degen.",
              description:
                "WALL STREET BABY is a memecoin by and for the Wall Street Bets community. The original Wall Street Bets logo was created for educational purposes by a third party and later used in the infamous Wall Street Bets reddit page. WSB is here to honor their creativity and everlasting memes.",
            },
            {
              button: y(() => [
                s("div", st, [
                  c(o, {
                    "is-link": "",
                    link: "buylink",
                    title: "Buy In Raydium",
                  }),
                  c(o, {
                    "is-link": "",
                    link: "chartlink",
                    title: "Check In Dextools",
                  }),
                ]),
              ]),
              _: 1,
            }
          ),
        ]),
        rt,
        c(m, { class: "divider -skew-y-6 bottom-20 w-full" }),
      ]),
    ])
  );
}
const lt = h(et, [["render", at]]),
  it = {
    props: {
      id: String,
      sub: String,
      title: String,
      description: String,
      left: Boolean,
      center: Boolean,
      noPadding: Boolean,
    },
    components: { TextBlock: T },
    data() {
      return {};
    },
  },
  ct = ["id"];
function dt(e, n, t, r, l, u) {
  const o = a("TextBlock");
  return (
    d(),
    f(
      "div",
      {
        id: t.id,
        class: v([
          "flex flex-col relative w-full py-10 lg:py-20 overflow-hidden",
          { "px-12": !t.noPadding, "px-12 xl:px-0": t.noPadding },
        ]),
      },
      [
        s(
          "div",
          {
            class: v([
              "w-full mx-auto max-w-7xl lg:max-w-8xl md:max-w-4xl",
              { "my-auto": t.center },
            ]),
          },
          [
            t.title
              ? (d(),
                B(
                  o,
                  {
                    key: 0,
                    title: t.title,
                    description: t.description,
                    center: t.center,
                    primary: !1,
                  },
                  null,
                  8,
                  ["title", "description", "center"]
                ))
              : L("", !0),
            S(e.$slots, "default"),
          ],
          2
        ),
      ],
      10,
      ct
    )
  );
}
const W = h(it, [["render", dt]]),
  ut = { name: "Video", components: { Section: W } },
  ft = s(
    "div",
    { class: "w-full flex items-center justify-center" },
    [
      s("iframe", {
        width: "821",
        height: "462",
        src: "https://www.youtube.com/embed/TEl4jeETVmg?start=196&autoplay=1&mute=1&loop=1",
        title: "YouTube video player",
        frameborder: "0",
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: "",
        class: "rounded-md",
      }),
    ],
    -1
  );
function pt(e, n, t, r, l, u) {
  const o = a("Section");
  return (
    d(),
    B(
      o,
      {
        center: "",
        title: "The Origins",
        description:
          "Truthfully, we were all born degens. We deserve a memecoin that represents who we are. The original Wall Street Bets logo was taken from a video of a baby spending money in comparison to the mole.",
        "full-description": "",
      },
      { default: y(() => [ft]), _: 1 }
    )
  );
}
const mt = h(ut, [["render", pt]]),
  _t = "/assets/reddit.png",
  ht = "/assets/where-bg.svg",
  wt = { name: "Where", components: { Section: W, TextBlock: T, Button: E } },
  xt = { class: "flex items-center xl:flex-row flex-col w-full" },
  gt = s(
    "img",
    { src: _t, alt: "", class: "ml-auto xl:-mr-40 xl:h-1/2 xl:w-1/2 z-10" },
    null,
    -1
  ),
  yt = s(
    "img",
    { src: ht, alt: "", class: "absolute top-0 left-0 w-full opacity-25" },
    null,
    -1
  );
function vt(e, n, t, r, l, u) {
  const o = a("Button"),
    p = a("TextBlock"),
    m = a("Section");
  return (
    d(),
    B(m, null, {
      default: y(() => [
        s("div", xt, [
          c(
            p,
            {
              title: "Where We Are Going",
              description:
                "The designer had one question in mind when he created the baby in that video; what would a 2 foot tall modern ape look like? We have reserved 1% of the token supply for this visionary.",
              primary: !1,
            },
            {
              button: y(() => [
                c(o, {
                  "is-link": "",
                  link: "https://www.reddit.com/r/wallstreetbets/comments/fnpz20/hey_yall_i_drew_the_original_baby_ama/",
                  title: "The Visionary",
                }),
              ]),
              _: 1,
            }
          ),
          gt,
        ]),
        yt,
      ]),
      _: 1,
    })
  );
}
const bt = h(wt, [["render", vt]]),
  $t = "/assets/bitmart.svg",
  kt = "/assets/lbank.png",
  Bt = "/assets/coinw.png",
  St = "/assets/bitget.svg",
  Tt = "/assets/gate.svg",
  Ct = "/assets/okx.png",
  Et = "/assets/mexc.svg",
  Wt = { name: "Partner", components: { TextBlock: T, Button: E } },
  Lt = { class: "py-20" },
  jt = {
    class:
      "w-full bg-main-dark -skew-y-6 flex flex-col items-center justify-center xl:p-20 p-10 xl:gap-10 gap-5",
  },
  Mt = Q(
    '<div class="flex items-center flex-row gap-10 flex-wrap justify-center"><a href="https://www.bitmart.com/trade/en-US?symbol=WSB_USDT&amp;layout=basic" target="_blank"><img src="' +
      $t +
      '" alt="" class="xl:h-16 h-10 object-contain"></a><a href="https://www.lbank.com/trade/wsb_usdt/" target="_blank"><img src="' +
      kt +
      '" alt="" class="xl:h-16 h-10 object-contain"></a><a href="https://www.coinw.com/frontSpot/spottrade?symbol=1336" target="_blank"><img src="' +
      Bt +
      '" alt="" class="xl:h-16 h-10 object-contain"></a><a href="https://www.bitget.com/en/spot/WSBUSDT_SPBL?type=spot" target="_blank"><img src="' +
      St +
      '" alt="" class="xl:h-40 h-28 object-contain"></a><a href="https://www.gate.io/trade/WSB_USDT" target="_blank"><img src="' +
      Tt +
      '" alt="" class="xl:h-24 h-14 object-contain"></a><a href="https://www.okx.com/support/hc/en-us/articles/11319913977613-Use-the-OKX-Wallet-Web-Extension-to-easily-play-AptosPassport" target="_blank"><img src="' +
      Ct +
      '" alt="" class="xl:h-16 h-10 object-contain"></a><a href="https://www.mexc.com/exchange/WSB_USDT?_from=search" target="_blank"><img src="' +
      Et +
      '" alt="" class="xl:h-16 h-10 object-contain"></a></div>',
    1
  );
function Ot(e, n, t, r, l, u) {
  const o = a("TextBlock"),
    p = a("Button");
  return (
    d(),
    f("div", Lt, [
      s("div", jt, [
        c(o, {
          title: "Partners & Listings",
          center: "",
          white: "",
          primary: !1,
        }),
        c(p, {
          "is-link": "",
          link: "https://www.okx.com/support/hc/en-us/articles/11319913977613-Use-the-OKX-Wallet-Web-Extension-to-easily-play-AptosPassport",
          title: "Use the OKX Wallet",
          light: "",
          class: "xl:-mt-10 -mt-5 mb-5 text-xl",
        }),
        Mt,
      ]),
    ])
  );
}
const At = h(Wt, [["render", Ot]]);
var R = Object.getOwnPropertySymbols,
  Dt = Object.prototype.hasOwnProperty,
  Pt = Object.prototype.propertyIsEnumerable,
  It = (e, n) => {
    var t = {};
    for (var r in e) Dt.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
    if (e != null && R)
      for (var r of R(e)) n.indexOf(r) < 0 && Pt.call(e, r) && (t[r] = e[r]);
    return t;
  },
  Rt = (e, n) => {
    const t = e.__vccOpts || e;
    for (const [r, l] of n) t[r] = l;
    return t;
  };
const Ht = [
    "ar",
    "bn",
    "cs",
    "da",
    "de",
    "el",
    "en",
    "es",
    "fa",
    "fi",
    "fil",
    "fr",
    "he",
    "hi",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "msa",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sv",
    "th",
    "tr",
    "uk",
    "ur",
    "vi",
    "zh-cn",
    "zh-tw",
  ],
  Ut =
    /^(https?:\/\/)?(www\.)?twitter\.com\/.*\/status(?:es)?\/(?<tweetId>[^\/\?]\d+)$/i,
  Vt = H({
    props: {
      tweetId: { type: String, default: "" },
      tweetUrl: { type: String, default: "" },
      conversation: {
        type: String,
        default: "all",
        validator: (e) => ["all", "none"].includes(e),
      },
      cards: {
        type: String,
        default: "visible",
        validator: (e) => ["visible", "hidden"].includes(e),
      },
      width: {
        type: [String, Number],
        default: "auto",
        validator: (e) =>
          typeof e == "string"
            ? e === "auto"
            : typeof e == "number"
            ? e >= 250 && e <= 550
            : !1,
      },
      align: {
        type: [String, void 0],
        default: void 0,
        validator: (e) => ["left", "right", "center", void 0].includes(e),
      },
      theme: {
        type: String,
        default: "light",
        validator: (e) => ["light", "dark"].includes(e),
      },
      lang: { type: String, default: "en", validator: (e) => Ht.includes(e) },
      dnt: { type: Boolean, default: !1 },
    },
    emits: { "tweet-load-success": (e) => !!e, "tweet-load-error": () => !0 },
    setup(e, { attrs: n, emit: t }) {
      const r = g(!0),
        l = g(!1),
        u = g();
      U(() => {
        o();
      }),
        O(e, () => {
          o();
        });
      function o() {
        if (!(window.twttr && window.twttr.ready)) {
          m("https://platform.twitter.com/widgets.js", o);
          return;
        }
        window.twttr.ready().then(({ widgets: w }) => {
          (r.value = !0), (l.value = !1), u.value && (u.value.innerHTML = "");
          const { tweetId: x, tweetOptions: i } = p();
          w.createTweet(x, u.value, i)
            .then(async (_) => {
              await Z(),
                _
                  ? t("tweet-load-success", _)
                  : ((l.value = !0), t("tweet-load-error"));
            })
            .finally(() => {
              r.value = !1;
            });
        });
      }
      function p() {
        var w;
        let x = e,
          { tweetId: i, tweetUrl: _ } = x,
          b = It(x, ["tweetId", "tweetUrl"]);
        if (i && _)
          throw new Error("Cannot provide both tweet-id and tweet-url.");
        if (i) {
          if (!/^\d+$/.test(i))
            throw new Error(
              "Invalid tweet-id, please provide a valid numerical tweet-id."
            );
        } else if (_) {
          const C = _.trim().match(Ut);
          if (C) i = (w = C.groups) == null ? void 0 : w.tweetId;
          else throw new Error("Invalid tweet-url.");
        } else throw new Error("Must provide either tweet-id or tweet-url.");
        return { tweetId: i, tweetOptions: b };
      }
      function m(w, x) {
        const i = document.createElement("script");
        i.setAttribute("src", w),
          i.addEventListener("load", () => x(), !1),
          document.body.appendChild(i);
      }
      return { tweetContainerRef: u, isLoading: r, hasError: l, attrs: n };
    },
  });
function qt(e, n, t, r, l, u) {
  return (
    d(),
    f(
      k,
      null,
      [
        e.isLoading
          ? S(e.$slots, "loading", { key: 0 })
          : e.hasError
          ? S(e.$slots, "error", { key: 1 })
          : L("", !0),
        s("div", ee({ ref: "tweetContainerRef" }, e.attrs), null, 16),
      ],
      64
    )
  );
}
var Yt = Rt(Vt, [["render", qt]]);
const Nt = { name: "Pay", components: { Section: W, TextBlock: T, Tweet: Yt } },
  Ft = {
    class:
      "flex items-center justify-center xl:flex-row flex-col-reverse w-full xl:gap-20 gap-10",
  };
function zt(e, n, t, r, l, u) {
  const o = a("Tweet"),
    p = a("TextBlock"),
    m = a("Section");
  return (
    d(),
    B(m, null, {
      default: y(() => [
        s("div", Ft, [
          c(o, {
            "tweet-id": "1357473257532907520",
            class: "xl:w-[500px] w-full",
            theme: "dark",
          }),
          c(p, {
            title: "Pay it Forward.",
            description:
              "The popular Youtube channel Ted-Ed will be happy to hear that we took them up on their offer. We have reserved 5% of the total supply for the educational non-profit to claim at their earliest convenience.",
            primary: !1,
          }),
        ]),
      ]),
      _: 1,
    })
  );
}
const Kt = h(Nt, [["render", zt]]),
  Gt = "/assets/meme.png",
  Xt = { name: "Meme", components: { Section: W, TextBlock: T, Divider: A } },
  Jt = { class: "flex items-center justify-between xl:flex-row flex-col" },
  Qt = s("img", { src: Gt, alt: "", class: "h-96 w-96" }, null, -1);
function Zt(e, n, t, r, l, u) {
  const o = a("Divider"),
    p = a("TextBlock"),
    m = a("Section");
  return (
    d(),
    f(
      k,
      null,
      [
        c(o, { direction: "reverse" }),
        c(m, null, {
          default: y(() => [
            s("div", Jt, [
              c(p, {
                title: "Release The Memes.",
                description:
                  "WSB is only a memecoin. Have fun with community. Make new memes. Enjoy the time we have left in this decaying society.",
                primary: !1,
              }),
              Qt,
            ]),
          ]),
          _: 1,
        }),
      ],
      64
    )
  );
}
const en = h(Xt, [["render", Zt]]),
  tn = {
    name: "Disclaimer",
    components: { Section: W, TextBlock: T, Divider: A, Button: E },
  };
function nn(e, n, t, r, l, u) {
  const o = a("Divider"),
    p = a("Button"),
    m = a("TextBlock"),
    w = a("Section");
  return (
    d(),
    f(
      k,
      null,
      [
        c(o, { class: "-skew-y-6 relative -top-10" }),
        c(w, null, {
          default: y(() => [
            c(
              m,
              {
                description: `$WSB coin has no association with TED-ED or their creation of the viral baby meme in their educational videos. This token is simply a fun thank you for all of the memes that have gone viral as a result of their creativity.
$WSB is a meme coin that does not have any intrinsic value or expectation of financial gains. There is no formal team or roadmap. You are here to have fun if you choose to be here.`,
                center: "",
                "full-description": "",
                primary: !1,
              },
              {
                button: y(() => [
                  c(p, {
                    "is-link": "",
                    link: "buylink",
                    title: "Buy $WSB",
                  }),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        }),
      ],
      64
    )
  );
}
const on = h(tn, [["render", nn]]),
  sn = { name: "Footer", components: { Logo: V } },
  rn = { class: "bg-main-dark w-full h-full py-5" },
  an = {
    class:
      "flex items-center xl:justify-between xl:flex-row flex-col justify-center gap-5 max-w-8xl mx-auto 3xl:px-0 px-5",
  },
  ln = s(
    "p",
    { class: "text-white text-center xl:text-base text-sm" },
    " Copyright \xA9 2024 WALL STREET BABY - All Rights Reserved. ",
    -1
  );
function cn(e, n, t, r, l, u) {
  const o = a("Logo");
  return d(), f("footer", rn, [s("div", an, [c(o, { footer: "" }), ln])]);
}
const dn = h(sn, [["render", cn]]),
  un = {
    components: {
      Nav: Me,
      Hero: lt,
      Video: mt,
      Where: bt,
      Partner: At,
      Pay: Kt,
      Meme: en,
      Disclaimer: on,
      Footer: dn,
    },
    async mounted() {},
    methods: {},
  };
function fn(e, n, t, r, l, u) {
  const o = a("Nav"),
    p = a("Hero"),
    m = a("Video"),
    w = a("Where"),
    x = a("Partner"),
    i = a("Pay"),
    _ = a("Meme"),
    b = a("Disclaimer"),
    C = a("Footer");
  return (
    d(), f(k, null, [c(o), c(p), c(m), c(w), c(x), c(i), c(_), c(b), c(C)], 64)
  );
}
const mn = h(un, [["render", fn]]);
export { mn as default };
