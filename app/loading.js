import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">

      <p className="mt-4 text-gray-600 text-sm"><span className="loading loading-ring loading-xl"></span>
      </p>
    </div>
  );
};

export default loading;
