import React from "react";

const VerifyHuman = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* <div className="w-full max-w-2xl min-h-200 bg-white rounded-2xl shadow-lg overflow-hidden"> */}
      <div className="w-full max-w-xl min-h-162.5 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-8 font-semibold text-2xl">
          🔒 Verify You Are Human
        </div>

        {/* Content */}
        <div className="p-10 ">
          <p className="text-gray-600 text-center mb-4 text-xl">
            Please enter your email address to continue.
          </p>

          {/* Input */}
          <label className="block text-md font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="user@business.com"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />

          {/* Button */}
          <button
            className="w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
            onClick={() => navigate("/next")}
          >
            Continue
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-lg text-gray-700">
          <p className="font-semibold mb-1">Important Notice</p>
          <p>
            This page verifies human users. Your email is used only for access
            validation and is not stored permanently. By clicking "Continue",
            you consent to this verification process.
          </p>

          <div className="mt-6 inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
            Privacy Protected
          </div>

          <p className="mt-12  text-gray-700 text-center">
            © 2025 Identity Assurance
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyHuman;
