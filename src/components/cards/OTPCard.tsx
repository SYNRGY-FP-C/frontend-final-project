import { phoneNumberFormatter } from "@/utils/helper";
import React from "react";

type OTPCardProps = {
  target: string;
  method: "email" | "whatsapp";
  children: React.ReactNode;
};

export default function OTPCard({
  target = "0888888888888",
  method = "whatsapp",
  children,
}: OTPCardProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-sm mx-auto md:max-w-lg">
        <div className="w-full">
          <div className="py-3 space-y-4 text-center bg-white rounded">
            <h1 className="text-[40px] font-bold text-primary-1">
              OTP Verifikasi
            </h1>
            <p className="max-w-xs mt-4">
              Masukkan kode OTP yang telah dikirim ke{" "}
              <span className="font-bold text-primary-1">
                {method === "email" ? target : phoneNumberFormatter(target)}
              </span>
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
