/* Nişangah çizici (overlay ve önizlemeler ortak kullanır). */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime'

const d = { jsx, jsxs, Fragment }

function FunSymbol({ symbol: e, color: t }) {
  let n = {
      fill: `none`,
      stroke: t,
      strokeWidth: 2.2,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    r = { fill: t };
  switch (e) {
    case `smile`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `13`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `13`, r: `1.2`, ...r }),
          (0, d.jsx)(`path`, { d: `M10 19c3 4 9 4 12 0`, ...n }),
        ],
      });
    case `heart`:
      return (0, d.jsx)(`path`, {
        d: `M16 26S5 20 5 12.5C5 6 13 5 16 10c3-5 11-4 11 2.5C27 20 16 26 16 26Z`,
        ...n,
      });
    case `cat`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `m7 10 2-6 5 4h4l5-4 2 6v10c0 5-4 8-9 8s-9-3-9-8Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `16`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `16`, r: `1`, ...r }),
          (0, d.jsx)(`path`, { d: `m14 21 2 1 2-1M5 19h7M20 19h7`, ...n }),
        ],
      });
    case `duck`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M7 18c0-6 4-10 10-10 5 0 8 3 8 7 0 7-6 11-14 9-3-1-4-3-4-6Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `m22 15 7 2-7 3`, ...n }),
          (0, d.jsx)(`circle`, { cx: `19`, cy: `13`, r: `1`, ...r }),
        ],
      });
    case `alien`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M16 3C8 3 5 8 7 16c2 7 7 12 9 13 2-1 7-6 9-13 2-8-1-13-9-13Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M10 13c4 0 5 2 5 6-4 0-6-2-5-6ZM22 13c-4 0-5 2-5 6 4 0 6-2 5-6Z`,
            ...r,
          }),
        ],
      });
    case `skull`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M7 15C7 7 11 4 16 4s9 3 9 11c0 5-2 7-5 8v5H12v-5c-3-1-5-3-5-8Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `15`, r: `2.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `15`, r: `2.2`, ...r }),
          (0, d.jsx)(`path`, { d: `M14 25v3M18 25v3`, ...n }),
        ],
      });
    case `crown`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `m4 10 7 5 5-10 5 10 7-5-3 15H7L4 10Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M7 25h18`, ...n }),
        ],
      });
    case `star`:
      return (0, d.jsx)(`path`, {
        d: `m16 3 3.7 8.4 9.1.8-6.9 6 2.1 8.9-8-4.7-8 4.7 2.1-8.9-6.9-6 9.1-.8L16 3Z`,
        ...n,
      });
    case `flower`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `3`, ...r }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `8`, r: `5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `24`, cy: `16`, r: `5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `24`, r: `5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `8`, cy: `16`, r: `5`, ...n }),
        ],
      });
    case `snowflake`:
      return (0, d.jsx)(`path`, {
        d: `M16 3v26M3 16h26M7 7l18 18M25 7 7 25M12 6l4 4 4-4M26 12l-4 4 4 4M20 26l-4-4-4 4M6 20l4-4-4-4`,
        ...n,
      });
    case `eye`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `4`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `1.5`, ...r }),
        ],
      });
    case `mustache`:
      return (0, d.jsx)(`path`, {
        d: `M16 15c-3-6-9-4-12 2 3 8 11 7 12 1 1 6 9 7 12-1-3-6-9-8-12-2Z`,
        ...r,
      });
    case `ghost`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M7 28V14c0-7 4-11 9-11s9 4 9 11v14l-4-3-3 3-3-3-4 3-4-3Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `14`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `14`, r: `1.5`, ...r }),
        ],
      });
    case `paw`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, { cx: `16`, cy: `21`, rx: `7`, ry: `6`, ...r }),
          (0, d.jsx)(`circle`, { cx: `8`, cy: `14`, r: `3`, ...r }),
          (0, d.jsx)(`circle`, { cx: `13`, cy: `9`, r: `3`, ...r }),
          (0, d.jsx)(`circle`, { cx: `19`, cy: `9`, r: `3`, ...r }),
          (0, d.jsx)(`circle`, { cx: `24`, cy: `14`, r: `3`, ...r }),
        ],
      });
    case `bolt`:
      return (0, d.jsx)(`path`, {
        d: `m18 2-11 16h8l-2 12 12-17h-8l1-11Z`,
        ...r,
      });
    case `diamond`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `m16 3 12 13-12 13L4 16 16 3Z`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `2`, ...r }),
        ],
      });
    case `butterfly`:
      return (0, d.jsx)(`path`, {
        d: `M15 14C11 4 4 5 5 12c1 5 5 7 10 6M17 14c4-10 11-9 10-2-1 5-5 7-10 6M16 11v16`,
        ...n,
      });
    case `rocket`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M11 22c-4-8 1-15 10-19 4 9 0 16-8 20l-2-1Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `17`, cy: `11`, r: `2`, ...n }),
          (0, d.jsx)(`path`, { d: `m11 20-6 2 3-6M13 23l-2 6-3-5`, ...n }),
        ],
      });
    case `cherry`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `11`, cy: `22`, r: `5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `22`, cy: `22`, r: `5`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M11 17c1-8 6-10 10-12M22 17c-1-6-4-10-8-12M19 6c3-4 7-3 9 0-3 2-6 2-9 0Z`,
            ...n,
          }),
        ],
      });
    case `ufo`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `18`,
            rx: `13`,
            ry: `5`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M10 16c1-8 11-8 12 0M8 23l-3 5M16 23v6M24 23l3 5`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `9`, cy: `18`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `19`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `23`, cy: `18`, r: `1`, ...r }),
        ],
      });
    case `moon`:
      return (0, d.jsx)(`path`, {
        d: `M20 4a12 12 0 1 0 8 20A10 10 0 0 1 20 4Z`,
        ...n,
      });
    case `sun`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `6`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3`,
            ...n,
          }),
        ],
      });
    case `cloud`:
      return (0, d.jsx)(`path`, {
        d: `M8 22h16a6 6 0 0 0 0-12 8 8 0 0 0-15-2 5 5 0 0 0-1 14Z`,
        ...n,
      });
    case `fire`:
      return (0, d.jsx)(`path`, {
        d: `M16 28c7 0 10-5 10-11 0-6-4-9-6-12-1 4-3 5-4 5 0-4-2-7-4-10-5 5-8 10-8 15 0 7 5 13 12 13Z`,
        ...n,
      });
    case `ice`:
      return (0, d.jsx)(`path`, {
        d: `m16 3 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1 3-7Z`,
        ...n,
      });
    case `fish`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M4 16c6-8 18-8 24 0-6 8-18 8-24 0Z`, ...n }),
          (0, d.jsx)(`path`, { d: `m4 16 4-5v10Z`, ...r }),
          (0, d.jsx)(`circle`, { cx: `22`, cy: `14`, r: `1.2`, ...r }),
        ],
      });
    case `frog`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `18`,
            rx: `10`,
            ry: `8`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `10`, cy: `10`, r: `4`, ...n }),
          (0, d.jsx)(`circle`, { cx: `22`, cy: `10`, r: `4`, ...n }),
          (0, d.jsx)(`circle`, { cx: `10`, cy: `10`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `22`, cy: `10`, r: `1.2`, ...r }),
          (0, d.jsx)(`path`, { d: `M12 20h8`, ...n }),
        ],
      });
    case `owl`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `18`,
            rx: `9`,
            ry: `10`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `15`, r: `3.5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `15`, r: `3.5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `15`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `15`, r: `1.2`, ...r }),
          (0, d.jsx)(`path`, { d: `m14 21 2 2 2-2M10 8l-2-4M22 8l2-4`, ...n }),
        ],
      });
    case `fox`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `m6 24 4-14 6-6 6 6 4 14-10-4Z`, ...n }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `16`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `16`, r: `1`, ...r }),
          (0, d.jsx)(`path`, { d: `m14 20 2 1 2-1`, ...n }),
        ],
      });
    case `wolf`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M5 24c2-10 5-16 11-18 6 2 9 8 11 18l-5-2-6 3-6-3Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `14`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `14`, r: `1`, ...r }),
          (0, d.jsx)(`path`, { d: `M8 8l-3-5M24 8l3-5`, ...n }),
        ],
      });
    case `dog`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M7 14c0-5 4-8 9-8s9 3 9 8v8c0 3-3 5-6 5h-6c-3 0-6-2-6-5Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M7 12c-4 0-5 4-3 6M25 12c4 0 5 4 3 6`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `13`, cy: `15`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `19`, cy: `15`, r: `1`, ...r }),
        ],
      });
    case `bird`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M6 18c4-10 16-12 22-4-6 2-10 4-12 8-2 0-6-1-10-4Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `24`, cy: `12`, r: `1.2`, ...r }),
          (0, d.jsx)(`path`, { d: `m24 14 5 2`, ...n }),
        ],
      });
    case `bee`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, { cx: `16`, cy: `18`, rx: `7`, ry: `5`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M9 18h14M12 15h8M12 21h8M10 12c-4-4-2-8 0-8M22 12c4-4 2-8 0-8`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `13`, cy: `16`, r: `.8`, ...r }),
        ],
      });
    case `spider`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, { cx: `16`, cy: `16`, rx: `5`, ry: `6`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M11 12 4 6M11 16H3M11 20 4 26M21 12l7-6M21 16h8M21 20l7 6`,
            ...n,
          }),
        ],
      });
    case `snake`:
      return (0, d.jsx)(`path`, {
        d: `M6 22c0-8 6-8 10-4s6 2 6-2-4-6-8-4c-6 3-10-1-10-6`,
        ...n,
      });
    case `dragon`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M4 22c4-12 10-16 18-14 2 6-2 12-8 14l-2 4-4-2Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M22 10c4-2 7 0 8 4M14 8l-2-5 4 2`, ...n }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `12`, r: `1`, ...r }),
        ],
      });
    case `unicorn`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M6 22c1-8 5-12 12-12 5 0 8 3 8 8 0 5-4 8-10 8H10Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `m18 10 4-8M10 14h4M8 18c-4 0-5 3-3 4`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `14`, r: `1`, ...r }),
        ],
      });
    case `pizza`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M4 26 16 4l12 22Z`, ...n }),
          (0, d.jsx)(`circle`, { cx: `14`, cy: `16`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `18`, cy: `20`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `22`, r: `1`, ...r }),
        ],
      });
    case `burger`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M6 14h20c0-6-4-8-10-8s-10 2-10 8ZM6 18h20M6 22c2 4 18 4 20 0`,
          ...n,
        }),
      });
    case `donut`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `10`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `4`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M8 10c2-1 3 1 4 0M20 9c1 1 3 0 4 1M22 20c-1 1-3 0-4 1`,
            ...n,
          }),
        ],
      });
    case `coffee`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M8 10h14v10a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M22 12h3a3 3 0 0 1 0 6h-3M11 6c1 2 1 3 0 4M15 5c1 2 1 4 0 5`,
            ...n,
          }),
        ],
      });
    case `icecream`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `m10 14 6 16 6-16Z`, ...n }),
          (0, d.jsx)(`path`, { d: `M9 14a7 7 0 0 1 14 0Z`, ...n }),
        ],
      });
    case `banana`:
      return (0, d.jsx)(`path`, {
        d: `M8 8c8-4 16 2 14 12-6 2-10 0-12-4 4 0 8-2 8-4`,
        ...n,
      });
    case `apple`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M16 8c-8 1-10 10-6 16 3 4 9 4 12 0 4-6 2-15-6-16Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M16 8c1-4 4-5 6-4`, ...n }),
        ],
      });
    case `grape`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `10`, r: `3.5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `16`, r: `3.5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `16`, r: `3.5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `14`, cy: `23`, r: `3.2`, ...n }),
          (0, d.jsx)(`circle`, { cx: `19`, cy: `23`, r: `3.2`, ...n }),
          (0, d.jsx)(`path`, { d: `M16 6V3`, ...n }),
        ],
      });
    case `lemon`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `16`,
            rx: `10`,
            ry: `7`,
            transform: `rotate(-20 16 16)`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M8 12c2-1 3 0 4-1M20 20c2 0 3 1 4 0`,
            ...n,
          }),
        ],
      });
    case `cactus`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M14 28V10a4 4 0 0 1 8 0v6M14 16H8a3 3 0 0 1 0-6M22 16h4a3 3 0 0 0 0-6`,
          ...n,
        }),
      });
    case `tree`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M16 28v-8M8 20c0-8 4-14 8-14s8 6 8 14Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M10 16h12`, ...n }),
        ],
      });
    case `leaf`:
      return (0, d.jsx)(`path`, {
        d: `M6 26C6 12 14 4 28 4 28 18 20 26 6 26Zm8-8 8-8`,
        ...n,
      });
    case `mushroom`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M6 16c0-8 4-12 10-12s10 4 10 12H6Z`, ...n }),
          (0, d.jsx)(`path`, { d: `M12 16v10h8V16`, ...n }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `10`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `18`, cy: `8`, r: `1`, ...r }),
        ],
      });
    case `sword`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `m8 24 4-4 12-12 2 2-12 12-4 4Zm12-16 4 4M10 22l-4 2 2-4`,
          ...n,
        }),
      });
    case `shield`:
      return (0, d.jsx)(`path`, {
        d: `M16 4 26 8v8c0 8-6 12-10 14-4-2-10-6-10-14V8Z`,
        ...n,
      });
    case `axe`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M8 24 22 10M18 6c6 2 8 8 4 12L14 10c4-4 4-4 4-4Z`,
          ...n,
        }),
      });
    case `bow`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M6 8c10 4 10 12 0 16M6 8l20 8L6 24M16 16h10`,
          ...n,
        }),
      });
    case `target`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `7`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `3`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `1.2`, ...r }),
        ],
      });
    case `gamepad`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `4`,
            y: `10`,
            width: `24`,
            height: `14`,
            rx: `6`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M10 17h4M12 15v4M20 15v.01M23 17v.01`,
            ...n,
          }),
        ],
      });
    case `dice`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `5`,
            y: `5`,
            width: `22`,
            height: `22`,
            rx: `3`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `11`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `11`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `21`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `21`, r: `1.5`, ...r }),
        ],
      });
    case `music`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M12 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M15 21V6l12-2v15`, ...n }),
        ],
      });
    case `headphones`:
      return (0, d.jsx)(`path`, {
        d: `M6 18v-4a10 10 0 0 1 20 0v4M6 18a3 3 0 0 0 6 0v-3H6Zm14 0a3 3 0 0 0 6 0v-3h-6Z`,
        ...n,
      });
    case `camera`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `3`,
            y: `10`,
            width: `26`,
            height: `16`,
            rx: `3`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `18`, r: `5`, ...n }),
          (0, d.jsx)(`path`, { d: `M10 10l2-4h8l2 4`, ...n }),
        ],
      });
    case `phone`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `9`,
            y: `3`,
            width: `14`,
            height: `26`,
            rx: `3`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `25`, r: `1.2`, ...r }),
        ],
      });
    case `key`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `11`, cy: `12`, r: `6`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M16 14l10 10v4h-4l-2-2 2-2-2-2-2 2-4-4`,
            ...n,
          }),
        ],
      });
    case `lock`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `7`,
            y: `14`,
            width: `18`,
            height: `14`,
            rx: `2`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M11 14v-4a5 5 0 0 1 10 0v4`, ...n }),
        ],
      });
    case `gift`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `5`,
            y: `12`,
            width: `22`,
            height: `14`,
            rx: `1`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M16 12v14M5 18h22M16 12c-4-6-9-2-9 0h9c0-2 5-6 9 0Z`,
            ...n,
          }),
        ],
      });
    case `balloon`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `12`,
            rx: `8`,
            ry: `10`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `m16 22 2 8M14 22h4`, ...n }),
        ],
      });
    case `clown`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `14`, r: `2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `14`, r: `2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `18`, r: `2.5`, ...r }),
          (0, d.jsx)(`path`, {
            d: `M10 23c3 3 9 3 12 0M8 8c2-4 5-4 8-2M24 8c-2-4-5-4-8-2`,
            ...n,
          }),
        ],
      });
    case `ninja`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`path`, { d: `M5 15h22M10 15c0 2 2 4 6 4s6-2 6-4`, ...n }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `15`, r: `1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `15`, r: `1`, ...r }),
        ],
      });
    case `robot`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`rect`, {
            x: `7`,
            y: `10`,
            width: `18`,
            height: `14`,
            rx: `2`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M16 10V6M10 6h12M11 16h2M19 16h2M12 20h8`,
            ...n,
          }),
        ],
      });
    case `monster`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M5 26V10l4 3 3-5 4 5 3-5 4 5 4-3v16Z`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `11`, cy: `16`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `16`, r: `1.5`, ...r }),
          (0, d.jsx)(`path`, { d: `M12 22h8`, ...n }),
        ],
      });
    case `vampire`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `14`, r: `10`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M8 26c2-4 4-6 8-6s6 2 8 6M12 18l2 4 2-4 2 4 2-4`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `12`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `20`, cy: `12`, r: `1.2`, ...r }),
        ],
      });
    case `pumpkin`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `18`,
            rx: `12`,
            ry: `10`,
            ...n,
          }),
          (0, d.jsx)(`path`, {
            d: `M16 8c0-4 2-5 4-5M10 16h2M20 16h2M12 22c2 2 6 2 8 0`,
            ...n,
          }),
        ],
      });
    case `candy`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `m8 20 4-4 8 8-4 4Zm12-12 4-4 4 4-4 4ZM12 16c4-4 8 0 4 4`,
          ...n,
        }),
      });
    case `cookie`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`circle`, { cx: `12`, cy: `12`, r: `1.3`, ...r }),
          (0, d.jsx)(`circle`, { cx: `19`, cy: `11`, r: `1.1`, ...r }),
          (0, d.jsx)(`circle`, { cx: `14`, cy: `19`, r: `1.2`, ...r }),
          (0, d.jsx)(`circle`, { cx: `21`, cy: `18`, r: `1`, ...r }),
        ],
      });
    case `taco`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M4 18c0-8 5-12 12-12s12 4 12 12c-4 2-20 2-24 0Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M8 16c2-2 4 0 5-1s3 1 5-1 3 1 6 0`, ...n }),
        ],
      });
    case `hotdog`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M6 20c2-10 18-10 20 0-2 6-18 6-20 0Z`,
            ...n,
          }),
          (0, d.jsx)(`path`, { d: `M9 16c3 2 5-2 8 0s5-2 7 0`, ...n }),
        ],
      });
    case `fries`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M6 28V14h20v14ZM9 14V6M13 14V4M17 14V5M21 14V7`,
          ...n,
        }),
      });
    case `soda`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M10 10h12l2 18H8Zm4-6h4l2 6h-8Z`, ...n }),
          (0, d.jsx)(`path`, { d: `M12 16h8M11 22h10`, ...n }),
        ],
      });
    case `umbrella`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M4 16c0-8 5-12 12-12s12 4 12 12H4Zm12 0v10a2 2 0 0 0 4 0`,
          ...n,
        }),
      });
    case `plane`:
      return (0, d.jsx)(`path`, { d: `m4 18 24-8-10 4-2 8-4-6-8 2Z`, ...n });
    case `car`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, {
            d: `M5 18h22l-2-6-4-4H11L7 12Zm3 0v4m16-4v4M9 18h2m10 0h2`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `10`, cy: `22`, r: `2`, ...n }),
          (0, d.jsx)(`circle`, { cx: `22`, cy: `22`, r: `2`, ...n }),
        ],
      });
    case `bike`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `8`, cy: `20`, r: `5`, ...n }),
          (0, d.jsx)(`circle`, { cx: `24`, cy: `20`, r: `5`, ...n }),
          (0, d.jsx)(`path`, { d: `M8 20h6l4-8h4M14 20l4-8M18 12h4`, ...n }),
        ],
      });
    case `boat`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M4 20h24l-4 6H8Zm4-2 4-10h8l4 10`, ...n }),
          (0, d.jsx)(`path`, { d: `M16 8v10`, ...n }),
        ],
      });
    case `house`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `m4 16 12-10 12 10M8 15v11h16V15`, ...n }),
          (0, d.jsx)(`path`, { d: `M13 26v-7h6v7`, ...n }),
        ],
      });
    case `mountain`:
      return (0, d.jsx)(`path`, { d: `m2 26 10-16 4 6 4-8 10 18Z`, ...n });
    case `wave`:
      return (0, d.jsx)(`path`, {
        d: `M2 18c4-6 8-6 12 0s8 6 12 0M2 24c4-6 8-6 12 0s8 6 12 0`,
        ...n,
      });
    case `rainbow`:
      return (0, d.jsx)(`path`, {
        d: `M4 22a12 12 0 0 1 24 0M7 22a9 9 0 0 1 18 0M10 22a6 6 0 0 1 12 0`,
        ...n,
      });
    case `comet`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `22`, cy: `10`, r: `5`, ...n }),
          (0, d.jsx)(`path`, { d: `M18 14 4 28M16 12 6 18M20 16l-8 10`, ...n }),
        ],
      });
    case `planet`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `8`, ...n }),
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `16`,
            rx: `14`,
            ry: `4`,
            transform: `rotate(-20 16 16)`,
            ...n,
          }),
        ],
      });
    case `atom`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `2.5`, ...r }),
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `16`,
            rx: `12`,
            ry: `5`,
            ...n,
          }),
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `16`,
            rx: `12`,
            ry: `5`,
            transform: `rotate(60 16 16)`,
            ...n,
          }),
          (0, d.jsx)(`ellipse`, {
            cx: `16`,
            cy: `16`,
            rx: `12`,
            ry: `5`,
            transform: `rotate(-60 16 16)`,
            ...n,
          }),
        ],
      });
    case `gear`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `5`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M16 4v4M16 24v4M4 16h4M24 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3`,
            ...n,
          }),
        ],
      });
    case `trophy`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M10 26h12M12 22h8l-1 4h-6Zm-2-8V8h16v6c0 4-4 6-8 6s-8-2-8-6ZM8 10H4c0 4 2 6 4 6m16-6h4c0 4-2 6-4 6`,
          ...n,
        }),
      });
    case `medal`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `18`, r: `8`, ...n }),
          (0, d.jsx)(`path`, { d: `m10 4 6 8 6-8M16 14v2`, ...n }),
        ],
      });
    case `flag`:
      return (0, d.jsx)(`path`, { d: `M8 4v24M8 6h16l-4 5 4 5H8`, ...n });
    case `anchor`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `8`, r: `3`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M16 11v15M8 20c0 5 4 8 8 8s8-3 8-8M6 20h4M22 20h4`,
            ...n,
          }),
        ],
      });
    case `compass`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`path`, { d: `m16 8 4 8-4 2-4-2Z`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `1.5`, ...r }),
        ],
      });
    case `bell`:
      return (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(`path`, {
          d: `M10 22a6 6 0 0 0 12 0M8 18V14a8 8 0 0 1 16 0v4l2 2H6Z`,
          ...n,
        }),
      });
    case `thumbs`:
      return (0, d.jsx)(`path`, {
        d: `M8 14h4V8c0-3 2-4 4-2l6 12H8Zm0 0v10h4`,
        ...n,
      });
    case `peace`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`path`, { d: `M16 5v22M16 16l-8 9M16 16l8 9`, ...n }),
        ],
      });
    case `infinity`:
      return (0, d.jsx)(`path`, {
        d: `M8 16c0-4 3-6 6-6 4 0 4 6 8 6s6-2 6-6-3-6-6-6-4 6-8 6-6-2-6-6`,
        ...n,
      });
    case `yin`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M16 5a5.5 5.5 0 0 0 0 11 5.5 5.5 0 0 1 0 11`,
            ...n,
          }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `10.5`, r: `1.5`, ...r }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `21.5`, r: `1.5`, ...n }),
        ],
      });
    case `poison`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `14`, r: `8`, ...n }),
          (0, d.jsx)(`path`, {
            d: `M10 20h12M12 24h8M14 8v2M18 8v2M12 14h.01M20 14h.01M16 17h.01`,
            ...n,
          }),
        ],
      });
    case `potion`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`path`, { d: `M12 4h8v6l4 14H8l4-14Zm2 0h4`, ...n }),
          (0, d.jsx)(`path`, { d: `M10 20c2-2 10-2 12 0`, ...n }),
        ],
      });
    case `crystal`:
      return (0, d.jsx)(`path`, { d: `m16 2 8 10-8 18-8-18Z`, ...n });
    case `coin`:
      return (0, d.jsxs)(d.Fragment, {
        children: [
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `11`, ...n }),
          (0, d.jsx)(`circle`, { cx: `16`, cy: `16`, r: `7`, ...n }),
          (0, d.jsx)(`path`, { d: `M16 11v10M13 14h6M13 18h6`, ...n }),
        ],
      });
    case `arrow`:
      return (0, d.jsx)(`path`, { d: `M16 4v24M8 12l8-8 8 8`, ...n });
    case `spiral`:
      return (0, d.jsx)(`path`, {
        d: `M16 16c0-2 2-2 2 0s-4 4-4 0 6-6 6 0-8 8-8 0 10-10 10 0`,
        ...n,
      });
  }
}
export default function Crosshair({ settings: e, preview: t = !1, displaySize: n }) {
  let {
      color: r,
      opacity: i,
      thickness: a,
      length: o,
      gap: s,
      size: c,
      shape: l,
      outline: u,
    } = e,
    p = c / 2,
    m = e.lineCap ?? `butt`,
    h = Math.min(c - a, p + s + o),
    g = Math.max(a, p - s - o),
    _ = [
      [p, g, p, p - s],
      [p, p + s, p, h],
      [g, p, p - s, p],
      [p + s, p, h, p],
    ],
    v = l === `t-cross` ? _.slice(1) : _,
    y = e.outerLength ?? 0,
    b = e.outerGap ?? s + o + 2,
    x = Math.min(c - 1, p + b + y),
    ee = Math.max(1, p - b - y),
    S =
      y > 0
        ? [
            [p, ee, p, p - b],
            [p, p + b, p, x],
            [ee, p, p - b, p],
            [p + b, p, x, p],
          ]
        : [],
    C = n ?? c;
  function te({ segments: e, width: t, outlinePass: n = !1 }) {
    return e.map(([e, i, a, o], s) =>
      (0, d.jsx)(
        `line`,
        {
          x1: e,
          y1: i,
          x2: a,
          y2: o,
          stroke: n ? `#08090a` : r,
          strokeWidth: n ? t + 2.5 : t,
          strokeLinecap: m,
        },
        `${n ? `o` : `l`}-${s}`,
      ),
    );
  }
  return (0, d.jsxs)(`svg`, {
    className: t ? `crosshair crosshair--preview` : `crosshair`,
    width: C,
    height: C,
    viewBox: `0 0 ${c} ${c}`,
    "aria-label": `Crosshair preview`,
    shapeRendering: `geometricPrecision`,
    style: { opacity: i, overflow: `visible` },
    children: [
      l === `fun` &&
        e.funSymbol &&
        (0, d.jsx)(`g`, {
          transform: `scale(${c / 32})`,
          children: (0, d.jsx)(FunSymbol, { symbol: e.funSymbol, color: r }),
        }),
      (l === `cross` || l === `cross-dot` || l === `t-cross`) &&
        (0, d.jsxs)(d.Fragment, {
          children: [
            u &&
              (0, d.jsx)(te, {
                segments: [...v, ...S],
                width: a,
                outlinePass: !0,
              }),
            (0, d.jsx)(te, { segments: v, width: a }),
            S.length > 0 &&
              (0, d.jsx)(te, {
                segments: S,
                width: e.outerThickness ?? Math.max(1, a - 0.5),
              }),
          ],
        }),
      l === `brackets` &&
        (0, d.jsxs)(d.Fragment, {
          children: [
            u &&
              (0, d.jsx)(te, {
                segments: [
                  [g, g, p - s, g],
                  [g, g, g, p - s],
                  [h, g, p + s, g],
                  [h, g, h, p - s],
                  [g, h, p - s, h],
                  [g, h, g, p + s],
                  [h, h, p + s, h],
                  [h, h, h, p + s],
                ],
                width: a,
                outlinePass: !0,
              }),
            (0, d.jsx)(te, {
              segments: [
                [g, g, p - s, g],
                [g, g, g, p - s],
                [h, g, p + s, g],
                [h, g, h, p - s],
                [g, h, p - s, h],
                [g, h, g, p + s],
                [h, h, p + s, h],
                [h, h, h, p + s],
              ],
              width: a,
            }),
          ],
        }),
      l === `circle` &&
        (0, d.jsxs)(d.Fragment, {
          children: [
            u &&
              (0, d.jsx)(`circle`, {
                cx: p,
                cy: p,
                r: Math.max(1, c / 2 - a - 1),
                fill: `none`,
                stroke: `#08090a`,
                strokeWidth: a + 2.5,
              }),
            (0, d.jsx)(`circle`, {
              cx: p,
              cy: p,
              r: Math.max(1, c / 2 - a - 1),
              fill: `none`,
              stroke: r,
              strokeWidth: a,
            }),
          ],
        }),
      (l === `dot` || l === `cross-dot`) &&
        (0, d.jsxs)(d.Fragment, {
          children: [
            u &&
              (0, d.jsx)(`circle`, {
                cx: p,
                cy: p,
                r: Math.max(1.25, a) + 1.25,
                fill: `#08090a`,
              }),
            (0, d.jsx)(`circle`, {
              cx: p,
              cy: p,
              r: Math.max(1.25, a),
              fill: r,
            }),
          ],
        }),
    ],
  });
}
