import React from 'react';

export default function ComparePhone() {
  return (
    <div
      className="h-[70%] w-[90%] mx-auto my-0 flex
    border-4 border-ourly-theme bg-white"
    >
      <div className="w-[40%] md:w-[30%] h-full">
        <img src="/img/compare-phone-title.webp" className="h-full" />
      </div>
      <div className="w-[60%] md:w-[70%] h-full overflow-x-auto">
        <div className="w-[280%] md:w-[140%] h-full">
          <img
            src="/img/compare-phone-content.webp"
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}
