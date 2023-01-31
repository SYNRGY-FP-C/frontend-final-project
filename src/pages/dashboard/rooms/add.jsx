import Dropzone from "@/components/forms/InputDropzone";
import Input from "@/components/forms/InputForms";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import Link from "next/link";
import React from "react";

export default function Kost() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/403">
      <DefaultLayout>
        <Section>
          <div className="pt-14 gap-y-6">
            <div className="pt-16">
              <div className="mb-4">
                <Link
                  href="/dashboard/rooms"
                  className="text-xl text-secondary-1 hover:text-primary-2"
                >
                  {" "}
                  Kembali{" "}
                </Link>
                <h1 className="text-4xl font-bold mt-4">Tambah Kamar</h1>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-3">
                  <h1 className="text-3xl font-bold mb-4">Data Kos</h1>
                </div>
                <div className="col-span-9">
                  <div>
                    <Dropzone labelName="Foto Kamar"></Dropzone>
                    <Input
                      labelName="Nama Tipe Kamar"
                      placeholder="Nama Kamar"
                    ></Input>
                    <Input
                      labelName="Jumlah Kamar"
                      placeholder="Jumlah Kamar"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </ProtectedPage>
  );
}
