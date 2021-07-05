import { useSpring, animated, config } from "react-spring";
import React, { useState } from "react";

function Number() {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.div className='text-center'>
      {number.to((n) => n.toFixed(2))}
    </animated.div>
  );
}
export default Number;
