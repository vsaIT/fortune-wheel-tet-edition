import { useState, useRef } from 'react';
const data = [
  { text: '1', color: 'yellow' },
  { text: '2', color: 'red' },
  { text: '3', color: 'yellow' },
  { text: '4', color: 'red' },
  { text: '5', color: 'yellow' },
  { text: '6', color: 'red' },
  { text: '7', color: 'yellow' },
  { text: '8', color: 'red' },
  { text: '9', color: 'yellow' },
  { text: '10', color: 'red' },
  { text: '11', color: 'yellow' },
  { text: '12', color: 'red' },
  { text: '13', color: 'yellow' },
  { text: '14', color: 'red' },
];

export const Wheel = () => {
  const wof = useRef(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    const deg = Math.abs(Math.floor(Math.random() * (1024 - 9999)) + 9999);
    wof.current.style.transitionTimingFunction =
      'cubic-bezier(0.19, 1, 0.22, 1)';
    wof.current.style.transitionDuration = '5s';
    wof.current.style.transitionProperty = 'transform';
    wof.current.style.transform = 'rotate(' + deg + 'deg)  translateZ(0px)';
    setSpinning(true);
    setTimeout(function () {
      wof.current.style.transitionDuration = '0s';
      wof.current.style.transform =
        'rotate(' + (deg % 360) + 'deg)  translateZ(0px)';
      setSpinning(false);
    }, 5500);
  };
  return (
    <div id="mainbox" class="mainbox">
      <div ref={wof} id="box" class="box">
        <ul class="circle">
          {data.map((num, i) => {
            const n = 360 / data.length;
            const d = n * i;
            return (
              <li style={{ transform: `rotate(${d}deg) skewY(-${90 - n}deg)` }}>
                <div
                  class="text"
                  style={{
                    background: num.color,
                    transform: `skewY(${90 - n}deg) rotate(${n / 2}deg) `,
                  }}
                >
                  {num.text}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <button class="spin" disabled={spinning} onClick={spin}>
        SPIN
      </button>
    </div>
  );
};
