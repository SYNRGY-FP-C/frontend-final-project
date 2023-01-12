/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import OTPCard from "@/components/cards/OTPCard";
import InputOTP from "@/components/forms/InputOTP";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import verifyService from "@/services/verify.service";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

export default function OTP() {
  const { user, isLoading, isAuthenticated, isVerified } = useAuth();
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const router = useRouter();
  const { method } = router.query;
  const [otp, setOtp] = React.useState("");
  const onChange = (value: string) => setOtp(value);

  const requestVerify = useCallback(async () => {
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await verifyService.requestVerify({
        ...(method === "email" && { email: user.email }),
        ...(method === "whatsapp" && { phone_number: user.phone_number }),
      });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kode OTP berhasil dikirim",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Kode OTP gagal dikirim",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  const verifyOTP = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await verifyService.verify({
        ...(method === "email" && { email: user.email }),
        ...(method === "whatsapp" && { phone_number: user.phone_number }),
        code: otp,
      });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kode OTP berhasil diverifikasi",
      });

      setTimeout(() => router.push("/"), 2500);
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Kode OTP gagal diverifikasi",
      });
    }
  };

  useEffect(() => {
    if (
      router.isReady &&
      isAuthenticated &&
      !isVerified &&
      method &&
      method !== "undefined"
    ) {
      requestVerify();
      return;
    }
  }, [isAuthenticated, isVerified, method, requestVerify, router.isReady]);

  if (isLoading) return <LoadingScreen />;

  if (isVerified) {
    setTimeout(() => router.push("/"), 2500);
    return <LoadingScreen redirect page="home" />;
  }

  if (!method || method === "undefined") {
    setTimeout(() => router.push("/verify"), 2500);
    return <LoadingScreen redirect page="verification method" />;
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
            <form
              className="grid col-span-12 lg:col-span-6 place-content-center lg:place-content-start"
              onSubmit={verifyOTP}
            >
              {response.message && (
                <Alert type={response.isError ? "error" : "success"}>
                  {response.message}
                </Alert>
              )}
              <OTPCard
                method={method as "email" | "whatsapp"}
                target={method === "email" ? user.email : user.phone_number}
              >
                <InputOTP value={otp} valueLength={4} onChange={onChange} />
                <div className="flex justify-center text-center">
                  <a className="flex items-center space-x-1">
                    <span className="text-blind">Belum muncul?</span>
                    <span
                      className="font-semibold cursor-pointer text-blind"
                      onClick={() => requestVerify()}
                    >
                      Kirim ulang OTP
                    </span>
                  </a>
                </div>
                <div className="flex flex-col gap-y-4">
                  <button
                    className="px-4 py-3 text-white rounded-lg bg-blind"
                    disabled={response.isLoading}
                  >
                    {response.isLoading ? "Loading..." : "Verifikasi"}
                  </button>
                  <Link
                    href="/verify"
                    className="px-4 py-3 bg-white border rounded-lg border-blind text-blind"
                  >
                    Ganti Metode
                  </Link>
                </div>
              </OTPCard>
            </form>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
