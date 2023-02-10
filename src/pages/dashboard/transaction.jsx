/* eslint-disable @next/next/no-img-element */
import HistoryCard from "@/components/cards/HistoryCard";
import { ROLE_ADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import transactionService from "@/services/transaction.service";
import React from "react";
import { useEffect, useState } from "react";

export default function Transaction() {
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const getTransaction = async () => {
    const { data } = await transactionService.transactions();
    setReponse({ isLoading: false, isError: false, data: data });
  };

  useEffect(() => {
    setReponse({ isLoading: true, isError: false, data: [] });
    try {
      getTransaction();
    } catch (error) {
      setReponse({ isLoading: false, isError: error, data: [] });
    }
  }, []);
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DashboardLayout title="Dashboard - Transaksi">
        <h1 className="text-3xl font-bold text-base-1">Transaksi</h1>
        <div className="flex flex-col gap-y-3">
          {response.data.length > 0 ? (
            response.data.map((transaksi) => {
              return <HistoryCard key={transaksi.id} />;
            })
          ) : (
            <h1 className="text-center">Tidak ada transaksi</h1>
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
