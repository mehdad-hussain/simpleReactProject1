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
        <button
          className='p-4 text-yellow-200 bg-gray-900  hover:border-gray-900'
          onClick={() => displayContent((a) => !a)}
        >
          Toggle Content
        </button>
      </div>

      {!contentStatus ? (
        <div>No Content</div>
      ) : (
        // Here's where the animated hook comes into play
        <animated.div
          className='bg-blue-500 shadow card col-10'
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
