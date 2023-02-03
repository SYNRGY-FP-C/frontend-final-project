/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import InputDropzone from "@/components/forms/InputDropzone";
import InputWithLabel from "@/components/forms/InputWithLabel";
import RadioButton from "@/components/forms/RadioButton";
import File from "@/components/icons/File";
import { GENDER } from "@/constants/gender";
import { IDENTITIES } from "@/constants/identities";
import { ROLE_ADMIN, ROLE_SUPERADMIN, ROLE_USER } from "@/constants/roles";
import { useAuth } from "@/contexts/AuthContext";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import { originalDate } from "@/utils/helper";
import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const [preview, setPreview] = React.useState();
  const { user, updateProfile, updateIdentity } = useAuth();
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    fullname: user?.fullname || "",
    birthdate: user?.birthdate || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    occupation: user?.occupation || "",
  });

  const [identity, setIdentity] = useState({
    email: user?.email || "",
    phone: user?.phone || "",
    type: user?.type || "",
    photo: user?.photo || null,
  });

  useEffect(() => {
    if (user) {
      setForm({
        fullname: user?.fullname || "",
        birthdate: user?.birthdate ? originalDate(user?.birthdate) : "",
        email: user?.email || "",
        phone: user?.phone || "",
        gender: user?.gender || "",
        occupation: user?.occupation || "",
        photo: user?.photo || null,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      const formData = new FormData();
      formData.append("fullname", form.fullname);
      formData.append(
        "birthdate",
        moment(new Date(form.birthdate)).format("DD-MM-YYYY")
      );
      formData.append("phone", form.phone);
      formData.append("gender", form.gender);
      formData.append("occupation", form.occupation);

      const identityData = new FormData();
      identityData.append("email", identity.email);
      identityData.append("phone", identity.phone);
      identityData.append("type", identity.type);
      identityData.append("photo", identity.photo);

      await updateProfile(formData);
      await updateIdentity(identityData);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Data tersimpan",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Data gagal disimpan",
      });
    }
  };

  const handleReset = () => {
    setPreview(null);
    setForm({
      fullname: user?.fullname || "",
      birthdate: user?.birthdate ? originalDate(user?.birthdate) : "",
      phone: user?.phone || "",
      gender: user?.gender || "",
      occupation: user?.occupation || "",
      photo: user?.photo || null,
    });
  };

  return (
    <ProtectedPage
      allowed={[ROLE_USER, ROLE_ADMIN, ROLE_SUPERADMIN]}
      redirect="/403"
    >
      <Defaultlayout title="Profil Saya">
        <Section>
          <div className="grid grid-cols-1 gap-3 pt-16 my-4 lg:grid-cols-12 ">
            <div className="grid lg:col-span-4">
              <div className="flex flex-col gap-y-3">
                <BackButton />
                <h2 className="text-[40px] font-bold text-primary-1 text-center">
                  Profil
                </h2>
                <div className="flex flex-col items-center gap-y-6">
                  <div className="text-xl font-medium">
                    <img
                      src={
                        user?.photo ||
                        "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                      }
                      alt="avatar"
                      className="w-64 h-64 rounded-full"
                    />
                  </div>
                  <div className="flex flex-row gap-3 lg:flex-col">
                    <div className="block">
                      <Button className="px-4 py-2 text-white rounded-lg w-28 bg-primary-1">
                        Unggah
                      </Button>
                    </div>
                    <div className="block">
                      <button className="px-4 py-2 rounded-lg bg-base-9 w-28 text-error">
                        Hapus
                      </button>
                    </div>
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
              <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                <h3 className="my-4 text-3xl font-bold gap-y-3 text-primary-1">
                  Edit Profil
                </h3>
                <InputWithLabel
                  labelName="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  type="text"
                  value={form.fullname}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fullname: e.target.value,
                    })
                  }
                  required
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
                  required
                />
                <RadioButton
                  labelName="Jenis Kelamin"
                  options={GENDER}
                  value={form.gender}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      gender: e.target.value,
                    })
                  }
                  required
                />
                <InputWithLabel
                  labelName="Pekerjaan"
                  placeholder="Pekerjaan"
                  type="text"
                  value={form.occupation}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      occupation: e.target.value,
                    })
                  }
                  required
                />

                <div className="my-4 text-3xl font-bold text-primary-1">
                  Verifikasi Akun
                </div>
                <InputWithLabel
                  labelName="Email"
                  placeholder="Email"
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
                  placeholder="Nomor Telepon"
                  type="number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
                <RadioButton
                  labelName="Verifikasi Identitas"
                  options={IDENTITIES}
                  value={identity.type}
                  onChange={(e) =>
                    setIdentity({
                      ...identity,
                      type: e.target.value,
                    })
                  }
                  required
                />

                <div className="grid col-span-2">
                  <InputDropzone
                    labelName="Unggah Foto Identitas"
                    icon={<File />}
                    preview={preview}
                    onChange={(e) => {
                      setIdentity({ ...identity, photo: e.target.files[0] });
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    required
                  />
                </div>
                <div className="grid col-span-2 lg:place-content-end">
                  <div className="flex flex-row mt-3 gap-x-4">
                    <div className="block">
                      <Button
                        type="submit"
                        className="px-4 py-2.5 text-white rounded-lg w-36 bg-primary-1"
                        disabled={response.isLoading}
                        isLoading={response.isLoading}
                      >
                        Simpan
                      </Button>
                    </div>
                    <div className="block">
                      <Button
                        type="button"
                        className="px-4 py-2.5 rounded-lg w-36 bg-base-9 text-error"
                        onClick={() => handleReset()}
                      >
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
    </ProtectedPage>
  );
}
