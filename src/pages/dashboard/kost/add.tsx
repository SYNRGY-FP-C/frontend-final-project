import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import InputDropzone from "@/components/forms/InputDropzone";
import RadioButton from "@/components/forms/RadioButton";
import TextArea from "@/components/forms/TextArea";
import File from "@/components/icons/File";
import { ROLE_ADMIN } from "@/constants/roles";
import { TYPES } from "@/constants/types";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";

export default function Add() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: "",
    outdoor_photo: "",
    indoor_photo: "",
    type: null,
    description: "",
    additional_rule: "",
    payment_scheme: [],
    rules: [],
    longitude: "",
    latitude: "",
    address: "",
    province: "",
    city: "",
    district: "",
    adress_note: "",
  });
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <Defaultlayout title="Tambah Kost">
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
                    Data Kost
                  </h3>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-6">
                  {step === 1 ? (
                    <DataForm
                      formData={form}
                      setFormData={setForm}
                      setFormStep={setStep}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}

function DataForm({ formData, setFormData, setFormStep }) {
  const [preview, setPreview] = React.useState();

  const handleCheckbox = (id, form, list) => {
    const checkboxes = formData[form];

    const find = checkboxes.findIndex((checkbox) => checkbox.id === id);

    if (find > -1) {
      checkboxes.splice(find, 1);
    } else {
      checkboxes.push(list.find((item) => item.id === id));
    }
    setFormData({ ...formData, [form]: checkboxes });
    console.log(formData);
  };

  const rules = [
    {
      id: 1,
      name: "Tidak boleh makan di kamar",
    },
    {
      id: 2,
      name: "Tidak boleh minum di kamar",
    },
    {
      id: 3,
      name: "Tidak boleh merokok di kamar",
    },
    {
      id: 4,
      name: "Tidak boleh membawa hewan peliharaan",
    },
    {
      id: 5,
      name: "Tidak boleh membawa tamu",
    },
    {
      id: 6,
      name: "Tidak boleh membawa tamu",
    },
  ];
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
          preview={preview}
          onChange={(e) => {
            console.log(e);
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
          preview={preview}
          onChange={(e) => {
            console.log(e);
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
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Tipe Kost
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <RadioButton
          labelName="Jenis Kelamin"
          options={TYPES}
          value={"form.gender"}
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
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Deskripsi Kost
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <TextArea
          placeholder="Deskripsikan kost anda"
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
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
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Peraturan Kost{" "}
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        {" "}
        <div className="grid grid-cols-1 gap-3">
          <Checkbox onChange={() => handleCheckbox(1, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(2, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(3, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(4, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(5, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(6, "rules", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
        </div>
      </div>
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Peraturan Tambahan{" "}
        </label>
        <span className="text-xs text-primary-1">*Opsional</span>
      </div>
      <div className="grid w-full lg:col-span-9">
        <TextArea
          placeholder="Tambahkan peraturan tambahan kost Anda"
          onChange={(e) =>
            setFormData({
              ...formData,
              additional_rule: e.target.value,
            })
          }
        />
      </div>
      {/* <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Fasilitas Umum{" "}
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <div className="grid grid-cols-1 gap-3">
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
          <Checkbox onChange={() => handleCheckbox(1, "facilities", rules)}>
            Lorem ipsum dolor sit amet
          </Checkbox>
        </div>
      </div> */}
      <div className="grid w-full lg:col-span-12">
        <div className="flex items-end justify-end">
          <div className="block">
            <Button className="w-full px-5 py-2 text-center text-white rounded-lg bg-primary-1 hover:bg-primary-1 disabled:bg-primary-2">
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
