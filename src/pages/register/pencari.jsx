<<<<<<< HEAD
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const { registerUser, isLoading } = useAuth();
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
  })
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false });
    try {
      await registerUser(form);
      setResponse({ isLoading: false, isError: false });
    } catch (error) {
      setResponse({ isLoading: false, isError: true });
    }
    console.log(form);
  };

  return (
    <div >
      <form title="Register" className="flex flex-col" onSubmit={handleSubmit}>
      {response.isError && (
            <alert>Something went wrong. Please try again.</alert>
          )}
        <input type="text" placeholder="Nama" label="FullName" value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })}/>
        <input type="email" placeholder="email" label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="password" label="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
=======
/* eslint-disable @next/next/no-img-element */
import Checkbox from "@/components/forms/Checkbox";
import InputWithLabel from "@/components/forms/InputWithLabel";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import React from "react";

export default function RegisterPencari() {
  return (
    <DefaultLayout title="Buat akun - Pencari">
      <Section>
        <div className="flex flex-col flex-1 gap-y-6">
          <h5 className="text-3xl font-semibold md:text-5xl text-blind">
            Buat akun
          </h5>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12">
              <div className="grid col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-3">
                  <InputWithLabel labelName="Email" />
                  <InputWithLabel labelName="Nomor telepon" />
                  <InputWithLabel labelName="Password" />
                  <InputWithLabel labelName="Konfirmasi password" />
                  <Checkbox>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at felis id odio tristique maximus.
                  </Checkbox>
                  <button className="px-4 py-3 text-white rounded-lg bg-blind">
                    Daftar
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
                    href="/register/pencari"
                    className="text-xs text-center"
                  >
                    Saya sudah memiliki akun{" "}
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
>>>>>>> 2d960bb600dbee7b1ef7e76d4ab490deaf260522
  );
}
