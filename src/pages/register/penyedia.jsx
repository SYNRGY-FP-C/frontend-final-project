/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Checkbox from "@/components/forms/Checkbox";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterPenyedia() {
  const router = useRouter();
  const { registerPenyedia, isLoading, isAuthenticated } = useAuth();
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    repassword: "",
  });

  if (isLoading) return <LoadingScreen />;

  // if (isAuthenticated) {
  //   setTimeout(() => router.push("/verify"), 2500);
  //   return <LoadingScreen redirect page="verification" />;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    if (form.password !== form.repassword) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Konfirmasi password tidak sama",
      });
      return;
    }
    try {
      await registerPenyedia(form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Pendaftaran berhasil",
      });
      router.push("/verify");
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Pendaftaran gagal",
      });
    }
  };

  return (
    <DefaultLayout title="Buat akun - Penyedia">
      <Section>
        <div className="flex flex-col flex-1 pt-8 md:pt-12 gap-y-6">
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12 my-6">
              <div className="grid col-span-12 lg:col-span-4 place-content-center">
                <div className="flex flex-col gap-y-3">
                  <h5 className="text-xl leading-none my-6 font-bold md:text-[28px] text-primary-1">
                    Buat Akun
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
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                    <InputWithLabel
                      labelName="Nomor telepon"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
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
                    <InputWithLabel
                      labelName="Konfirmasi password"
                      type="password"
                      value={form.repassword}
                      onChange={(e) =>
                        setForm({ ...form, repassword: e.target.value })
                      }
                      required
                    />
                    <Checkbox required>
                      Saya menyetujui Terms of Service yang berlaku
                    </Checkbox>
                    <button
                      type="submit"
                      className="px-4 py-3 text-white rounded-lg bg-primary-1"
                    >
                      {!response.isLoading ? "Daftar" : "Loading..."}
                    </button>
                    <div className="relative">
                      <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                      <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                        atau
                      </p>
                    </div>
                    <button className="px-4 py-3 bg-white border rounded-lg text-primary-1 border-primary-1">
                      Daftar dengan Google
                    </button>
                    <Link
                      href="/login/penyedia"
                      className="text-xs text-center"
                    >
                      Saya sudah memiliki akun{" "}
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
