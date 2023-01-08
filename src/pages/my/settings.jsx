/* eslint-disable @next/next/no-img-element */
import InputWithLabel from "@/components/forms/InputWithLabel";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function Settings() {
  return (
    <Defaultlayout title="Pengaturan">
      <Section>
        <div className="my-4 text-5xl font-bold text-blind">Pengaturan</div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="grid lg:col-span-4 place-items-center gap-y-6"></div>
          <form className="grid lg:col-span-8 gap-y-3">
            <InputWithLabel labelName="Password lama" />
            <InputWithLabel labelName="Password baru" />
            <InputWithLabel labelName="Konfirmasi password baru" />

            <div className="block">
              <button className="px-4 py-2 text-white rounded-lg bg-blind">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </Section>
    </Defaultlayout>
  );
}
