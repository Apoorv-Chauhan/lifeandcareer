import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 border-t px-6 py-3 flex items-center justify-between text-sm text-gray-500">
      {/* Left */}
      <div>© 2026 Adobe. All rights reserved.</div>

      {/* Right */}
      <div className="flex items-center gap-2 ">
        🔒
        <span className="text-gray-600">Protected by Microsoft Entra ID</span>
      </div>
    </div>
  );
};

export default Footer;
