import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackButton from "@/components/buttons/BackButton";

export default function Kost() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/403">
      <DefaultLayout>
        <Section>
          <div className="pt-14 gap-y-6">
            <div className="pt-16">
              <BackButton />
              <div className="grid grid-cols-12">
                <div className="col-span-3">
                  <h1 className="text-4xl font-bold mb-4">Kost Binar</h1>
                  <Link href="/dashboard/rooms/add">
                    <div className="mr-9 mb-9 px-9 py-6 bg-black text-white text-center rounded-lg flex items-center gap-1 hover:bg-slate-800 ">
                      <Image
                        src="/images/add_box.svg"
                        width={24}
                        height={24}
                        alt="default img"
                      />
                      <h1>Tambah Kamar Baru</h1>
                    </div>
                  </Link>
                </div>
                <div className="col-span-9 items-center">
                  <Image
                    src="/images/register-pemilik.png"
                    width={291}
                    height={364}
                    alt="default img"
                    className="m-auto pt-14"
                  />
                  <div className="w-72 mx-auto">
                    <p>
                      Kost Anda belum memiliki kamar, yuk tambah kamar
                      pertamamu!
                    </p>
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
