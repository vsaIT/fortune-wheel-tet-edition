import { useState, useRef } from 'react';
import Reward from 'react-rewards';

const colors = [
  'radial-gradient(80% 80% at 50% 50%, #ffff59 0%, #ffa602 100%)',
  'radial-gradient(80% 80% at 50% 50%, #ff2337 0%, #cc1323 100%)',
];
const data = [
  { text: '1', color: colors[0] },
  { text: '2', color: colors[1] },
  { text: '3', color: colors[0] },
  { text: '4', color: colors[1] },
  { text: '5', color: colors[0] },
  { text: '6', color: colors[1] },
  { text: '7', color: colors[0] },
  { text: '8', color: colors[1] },
  { text: '9', color: colors[0] },
  { text: '10', color: colors[1] },
  { text: '11', color: colors[0] },
  { text: '12', color: colors[1] },
  { text: '13', color: colors[0] },
  { text: '14', color: colors[1] },
];

export const Wheel = () => {
  const wof = useRef(null);
  const reward = useRef(null);
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
      reward.current.rewardMe();
    }, 5500);
  };
  return (
    <>
      <Reward
        ref={reward}
        className="reward"
        type="confetti"
        config={{
          lifetime: 200,
          angle: 90,
          decay: 0.94,
          spread: 90,
          startVelocity: 35,
          elementCount: 60,
          elementSize: 8,
          zIndex: 10,
          springAnimation: true,
        }}
      >
        <button onClick={reward?.current?.fetchSomeData} />
      </Reward>
      <div id="mainbox" class="mainbox wheel">
        <div ref={wof} id="box" class="box">
          <ul class="circle">
            {data.map((num, i) => {
              const n = 360 / data.length;
              const d = n * i;
              return (
                <li
                  style={{ transform: `rotate(${d}deg) skewY(-${90 - n}deg)` }}
                >
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
    </>
  );
};
