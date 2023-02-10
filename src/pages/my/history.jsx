/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import historyService from "@/services/transaction.service";
import React from "react";
import { useEffect, useState } from "react";

export default function History() {
  // gambaran buat response handle
  const [select, setSelect] = useState("onproccess");
  const [show, setShow] = useState([]);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });
  
  const getHistory = async () => {
    const { data } = await historyService.history();
    setReponse({ isLoading: false, isError: false, data: data });
  };

  useEffect(() => {
    const data = response.data.filter((item) => item.status === select);
    setShow(data);
    // ketika nilai select berubah bakal jalan
  }, [select]);

  useEffect(() => {
    setReponse({ isLoading: true, isError: false, data: [] });
    try {
      getHistory();
    } catch (error) {
      setReponse({ isLoading: false, isError: error, data: [] });
    }
  }, []);

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <Defaultlayout title="Riwayat">
        <Section>
          <div className="pt-12 pb-6 gap-y-6">
            <div className="my-4 text-5xl font-bold text-primary-1">
              Riwayat
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
              <div className="grid w-full lg:col-span-3 place-items-start">
                <div className="flex flex-col w-full gap-y-3">
                  <Button
                    className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                    onClick={() => setSelect("onproccess")}
                  >
                    Diajukan
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("ended")}
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("approved")}
                  >
                    Disetujui
                  </Button>
                  <Button
                    className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1"
                    onClick={() => setSelect("ongoing")}
                  >
                    Sedang jalan
                  </Button>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                <div className="grid grid-col-span-2 place-content-start">
                  <div className="flex flex-row mt-3 mb-3 gap-x-4">
                    <Button
                      className="px-4 py-2 text-white rounded-lg bg-primary-1"
                      onClick={() => setSelect("onproccess")}
                    >
                      Dalam Proses
                    </Button>
                    <Button
                      className="px-4 py-2 text-black rounded-lg bg-primary-1"
                      onClick={() => setSelect("rejected")}
                    >
                      Ditolak
                    </Button>
                  </div>
                </div>

                {response.data.length > 0
                  ? show.map((transaksi) => {
                      return (
                        <HistoryCard key={transaksi.id} data={transaksi} />
                      );
                    })
                  : "tidak ada"}
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
