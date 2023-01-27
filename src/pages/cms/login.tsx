/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import AuthPage from "@/layouts/AuthPage";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Login() {

  const { loginPencari } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
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
      <AuthPage>
      <DefaultLayout title="Masuk - Pencari">
        <Section>
          <div className="flex flex-col flex-1 pt-8 md:pt-12 gap-y-6">
            <div className="flex flex-col gap-y-4">
              <div className="grid-cols-12 my-6 md:py-20 md:px-20">
                <div className="grid col-span-12 lg:col-span-4 place-content-center">
                  <div className="flex flex-col gap-y-3">
                    <h5 className="text-xl leading-none mt-6 font-bold md:text-[28px] text-primary-1">
                      Selamat Datang Di KostHub!
                    </h5>
                    <p className="text-base font-bold text-primary-3">
                      Masuk sebagai Super Admin
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
                        className="px-4 py-3 text-white rounded-lg bg-primary-1"
                        disabled={response.isLoading}
                      >
                        {!response.isLoading ? "Masuk" : "Loading..."}
                      </button>
                      <div className="relative">
                        <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                        <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-base-900 top-1/2 left-1/2">
                          atau
                        </p>
                      </div>
                      <button className="px-4 py-3 border rounded-lg bg-base-900 text-primary-1 border-primary-1">
                        Masuk dengan Google
                      </button>
                      <Link
                        href="/register/pencari"
                        className="text-xs text-center"
                      >
                        Saya belum memiliki akun{" "}
                      </Link>
                      </form>
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
