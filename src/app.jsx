import { CornerPiece } from './CornerPiece';
import { FlowerCover } from './FlowerCover';
import { Wheel } from './Wheel';
import { WheelBorder } from './WheelBorder';
import { WheelStand } from './WheelStand';

export const App = (_) => {
  return (
    <>
      <WheelStand />
      <WheelBorder />
      <Wheel />
      <FlowerCover />
      <img className="cloudLeft" src="./cloudleft.png" alt="Left cloud" />
      <img className="cloudRight" src="./cloudright.png" alt="Right cloud" />
      <img
        id="leftshadow"
        className="cloudLeft"
        src="./cloudleft.png"
        alt="Left cloud"
      />
      <img
        id="rightshadow"
        className="cloudRight"
        src="./cloudright.png"
        alt="Right cloud"
      />
      <img className="pick" src="./pick.png" alt="Wheel pick" />
      <CornerPiece className="corner topleft" />
      <CornerPiece className="corner topright" />
      <CornerPiece className="corner bottomleft" />
      <CornerPiece className="corner bottomright" />
    </>
  );
};
