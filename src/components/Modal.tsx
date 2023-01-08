import clsx from "clsx";
import React from "react";

export default function Modal({
  children = "children",
  isOpen = false,
  setIsOpen,
}) {
  return (
    <div
      className={clsx("relative z-10", {
        ["hidden"]: !isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 transform">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex flex-col items-center justify-center px-6 py-12 gap-y-6">
              <div className="w-24 h-24 rounded-lg bg-blind-200"></div>
              <p className="text-xl text-center text-blind">
                Anda harus melengkapi profil untuk melanjutkan registrasi
              </p>
              <button className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-blind">
                Lengkapi Profile
              </button>
              <button className="inline-flex justify-center w-full px-4 py-3 bg-white border rounded-lg text-blind border-blind">
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
