/* eslint-disable @next/next/no-img-element */
import InputWithLabel from "@/components/forms/InputWithLabel";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function MyProfile() {
  return (
    <Defaultlayout title="Profil Saya">
      <Section>
        <div className="my-4 text-4xl font-bold text-blind">Profil</div>
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
            <form className="grid grid-cols-2 gap-4">
              <InputWithLabel labelName="Nama Lengkap" />
              <InputWithLabel labelName="Tanggal Lahir" type="date" />
              <InputWithLabel labelName="Email" />
              <InputWithLabel labelName="Nomor Telepon" />
              <InputWithLabel labelName="Jenis Kelamin" />
              <InputWithLabel labelName="Pekerjaan" />

              <div className="grid col-span-2">
                <InputWithLabel labelName="Upload scan KTP" type="file" />
              </div>
              <div className="grid col-span-2 place-content-end">
                <div className="flex flex-row gap-x-4">
                  <div className="block">
                    <button className="px-4 py-2 text-white rounded-lg bg-blind">
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
