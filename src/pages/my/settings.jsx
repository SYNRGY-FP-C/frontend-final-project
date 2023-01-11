/* eslint-disable @next/next/no-img-element */
import InputWithLabel from "@/components/forms/InputWithLabel";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Alert from "@/components/Alert";

export default function Settings() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    lastPass: user.lastPass ?? "",
    newPass: user.newPass ?? "",
    confirmnewPass: user.confirmnewPass ?? "",
  });

  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();
  setResponse({ isLoading: true, isError: false, message:"" });
  if(form.newPass !== form.confirmnewPass){
    setResponse({ isLoading: true, isError: true, message:"Konfirmasi Password tidak sama" });
    return;
  }
    try {
      // await MyProfile(form);
      setResponse({isLoading: false, isError: false, message:"Password berhasil diubah"});
    } catch (error){
      setResponse({isLoading: false, isError: true, message:"Password gagal diubah"})
    }
  console.log(form);
}

  return (
    <Defaultlayout title="Pengaturan">
      <Section>
        <div className="my-4 text-5xl font-bold text-blind">Pengaturan</div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="grid lg:col-span-4 place-items-center gap-y-6"></div>
          {response.message && (
                <Alert type={response.isError ? "error" : "success"}>
                  {response.message}
                </Alert>
              )}
          <form className="grid lg:col-span-8 gap-y-3" onSubmit={handleSubmit}>
            <InputWithLabel 
              labelName="Password lama" 
              type="password"
              value={form.lastPass}
              onChange={(e) =>
                setForm({
                  ...form,
                  lastPass: e.target.value,
                })
              }
            />
            <InputWithLabel 
              labelName="Password baru" 
              type="password"
                value={form.newPass}
                onChange={(e) =>
                  setForm({
                    ...form,
                    newPass: e.target.value,
                  })
                }
            />
            <InputWithLabel 
              labelName="Konfirmasi password baru" 
              type="password"
              value={form.confirmnewPass}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmnewPass: e.target.value,
                })
              }
            />

            <div className="block">
              <button type="submit" className="px-4 py-2 text-white rounded-lg bg-blind">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </Section>
    </Defaultlayout>
  );
}
