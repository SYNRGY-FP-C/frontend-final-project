/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Alert from "@/components/Alert";
import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import InputDropzone from "@/components/forms/InputDropzone";
import RadioButton from "@/components/forms/RadioButton";
import TextArea from "@/components/forms/TextArea";
import File from "@/components/icons/File";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import { ROLE_ADMIN } from "@/constants/roles";
import { TYPES } from "@/constants/types";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import kostService from "@/services/kost.service";
import ruleService from "@/services/rules.service";
import { imageToBase64 } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function Add() {
  const [loading, setLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const router = useRouter();
  const [preview, setPreview] = React.useState({
    outdoor_photo: "",
    indoor_photo: "",
  });
  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: "",
    outdoor_photo: "",
    indoor_photo: "",
    type: null,
    description: "",
    additional_rule: "",
    payment_scheme: null,
    rules: null,
    longitude: null,
    latitude: null,
    address: "",
    province: "",
    city: "",
    district: "",
    address_note: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await kostService.update(router?.query?.kostId, form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kost diperbarui",
      });
      setOpenModal(true);
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Kost gagal diperbarui",
      });
    }
  };

  const getKost = async () => {
    const { data } = await kostService.get(router?.query?.kostId);
    setForm({
      name: data?.kostName || "",
      outdoor_photo: data?.outdoorPhotoUrl || "",
      indoor_photo: data?.indoorPhotoUrl || "",
      type: data?.kostType || null,
      description: data?.description || "",
      additional_rule: data?.additionalKostRule || "",
      payment_scheme: data?.kostPaymentScheme || [],
      rules: data?.kostRule || [],
      longitude: data?.longitude || null,
      latitude: data?.latitude || null,
      address: data?.address || "",
      province: data?.province || "",
      city: data?.city || "",
      district: data?.district || "",
      address_note: data?.addressNote || "",
    });
    setPreview({
      outdoor_photo: data?.outdoorPhotoUrl || "",
      indoor_photo: data?.indoorPhotoUrl || "",
    });
  };

  useEffect(() => {
    if (router?.query?.kostId) {
      setLoading(false);
      getKost();
    }
  }, [router.isReady]);

  if (loading) return <LoadingScreen />;

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <Defaultlayout title="Update Kost">
        <Modal isOpen={openModal} setIsOpen={setOpenModal}>
          <img src="/images/sukses.png" alt="Sukses" className="w-24" />
          <p className="text-xl font-bold text-center text-base-1">
            Kost berhasil duperbarui!
          </p>
          <p className="max-w-xs text-center text-base-1">
            Yuk lihat kost Anda dan tambahkan kamar lainnya!
          </p>
          <Link
            className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1"
            href="/dashboard/kost"
          >
            Lihat kost
          </Link>
          <Link
            className="inline-flex justify-center w-full px-4 py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1"
            href="/dashboard"
          >
            Beranda
          </Link>
        </Modal>
        <Section>
          <div className="flex flex-col py-16 lg:py-24">
            <BackButton />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-3">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col">
                  <h2 className="text-[40px] font-bold text-base-1">
                    Tambah Kost
                  </h2>
                  <h3 className="text-[32px] font-bold text-base-1">
                    {step === 1 ? "Data Kost" : "Alamat Kost"}
                  </h3>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                <form
                  className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid w-full lg:col-span-12">
                    {response.message && (
                      <Alert type={response.isError ? "error" : "success"}>
                        {response.message}
                      </Alert>
                    )}
                  </div>
                  {step === 1 ? (
                    <DataForm
                      formData={form}
                      setFormData={setForm}
                      preview={preview}
                      setPreview={setPreview}
                    />
                  ) : (
                    <AddressForm formData={form} setFormData={setForm} />
                  )}
                  <div className="grid w-full lg:col-span-12">
                    <div className="flex flex-row items-end justify-end space-x-3">
                      {step === 2 && (
                        <div className="block">
                          <Button
                            className="w-full px-5 py-2 text-center bg-white border rounded-lg text-primary border-primary-1"
                            onClick={() => setStep(1)}
                          >
                            Kembali
                          </Button>
                        </div>
                      )}
                      <div className="block">
                        <Button
                          type={step === 1 ? "button" : "submit"}
                          className="w-full px-5 py-2 text-center text-white rounded-lg bg-primary-1 hover:bg-primary-1 disabled:bg-primary-2"
                          onClick={(e) => {
                            if (step === 1) {
                              e.preventDefault();
                              setStep(2);
                            }
                          }}
                        >
                          {step === 1 ? "Selanjutnya" : "Tambahkan"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}

function DataForm({ formData, setFormData, preview, setPreview }) {
  const [rules, setRules] = React.useState([]);

  const handleCheckbox = (id, form, list) => {
    const checkboxes = formData[form];

    const find = checkboxes.findIndex((checkbox) => checkbox.id === id);

    if (find > -1) {
      checkboxes.splice(find, 1);
    } else {
      checkboxes.push(list.find((item) => item.id === id));
    }
    setFormData({ ...formData, [form]: checkboxes });
  };

  const getRules = async () => {
    const { data } = await ruleService.getAll();
    setRules(data);
  };

  useEffect(() => {
    getRules();
  }, []);

  return (
    <>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Unggah foto luar di sini" className="text-xl font-bold">
          Foto Luar Bangunan
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <InputDropzone
          labelName="Unggah foto luar di sini"
          icon={<File />}
          preview={preview.outdoor_photo}
          onChange={async (e) => {
            setFormData({
              ...formData,
              outdoor_photo: await imageToBase64(e.target.files[0]),
            });
            setPreview({
              ...preview,
              outdoor_photo: URL.createObjectURL(e.target.files[0]),
            });
          }}
          required
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        {" "}
        <label
          htmlFor="Unggah foto dalam di sini"
          className="text-xl font-bold"
        >
          Foto Dalam Bangunan
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        {" "}
        <InputDropzone
          labelName="Unggah foto dalam di sini"
          icon={<File />}
          preview={preview.indoor_photo}
          onChange={async (e) => {
            setFormData({
              ...formData,
              indoor_photo: await imageToBase64(e.target.files[0]),
            });
            setPreview({
              ...preview,
              indoor_photo: await URL.createObjectURL(e.target.files[0]),
            });
          }}
          required
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Nama Kost
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Nama Kost"
          name="Nama Kost"
          placeholder="Nama Kost"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Tipe Kost" className="text-xl font-bold">
          Tipe Kost
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <RadioButton
          labelName="Tipe Kost"
          options={TYPES}
          value={formData.type}
          onChange={(e) =>
            setFormData({
              ...formData,
              type: e.target.value,
            })
          }
          required
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Deskripsi Kost" className="text-xl font-bold">
          Deskripsi Kost
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <TextArea
          placeholder="Deskripsikan kost anda"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Skema Pembayaran" className="text-xl font-bold">
          Skema Pembayaran
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <div className="grid grid-flow-col grid-rows-3 gap-3">
          <Checkbox>Harian</Checkbox>
          <Checkbox>Mingguan</Checkbox>
          <Checkbox>Bulanan</Checkbox>
          <Checkbox>Per 3 bulan</Checkbox>
          <Checkbox>Per 6 bulan</Checkbox>
          <Checkbox>Pertahun</Checkbox>
        </div>
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Peraturan Kost" className="text-xl font-bold">
          Peraturan Kost{" "}
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        {" "}
        <div className="grid grid-cols-1 gap-3">
          {rules.map((rule) => (
            <Checkbox
              key={uuid()}
              onChange={() => handleCheckbox(rule.id, "rules", rules)}
            >
              {rule.rule}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Peraturan Tambahan" className="text-xl font-bold">
          Peraturan Tambahan{" "}
        </label>
        <span className="text-xs text-primary-1">*Opsional</span>
      </div>
      <div className="grid w-full lg:col-span-9">
        <TextArea
          placeholder="Tambahkan peraturan tambahan kost Anda"
          value={formData.additional_rule}
          onChange={(e) =>
            setFormData({
              ...formData,
              additional_rule: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}

function AddressForm({ formData, setFormData }) {
  return (
    <>
      <div className="grid w-full lg:col-span-12">
        <Checkbox>Tentukan letak peta</Checkbox>
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Alamat" className="text-xl font-bold">
          Alamat
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Alamat"
          name="Alamat"
          value={formData.address}
          placeholder="Alamat"
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Provinsi" className="text-xl font-bold">
          Provinsi
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Provinsi"
          name="Provinsi"
          value={formData.province}
          placeholder="Provinsi"
          onChange={(e) =>
            setFormData({
              ...formData,
              province: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Kabupaten/Kota" className="text-xl font-bold">
          Kabupaten/Kota
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Kabupaten/Kota"
          name="Kabupaten/Kota"
          value={formData.city}
          placeholder="Kabupaten/Kota"
          onChange={(e) =>
            setFormData({
              ...formData,
              city: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Kecamatan" className="text-xl font-bold">
          Kecamatan
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Kecamatan"
          name="Kecamatan"
          value={formData.district}
          placeholder="Kecamatan"
          onChange={(e) =>
            setFormData({
              ...formData,
              district: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Catatan" className="text-xl font-bold">
          Catatan{" "}
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <TextArea
          placeholder="Tambahkan catatan arah ke kost Anda"
          onChange={(e) =>
            setFormData({
              ...formData,
              address_note: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}
