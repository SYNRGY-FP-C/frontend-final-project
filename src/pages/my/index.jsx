/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

export default function MyProfile() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: user.fullname ?? "",
    birthdate: user.birthdate ?? "",
    email: user.email ?? "",
    phone_number: user.phone_number ?? "",
    gender: user.gender ?? "",
    occupation: user.occupation ?? "",
  });

  if (isLoading) return <LoadingScreen />;

  if (!isAuthenticated) {
    setTimeout(() => router.push("/login/pencari"), 3000);
    return <LoadingScreen redirect page="login" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      // await MyProfile(form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Data tersimpan",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Data tidak tersimpan",
      });
    }
    console.log(form);
  };

  if (isLoading || !isAuthenticated) {
    return <>Loading...</>;
  }

  return (
    <Defaultlayout title="Profil Saya">
      <Section>
        <div className="my-4 text-5xl font-bold text-blind">Profil</div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="grid lg:col-span-4 place-items-center gap-y-6">
            <div className="text-xl font-medium">
              <img
                src="/images/hero-image.jpg"
                alt="avatar"
                className="w-64 h-64 rounded-full"
              />
            </div>
            <div className="flex flex-row gap-3 lg:flex-col">
              <div className="block">
                <button className="px-4 py-2 text-white rounded-lg bg-blind">
                  Unggah
                </button>
              </div>
              <div className="block">
                <button className="px-4 py-2 bg-white rounded-lg text-blind">
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:col-span-8 gap-y-3">
            {response.message && (
              <Alert type={response.isError ? "error" : "success"}>
                {response.message}
              </Alert>
            )}
            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <InputWithLabel
                labelName="Nama Lengkap"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
              <InputWithLabel
                labelName="Tanggal Lahir"
                type="date"
                value={form.birthdate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    birthdate: e.target.value,
                  })
                }
              />
              <InputWithLabel
                labelName="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
              <InputWithLabel
                labelName="Nomor Telepon"
                type="number"
                value={form.phone_number}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone_number: e.target.value,
                  })
                }
              />
              <InputWithLabel
                labelName="Jenis Kelamin"
                type="text"
                value={form.gender}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender: e.target.value,
                  })
                }
              />
              <InputWithLabel
                labelName="Pekerjaan"
                type="text"
                value={form.occupation}
                onChange={(e) =>
                  setForm({
                    ...form,
                    occupation: e.target.value,
                  })
                }
              />

              <div className="grid col-span-2">
                <InputWithLabel labelName="Upload scan KTP" type="file" />
              </div>
              <div className="grid col-span-2 place-content-end">
                <div className="flex flex-row gap-x-4">
                  <div className="block">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white rounded-lg bg-blind"
                    >
                      Simpan
                    </button>
                  </div>
                  <div className="block">
                    <button className="px-4 py-2 bg-white border rounded-lg text-blind border-blind">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </Defaultlayout>
  );
}
