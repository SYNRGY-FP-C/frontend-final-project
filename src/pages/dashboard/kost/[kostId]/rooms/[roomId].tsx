/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Alert from "@/components/Alert";
import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import InputDropzone from "@/components/forms/InputDropzone";
import RadioButton from "@/components/forms/RadioButton";
import File from "@/components/icons/File";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import { BATHROOMS } from "@/constants/bathrooms";
import { ROLE_ADMIN } from "@/constants/roles";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import { imageToBase64 } from "@/utils/helper";
import Link from "next/link";
import router from "next/router";
import React, { useEffect } from "react";

export default function Kost() {
  const [openModal, setOpenModal] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [preview, setPreview] = React.useState({
    images: "",
  });

  const [response, setResponse] = React.useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [addons, setAddons] = React.useState(true);

  const [form, setForm] = React.useState({
    name: "",
    images: [],
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
      await roomService.create({
        ...form,
        kost_id: router?.query?.kostId,
        indoor_bathroom: form.indoor_bathroom === "LUAR" ? true : false,
      });
      setResponse({
        isLoading: false,
        isError: false,
        message: "Kamar ditambahkan",
      });
      setOpenModal(true);
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
  };

  const bathroom_facilities = [
    {
      id: 1,
      name: "Air Panas",
    },
  ];

  const bedroom_facilities = [
    {
      id: 1,
      name: "Cleaning Service",
    },
  ];

  const getRoomDetail = async () => {
    const { data } = await roomService.get(router?.query?.roomId);
  };

  useEffect(() => {
    if (router?.query?.kostId || router?.query?.roomId) {
      setLoading(false);
    }
  }, [router.isReady]);

  if (loading) return <LoadingScreen />;

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DefaultLayout title="Tambah Kamar">
        <Modal isOpen={openModal} setIsOpen={setOpenModal}>
          <img src="/images/sukses.png" alt="Sukses" className="w-24" />
          <p className="text-xl font-bold text-center text-base-1">
            Kamar berhasil diubah!
          </p>
          <p className="max-w-xs text-center text-base-1">
            Yuk lihat kamar kost terbaru Anda!
          </p>
          <Link
            className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1"
            href={`/dashboard/kost/${router?.query?.kostId}`}
          >
            Lihat kamar
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
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-y-3">
              <div className="grid w-full lg:col-span-4 place-items-start">
                <div className="flex flex-col">
                  <h2 className="text-[40px] font-bold text-base-1">
                    Tambah Kamar
                  </h2>
                  <h3 className="text-[32px] font-bold text-base-1">
                    Data Kamar
                  </h3>
                </div>
              </div>
              <div className="grid lg:col-span-8">
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
                  {/* Foto Kamar */}
                  <div className=" lg:col-span-3">
                    <label
                      htmlFor="Unggah fotomu di sini"
                      className="text-xl font-bold"
                    >
                      Foto Kamar
                    </label>
                    <p>Maksimal 2 foto</p>
                  </div>
                  <div className="grid w-full lg:col-span-9">
                    <InputDropzone
                      labelName="Unggah fotomu di sini"
                      icon={<File />}
                      preview={preview.images}
                      multiple
                      onChange={async (e) => {
                        const images = await Promise.all(
                          Array.from(e.target.files).map(
                            async (image: File) => await imageToBase64(image)
                          )
                        );
                        setForm({
                          ...form,
                          images: images,
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
                      type="text"
                      placeholder="Nama Kamar"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      required
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
                      type="number"
                      value={form.quantity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          quantity: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  {/* Ukuran Kamar */}
                  <div className="grid w-full lg:col-span-3">
                    <label htmlFor="Nama Kost" className="text-xl font-bold">
                      Ukuran Kamar
                    </label>
                  </div>
                  <div className="grid w-full lg:col-span-9">
                    <div className="flex gap-3 lg:max-w-xs">
                      <div className="flex items-center gap-3">
                        <Input
                          id="Panjang"
                          name="Panjang"
                          type="number"
                          placeholder="Panjang"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              length: e.target.value,
                            })
                          }
                          required
                        />
                        <p>meter</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-bold">x</p>
                        <Input
                          id="Lebar"
                          name="Lebar"
                          type="number"
                          placeholder="Lebar"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              width: e.target.value,
                            })
                          }
                          required
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
                      required
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
                          indoor_bathroom: e.target.value,
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
                  <div className="grid lg:col-span-9">
                    <div className="flex flex-col gap-3">
                      <div className="block">
                        <label className="relative inline-flex cursor-pointer ">
                          <input
                            type="checkbox"
                            defaultChecked={addons}
                            className="sr-only peer"
                            onChange={() => setAddons(!addons)}
                          ></input>
                          <div
                            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                      peer-focus:ring-blue-300 rounded-full peer 
                      peer-checked:after:translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                      after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-3 focus:ring-offset-0 focus:border-primary-3 focus:ring-primary-3"
                          ></div>
                        </label>
                      </div>
                      {addons && (
                        <div className="flex w-full gap-3">
                          <div className="w-full space-y-2">
                            <label>Nama Fasilitas</label>
                            <Input
                              id="Nama Fasilitas"
                              name="Nama Fasilitas"
                              placeholder="Nama Fasilitas"
                              // onChange={(e) =>
                              //   setForm({
                              //     ...form,
                              //     addons_facilities: e.target.value,
                              //   })
                              // }
                            />
                          </div>
                          <div className="w-full space-y-2">
                            <label>Harga Fasilitas</label>
                            <Input
                              id="Harga Fasilitas"
                              name="Harga Fasilitas"
                              placeholder="Harga Fasilitas"
                              // onChange={(e) =>
                              //   setForm({
                              //     ...form,
                              //     addons_facilities: e.target.value,
                              //   })
                              // }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Harga */}
                  <div className="grid w-full lg:col-span-3">
                    <label htmlFor="Nama Kost" className="text-xl font-bold">
                      Harga
                    </label>
                  </div>
                  <div className="grid w-full lg:col-span-9">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="font-semibold">Rp</span>
                      </div>
                      <input
                        type="number"
                        id="harga"
                        className="bg-base-7 pl-10 focus:bg-base-8 text-primary-1 sm:text-sm border border-base-7 focus:border-primary-3 focus:ring-primary-3 w-full rounded-lg block px-3 py-2.5"
                        placeholder="Harga bersih tanpa fasilitas tambahan"
                        value={form.price}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            price: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid w-full lg:col-span-12">
                    <div className="flex items-end justify-end">
                      <div className="block">
                        <Button
                          type="submit"
                          className="w-full px-5 py-2 text-center text-white rounded-lg bg-primary-1 hover:bg-primary-1 disabled:bg-primary-2"
                        >
                          Tambah
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
