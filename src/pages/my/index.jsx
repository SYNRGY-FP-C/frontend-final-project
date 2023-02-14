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
import { originalDate, urlToObject } from "@/utils/helper";
import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const [previewProfile, setPreviewProfile] = React.useState();
  const [preview, setPreview] = React.useState();
  const { user, updateProfile, updateIdentity, updateBank } = useAuth();
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    fullname: user?.fullname || "",
    birthdate: user?.birthdate ? originalDate(user?.birthdate) : "",
    gender: user?.gender || "",
    occupation: user?.occupation || "",
    photo: user?.photo ? urlToObject(user?.photo).then((result) => result) : "",
  });

  const [identity, setIdentity] = useState({
    email: user?.email || "",
    phone: user?.phone || "",
    type: user?.verification?.type || "",
    photo: user?.verification?.photo
      ? urlToObject(user?.verification?.photo).then((result) => result)
      : "",
  });

  const [bank, setBank] = useState({
    bank_name: user?.bank?.bank_name || "",
    account_number: user?.bank?.account_number || "",
    account_name: user?.bank?.account_name || "",
  });

  const getUserProfile = async () => {
    setForm({
      fullname: user?.fullname || "",
      birthdate: user?.birthdate ? originalDate(user?.birthdate) : "",
      gender: user?.gender || "",
      occupation: user?.occupation || "",
      photo: (await urlToObject(user?.photo)) || "",
    });
    setIdentity({
      email: user?.email || "",
      phone: user?.phone || "",
      type: user?.verification?.type || "",
      photo: (await urlToObject(user?.verification?.photo)) || "",
    });
    setBank({
      bank_name: user?.bank?.bank_name || "",
      account_number: user?.bank?.account_number || "",
      account_name: user?.bank?.account_name || "",
    });
    setPreview(user?.verification?.photo || "");
    setPreviewProfile(user?.photo || "");
  };

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
      formData.append("gender", form.gender);
      formData.append("occupation", form.occupation);
      formData.append("photo", form.photo);

      const identityData = new FormData();
      identityData.append("email", identity.email);
      identityData.append("phone", identity.phone);
      identityData.append("type", identity.type);
      identityData.append("photo", identity.photo);

      if (user?.role === ROLE_ADMIN) {
        await updateBank(bank);
      }
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
    setPreview(user?.verification?.photo || "");
    setPreviewProfile(user?.photo || "");
    setForm({
      fullname: user?.fullname || "",
      birthdate: user?.birthdate ? originalDate(user?.birthdate) : "",
      gender: user?.gender || "",
      occupation: user?.occupation || "",
      photo: user?.photo || null,
    });
    setIdentity({
      email: user?.email || "",
      phone: user?.phone || "",
      type: user?.verification?.type || "",
      photo: user?.verification?.photo || null,
    });
    setBank({
      bank_name: user?.bank?.bank_name || "",
      account_number: user?.bank?.account_number || "",
      account_name: user?.bank?.account_name || "",
    });
  };

  useEffect(() => {
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <ProtectedPage
      allowed={[ROLE_USER, ROLE_ADMIN, ROLE_SUPERADMIN]}
      redirect="/403"
    >
      <Defaultlayout title="Profil Saya">
        <form onSubmit={handleSubmit}>
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
                      <label
                        htmlFor="profile photo"
                        className="flex flex-col items-center justify-center w-full rounded-full cursor-pointer"
                      >
                        <img
                          src={
                            previewProfile ||
                            user?.photo ||
                            "/images/Kosthub.png"
                          }
                          alt="avatar"
                          className="w-64 h-64 rounded-full"
                        />
                        <input
                          id="profile photo"
                          type="file"
                          onChange={(e) => {
                            setForm({
                              ...form,
                              photo: e.target.files[0],
                            });
                            setPreviewProfile(
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <div className="flex flex-row gap-3 lg:flex-col">
                      {/* <div className="block">
                        <Button
                          type="submit"
                          className="px-4 py-2 text-white rounded-lg w-28 bg-primary-1"
                        >
                          Unggah
                        </Button>
                      </div> */}
                      <div className="block">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-base-9 w-28 text-error"
                          onClick={() => {
                            setForm({
                              ...form,
                              photo: user?.photo || null,
                            });
                            setPreviewProfile(user?.photo);
                          }}
                        >
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
                <div className="flex flex-col gap-y-3">
                  <h3 className="my-4 text-3xl font-bold gap-y-3 text-primary-1">
                    Edit Profil
                  </h3>
                  <InputWithLabel
                    labelName="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    type="text"
                    value={form.fullname || user?.fullname}
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
                    value={form.birthdate || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        birthdate: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="w-full space-y-2">
                    <label
                      htmlFor="Jenis Kelamin"
                      className="block text-lg text-base-1"
                    >
                      Jenis Kelamin
                    </label>
                    <RadioButton
                      labelName="Jenis Kelamin"
                      options={GENDER}
                      value={form.gender || user?.gender}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          gender: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <InputWithLabel
                    labelName="Pekerjaan"
                    placeholder="Pekerjaan"
                    type="text"
                    value={form.occupation || user?.occupation}
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
                    value={identity.email || user?.email}
                    onChange={(e) =>
                      setIdentity({
                        ...form,
                        identity: e.target.value,
                      })
                    }
                  />
                  <InputWithLabel
                    labelName="Nomor Telepon"
                    placeholder="Nomor Telepon"
                    type="number"
                    value={identity.phone || user?.phone}
                    onChange={(e) =>
                      setIdentity({
                        ...form,
                        identity: e.target.value,
                      })
                    }
                  />{" "}
                  <div className="w-full space-y-2">
                    <label
                      htmlFor="Verifikasi Identitas"
                      className="block text-lg text-base-1"
                    >
                      Verifikasi Identitas
                    </label>
                    <RadioButton
                      labelName="Verifikasi Identitas"
                      options={IDENTITIES}
                      value={identity.type || user?.verification?.type}
                      onChange={(e) =>
                        setIdentity({
                          ...identity,
                          type: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="grid col-span-2">
                    <InputDropzone
                      labelName="Unggah Foto Identitas"
                      icon={<File />}
                      preview={
                        preview ||
                        user?.verification?.photo ||
                        "/images/Kosthub.png"
                      }
                      onChange={(e) => {
                        setIdentity({ ...identity, photo: e.target.files[0] });
                        setPreview(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  {user?.role === ROLE_ADMIN && (
                    <>
                      <div className="my-4 text-3xl font-bold text-primary-1">
                        Nomor Rekening
                      </div>
                      <InputWithLabel
                        labelName="Nomor Rekening"
                        placeholder="Nomor Rekening"
                        type="text"
                        value={
                          bank.account_number || user?.bank?.account_number
                        }
                        onChange={(e) =>
                          setBank({
                            ...bank,
                            account_number: e.target.value,
                          })
                        }
                      />
                      <InputWithLabel
                        labelName="Nama Bank"
                        placeholder="Nama Bank"
                        type="text"
                        value={bank.bank_name || user?.bank?.bank_name}
                        onChange={(e) =>
                          setBank({
                            ...bank,
                            bank_name: e.target.value,
                          })
                        }
                      />
                      <InputWithLabel
                        labelName="Nama Pemilik Rekening"
                        placeholder="Nama Pemilik Rekening"
                        type="text"
                        value={bank.account_name || user?.bank?.account_name}
                        onChange={(e) =>
                          setBank({
                            ...bank,
                            account_name: e.target.value,
                          })
                        }
                      />
                    </>
                  )}
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
                </div>
              </div>
            </div>
          </Section>
        </form>
      </Defaultlayout>
    </ProtectedPage>
  );
}
