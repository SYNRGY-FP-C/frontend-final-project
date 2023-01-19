/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

// Tambahan
export default function LoginPenyedia() {
  const router = useRouter();
  const { loginPenyedia, isLoading, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
  });

  if (isLoading) return <LoadingScreen />;

  // if (isAuthenticated) {
  //   setTimeout(() => router.push("/verify"), 2500);
  //   return <LoadingScreen redirect page="verification" />;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      await loginPenyedia({ email, password });
      setResponse({ isLoading: false, isError: true });
      router.push("/");
    } catch (error) {
      setResponse({ isLoading: false, isError: true });
    }
  };

  // Akhir Tambahan
  return (
    <DefaultLayout title="Masuk - Penyedia">
      <Section>
        <div className="flex flex-col flex-1 pt-8 md:pt-12 gap-y-6">
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12 my-6">
              <div className="grid col-span-12 lg:col-span-4 place-content-center">
                <div className="flex flex-col gap-y-3">
                  <h5 className="text-xl leading-none my-6 font-bold md:text-[28px] text-primary-1">
                    Selamat Datang Kembali!
                  </h5>
                  <form
                    className="flex flex-col gap-y-3"
                    onSubmit={handleSubmit}
                  >
                    {response.message && (
                      <Alert type={response.isError ? "error" : "success"}>
                        {response.message}
                      </Alert>
                    )}
                    <InputWithLabel
                      labelName="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <InputWithLabel
                      labelName="Password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Link href="/" className="text-xs text-center">
                      Lupa password
                    </Link>
                    <button
                      className="px-4 py-3 text-white rounded-lg bg-primary-1"
                      type="submit"
                    >
                      {!response.isLoading ? "Masuk" : "Loading..."}
                    </button>

                    <div className="relative">
                      <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                      <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-base-900 top-1/2 left-1/2">
                        atau
                      </p>
                    </div>
                    <button className="px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1">
                      Masuk dengan Google
                    </button>
                    <Link
                      href="/register/penyedia"
                      className="text-xs text-center"
                    >
                      Saya belum memiliki akun{" "}
                    </Link>
                  </form>
                </div>
              </div>
              <div className="hidden lg:grid md:col-span-8 place-content-center">
                <div className="flex justify-center object-cover w-full h-full max-w-lg overflow-hidden">
                  <img
                    className="object-cover w-full rounded-xl"
                    src="/images/hero-image.jpg"
                    alt="Test"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
