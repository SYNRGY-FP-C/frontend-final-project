/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

export default function LoginPencari() {
  const router = useRouter();
  const { loginPencari, isLoading, isAuthenticated } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  if (isLoading) return <LoadingScreen />;

  if (isAuthenticated) {
    setTimeout(() => router.push("/verify"), 2500);
    return <LoadingScreen redirect page="verification" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      await loginPencari(form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Berhasil Log In",
      });
    } catch (err) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Gagal Log In",
      });
    }
  };

  return (
    <DefaultLayout title="Masuk - Pencari">
      <Section>
        <div className="flex flex-col flex-1 gap-y-6">
          <h5 className="text-3xl font-semibold md:text-5xl text-blind">
            Masuk - Pencari
          </h5>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12">
              <div className="grid col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-3">
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
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                    <InputWithLabel
                      labelName="Password"
                      type="password"
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      required
                    />
                    <Link href="/" className="text-xs text-center">
                      Lupa password
                    </Link>
                    <button
                      type="submit"
                      className="px-4 py-3 text-white rounded-lg bg-blind"
                    >
                      {!response.isLoading ? "Masuk" : "Loading..."}
                    </button>
                  </form>
                  <div className="relative">
                    <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                    <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                      atau
                    </p>
                  </div>
                  <button className="px-4 py-3 bg-white border rounded-lg text-blind border-blind">
                    Masuk dengan Google
                  </button>
                  <Link
                    href="/register/pencari"
                    className="text-xs text-center"
                  >
                    Saya belum memiliki akun{" "}
                  </Link>
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
