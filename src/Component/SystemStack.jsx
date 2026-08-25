import React, { useMemo, useState } from 'react';

/* Fig. 01 — Anatomy of a product system.
   Flattened isometric (20deg) exploded view. All geometry derives from the plan
   rectangle W x D, so the whole figure scales from a handful of constants. */

const CX = 0.93969; // cos 20deg
const CY = 0.34202; // sin 20deg
const W = 186;      // plan width  (reads as 420 on the dimension line)
const D = 133;      // plan depth
const OX = 230;     // plan origin, screen x
const OY = 250;     // plan origin, screen y
const GAP = 58;     // exploded spacing between layers
const T = 12;       // plate thickness
const T_BASE = 34;  // cloud base thickness

const pt = (x, y, z) => [OX + (x - y) * CX, OY + (x + y) * CY - z];

/* a circle of radius r in the plan projects to an axis aligned ellipse */
const ER = (r) => [r * CX * Math.SQRT2, r * CY * Math.SQRT2];

const lerp = (a, b, d) => {
  const vx = b[0] - a[0];
  const vy = b[1] - a[1];
  const len = Math.hypot(vx, vy);
  const k = Math.min(d, len / 2) / len;
  return [a[0] + vx * k, a[1] + vy * k];
};

/* rounded outline of a plan rectangle, flattened to points so the extruded
   wall can reuse the same corner samples */
function outline(x0, y0, x1, y1, z, r = 9, seg = 5) {
  const corners = [pt(x0, y0, z), pt(x1, y0, z), pt(x1, y1, z), pt(x0, y1, z)];
  const out = [];
  for (let i = 0; i < 4; i++) {
    const p = corners[i];
    const a = lerp(p, corners[(i + 3) % 4], r);
    const b = lerp(p, corners[(i + 1) % 4], r);
    out.push(a);
    for (let k = 1; k <= seg; k++) {
      const t = k / seg;
      const m = 1 - t;
      out.push([
        m * m * a[0] + 2 * m * t * p[0] + t * t * b[0],
        m * m * a[1] + 2 * m * t * p[1] + t * t * b[1],
      ]);
    }
  }
  return out;
}

const toPath = (pts) =>
  'M' + pts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L') + 'Z';

/* the chain of samples forming either the near (front) or far (back)
   silhouette, walking between the left-most and right-most corner */
function chain(pts, front) {
  let li = 0;
  let ri = 0;
  pts.forEach((p, i) => {
    if (p[0] < pts[li][0]) li = i;
    if (p[0] > pts[ri][0]) ri = i;
  });
  const step = front ? -1 : 1;
  const out = [];
  for (let i = li; ; i = (i + step + pts.length) % pts.length) {
    out.push(pts[i]);
    if (i === ri) break;
  }
  return out;
}

const wall = (pts, t, front = true) => {
  const c = chain(pts, front);
  return toPath(c.concat(c.map((p) => [p[0], p[1] + t]).reverse()));
};

/* dashed grid ruled across a plate top face */
function grid(z) {
  const l = [];
  for (let i = 1; i < 3; i++) {
    l.push([pt((W / 3) * i, 0, z), pt((W / 3) * i, D, z)]);
    l.push([pt(0, (D / 3) * i, z), pt(W, (D / 3) * i, z)]);
  }
  return l;
}

function Cylinder({ x, y, z, r, h, stroke, fill }) {
  const [rx, ry] = ER(r);
  const [cx, cy] = pt(x, y, z);
  return (
    <g stroke={stroke} fill={fill}>
      <path d={'M' + (cx - rx) + ',' + cy + 'v' + h + 'a' + rx + ',' + ry + ' 0 0 0 ' + rx * 2 + ',0v' + -h} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
    </g>
  );
}

const LAYERS = [
  { id: '01', name: 'INTERFACE', level: 4 },
  { id: '02', name: 'API', level: 3 },
  { id: '03', name: 'AGENT', level: 2 },
  { id: '04', name: 'DATA', level: 1 },
  { id: '05', name: 'CLOUD', level: 0 },
];

const CORNERS = [[0, 0], [W, 0], [W, D], [0, D]];
const CLOUD_MARK =
  'M-16,6 a7,7 0 0 1 1,-13.6 a9.5,9.5 0 0 1 17.6,-3.4 a7.5,7.5 0 0 1 11,5.4 a6,6 0 0 1 -1.6,11.6 z';

const SystemStack = () => {
  const [active, setActive] = useState('03');

  const geo = useMemo(
    () =>
      LAYERS.map((l) => {
        const z = l.level * GAP;
        return {
          ...l,
          z,
          t: l.id === '05' ? T_BASE : T,
          top: outline(0, 0, W, D, z),
          rim: outline(8, 6, W - 8, D - 6, z, 7),
          hole: outline(22, 16, W - 22, D - 16, z, 5),
          bar: outline(22, D / 2 - 3, W - 22, D / 2 + 3, z, 2),
        };
      }),
    []
  );

  return (
    <svg
      viewBox="0 0 700 430"
      className="w-full h-auto select-none"
      role="img"
      aria-label="Exploded view of a product system: interface, API, agent, data and cloud layers."
    >
      <defs>
        <marker id="ss-arw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="var(--color-graphite)" />
        </marker>
        <marker id="ss-arw-s" viewBox="0 0 8 8" refX="1" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M8,0 L0,4 L8,8 z" fill="var(--color-graphite)" />
        </marker>
      </defs>

      {/* exploded projection lines through matching corners */}
      <g stroke="var(--color-rule)" strokeWidth="1" strokeDasharray="4 4">
        {CORNERS.map(([x, y], i) => {
          const a = pt(x, y, 4 * GAP);
          const b = pt(x, y, 0);
          return <line key={i} x1={a[0]} y1={a[1] - 26} x2={b[0]} y2={b[1] + T_BASE + 20} />;
        })}
      </g>

      {geo.map((l) => {
        const on = l.id === active;
        const ink = on ? 'var(--color-cobalt)' : 'var(--color-ink)';
        const soft = on ? 'var(--color-cobalt)' : 'var(--color-graphite)';
        return (
          <g
            key={l.id}
            onClick={() => setActive(l.id)}
            className="cursor-pointer"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {/* extruded side walls, then the top face */}
            <path
              d={wall(l.top, l.t)}
              fill={on ? 'rgba(49,94,156,.12)' : 'rgba(17,19,24,.05)'}
              stroke={ink}
              strokeWidth="1.15"
            />

            {l.id === '02' ? (
              <>
                <path
                  d={toPath(l.top) + ' ' + toPath(l.hole)}
                  fillRule="evenodd"
                  fill="var(--color-paper)"
                  stroke={ink}
                  strokeWidth="1.15"
                />
                <path d={wall(l.hole, l.t, false)} fill="rgba(17,19,24,.05)" stroke={ink} strokeWidth="1" />
                <path d={wall(l.bar, l.t)} fill="rgba(17,19,24,.05)" stroke={ink} strokeWidth="1" />
                <path d={toPath(l.bar)} fill="var(--color-paper)" stroke={ink} strokeWidth="1" />
              </>
            ) : (
              <path
                d={toPath(l.top)}
                fill={on ? 'rgba(49,94,156,.07)' : 'var(--color-paper)'}
                stroke={ink}
                strokeWidth="1.15"
              />
            )}

            {/* inner rim + ruled grid */}
            {l.id !== '02' && <path d={toPath(l.rim)} fill="none" stroke={soft} strokeWidth="0.7" opacity="0.5" />}
            <g stroke={soft} strokeWidth="0.7" strokeDasharray="3 3" opacity="0.4" fill="none">
              {grid(l.z).map(([a, b], i) => (
                <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
              ))}
            </g>

            {/* 01 — interface: nested window frames */}
            {l.id === '01' && (
              <g fill="none" stroke={soft} strokeWidth="0.9">
                <path d={toPath(outline(72, 36, 152, 102, l.z, 6))} />
                <path d={toPath(outline(86, 50, 138, 88, l.z, 5))} />
                <path d={toPath(outline(20, 12, 58, 40, l.z, 5))} />
              </g>
            )}

            {/* 03 — agent: hub, spokes and satellite nodes */}
            {l.id === '03' && (
              <g>
                <g stroke="var(--color-cobalt)" strokeWidth="1.1">
                  {[[36, 52], [150, 74], [70, 112], [116, 116]].map(([nx, ny], i) => {
                    const a = pt(93, 62, l.z + 6);
                    const b = pt(nx, ny, l.z);
                    return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />;
                  })}
                  <line
                    x1={pt(93, 62, l.z + 6)[0]}
                    y1={pt(93, 62, l.z + 6)[1]}
                    x2={pt(93, 62, l.z + 42)[0]}
                    y2={pt(93, 62, l.z + 42)[1]}
                  />
                </g>
                {[[36, 52, 6], [150, 74, 6], [70, 112, 5], [116, 116, 5]].map(([nx, ny, r], i) => (
                  <Cylinder key={i} x={nx} y={ny} z={l.z} r={r} h={3} stroke="var(--color-cobalt)" fill="rgba(49,94,156,.22)" />
                ))}
                <Cylinder x={93} y={62} z={l.z + 42} r={5} h={2.5} stroke="var(--color-cobalt)" fill="rgba(49,94,156,.22)" />
                <Cylinder x={93} y={62} z={l.z + 6} r={15} h={9} stroke="var(--color-cobalt)" fill="rgba(49,94,156,.35)" />
              </g>
            )}

            {/* 04 — data: stacked stores */}
            {l.id === '04' &&
              [[30, 46, 11], [64, 50, 11], [98, 54, 12], [132, 58, 13]].map(([nx, ny, r], i) => (
                <Cylinder key={i} x={nx} y={ny} z={l.z} r={r} h={9} stroke={soft} fill="var(--color-paper)" />
              ))}

            {/* 05 — cloud: footprint outlines + cloud mark */}
            {l.id === '05' && (
              <g>
                {[[38, 40, 15], [84, 62, 14], [130, 86, 15]].map(([nx, ny, r], i) => {
                  const [rx, ry] = ER(r);
                  const [cx, cy] = pt(nx, ny, l.z);
                  return (
                    <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={soft} strokeWidth="0.9" strokeDasharray="4 3" />
                  );
                })}
                <g transform={'translate(' + pt(158, 106, l.z)[0] + ' ' + pt(158, 106, l.z)[1] + ')'}>
                  <path d={CLOUD_MARK} transform="translate(2 5)" fill="rgba(17,19,24,.07)" stroke={soft} strokeWidth="1" />
                  <path d={CLOUD_MARK} fill="var(--color-paper)" stroke={ink} strokeWidth="1.2" />
                </g>
              </g>
            )}
          </g>
        );
      })}

      {/* 540 — overall height */}
      <g stroke="var(--color-graphite)" strokeWidth="0.9" fill="none">
        <line x1="76" y1={pt(0, D, 4 * GAP)[1]} x2="76" y2={pt(0, D, 0)[1]} markerStart="url(#ss-arw-s)" markerEnd="url(#ss-arw)" />
        <line x1="80" y1={pt(0, D, 4 * GAP)[1]} x2="104" y2={pt(0, D, 4 * GAP)[1]} strokeDasharray="3 3" opacity="0.7" />
        <line x1="80" y1={pt(0, D, 0)[1]} x2="104" y2={pt(0, D, 0)[1]} strokeDasharray="3 3" opacity="0.7" />
      </g>
      <text
        x="52"
        y={(pt(0, D, 4 * GAP)[1] + pt(0, D, 0)[1]) / 2 + 4}
        textAnchor="middle"
        fontSize="12.5"
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
      >
        540
      </text>

      {/* 420 — overall width */}
      <g stroke="var(--color-graphite)" strokeWidth="0.9" fill="none">
        <line x1={pt(0, D, 0)[0]} y1={pt(0, D, 0)[1] + T_BASE + 4} x2={pt(0, D, 0)[0]} y2="404" strokeDasharray="3 3" opacity="0.7" />
        <line x1={pt(W, 0, 0)[0]} y1={pt(W, 0, 0)[1] + T_BASE + 4} x2={pt(W, 0, 0)[0]} y2="404" strokeDasharray="3 3" opacity="0.7" />
        <line x1={pt(0, D, 0)[0]} y1="398" x2="228" y2="398" markerStart="url(#ss-arw-s)" />
        <line x1="282" y1="398" x2={pt(W, 0, 0)[0]} y2="398" markerEnd="url(#ss-arw)" />
      </g>
      <text x="255" y="402" textAnchor="middle" fontSize="12.5" fontFamily="var(--font-mono)" fill="var(--color-ink)">
        420
      </text>

      {/* layer callouts */}
      {geo.map((l) => {
        const on = l.id === active;
        const y = pt(W, 0, l.z)[1];
        return (
          <g key={l.id} onClick={() => setActive(l.id)} className="cursor-pointer">
            <line
              x1={pt(W, 0, l.z)[0] + 6}
              y1={y}
              x2="452"
              y2={y}
              stroke={on ? 'var(--color-cobalt)' : 'var(--color-graphite)'}
              strokeWidth="0.9"
              strokeDasharray="5 4"
            />
            <rect x="456" y={y - 9} width="26" height="18" rx="3" fill="none" stroke={on ? 'var(--color-cobalt)' : 'var(--color-rule)'} strokeWidth="1" />
            <text x="469" y={y + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill={on ? 'var(--color-cobalt)' : 'var(--color-graphite)'}>
              {l.id}
            </text>
            <text x="493" y={y + 4.5} fontSize="13" letterSpacing="0.06em" fontFamily="var(--font-mono)" fill={on ? 'var(--color-cobalt)' : 'var(--color-ink)'}>
              {l.name}
            </text>
          </g>
        );
      })}

      {/* active layer indicator */}
      <g transform={'translate(628 ' + pt(W, 0, 0)[1] + ')'}>
        <circle r="9" fill="none" stroke="var(--color-cobalt)" strokeWidth="1.6" />
        <circle r="4" fill="var(--color-cobalt)" />
      </g>

      <text x="493" y="372" fontSize="11.5" fontFamily="var(--font-mono)" fill="var(--color-graphite)">
        <tspan x="493">Fig. 01 —</tspan>
        <tspan x="493" dy="16">Anatomy of a</tspan>
        <tspan x="493" dy="16">product system.</tspan>
      </text>
    </svg>
  );
};

export default SystemStack;
