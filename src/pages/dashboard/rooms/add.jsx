import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import InputDropzone from "@/components/forms/InputDropzone";
import RadioButton from "@/components/forms/RadioButton";
import File from "@/components/icons/File";
import { BATHROOMS } from "@/constants/bathrooms";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";

export default function Kost() {
  const [form, setForm] = React.useState({
    name: "",
    images: "",
    quantity: "",
    price: "",
    length: "",
    width: "",
    max_person: "",
    indoor_bathroom: "",
    bathroom_facilities: [],
    bedroom_facilities: [],
    addons_facilities: [],
  });
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/403">
      <DefaultLayout title="Tambah Kamar">
        <Section>
          <div className="flex flex-col py-16 lg:py-24">
            <BackButton />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-y-3">
              <div className="grid w-full lg:col-span-4 place-items-start">
                <div className="flex flex-col">
                  <h2 className="text-[40px] font-bold text-base-1">
                    Tambah Kamar
                  </h2>
                  <h3 className="text-[32px] font-bold text-base-1">
                    Data Kost
                  </h3>
                </div>
              </div>
              <div className="grid lg:col-span-8">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-6">
                  <DataForm formData={form} setFormData={setForm} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
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

  return (
    <>
      {/* Foto Kamar */}
      <div className=" lg:col-span-3">
        <label htmlFor="Unggah foto luar di sini" className="text-xl font-bold">
          Foto Kamar
        </label>
        <p>Maksimal 2 foto</p>
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

      {/* Nama Kamar */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Nama Tipe Kamar
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Nama Kamar"
          name="Nama Kamar"
          placeholder="Nama Kamar"
          onChange={(e) =>
            setFormData({
              ...formData,
              quantity: e.target.value,
            })
          }
        />
      </div>

      {/* Jumalah Kamar */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Jumlah Kamar
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Jumlah Kamar"
          name="Jumlah Kamar"
          placeholder="Jumlah Kamar"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      </div>

      {/* Ukuran Kamar */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Ukuran Kamar
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <div className="flex w-1/2 gap-3">
          <div className="flex gap-3 items-center">
            <Input
              id="Panjang"
              name="Panjang"
              placeholder="Panjang"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  length: e.target.value,
                })
              }
            />
            <p>meter</p>
          </div>
          <div className="flex gap-3 items-center">
            <p className="font-bold">x</p>
            <Input
              id="Lebar"
              name="Lebar"
              placeholder="Lebar"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  width: e.target.value,
                })
              }
            />
            <p>meter</p>
          </div>
        </div>
      </div>

      {/* Jumlah Penghuni */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Jumlah Penghuni
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Jumlah Penghuni"
          type="number"
          name="Jumlah Penghuni"
          placeholder="Jumlah Penghuni"
          onChange={(e) =>
            setFormData({
              ...formData,
              max_person: e.target.value,
            })
          }
        />
      </div>
      {/* Bathrooms */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Fasilitas Kamar Mandi
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <RadioButton
          labelName="Jenis Kelamin"
          options={BATHROOMS}
          value={"form.gender"}
          onChange={(e) =>
            setFormData({
              ...formData,
              type: e.target.value,
            })
          }
          required
        />
        <div className="grid gap-3 pt-3">
          <Checkbox>Air Panas</Checkbox>
          <Checkbox>Bak Mandi</Checkbox>
          <Checkbox>Bathtub</Checkbox>
          <Checkbox>Ember Mandi</Checkbox>
          <Checkbox>Kloset Duduk</Checkbox>
          <Checkbox>Kloset Jongkok</Checkbox>
          <Checkbox>Shower</Checkbox>
          <Checkbox>Wastafel</Checkbox>
        </div>
      </div>

      {/* Fasilitas Kamar */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Fasilitas Kamar
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <div className="grid gap-3">
          <Checkbox>Cleaning Service</Checkbox>
          <Checkbox>Dapur Pribadi</Checkbox>
          <Checkbox>Dispenser</Checkbox>
          <Checkbox>Kasur</Checkbox>
          <Checkbox>Kipas Angin</Checkbox>
        </div>
      </div>

      {/* Fasilitas Tambahan */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Fasilitas Tambahan*
        </label>
        <p>*Opsional</p>
      </div>
      <div className="grid w-full lg:col-span-9">
        <div className="flex w-full gap-3">
          <div className=" w-full">
            <label>Nama Fasilitas</label>
            <Input
              id="Nama Fasilitas"
              name="Nama Fasilitas"
              placeholder="Nama Fasilitas"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  addons_facilities: e.target.value,
                })
              }
            />
          </div>
          <div className=" w-full">
            <label>Harga Fasilitas</label>
            <Input
              id="Harga Fasilitas"
              name="Harga Fasilitas"
              placeholder="Harga Fasilitas"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  addons_facilities: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Harga */}
      <div className="grid w-full lg:col-span-3">
        <label htmlFor="Nama Kost" className="text-xl font-bold">
          Harga
        </label>
      </div>
      <div className="grid w-full lg:col-span-9">
        <Input
          id="Harga"
          name="Harga"
          placeholder="Harga"
          onChange={(e) =>
            setFormData({
              ...formData,
              price: e.target.value,
            })
          }
        />
      </div>

      <div className="grid w-full lg:col-span-12">
        <div className="flex items-end justify-end">
          <div className="block">
            <Button className="w-full px-5 py-2 text-center text-primary-1 rounded-lg bg-white border border-primary-1 hover:bg-slate-200 disabled:bg-primary-2">
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
