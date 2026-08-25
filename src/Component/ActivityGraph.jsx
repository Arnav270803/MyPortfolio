import React from 'react';

/* Fig. 02 — Building rhythm / last 52 weeks.
   Real contribution levels for @Arnav270803, 2025-08-24 to 2026-08-25.
   Refresh with:
     curl -s https://github.com/users/Arnav270803/contributions
   then re-read the data-date / data-level pairs in document order. */

const LEVELS = ['#EDECE7', '#C4C9CF', '#8B929A', '#525A64', '#1E242B'];
const CELL = 10;
const GAP = 2;

/* one digit per day, starting on a Sunday and running column by column */
const DAYS =
  '0131223202301120201241110101120110000110102004400111000100000121021102' +
  '4012111110102101110011211010100002011312244003101110112100010101000221' +
  '0132000000000001000010000213000000100000002310111000010100000000000000' +
  '0000000000000000000000000100202000011012200100100011010000001000110020' +
  '0012000000000000000000001112000010130143111101211110001001000001003001' +
  '00000000010000010';

/* [label, column] — a month is labelled at the week it starts in */
const MONTHS = [['Aug', 0], ['Sep', 2], ['Oct', 6], ['Nov', 10], ['Dec', 15], ['Jan', 19], ['Feb', 23], ['Mar', 27], ['Apr', 32], ['May', 36], ['Jun', 41], ['Jul', 45], ['Aug', 49]];

const ActivityGraph = () => (
  <div className="px-5 sm:px-6 py-5 border-b border-rule">
    <div className="overflow-x-auto">
      <div className="w-[688px]">
        <div className="relative h-4 w-[634px] text-[11px] text-graphite">
          {MONTHS.map(([label, col]) => (
            <span key={label + col} className="absolute top-0" style={{ left: col * (CELL + GAP) }}>
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between mt-1">
          <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
            {DAYS.split('').map((level, i) => (
              <span
                key={i}
                className="w-[10px] h-[10px] rounded-[1px]"
                style={{ backgroundColor: LEVELS[Number(level)] }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center gap-[3px] text-[10px] text-graphite shrink-0">
            <span>More</span>
            {[4, 3, 2, 1].map((l) => (
              <span key={l} className="w-[10px] h-[10px] rounded-[1px]" style={{ backgroundColor: LEVELS[l] }} />
            ))}
            <span>Less</span>
          </div>
        </div>

        <p className="text-[11.5px] text-graphite mt-3">Fig. 02 — Building rhythm / last 52 weeks.</p>
      </div>
    </div>
  </div>
);

export default ActivityGraph;
