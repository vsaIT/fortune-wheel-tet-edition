import { useState, useRef, useEffect } from 'react';
import Reward from 'react-rewards';

const colors = [
  'radial-gradient(80% 80% at 50% 50%, #ffff59 0%, #ffa602 100%)',
  'radial-gradient(80% 80% at 50% 50%, #ff2337 0%, #cc1323 100%)',
];
const initialData = [
  { text: '1', color: colors[0] },
  { text: '2', color: colors[1] },
  { text: '3', color: colors[0] },
  { text: '4', color: colors[1] },
  { text: '5', color: colors[0] },
  { text: '6', color: colors[1] },
  { text: '1', color: colors[0] },
  { text: '2', color: colors[1] },
  { text: '3', color: colors[0] },
  { text: '4', color: colors[1] },
  { text: '5', color: colors[0] },
  { text: '6', color: colors[1] },
];

export const Wheel = () => {
  const wof = useRef(null);
  const reward = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const [data, setData] = useState(initialData);

  const setWheelNumber = (n) => {
    const d = [];
    let c = 0;
    for (let i = 0; i < n; i++) {
      d.push({ text: String(i + 1), color: colors[c % 2] });
      c++;
    }
    for (let i = 0; i < n; i++) {
      d.push({ text: String(i + 1), color: colors[c % 2] });
      c++;
    }
    setData(d);
  };

  useEffect(() => {
    console.log('[*] setData() and setWheelNumber() for wheel customization');
    window.setWheel = setData;
    window.setWheelNumber = setWheelNumber;
  }, []);

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
          lifetime: 210,
          angle: 90,
          decay: 0.93,
          spread: 90,
          startVelocity: 28,
          elementCount: 100,
          elementSize: 10,
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
