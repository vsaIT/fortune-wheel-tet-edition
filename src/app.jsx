import { Logo } from './logo';
import { Wheel } from './wheel';

// https://missingdice.com/spin-the-wheel/

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <Wheel />
    </>
  );
}
