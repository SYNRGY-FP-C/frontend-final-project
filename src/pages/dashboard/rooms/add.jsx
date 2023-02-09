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
import roomService from "@/services/room.service";
import { imageToBase64 } from "@/utils/helper";
import React from "react";

export default function Kost() {
  const [preview, setPreview] = React.useState({
    images: "",
  });

  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [addons, setAddons] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    images: "",
    quantity: "",
    price: "",
    length: "",
    width: "",
    max_person: "",
    indoor_bathroom: null,
    bathroom_facilities: [],
    bedroom_facilities: [],
    addons_facilities: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      await roomService.create(form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kamar ditambahkan",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Kamar gagal ditambahkan",
      });
    }
  };

  const handleCheckbox = (id, key, list) => {
    const checkboxes = form[key];

    const find = checkboxes.findIndex((checkbox) => checkbox.id === id);

    if (find > -1) {
      checkboxes.splice(find, 1);
    } else {
      checkboxes.push(list.find((item) => item.id === id));
    }
    setForm({ ...form, [key]: checkboxes });
    console.table(form[key]);
  };

  const bathroom_facilities = [
    {
      id: 1,
      name: "Air Panas",
    },
    {
      id: 2,
      name: "Bak Mandi",
    },
    {
      id: 3,
      name: "Bathtub",
    },
    {
      id: 4,
      name: "Ember Mandi",
    },
    {
      id: 5,
      name: "Kloset Duduk",
    },
    {
      id: 6,
      name: "Kloset Jongkok",
    },
    {
      id: 7,
      name: "Shower",
    },
    {
      id: 8,
      name: "Wastafel",
    },
  ];

  const bedroom_facilities = [
    {
      id: 1,
      name: "Cleaning Service",
    },
    {
      id: 2,
      name: "Dapur Pribadi",
    },
    {
      id: 3,
      name: "Dispenser",
    },
    {
      id: 4,
      name: "Kasur",
    },
    {
      id: 5,
      name: "Kipas Angin",
    },
    {
      id: 6,
      name: "AC",
    },
  ];

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
                <form
                  className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12 gap-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Foto Kamar */}
                  <div className=" lg:col-span-3">
                    <label
                      htmlFor="Unggah foto luar di sini"
                      className="text-xl font-bold"
                    >
                      Foto Kamar
                    </label>
                    <p>Maksimal 2 foto</p>
                  </div>
                  <div className="grid w-full lg:col-span-9">
                    <InputDropzone
                      labelName="Unggah foto luar di sini"
                      icon={<File />}
                      preview={preview.images}
                      onChange={async (e) => {
                        setForm({
                          ...form,
                          images: await imageToBase64(e.target.files[0]),
                        });
                        setPreview({
                          ...preview,
                          images: URL.createObjectURL(e.target.files[0]),
                        });
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
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
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
                      value={form.quantity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          quantity: e.target.value,
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
                            setForm({
                              ...form,
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
                            setForm({
                              ...form,
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
                        setForm({
                          ...form,
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
                      labelName="Fasilitas Kamar Mandi"
                      options={BATHROOMS}
                      value={form.indoor_bathroom}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          indoor_bathroom:
                            e.target.value === "LUAR" ? true : false,
                        })
                      }
                      required
                    />
                    <div className="grid gap-3 pt-3">
                      {bathroom_facilities.map((facility) => (
                        <Checkbox
                          key={facility.id}
                          onChange={() =>
                            handleCheckbox(
                              facility.id,
                              "bathroom_facilities",
                              bathroom_facilities
                            )
                          }
                        >
                          {facility.name}
                        </Checkbox>
                      ))}
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
                      {bedroom_facilities.map((facility) => (
                        <Checkbox
                          key={facility.id}
                          onChange={() =>
                            handleCheckbox(
                              facility.id,
                              "bedroom_facilities",
                              bedroom_facilities
                            )
                          }
                        >
                          {facility.name}
                        </Checkbox>
                      ))}
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
                    <label className="relative inline-flex  cursor-pointer ">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={() => setAddons(!addons)}
                      ></input>
                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                      peer-focus:ring-blue-300 rounded-full peer 
                      dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                      after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                      ></div>
                    </label>
                    {addons && (
                      <>
                        <div className="grid w-full lg:col-span-9">
                          <div className="flex w-full gap-3">
                            <div className=" w-full">
                              <label>Nama Fasilitas</label>
                              <Input
                                id="Nama Fasilitas"
                                name="Nama Fasilitas"
                                placeholder="Nama Fasilitas"
                                onChange={(e) =>
                                  setForm({
                                    ...form,
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
                                  setForm({
                                    ...form,
                                    addons_facilities: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
                      value={form.price}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid w-full lg:col-span-12">
                    <div className="flex items-end justify-end">
                      <div className="block">
                        <Button
                          type="submit"
                          className="w-full px-5 py-2 text-center text-primary-1 rounded-lg bg-white border border-primary-1 hover:bg-slate-200 disabled:bg-primary-2"
                        >
                          Simpan
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </ProtectedPage>
  );
}
