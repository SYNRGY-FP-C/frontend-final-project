/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/forms/InputPassword";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import AuthPage from "@/layouts/AuthPage";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginPemilik() {
  const { loginPemilik } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await loginPemilik({ email, password });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Berhasil Log In",
      });
    } catch (error) {
      setResponse({ isLoading: false, isError: true, message: "Gagal Log In" });
    }
  };

  // Akhir Tambahan
  return (
    <AuthPage>
      <DefaultLayout title="Masuk - Pemilik">
        <Section>
          <div className="flex flex-col flex-1 pt-8 md:pt-12 gap-y-6">
            <div className="flex flex-col gap-y-4">
              <div className="grid grid-cols-12 my-6 md:py-20 md:px-20">
                <div className="grid col-span-12 lg:col-span-4 place-content-center">
                  <div className="flex flex-col gap-y-3">
                    <h5 className="text-xl leading-none mt-6 font-bold md:text-[28px] text-primary-1">
                      Selamat Datang Kembali!
                    </h5>
                    <p className="text-base font-bold text-primary-3">
                      Masuk sebagai Pemilik Kost
                    </p>
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
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <InputPassword
                        labelName="Password"
                        placeholder="Password"
                        value={password}
                        show={showPassword}
                        setShow={() => setShowPassword(!showPassword)}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Link href="/" className="text-xs text-center">
                        Lupa password
                      </Link>
                      <Button
                        className="px-4 py-3 text-white rounded-lg bg-primary-1"
                        type="submit"
                        disabled={response.isLoading}
                        isLoading={response.isLoading}
                      >
                        Masuk
                      </Button>

                      <div className="relative">
                        <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                        <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-base-9 top-1/2 left-1/2">
                          atau
                        </p>
                      </div>
                      <button
                        disabled
                        className="px-4 py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1 disabled:bg-base-8"
                      >
                        Masuk dengan Google
                      </button>
                      <Link
                        href="/register/pemilik"
                        className="text-xs text-center"
                      >
                        Saya belum memiliki akun{" "}
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="hidden lg:grid md:col-span-8 place-content-center">
                  <div className="flex justify-center object-cover w-full h-full max-w-lg overflow-hidden md:pl-32">
                    <img
                      className="object-cover w-full rounded-xl"
                      src="/images/login-pemilik.png"
                      alt="Test"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </AuthPage>
  );
}
