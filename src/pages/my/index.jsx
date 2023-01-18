/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import RadioButton from "@/components/forms/RadioButton";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

import VerifIdentitasButton from "../../components/forms/VerifIdentitasButton";

export default function MyProfile() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: user?.fullname || "",
    birthdate: user?.birthdate || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    occupation: user?.occupation || "",
  });

  if (isLoading) return <LoadingScreen />;

  // if (!isAuthenticated) {
  //   setTimeout(() => router.push("/login/pencari"), 1500);
  //   return <LoadingScreen redirect page="login" />;
  // }

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

  return (
    <Defaultlayout title="Profil Saya">
      <Section>
        <div className="pt-12 my-4 text-5xl font-bold text-primary-1">
          Profil
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="grid lg:col-span-4">
            <div className="flex flex-col items-center gap-y-6">
              <div className="text-xl font-medium">
                <img
                  src="/images/hero-image.jpg"
                  alt="avatar"
                  className="w-64 h-64 rounded-full"
                />
              </div>
              <div className="flex flex-row gap-3 lg:flex-col">
                <div className="block">
                  <Button className="px-4 py-2 text-white rounded-lg bg-primary-1">
                    Unggah
                  </Button>
                </div>
                <div className="block">
                  <button className="px-4 py-2 bg-white rounded-lg text-error">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:col-span-8 gap-y-3">
            {response.message && (
              <Alert type={response.isError ? "error" : "success"}>
                {response.message}
              </Alert>
            )}
            <form className="cols" onSubmit={handleSubmit}>
              <h3 className="my-4 text-3xl font-bold gap-y-3 text-primary-1">
                Edit Profil
              </h3>
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
              <div>
                Jenis Kelamin
                <RadioButton
                  type="radio"
                  value={form.gender}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      gender: e.target.value,
                    })
                  }
                />
              </div>
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

              <div className="my-4 text-3xl font-bold text-primary-1">
                Verifikasi Akun
              </div>
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
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />
              <h3>
                Verifikasi Identitas
                <VerifIdentitasButton />
              </h3>
              <div className="grid col-span-2">
                <InputWithLabel labelName="Unggah Foto Identitas" type="file" />
              </div>
              <div className="grid col-span-2 place-content-end">
                <div className="flex flex-row mt-3 gap-x-4">
                  <div className="block">
                    <Button
                      type="submit"
                      className="px-4 py-2 text-white rounded-lg bg-primary-1"
                    >
                      Simpan
                    </Button>
                  </div>
                  <div className="block">
                    <Button className="px-4 py-2 bg-white border rounded-lg text-primary-1 border-primary-1">
                      Reset
                    </Button>
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
