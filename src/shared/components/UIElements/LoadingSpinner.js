const LoadingSpinner = (props) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center w-full h-full bg-white/90'>
      {/* JIT mode opacity shortcut color/90  */}
      <div className='w-[46px] h-[46px] border-[5px] rounded-full animate-spin border-t-purple-900 border-r-transparent border-b-purple-900 border-l-transparent'></div>
    </div>
  );
};

export default LoadingSpinner;

// import React from "react";

// import "./LoadingSpinner.css";

// const LoadingSpinner = (props) => {
//   return (
//     <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
//       <div className='lds-dual-ring'></div>
//     </div>
//   );
// };

// export default LoadingSpinner;
