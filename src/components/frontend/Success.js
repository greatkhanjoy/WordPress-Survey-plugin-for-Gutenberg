import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col gap-3 p-4 min-h-[400px] justify-center mx-auto">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl leading-normal font-normal">
          Survey complete! Thank you for you time.
        </h1>
        <button className="inline px-6 py-2 text-lg border border-green-600 text-green-600 bg-transparent">
          SUBMIT SURVEY
        </button>
      </div>
    </div>
  );
};

export default Success;
