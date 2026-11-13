/* Nişangah kütüphanesi: Valorant / CS2 profilleri ve eğlence sembolleri.
   Orijinal derlenmiş koddan geri kazanıldı. */
var o = [
    `#00ff00`,
    `#00ffff`,
    `#ffffff`,
    `#ffff00`,
    `#ff7a32`,
    `#66a3ff`,
    `#ff4fd8`,
    `#7fff00`,
    `#ff5555`,
    `#a8ff60`,
    `#39ffd0`,
    `#ffd166`,
    `#c0ff3e`,
    `#5ee1ff`,
    `#ffa8d9`,
    `#e8e8e8`,
    `#32ff9a`,
    `#ff9f1c`,
  ],
  s = [1, 2, 3, 4, 5, 6, 7, 8],
  c = [0, 1, 2, 3, 4, 5],
  l = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5],
  u = [28, 30, 32, 34, 36, 38, 40, 42],
  d = [`cross`, `cross-dot`, `t-cross`, `brackets`, `dot`, `circle`],
  f = [!0, !1],
  p = [`butt`, `round`, `square`],
  m = [0, 1, 2];
function h(e) {
  return [
    e.shape,
    e.color.toLowerCase(),
    e.size,
    e.thickness,
    e.length,
    e.gap,
    +!!e.outline,
    e.opacity,
    e.lineCap ?? `butt`,
    e.outerLength ?? 0,
    e.outerGap ?? 0,
    e.outerThickness ?? 0,
    e.funSymbol ?? ``,
  ].join(`|`);
}
function g(e) {
  let t = e,
    n = o[t % o.length];
  t = Math.floor(t / o.length);
  let r = s[t % s.length];
  t = Math.floor(t / s.length);
  let i = c[t % c.length];
  t = Math.floor(t / c.length);
  let a = l[t % l.length];
  t = Math.floor(t / l.length);
  let h = u[t % u.length];
  t = Math.floor(t / u.length);
  let g = d[t % d.length];
  t = Math.floor(t / d.length);
  let _ = f[t % f.length];
  t = Math.floor(t / f.length);
  let v = p[t % p.length];
  t = Math.floor(t / p.length);
  let y = m[t % m.length],
    b = {
      shape: g,
      color: n,
      size: h,
      thickness: a,
      length: g === `dot` || g === `circle` ? Math.max(2, r) : r,
      gap: g === `dot` ? 0 : i,
      outline: _,
      opacity: 1,
      lineCap: v,
    };
  return (
    y > 0 &&
      (g === `cross` || g === `cross-dot` || g === `t-cross`) &&
      ((b.outerLength = y === 1 ? 2 : 4),
      (b.outerGap = i + r + (y === 1 ? 2 : 3)),
      (b.outerThickness = Math.max(0.5, a - 0.25))),
    b
  );
}
function _(e, t) {
  let n = [],
    r = 0;
  for (; n.length < t && r < 2e5;) {
    let t = g(r);
    r += 1;
    let i = h(t);
    e.has(i) || (e.add(i), n.push(t));
  }
  return n;
}
var v = {
  0: `#ffffff`,
  1: `#00ff00`,
  2: `#7fff00`,
  3: `#d4ff00`,
  4: `#ffff00`,
  5: `#00ffff`,
  6: `#ff00ff`,
  7: `#ff0000`,
};
function y(e) {
  let t = e.split(`;`).filter(Boolean),
    n = {};
  for (let e = 0; e < t.length - 1; e += 2) n[t[e]] = t[e + 1];
  return n;
}
function b(e) {
  let t = e.trim(),
    n = t.indexOf(`;P;`);
  if (n === -1) return t;
  let r = t.slice(n + 3),
    i = r.search(/;S;/);
  return i === -1 ? r : r.slice(0, i);
}
function x(e) {
  if (!(!e || e.length < 6)) return `#${e.slice(0, 6).toLowerCase()}`;
}
function S(e) {
  let t = y(b(e)),
    n = Number(t.c ?? 0),
    r = x(t.u) ?? v[n] ?? `#ffffff`,
    i = Number(t.o ?? 0) > 0,
    a = Number(t.d ?? 0) > 0,
    o = t[`0b`] === `0`,
    s = Number(t[`0l`] ?? 0),
    c = Number(t[`0t`] ?? 2),
    l = Number(t[`0o`] ?? 0),
    u = Number(t[`1l`] ?? 0),
    d = Number(t[`1o`] ?? 0),
    f = Number(t[`1t`] ?? 0),
    p = !o && s > 0,
    m = u > 0,
    h = Math.max(0.5, Math.min(4, c * 0.55 + 0.35)),
    g = Math.max(1, s * 0.85 + 0.5),
    _ = Math.max(0, l * 0.75),
    S = Math.round(14 + g * 2 + _ * 1.5 + h * 2 + (a ? 2 : 0) + (m ? 4 : 0));
  if (!p && a) {
    let e = Number(t.z ?? 3);
    return {
      shape: `dot`,
      color: r,
      size: Math.round(Math.max(10, Math.min(22, 10 + e * 1.2)) + h * 2),
      thickness: Math.max(0.8, Math.min(3.5, e * 0.35 + 0.6)),
      length: 1,
      gap: 0,
      outline: i,
      opacity: 1,
      lineCap: `round`,
    };
  }
  return !p && m
    ? {
        shape: a ? `cross-dot` : `cross`,
        color: r,
        size: Math.round(16 + u * 2 + d),
        thickness: Math.max(0.5, f * 0.55 + 0.35),
        length: Math.max(1, u * 0.85),
        gap: Math.max(0, d * 0.75),
        outline: i,
        opacity: 1,
        lineCap: `butt`,
      }
    : {
        shape: a ? `cross-dot` : `cross`,
        color: r,
        size: Math.max(16, Math.min(40, S)),
        thickness: h,
        length: g,
        gap: _,
        outline: i,
        opacity: 1,
        lineCap: `butt`,
        ...(m
          ? {
              outerLength: Math.max(1, u * 0.7),
              outerGap: Math.max(_ + g + 1, d * 0.7),
              outerThickness: Math.max(0.5, (f || c) * 0.5 + 0.3),
            }
          : {}),
      };
}
function C(e) {
  let t =
    e.color === `#00ffff`
      ? `cyan`
      : e.color === `#00ff00` || e.color === `#7fff00`
        ? `green`
        : e.color === `#ffffff`
          ? `white`
          : e.color === `#ffff00` || e.color === `#d4ff00`
            ? `yellow`
            : e.color === `#ff0000`
              ? `red`
              : e.color === `#ff00ff`
                ? `pink`
                : `custom`;
  return `${e.shape} · ${t}`;
}
function w(e) {
  let t = Math.max(1.2, e.size * 1.35),
    n = Math.max(0, (e.gap + 4) * 0.55),
    r = Math.max(0.45, e.thickness * 0.9 + 0.45),
    i = Math.round(14 + t * 2 + n * 1.4 + r * 2);
  return {
    shape: e.centerDot ? `cross-dot` : `cross`,
    color: e.color,
    size: Math.max(16, Math.min(36, i)),
    thickness: r,
    length: t,
    gap: n,
    outline: e.outline ?? !1,
    opacity: 1,
    lineCap: `butt`,
  };
}
var T = 280,
  ee = 280,
  E = 100,
  D = `2026-07-15`,
  O = `https://prosettings.net/lists/valorant/`,
  k = `https://prosettings.net/lists/cs2/`,
  A = [
    S(`0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0`),
    S(`0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0`),
    S(`0;P;c;1;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`),
    S(`0;s;1;P;o;1;d;1;0b;0;1b;0`),
    S(`0;P;c;5;h;0;d;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`),
    S(`0;P;c;7;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`),
    S(`0;P;o;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0`),
    S(`0;P;c;5;o;1;d;1;z;3;f;0;0b;0;1b;0`),
    S(`0;P;c;1;o;1;f;0;0l;3;0o;2;0a;1;0f;0;1b;0`),
    S(`0;s;1;P;u;FFA500FF;o;1;d;1;f;0;s;0;0b;0;1b;0`),
    S(`0;P;c;4;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`),
    S(`0;P;h;0;0t;1;0l;2;0o;0;0a;1;0f;0;1b;0`),
  ],
  j = [
    w({ size: 2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !0 }),
    w({ size: 1.5, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 }),
    w({ size: 2, gap: -1, thickness: 0.5, color: `#ffffff`, outline: !0 }),
    w({ size: 2.5, gap: -2, thickness: 0, color: `#00ff00`, outline: !0 }),
    w({ size: 1.8, gap: -3, thickness: 0.5, color: `#ffff00`, outline: !1 }),
    w({ size: 2.2, gap: -2, thickness: 1, color: `#00ffff`, outline: !0 }),
    w({
      size: 1.2,
      gap: -4,
      thickness: 0,
      color: `#ffffff`,
      outline: !1,
      centerDot: !0,
    }),
    w({ size: 3, gap: -1, thickness: 0.5, color: `#00ff00`, outline: !1 }),
    w({ size: 2, gap: -3, thickness: 0, color: `#ff7a32`, outline: !0 }),
    w({ size: 1.6, gap: -2, thickness: 0.5, color: `#66a3ff`, outline: !1 }),
    w({ size: 2.4, gap: -2, thickness: 1, color: `#ffffff`, outline: !0 }),
    w({ size: 1.4, gap: -3, thickness: 0, color: `#00ff00`, outline: !1 }),
  ],
  M = {
    TenZ: `0;s;1;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0;S;c;4;o;1`,
    aspas: `0;s;1;P;o;1;d;1;0b;0;1b;0;S;c;0`,
    Demon1: `0;P;o;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    zekken: `0;c;1;P;c;7;t;3;o;1;f;0;0t;10;0l;1;0v;0;0g;1;0o;4;0a;1;0f;0;1t;9;1o;0;1a;1;1m;0;1f;0`,
    Sacy: `0;P;h;0;f;0;0t;1;0l;4;0o;1;0a;1;0f;0;1t;3;1o;2;1a;1;1m;0;1f;0`,
    pANcada: `0;P;h;0;f;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Victor: `0;P;h;0;f;0;0l;4;0a;1;0f;0;1b;0`,
    crashies: `0;s;1;P;c;1;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    s0m: `0;s;1;P;c;8;h;0;b;1;0l;0;0v;0;1b;0;S;c;4;s;0.833;o;1`,
    yay: `0;P;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0`,
    Asuna: `0;P;o;1;0t;1;0l;2;0a;1;0f;0;1b;0`,
    Less: `0;P;o;0;0t;1;0l;2;0o;0;0a;1;0f;0;1b;0`,
    cauanzin: `0;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Saadhak: `0;P;c;1;o;1;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    valyn: `0;s;1;P;h;0;f;0;0l;5;0o;0;0a;1;0f;0;1b;0`,
    JonahP: `0;P;c;5;o;1;0t;1;0l;3;0o;1;0a;1;0f;0;1b;0`,
    trent: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    kiNgg: `0;P;c;7;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    jawgemo: `0;P;h;0;f;0;0t;4;0l;1;0o;2;0a;1;0f;0;1b;0`,
    Ethan: `0;P;o;1;0t;1;0o;1;0a;1;0f;0;1b;0`,
    mwzera: `0;s;1;P;c;8;u;000000FF;h;0;d;1;b;1;f;0;m;1;0l;3;0o;0;0a;1;0e;0.5;1b;0;S;s;0.8;o;1`,
    Boaster: `0;s;1;P;c;5;u;FF2B52FF;o;1;d;1;z;4;f;0;s;0;0l;0;0v;0;0o;2;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0;1f;0;S;c;1;o;1`,
    Derke: `0;s;1;P;u;FFA500FF;o;1;d;1;f;0;s;0;0b;0;1t;0;1l;1;1o;0;1a;1;1m;0;1f;0;S;o;1`,
    Alfajer: `0;P;h;0;0t;1;0l;4;0o;1;0a;1;0f;0;1t;3;1o;2;1a;1;1m;0;1f;0`,
    Leo: `0;s;1;P;h;0;0l;3;0v;4;0o;0;0a;1;0f;0;1b;0;S;c;0;s;0.64`,
    Chronicle: `0;P;c;5;h;0;f;0;0l;2;0o;3;0a;1;0f;0;1b;0`,
    nAts: `0;P;c;1;o;1;m;1;0a;1;0l;2;0t;1;0o;2;0f;0;1b;0;1m;0;1f;0`,
    BuZz: `0;P;c;5;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    MaKo: `0;s;1;P;c;1;o;1;f;0;0l;4;0a;1;0f;0;1b;0`,
    f0rsakeN: `0;s;1;P;o;1;0t;3;0l;1;0v;0;0g;1;0o;0;0a;1;0f;0;1t;1;1l;4;1g;1;1o;1;1a;1;1m;0;1f;0`,
    Jinggg: `0;s;1;P;c;1;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0;S;c;5`,
    d4v41: `0;s;1;P;c;1;h;0;0l;3;0o;2;0a;1;0f;0;1b;0;S;d;0`,
    nobody: `0;s;1;P;c;5;o;1;f;0;0b;0;1t;1;1o;3;1a;1;1m;0;1f;0;S;d;0`,
    CHICHOO: `0;P;c;1;o;1;f;0;s;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    Meteor: `0;s;1;P;c;5;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0;S;o;1`,
    Carpe: `0;s;1;P;u;000000FF;h;0;0l;4;0o;0;0a;1;0f;0;1b;0;S;s;0.872;o;1`,
    stax: `0;P;c;4;h;0;f;0;s;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Cryocells: `0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0`,
    BeYN: `0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    HYUNMIN: `0;P;o;1;d;1;0b;0;1b;0`,
    tarik: `0;s;1;P;u;D099E2FF;o;1;d;1;0b;0;1b;0;S;c;0;s;0.5;o;1`,
    bang: `0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0`,
    benjyfishy: `0;s;1;P;o;1;0b;0;1t;1;1l;1;1o;1;1a;1;1m;0;1f;0;S;c;0;o;1`,
    Keiko: `0;s;1;P;c;1;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    leaf: `0;P;c;8;u;FF99FFFF;h;0;b;1;0l;4;0o;1;0a;1;0f;0;1b;0`,
    qRaxs: `0;P;c;1;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    ZmjjKK: `0;P;c;5;h;0;d;1;0t;1;0l;3;0o;4;0a;1;0f;0;1b;0`,
    t3xture: `0;s;1;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0;S;o;0`,
    something: `0;P;c;5;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    johnqt: `0;P;c;5;o;1;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Nadeshot: `0;P;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Sinatraa: `0;P;c;5;o;1;f;0;0t;1;0l;3;0a;1;0f;0;1b;0`,
    Wardell: `0;s;1;P;h;0;0t;1;0l;4;0o;1;0a;1;0f;0;1b;0;S;o;1`,
    Hiko: `0;P;c;1;h;0;d;1;z;1;0t;1;0l;2;0a;1;0f;0;1l;5;1o;4;1a;1;1m;0;1f;0`,
    Shroud: `0;P;h;0;0l;5;0o;0;0a;1;0f;0;1b;0`,
    cNed: `0;P;h;0;f;0;0l;5;0o;0;0a;1;0f;0;1b;0`,
    ScreaM: `0;s;1;P;c;5;o;1;d;1;z;3;f;0;0t;6;0l;0;0a;1;0f;0;1b;0;S;c;6;s;0.949;o;1`,
    Zellsis: `0;s;1;P;c;5;o;1;m;1;0t;1;0l;8;0o;4;0a;1;0f;0;1b;0`,
    Boostio: `0;P;o;0;0b;0;1t;6;1l;1;1o;3;1a;1;1m;0;1f;0`,
    C0M: `0;P;o;1;f;0;s;0;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Mistic: `0;s;1;P;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    Nivera: `0;s;1;P;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    SUYGETSU: `0;P;c;5;h;0;d;1;f;0;s;0;0l;1;0o;1;0a;1;0f;0;1b;0`,
    Zyppan: `0;s;1;P;u;33DD00FF;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    ANGE1: `0;P;h;0;d;1;f;0;0l;2;0v;3;0a;1;0f;0;1b;0`,
    Rb: `0;s;1;P;c;5;h;0;f;0;0l;4;0o;2;0a;1;0f;0;1b;0;S;o;1`,
    xccurate: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Munchkin: `0;P;c;1;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    iZu: `0;P;c;5;o;1;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    heat: `0;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    silentzz: `0;P;c;1;o;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    yetujey: `0;P;c;5;h;0;0l;4;0o;1;0a;1;0f;0;1b;0`,
    sociablEE: `0;P;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    xeus: `0;P;c;7;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Cloud: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    kaajak: `0;P;c;1;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    free1ng: `0;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Yong: `0;P;c;5;o;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    Flicker: `0;P;c;1;o;1;0l;3;0o;1;0a;1;0f;0;1b;0`,
    cortezia: `0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0`,
    cgrs: `0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Invy: `0;s;1;P;o;1;f;0;0t;1;0l;1;0o;2;0a;0;0f;0;1b;0`,
    mimi: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Virtyy: `0;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    MrFalin: `0;P;c;1;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    s0pp: `0;P;c;5;o;1;d;1;0b;0;1b;0`,
    mada: `0;P;h;0;0l;4;0o;1;0a;1;0f;0;1b;0`,
    brawk: `0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    skuba: `0;P;c;1;o;1;0l;2;0o;2;0a;1;0f;0;1b;0`,
    Xdll: `0;P;h;0;0t;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Smoggy: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Karon: `0;P;c;1;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    Lakia: `0;P;c;5;o;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Boo: `0;P;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    RieNs: `0;P;c;5;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    Wo0t: `0;P;c;1;o;1;0l;3;0o;2;0a;1;0f;0;1b;0`,
    PROD: `0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0`,
    Shanks: `0;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    babybay: `0;P;c;1;h;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    N4RRATE: `0;s;1;P;c;5;o;0.2;d;1;z;1;f;0;0t;3;0l;3;0o;4;0a;1;0f;0;1b;0`,
    Sayf: `0;P;c;7;h;0;d;1;z;3;0b;0;1b;0`,
    autumn: `0;s;1;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0`,
    nukkye: `0;P;o;1;f;0;s;0;0l;3;0o;2;0a;1;0f;0;1b;0`,
    FNS: `0;P;c;1;o;1;0l;3;0o;5;0a;1;0f;0;1b;0`,
  },
  N =
    `TenZ.aspas.Demon1.zekken.Sacy.pANcada.Victor.crashies.s0m.yay.Asuna.Less.cauanzin.Saadhak.valyn.JonahP.trent.kiNgg.jawgemo.Ethan.mwzera.Boaster.Derke.Alfajer.Leo.Chronicle.nAts.BuZz.MaKo.f0rsakeN.Jinggg.d4v41.nobody.CHICHOO.Meteor.Carpe.stax.Cryocells.BeYN.HYUNMIN.tarik.bang.benjyfishy.Keiko.leaf.qRaxs.ZmjjKK.t3xture.something.johnqt.Nadeshot.Sinatraa.Wardell.Hiko.Shroud.cNed.ScreaM.Zellsis.Boostio.C0M.Mistic.Nivera.SUYGETSU.Zyppan.ANGE1.Rb.xccurate.Munchkin.iZu.heat.silentzz.yetujey.sociablEE.xeus.Cloud.kaajak.free1ng.Yong.Flicker.cortezia.cgrs.Invy.mimi.Virtyy.MrFalin.s0pp.mada.brawk.skuba.Xdll.Smoggy.Karon.Lakia.Boo.RieNs.Wo0t.PROD.Shanks.babybay.N4RRATE.Sayf.autumn.nukkye.SirMaza.Koshmaras.ZynX.spikeziN.Sato.Neon.Blowz.Lothar.Jerrwin.timotino.Lukxo.Tkzin.Dantedeu5.reduxx.hfmi0dzjc9z7.CB.FNS`.split(
      `.`,
    ),
  P = {
    ZywOo: {
      size: 1.5,
      gap: -3,
      thickness: 0,
      color: `#00ffff`,
      outline: !1,
      shareCode: `CSGO-KDOkV-jUpoE-GdhAh-YzbZL-MYXTB`,
    },
    donk: {
      size: 2,
      gap: -1,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
      shareCode: `CSGO-2uZLz-jXPTZ-SUkJx-dmJyv-UxQRO`,
    },
    m0NESY: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#00ffff`,
      outline: !0,
      shareCode: `CSGO-wAD3c-ykt5L-zvZ98-vBisR-6sWPA`,
    },
    NiKo: {
      size: 2.5,
      gap: -2,
      thickness: 0,
      color: `#00ff00`,
      outline: !0,
      shareCode: `CSGO-m89VO-6zPDr-53TJ9-OySAJ-V8Y2Q`,
    },
    ropz: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
      shareCode: `CSGO-MMQuh-Hs3Sj-Qv9zd-VaCmc-3QqNO`,
    },
    apEX: { size: 2.2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !0 },
    flameZ: { size: 1.8, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 },
    mezii: { size: 2, gap: -2, thickness: 0.5, color: `#ffffff`, outline: !0 },
    sh1ro: { size: 1.5, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 },
    magixx: { size: 2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !1 },
    zont1x: {
      size: 1.6,
      gap: -3,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
    chopper: {
      size: 2.4,
      gap: -1,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    Spinx: { size: 2, gap: -2, thickness: 0, color: `#00ffff`, outline: !0 },
    xertioN: {
      size: 1.8,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !1,
    },
    torzsi: { size: 2.2, gap: -3, thickness: 0, color: `#ffff00`, outline: !0 },
    karrigan: {
      size: 2.5,
      gap: -1,
      thickness: 1,
      color: `#00ff00`,
      outline: !0,
    },
    TeSeS: { size: 2, gap: -2, thickness: 0.5, color: `#ffffff`, outline: !1 },
    bLitz: { size: 1.7, gap: -3, thickness: 0, color: `#00ffff`, outline: !0 },
    XANTARES: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    woxic: { size: 1.5, gap: -3, thickness: 0, color: `#ffff00`, outline: !1 },
    Jimpphat: {
      size: 2.1,
      gap: -2,
      thickness: 0.5,
      color: `#00ffff`,
      outline: !0,
    },
    Wicadia: {
      size: 2,
      gap: -1,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
    MAJ3R: { size: 2.3, gap: -2, thickness: 0, color: `#00ff00`, outline: !1 },
    b1t: { size: 1.9, gap: -3, thickness: 0.5, color: `#00ffff`, outline: !0 },
    jL: { size: 2, gap: -2, thickness: 0, color: `#00ff00`, outline: !0 },
    w0nderful: {
      size: 1.4,
      gap: -4,
      thickness: 0,
      color: `#00ffff`,
      outline: !1,
    },
    iM: { size: 2.2, gap: -2, thickness: 0.5, color: `#ffffff`, outline: !0 },
    Aleksib: {
      size: 2.5,
      gap: -1,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    huNter: { size: 2, gap: -2, thickness: 0.5, color: `#00ffff`, outline: !1 },
    Nertz: { size: 1.8, gap: -3, thickness: 0, color: `#00ff00`, outline: !0 },
    SunPayus: {
      size: 1.5,
      gap: -3,
      thickness: 0,
      color: `#ffff00`,
      outline: !1,
    },
    EliGE: { size: 2.4, gap: -2, thickness: 1, color: `#00ff00`, outline: !0 },
    NAF: { size: 2, gap: -2, thickness: 0.5, color: `#00ffff`, outline: !0 },
    Twistzz: {
      size: 1.7,
      gap: -3,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !1,
    },
    Frozen: { size: 2.1, gap: -2, thickness: 0, color: `#00ff00`, outline: !0 },
    broky: { size: 1.6, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 },
    olofmeister: {
      size: 2.5,
      gap: -1,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    Brollan: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#ffff00`,
      outline: !0,
    },
    FalleN: { size: 2.2, gap: -2, thickness: 0, color: `#00ff00`, outline: !1 },
    YEKINDAR: {
      size: 2,
      gap: -1,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
    kscerato: {
      size: 1.8,
      gap: -3,
      thickness: 0.5,
      color: `#00ffff`,
      outline: !0,
    },
    yuurih: { size: 2.1, gap: -2, thickness: 0, color: `#00ff00`, outline: !1 },
    HooXi: {
      size: 2.3,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    jabbi: {
      size: 1.9,
      gap: -2,
      thickness: 0.5,
      color: `#00ffff`,
      outline: !1,
    },
    Staehr: { size: 2, gap: -3, thickness: 0, color: `#ffffff`, outline: !0 },
    REZ: { size: 2.2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !0 },
    s1mple: { size: 1.5, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 },
    device: { size: 2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !0 },
    coldzera: {
      size: 2.4,
      gap: -1,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
    rain: { size: 2, gap: -2, thickness: 0, color: `#00ffff`, outline: !0 },
    dupreeh: {
      size: 2.1,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    Magisk: { size: 1.8, gap: -3, thickness: 0, color: `#00ffff`, outline: !1 },
    gla1ve: {
      size: 2.3,
      gap: -1,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
    electronic: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#00ff00`,
      outline: !0,
    },
    Jame: { size: 1.4, gap: -4, thickness: 0, color: `#00ffff`, outline: !1 },
    Ax1Le: { size: 2, gap: -2, thickness: 0.5, color: `#00ff00`, outline: !0 },
    Hobbit: { size: 2.2, gap: -2, thickness: 0, color: `#ffff00`, outline: !0 },
    degster: {
      size: 1.6,
      gap: -3,
      thickness: 0.5,
      color: `#00ffff`,
      outline: !1,
    },
    shox: { size: 2.5, gap: -1, thickness: 1, color: `#00ff00`, outline: !0 },
    Perfecto: {
      size: 2,
      gap: -2,
      thickness: 0.5,
      color: `#ffffff`,
      outline: !0,
    },
  },
  F =
    `ZywOo.donk.m0NESY.NiKo.ropz.apEX.flameZ.mezii.sh1ro.magixx.zont1x.chopper.Spinx.xertioN.torzsi.karrigan.TeSeS.bLitz.XANTARES.woxic.Jimpphat.Wicadia.MAJ3R.b1t.jL.w0nderful.iM.Aleksib.huNter.Nertz.SunPayus.EliGE.NAF.Twistzz.Frozen.broky.olofmeister.Brollan.FalleN.YEKINDAR.kscerato.yuurih.HooXi.jabbi.Staehr.REZ.s1mple.device.coldzera.rain.dupreeh.Magisk.gla1ve.electronic.Jame.Ax1Le.Hobbit.degster.shox.Perfecto.tN1R.xelex.kyxsan.kyousuke.Techno4K.mzinho.Senzu.910.cobra.Soulfly.makazze.HeavyGod.matys.r1nkle.Snax.hypex.Tauson.PR.siuhy.ultimate.malbsMd.JBOEN.Neityu.jcobbb.nilo.MartinezSa.Chr1zN.susp.yxngstxr.alkarenn.b1st.mir.tO0RO.FL1T.phzy.ryu.molodoy.misutaaa.bodyy.Maka.Lucky.Ex3rcice.Kursy.Xyp9x.Boombl4.nafany.interz.Krad.fame.n0rb3r7.r3salt.zorte.Norwi.NickelBack.TRAVIS.KaiR0N.Forester.sdy.KENSI.blameF`.split(
      `.`,
    );
function I(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, `-`);
}
function L(e) {
  return {
    shape: e.shape,
    color: e.color,
    size: e.size,
    thickness: e.thickness,
    length: e.length,
    gap: e.gap,
    outline: e.outline,
    opacity: e.opacity,
    lineCap: e.lineCap,
    outerLength: e.outerLength,
    outerGap: e.outerGap,
    outerThickness: e.outerThickness,
  };
}
function te() {
  let e = N.map((e, t) => {
      let n = M[e],
        r = L(n ? S(n) : A[t % A.length]);
      return {
        id: `valorant-${I(e)}`,
        name: e,
        game: `valorant`,
        style: C(r),
        checkedAt: D,
        source: O,
        shareCode: n,
        settings: r,
      };
    }),
    t = _(new Set(e.map((e) => h(e.settings))), Math.max(0, T - e.length)).map(
      (e, t) => {
        let n = String(t + 1).padStart(3, `0`);
        return {
          id: `valorant-pro-${n}`,
          name: `VCT ${C(e)} ${n}`,
          game: `valorant`,
          style: C(e),
          checkedAt: D,
          source: O,
          settings: e,
        };
      },
    );
  return [...e, ...t];
}
function ne(e) {
  let t = F.map((e, t) => {
      let n = P[e],
        r = L(n ? w(n) : j[t % j.length]);
      return {
        id: `cs2-${I(e)}`,
        name: e,
        game: `cs2`,
        style: C(r),
        checkedAt: D,
        source: k,
        shareCode: n?.shareCode,
        settings: r,
      };
    }),
    n = _(
      new Set([...(e ?? []), ...t.map((e) => h(e.settings))]),
      Math.max(0, ee - t.length),
    ).map((e, t) => {
      let n = String(t + 1).padStart(3, `0`);
      return {
        id: `cs2-pro-${n}`,
        name: `CS ${C(e)} ${n}`,
        game: `cs2`,
        style: C(e),
        checkedAt: D,
        source: k,
        settings: e,
      };
    });
  return [...t, ...n];
}
var re = [
    [`Gülen Yüz`, `smile`, `#ffe34f`],
    [`Kalp`, `heart`, `#ff4f78`],
    [`Kedi`, `cat`, `#66e3ff`],
    [`Ördek`, `duck`, `#ffd84d`],
    [`Uzaylı`, `alien`, `#78ff72`],
    [`Kafatası`, `skull`, `#f5f5f5`],
    [`Taç`, `crown`, `#ffd54a`],
    [`Yıldız`, `star`, `#fff15c`],
    [`Çiçek`, `flower`, `#ff72d0`],
    [`Kar Tanesi`, `snowflake`, `#71dfff`],
    [`Hedef Göz`, `eye`, `#bd83ff`],
    [`Bıyık`, `mustache`, `#f5c18d`],
    [`Hayalet`, `ghost`, `#e9eeff`],
    [`Pati`, `paw`, `#ff9fc6`],
    [`Şimşek`, `bolt`, `#fff34f`],
    [`Elmas`, `diamond`, `#63edff`],
    [`Kelebek`, `butterfly`, `#d68cff`],
    [`Roket`, `rocket`, `#ff725f`],
    [`Kiraz`, `cherry`, `#ff3f59`],
    [`UFO`, `ufo`, `#7effbd`],
    [`Ay`, `moon`, `#c9d4ff`],
    [`Güneş`, `sun`, `#ffd23f`],
    [`Bulut`, `cloud`, `#d7e7ff`],
    [`Ateş`, `fire`, `#ff6b3d`],
    [`Buz`, `ice`, `#8ef0ff`],
    [`Balık`, `fish`, `#5ec8ff`],
    [`Kurbağa`, `frog`, `#7dff7a`],
    [`Baykuş`, `owl`, `#d2b48c`],
    [`Tilki`, `fox`, `#ff8a3d`],
    [`Kurt`, `wolf`, `#b8c0cc`],
    [`Köpek`, `dog`, `#f0c27a`],
    [`Kuş`, `bird`, `#7ad7ff`],
    [`Arı`, `bee`, `#ffd84d`],
    [`Örümcek`, `spider`, `#d0d0d0`],
    [`Yılan`, `snake`, `#6fdc8c`],
    [`Ejderha`, `dragon`, `#ff5e6c`],
    [`Unicorn`, `unicorn`, `#e9a8ff`],
    [`Pizza`, `pizza`, `#ffb347`],
    [`Burger`, `burger`, `#ffc15e`],
    [`Donut`, `donut`, `#ff7eb9`],
    [`Kahve`, `coffee`, `#c4a484`],
    [`Dondurma`, `icecream`, `#ff9ec7`],
    [`Muz`, `banana`, `#ffe566`],
    [`Elma`, `apple`, `#ff5a5a`],
    [`Üzüm`, `grape`, `#b388ff`],
    [`Limon`, `lemon`, `#fff176`],
    [`Kaktüs`, `cactus`, `#63d471`],
    [`Ağaç`, `tree`, `#4caf50`],
    [`Yaprak`, `leaf`, `#7cdb6e`],
    [`Mantar`, `mushroom`, `#ff8a80`],
    [`Kılıç`, `sword`, `#cfd8dc`],
    [`Kalkan`, `shield`, `#90caf9`],
    [`Balta`, `axe`, `#b0bec5`],
    [`Yay`, `bow`, `#a1887f`],
    [`Hedef`, `target`, `#ff5252`],
    [`Gamepad`, `gamepad`, `#82b1ff`],
    [`Zar`, `dice`, `#eeeeee`],
    [`Nota`, `music`, `#ea80fc`],
    [`Kulaklık`, `headphones`, `#80d8ff`],
    [`Kamera`, `camera`, `#b0bec5`],
    [`Telefon`, `phone`, `#90a4ae`],
    [`Anahtar`, `key`, `#ffd54f`],
    [`Kilit`, `lock`, `#90a4ae`],
    [`Hediye`, `gift`, `#ff6e6e`],
    [`Balon`, `balloon`, `#ff80ab`],
    [`Palyaço`, `clown`, `#ff8a80`],
    [`Ninja`, `ninja`, `#9e9e9e`],
    [`Robot`, `robot`, `#80cbc4`],
    [`Canavar`, `monster`, `#a5d6a7`],
    [`Vampir`, `vampire`, `#ef9a9a`],
    [`Balkabağı`, `pumpkin`, `#ff9800`],
    [`Şeker`, `candy`, `#ff80ab`],
    [`Kurabiye`, `cookie`, `#d7a86e`],
    [`Taco`, `taco`, `#ffcc80`],
    [`Sosisli`, `hotdog`, `#ffab91`],
    [`Patates`, `fries`, `#ffd54f`],
    [`Soda`, `soda`, `#80d8ff`],
    [`Şemsiye`, `umbrella`, `#82b1ff`],
    [`Uçak`, `plane`, `#90caf9`],
    [`Araba`, `car`, `#ff8a65`],
    [`Bisiklet`, `bike`, `#81c784`],
    [`Tekne`, `boat`, `#4fc3f7`],
    [`Ev`, `house`, `#ffcc80`],
    [`Dağ`, `mountain`, `#a5d6a7`],
    [`Dalga`, `wave`, `#4dd0e1`],
    [`Gökkuşağı`, `rainbow`, `#f48fb1`],
    [`Kuyruklu`, `comet`, `#b39ddb`],
    [`Gezegen`, `planet`, `#7986cb`],
    [`Atom`, `atom`, `#64ffda`],
    [`Dişli`, `gear`, `#b0bec5`],
    [`Kupa`, `trophy`, `#ffd54f`],
    [`Madalya`, `medal`, `#ffb300`],
    [`Bayrak`, `flag`, `#ff8a80`],
    [`Çapa`, `anchor`, `#90caf9`],
    [`Pusula`, `compass`, `#80cbc4`],
    [`Zil`, `bell`, `#ffe082`],
    [`Like`, `thumbs`, `#81c784`],
    [`Barış`, `peace`, `#ce93d8`],
    [`Sonsuz`, `infinity`, `#80deea`],
    [`Yin Yang`, `yin`, `#e0e0e0`],
  ]
    .slice(0, E)
    .map(([e, t, n], r) => ({
      id: `fun-${t}`,
      name: e,
      game: `fun`,
      style: `özel SVG`,
      checkedAt: D,
      source: `Dijital Crosshair original`,
      settings: {
        shape: `fun`,
        funSymbol: t,
        color: n,
        size: 34 + (r % 4) * 2,
        thickness: 2.2,
        length: 5,
        gap: 2,
        outline: !1,
        opacity: 1,
        lineCap: `round`,
      },
    })),
  R = te(),
  z = { valorant: R, cs2: ne(new Set(R.map((e) => h(e.settings)))), fun: re };

export const LIBRARY = z;
export const settingsKey = h;
export const styleLabel = C;
export const parseValorantCode = S;
