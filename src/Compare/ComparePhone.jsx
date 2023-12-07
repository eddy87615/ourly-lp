import React from 'react';
import Image from 'next/image';

export default function ComparePhone() {
  return (
    <div
      className="h-[70%] w-[90%] mx-auto my-0 flex
    border-4 border-ourly-theme bg-white"
    >
      <div className="w-[50%] md:w-[40%] h-full">
        <Image
          width={200}
          height={300}
          src="/img/compare-phone-title.webp"
          alt="comparation title picture of phone version."
          className="h-full"
        />
      </div>
      <div className="w-[50%] md:w-[60%] h-full overflow-x-auto">
        <div className="w-[380%] md:w-[190%] h-full">
          <Image
            width={800}
            height={500}
            src="/img/compare-phone-content.webp"
            alt="comparation picture of phone version."
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}
