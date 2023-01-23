/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";

export default function Settings() {
  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/401">
      <Defaultlayout title="Pengaturan">
        <Section>
          <div className="pt-12 gap-y-6">
            <div className="my-4 text-5xl font-bold text-primary-1">
              Pengaturan
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
              <div className="grid lg:col-span-4 place-items-center gap-y-6"></div>
              <form className="grid lg:col-span-8 gap-y-3">
                <InputWithLabel labelName="Password lama" />
                <InputWithLabel labelName="Password baru" />
                <InputWithLabel labelName="Konfirmasi password baru" />

                <div className="block">
                  <Button>Simpan</Button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
