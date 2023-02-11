/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_ADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import transactionService from "@/services/transaction.service";
import clsx from "clsx";
import React from "react";
import { useEffect, useState } from "react";

export default function History() {
  // gambaran buat response handle
  const [select, setSelect] = useState("ONGOING");
  const [show, setShow] = useState([]);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const getHistory = async () => {
    const { data } = await transactionService.history();
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
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DashboardLayout title="Dashboard - Riwayat">
        <h1 className="text-3xl font-bold text-base-1">Riwayat</h1>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row gap-3">
            <div className="block">
              <Button
                className={clsx(
                  "px-6 py-2 w-full text-center bg-primary-1 rounded-lg text-primary-1",
                  {
                    ["bg-primary-1 text-white"]: select === "ONGOING",
                    ["bg-base-7 text-base-2"]: select !== "ONGOING",
                  }
                )}
                onClick={() => setSelect("ONGOING")}
              >
                Sekarang
              </Button>
            </div>
            <div className="block">
              <Button
                className={clsx(
                  "px-6 py-2 w-full text-center bg-primary-1 rounded-lg text-primary-1",
                  {
                    ["bg-primary-1 text-white"]: select === "ENDED",
                    ["bg-base-7 text-base-2"]: select !== "ENDED",
                  }
                )}
                onClick={() => setSelect("ENDED")}
              >
                Sebelumnya
              </Button>
            </div>
          </div>
          {response.data.length > 0 ? (
            show.map((transaksi) => {
              return <HistoryCard key={transaksi.id} />;
            })
          ) : (
            <h1 className="text-center">Tidak ada riwayat</h1>
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
