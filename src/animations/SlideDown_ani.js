import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const SlideDown = (props) => {
  const [contentStatus, displayContent] = useState(false);

  // Here's our useSpring Hook to define start and end states
  const contentProps = useSpring({
    opacity: contentStatus ? 1 : 0,
    marginTop: contentStatus ? 0 : -1000,
    delay: 100,
  });

  return (
    <div className='container'>
      <div className='button-container'>
        <button onClick={() => displayContent((a) => !a)} className='button'>
          Toggle Content
        </button>
      </div>
      {!contentStatus ? (
        <div>No Content</div>
      ) : (
        // Here's where the animated hook comes into play
        <animated.div
          className='card col-10 shadow bg-blue-500'
          style={contentProps}
        >
          <h1 className='p-2'>
            This content slid down. Thanks to React Spring
          </h1>
        </animated.div>
      )}
    </div>
  );
};

export default SlideDown;
