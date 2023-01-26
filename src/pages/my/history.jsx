/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";
import { useEffect, useState } from "react";

export default function History() {
  // gambaran buat response handle
  const [select, setSelect] = useState("");
  const [show, setShow] = useState([]);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  useEffect(() => {
    const data = response.data.filter((item) => item.role === select);
    setShow(data);
    // ketika nilai select berubah bakal jalan
  }, [select]);

  //  useEffect(()=>{

  //   setReponse({isLoading:true, isError:false, data :[]})
  //   try {
  //   const data =  historyService.getAll()
  //   setReponse({isLoading:false, isError:false, data:data})
  //   } catch (error) {

  //   setReponse({isLoading:false, isError:error, data:[]})
  //   }
  // },[])
  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <Defaultlayout title="Riwayat">
        <Section>
          <div className="pt-12 gap-y-6">
            <div className="my-4 text-5xl font-bold text-primary-1">
              Riwayat
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col w-full gap-y-3">
                  <Button
                    className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                    onClick={() => setSelect("")}
                  >
                    Diajukan
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("")}
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("")}
                  >
                    Disetujui
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("")}
                  >
                    Sedang jalan
                  </Button>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                <div className="grid grid-col-span-2 place-content-start">
                  <div className="flex flex-row mt-3 mb-3 gap-x-4">
                    <Button
                      className="px-4 py-2 text-white rounded-lg bg-primary-1 "
                      onClick={() => setSelect("")}
                    >
                      Dalam Proses
                    </Button>
                    <Button
                      className="px-4 py-2 text-black rounded-lg bg-primary-1"
                      onClick={() => setSelect("")}
                    >
                      Ditolak
                    </Button>
                  </div>
                </div>

                {response.data.map((transaksi) => {
                  return <HistoryCard key={transaksi.id} />;
                })}
                <div className="flex flex-col w-full gap-y-3">
                  <div className="grid grid-cols-1 shadow lg:grid-cols-12 rounded-xl">
                    <div className="grid col-span-4">
                      <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
                        <img
                          className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                          src="/images/hero-image.jpg"
                          alt="Test"
                        />
                      </div>
                    </div>
                    <div className="grid col-span-8 p-5">
                      <div className="relative flex flex-col h-full gap-y-3">
                        <div className="flex flex-row justify-between">
                          <h5 className="text-2xl font-bold text-primary-1">
                            Kost Lorem
                          </h5>
                          <div className="flex flex-row gap-x-3">
                            <span className="inline-flex items-center px-4 text-xs text-center bg-gray-200 rounded-lg">
                              Superkost
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-primary-1"></div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-3">
                          <div className="w-5 h-5 rounded-lg bg-primary-1"></div>
                          <p>Kecamatan Lorem, Bandung</p>
                        </div>
                        <div className="flex flex-row items-center gap-x-3">
                          <span className="w-24 text-center py-0.5 border border-gray-300 text-primary-1 rounded-lg">
                            Campur
                          </span>
                          <div className="inline-flex items-center gap-x-1">
                            <div className="w-5 h-5 rounded-lg bg-primary-1"></div>{" "}
                            5
                          </div>
                        </div>
                        <div className="flex items-stretch justify-end h-full">
                          <p className="self-end text-xl font-bold text-primary-1">
                            Lorem ipsum dolor / bulan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 shadow lg:grid-cols-12 rounded-xl">
                    <div className="grid col-span-4">
                      <div className="flex justify-center object-cover w-full h-64 overflow-hidden">
                        <img
                          className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                          src="/images/hero-image.jpg"
                          alt="Test"
                        />
                      </div>
                    </div>
                    <div className="grid col-span-8 p-5">
                      <div className="relative flex flex-col h-full gap-y-3">
                        <div className="flex flex-row justify-between">
                          <h5 className="text-2xl font-bold text-primary-1">
                            Kost Lorem
                          </h5>
                          <div className="flex flex-row gap-x-3">
                            <span className="inline-flex items-center px-4 text-xs text-center bg-gray-200 rounded-lg">
                              Superkost
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-primary-1"></div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-3">
                          <div className="w-5 h-5 rounded-lg bg-primary-1"></div>
                          <p>Kecamatan Lorem, Bandung</p>
                        </div>
                        <div className="flex flex-row items-center gap-x-3">
                          <span className="w-24 text-center py-0.5 border border-gray-300 text-primary-1 rounded-lg">
                            Campur
                          </span>
                          <div className="inline-flex items-center gap-x-1">
                            <div className="w-5 h-5 rounded-lg bg-primary-1"></div>{" "}
                            5
                          </div>
                        </div>
                        <div className="flex items-stretch justify-end h-full">
                          <p className="self-end text-xl font-bold text-primary-1">
                            Lorem ipsum dolor / bulan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
