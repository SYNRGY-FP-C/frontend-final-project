/* eslint-disable @next/next/no-img-element */
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import React, { useState } from "react";

// Tambahan
export default function LoginPenyedia() {
  const { loginPenyedia, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      await loginPenyedia({ email, password });
      setResponse({ isLoading: false, isError: true });
    } catch (error) {
      setResponse({ isLoading: false, isError: true });
    }
    console.log({ email, password });
  };

  // Akhir Tambahan
  return (
    <DefaultLayout title="Masuk - Penyedia">
      <Section>
        <div className="flex flex-col flex-1 gap-y-6">
          <h5 className="text-3xl font-semibold md:text-5xl text-blind">
            Masuk
          </h5>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12">
              <div className="grid col-span-12 lg:col-span-4">
                <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                  <InputWithLabel
                    labelName="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputWithLabel
                    labelName="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Link href="/" className="text-xs text-center">
                    Lupa password
                  </Link>
                  <button
                    className="px-4 py-3 text-white rounded-lg bg-blind"
                    type="submit"
                  >
                    Masuk
                  </button>

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
                    href="/register/penyedia"
                    className="text-xs text-center"
                  >
                    Saya belum memiliki akun{" "}
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
