/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "@/layouts/SidebarDashboard";

export default function History() {
  // gambaran buat response handle
  const [select, setSelect] = useState("ongoing");
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
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <Defaultlayout title="Riwayat">
        <Sidebar />
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
                      onClick={() => setSelect("ongoing")}
                    >
                      Sekarang
                    </Button>
                    <Button
                      className="px-4 py-2 text-black rounded-lg bg-primary-1"
                      onClick={() => setSelect("ended")}
                    >
                      Sebelumnya
                    </Button>
                  </div>
                </div>

                {response.data.map((transaksi) => {
                  return <HistoryCard key={transaksi.id} />;
                })}
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
