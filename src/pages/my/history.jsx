/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import React from "react";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function History() {
  const kos = [
    {
      id: 1,
      name: "A",
      status: "onproccess",
      label: "string",
      thumbnail: "string",
      address: "Bandung",
      type: "campur",
      rating: 5,
    },
    {
      id: 2,
      name: "B",
      status: "approved",
      label: "string",
      thumbnail: "string",
      address: "Bandung",
      type: "campur",
      rating: 5,
    },
    {
      id: 3,
      name: "C",
      status: "rejected",
      label: "string",
      thumbnail: "string",
      address: "Bandung",
      type: "campur",
      rating: 5,
    },
    {
      id: 4,
      name: "D",
      status: "ongoing",
      label: "string",
      thumbnail: "string",
      address: "Bandung",
      type: "campur",
      rating: 5,
    },
    {
      id: 5,
      name: "E",
      status: "ended",
      label: "string",
      thumbnail: "string",
      address: "Bandung",
      type: "campur",
      rating: 5,
    },
  ];

  // gambaran buat response handle
  const [select, setSelect] = useState("onproccess");
  const [show, setShow] = useState([]);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [...kos],
  });

  useEffect(() => {
    const data = response.data.filter((item) => item.role === select);
    setShow(data);
    // ketika nilai select berubah bakal jalan
  }, [select]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setReponse({
  //       isLoading: true,
  //       isError: false,
  //       data: [],
  //     });
  //     try {
  //       // const data = await historyService.getAll();
  //       setReponse({
  //         isLoading: false,
  //         isError: false,
  //         data: data,
  //       });
  //     } catch (error) {
  //       setReponse({ isLoading: false, isError: error, data: [] });
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <Defaultlayout title="Riwayat">
        <Section>
          <div className="pt-12 gap-y-6 pb-6">
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
                      className="px-4 py-2 text-black bg-gray-300 rounded-lg bg-primary-1"
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
