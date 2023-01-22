/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";

export default function History() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/401">
      <Defaultlayout title="Riwayat">
        <Section>
          <div className="pt-12 gap-y-6">
            <div className="my-4 text-5xl font-bold text-primary-1">
              Riwayat
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col w-full gap-y-3">
                  <Button className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1">
                    Diajukan
                  </Button>
                  <Button className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1">
                    Sebelumnya
                  </Button>
                  <Button className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1">
                    Disetujui
                  </Button>
                  <Button className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1">
                    Sedang jalan
                  </Button>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                <div className="grid grid-col-span-2 place-content-start">
                  <div className="flex flex-row mt-3 mb-3 gap-x-4">
                    <Button className="px-4 py-2 text-white rounded-lg bg-primary-1 ">
                      Dalam Proses
                    </Button>
                    <Button className="px-4 py-2 text-black bg-gray-300 rounded-lg">
                      Ditolak
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-3">
                  <HistoryCard />
                  <HistoryCard />
                  <HistoryCard />
                  <HistoryCard />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
