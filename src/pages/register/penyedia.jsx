/* eslint-disable @next/next/no-img-element */
import Checkbox from "@/components/forms/Checkbox";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Alert from "@/components/Alert";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterPenyedia() {
  const router = useRouter();
  const { registerPenyedia, isLoading } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      // await registerPenyedia(form);
      setResponse({ isLoading: false, isError: false, message: "success" });
      router.push("/verify");
    } catch (error) {
      setResponse({ isLoading: false, isError: true, message: "error" });
    }
    console.log(form);
  };

  return (
    <DefaultLayout title="Buat akun - Penyedia">
      <Section>
        <div className="flex flex-col flex-1 gap-y-6">
          <h5 className="text-3xl font-semibold md:text-5xl text-blind">
            Buat akun
          </h5>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12">
              <div className="grid col-span-12 lg:col-span-4">
                <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
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
                  />
                  <InputWithLabel
                    labelName="Nomor telepon"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <InputWithLabel
                    labelName="Password"
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <InputWithLabel
                    labelName="Konfirmasi password"
                    type="password"
                    value={form.repassword}
                    onChange={(e) =>
                      setForm({ ...form, repassword: e.target.value })
                    }
                  />
                  <Checkbox>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at felis id odio tristique maximus.
                  </Checkbox>
                  <button
                    type="submit"
                    className="px-4 py-3 text-white rounded-lg bg-blind"
                  >
                    {!response.isLoading ? "Daftar" : "Loading..."}
                  </button>
                  <div className="relative">
                    <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                    <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
                      atau
                    </p>
                  </div>
                  <button className="px-4 py-3 bg-white border rounded-lg text-blind border-blind">
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
