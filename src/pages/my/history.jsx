/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_USER } from "@/constants/roles";
import Defaultlayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import historyService from "@/services/transaction.service";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function History() {
  // gambaran buat response handle
  const [select, setSelect] = useState("PENDING");
  const [show, setShow] = useState([]);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const getHistory = async () => {
    const { data } = await historyService.history();
    setReponse({ isLoading: false, isError: false, data: data });
    setShow(data);
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
                    className={clsx("w-full px-4 py-2 text-left rounded-lg", {
                      ["bg-primary-1 text-white"]:
                        select === "PENDING" || select === "REJECTED",
                      ["bg-base-7 text-base-2"]:
                        select !== "PENDING" && select !== "REJECTED",
                    })}
                    onClick={() => setSelect("PENDING")}
                  >
                    Diajukan
                  </Button>
                  <Button
                    className={clsx("w-full px-4 py-2 text-left rounded-lg", {
                      ["bg-primary-1 text-white"]: select === "ENDED",
                      ["bg-base-7 text-base-2"]: select !== "ENDED",
                    })}
                    onClick={() => setSelect("ENDED")}
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    className={clsx("w-full px-4 py-2 text-left rounded-lg", {
                      ["bg-primary-1 text-white"]: select === "APPROVED",
                      ["bg-base-7 text-base-2"]: select !== "APPROVED",
                    })}
                    onClick={() => setSelect("APPROVED")}
                  >
                    Disetujui
                  </Button>
                  <Button
                    className={clsx("w-full px-4 py-2 text-left rounded-lg", {
                      ["bg-primary-1 text-white"]: select === "ONGOING",
                      ["bg-base-7 text-base-2"]: select !== "ONGOING",
                    })}
                    onClick={() => setSelect("ONGOING")}
                  >
                    Sedang jalan
                  </Button>
                </div>
              </div>
              <div className="grid lg:col-span-9">
                {(select === "PENDING" || select === "REJECTED") && (
                  <div className="grid grid-col-span-2 place-content-start">
                    <div className="flex flex-row mt-3 mb-3 gap-x-4">
                      <div className="block">
                        <Button
                          className={clsx(
                            "px-6 py-2 w-full text-center bg-primary-1 rounded-lg text-primary-1",
                            {
                              ["bg-primary-1 text-white"]: select === "PENDING",
                              ["bg-base-7 text-base-2"]: select !== "PENDING",
                            }
                          )}
                          onClick={() => setSelect("PENDING")}
                        >
                          Dalam Proses
                        </Button>
                      </div>
                      <div className="block">
                        <Button
                          className={clsx(
                            "px-6 py-2 w-full text-center bg-primary-1 rounded-lg text-primary-1",
                            {
                              ["bg-primary-1 text-white"]:
                                select === "REJECTED",
                              ["bg-base-7 text-base-2"]: select !== "REJECTED",
                            }
                          )}
                          onClick={() => setSelect("REJECTED")}
                        >
                          Ditolak
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {response.data.length > 0 && show.length > 0 ? (
                  show.map((transaksi) => {
                    return (
                      <Link
                        key={transaksi.id}
                        href={`/my/payment/${transaksi.id}`}
                      >
                        <HistoryCard key={transaksi.id} data={transaksi} />
                      </Link>
                    );
                  })
                ) : (
                  <h1 className="text-center">Tidak ada riwayat</h1>
                )}
              </div>
            </div>
          </div>
        </Section>
      </Defaultlayout>
    </ProtectedPage>
  );
}
