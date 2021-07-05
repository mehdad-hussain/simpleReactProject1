import React, { useState } from "react";
// import ReactDOM from "react-dom";

import { useSpring, animated, config } from "react-spring";

function Text() {
  const [flip, set] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: false,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 className='text-center' style={props}>
      Hello
    </animated.h1>
  );
}
export default Text;
