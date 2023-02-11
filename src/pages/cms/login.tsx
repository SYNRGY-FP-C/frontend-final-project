/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import AuthPage from "@/layouts/AuthPage";
import Head from "next/head";
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
      <Head>
        <title>CMS Login</title>
      </Head>
      <div className="w-full min-h-screen p-4 bg-[#FAFAFB] justify-center items-center">
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
                    <Button
                      type="submit"
                      className="px-4 py-3 text-white rounded-lg bg-primary-1"
                      isLoading={response.isLoading}
                    >
                      Masuk
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthPage>
  );
}
