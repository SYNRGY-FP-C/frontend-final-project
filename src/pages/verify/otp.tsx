/* eslint-disable @next/next/no-img-element */
import OTPCard from "@/components/cards/OTPCard";
import InputOTP from "@/components/forms/InputOTP";
import LoadingScreen from "@/components/LoadingScreen";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function OTP() {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  const { target, method } = router.query;
  const [otp, setOtp] = React.useState("");
  const onChange = (value: string) => setOtp(value);

  useEffect(() => {
    if (
      !target ||
      !method ||
      target === "undefined" ||
      method === "undefined"
    ) {
      router.push("/verify");
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [router, method, target]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <DefaultLayout title="Verifikasi OTP">
      <Section>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="grid h-full grid-cols-12 lg:gap-x-24">
            <div className="hidden lg:grid md:col-span-6 place-content-end">
              <div className="flex justify-center object-cover overflow-hidden w-96 h-96">
                <img
                  className="object-cover w-full rounded-xl"
                  src="/images/hero-image.jpg"
                  alt="Test"
                />
              </div>
            </div>
            <div className="grid col-span-12 lg:col-span-6 place-content-center lg:place-content-start">
              <OTPCard
                method={method as "email" | "whatsapp"}
                target={target as string}
              >
                <InputOTP value={otp} valueLength={4} onChange={onChange} />

                <div className="flex justify-center text-center">
                  <a className="flex items-center space-x-1">
                    <span className="text-blind">Belum muncul?</span>
                    <span className="text-blind">Kirim ulang OTP</span>
                  </a>
                </div>
                <div className="flex flex-col gap-y-4">
                  <button className="px-4 py-3 text-white rounded-lg bg-blind">
                    Verifikasi
                  </button>
                  <Link
                    href="/verify"
                    className="px-4 py-3 bg-white border rounded-lg border-blind text-blind"
                  >
                    Ganti Metode
                  </Link>
                </div>
              </OTPCard>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
