import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-white border-b px-6 py-3 flex items-center">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <div className="text-red-600 text-3xl font-extrabold">A</div>
          <span className="text-xl font-bold">Adobe Acrobat Sign</span>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-yellow-100 border-t border-b border-yellow-300 px-6 py-2 text-sm text-yellow-800 flex items-center gap-2">
        ⚠️
        <span className="text-lg">
          <strong>Security Notice:</strong> Identity verification is required to
          access this resource. This is enforced by your organization's security
          policy.
        </span>
      </div>
    </div>
  );
};

export default Navbar;
