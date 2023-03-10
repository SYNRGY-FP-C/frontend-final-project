/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import OTPCard from "@/components/cards/OTPCard";
import InputOTP from "@/components/forms/InputOTP";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import AuthPage from "@/layouts/AuthPage";
import Section from "@/layouts/Section";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";

export default function OTP() {
  const { user, requestOTP, verifyOTP, isAuthenticated, isLoading } = useAuth();
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
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
    setMinutes(1);
    setSeconds(30);
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await requestOTP({
        ...(method === "email" && { email: user?.email }),
        ...(method === "whatsapp" && { phone: user?.phone }),
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

  const verifyOTPHandle = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await verifyOTP({
        ...(method === "email" && { email: user?.email }),
        ...(method === "whatsapp" && { phone: user?.phone }),
        code: otp,
      });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kode OTP berhasil diverifikasi",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Kode OTP gagal diverifikasi",
      });
    }
  };

  const checkPoint = async () => {
    if (router.isReady && (!method || method === "undefined")) {
      setTimeout(() => router.push("/verify"), 1500);
      return;
    }

    if (
      isAuthenticated &&
      !user?.verified &&
      method &&
      method !== "undefined"
    ) {
      await requestVerify();
      return;
    }
  };

  useEffect(() => {
    // if (!isLoading || !router.isReady) return;
    checkPoint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  if (isLoading || !method || method === "undefined") {
    return <LoadingScreen />;
  }
  return (
    <>
      <AuthPage otp>
        <Head>
          <title>Verifikasi OTP</title>
        </Head>
        <div className="flex flex-col flex-wrap min-h-screen bg-base-9">
          <main className="flex items-center justify-center flex-1">
            <Section>
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="grid h-full grid-cols-12 lg:gap-x-24">
                  <div className="hidden lg:grid md:col-span-6 place-content-end">
                    <div className="flex justify-center object-cover overflow-hidden w-96">
                      <img
                        className="object-cover w-full rounded-xl"
                        src="/images/otp-image.png"
                        alt="OTP Image"
                      />
                    </div>
                  </div>
                  <form
                    className="grid col-span-12 lg:col-span-6 place-content-center lg:place-content-start"
                    onSubmit={verifyOTPHandle}
                  >
                    {response.message && (
                      <Alert type={response.isError ? "error" : "success"}>
                        {response.message}
                      </Alert>
                    )}
                    <OTPCard
                      method={method as "email" | "whatsapp"}
                      target={method === "email" ? user?.email : user?.phone}
                    >
                      <InputOTP
                        value={otp}
                        valueLength={4}
                        onChange={onChange}
                      />
                      <div className="flex justify-center text-center">
                        <a className="flex items-center space-x-1">
                          <span className="text-primary-1">Belum muncul?</span>
                          {seconds > 0 || minutes > 0 ? (
                            <span className="font-semibold text-secondary-1">
                              {minutes < 10 ? `0${minutes}` : minutes}:
                              {seconds < 10 ? `0${seconds}` : seconds}
                            </span>
                          ) : (
                            <span
                              className="font-semibold cursor-pointer text-secondary-1"
                              onClick={() => requestVerify()}
                            >
                              Kirim ulang OTP
                            </span>
                          )}
                        </a>
                      </div>
                      <div className="flex flex-col gap-y-4">
                        <Button
                          isLoading={response.isLoading}
                          disabled={response.isLoading || otp.length < 4}
                        >
                          Verifikasi
                        </Button>
                        <Link
                          href="/verify"
                          className="px-10 py-3 border-2 rounded-lg bg-base-9 border-primary-1 text-primary-1"
                        >
                          Ganti Metode
                        </Link>
                      </div>
                    </OTPCard>
                  </form>
                </div>
              </div>
            </Section>
          </main>
        </div>
      </AuthPage>
    </>
  );
}
