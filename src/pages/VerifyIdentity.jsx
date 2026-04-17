import React from "react";

const VerifyIdentity = () => {
  return (
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-md flex overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-1/3 bg-gray-50 p-6 border-r">
        <h2 className="text-xs font-semibold text-gray-500 tracking-widest mb-6">
          RESOURCE DETAILS
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Type</span>
            <span className="text-gray-800">Protected Document</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="text-gray-800">RFQ_LIST_PARTS.pdf</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span className="text-gray-800">Apr 9, 2026</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Security</span>
            <span className="text-red-600 font-medium">MFA Required</span>
          </div>
        </div>

        {/* File Icon */}
        <div className="mt-10 flex justify-center">
          <div className="w-14 h-16 border border-gray-200 font-bold rounded-md flex items-center justify-center relative">
            📄
            <span className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
              +
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/3 p-10 flex flex-col items-center">
        {/* Lock Icon */}
        <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 mb-4 ">
          🔒
        </div>

        <h2 className="text-2xl font-semibold mb-2">Verify your identity</h2>

        <p className="text-gray-500 text-center mb-6">
          To access this document, please complete verification with Microsoft.
        </p>

        {/* Code Box */}
        <div className="w-full bg-[#0f172a] text-center rounded-xl py-6 mb-6">
          <p className="text-xs text-gray-400 tracking-widest mb-2">
            YOUR VERIFICATION CODE
          </p>
          <h1 className="text-red-500 text-3xl font-bold tracking-widest">
            EHGL288J9
          </h1>

          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md">
            Copy Code
          </button>
        </div>

        {/* Steps */}
        <div className="w-full bg-gray-50 border border-gray-50 rounded-lg p-4 mb-6 text-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
              1
            </span>
            <span>Copy the code above</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
              2
            </span>
            <span>Click the button below and paste it</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium mb-4">
          ⬜ Continue to Microsoft
        </button>

        {/* Footer Note */}
        <div className="text-sm text-gray-500 flex items-center gap-2">
          🔒 <span>Secured by Microsoft</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyIdentity;
