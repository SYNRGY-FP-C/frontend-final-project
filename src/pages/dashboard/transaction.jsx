/* eslint-disable @next/next/no-img-element */
import TransactionCard from "@/components/cards/TransactionCard";
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
    setReponse({
      isLoading: false,
      isError: false,
      data: data.filter((item) => item.status === "PENDING"),
    });
  };

  useEffect(() => {
    setReponse({ isLoading: true, isError: false, data: [] });
    try {
      getTransaction();
    } catch (error) {
      setReponse({ isLoading: false, isError: true, data: [] });
    }
  }, []);

  const handleAcceptance = async (id, status) => {
    setReponse({ ...response, isError: false });
    try {
      await transactionService.acceptance({
        id: id,
        status: status,
      });
      getTransaction();
    } catch (error) {
      setReponse({ isLoading: false, isError: true, data: [] });
    }
  };
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DashboardLayout title="Dashboard - Transaksi">
        <h1 className="text-3xl font-bold text-base-1">Transaksi</h1>
        <div className="flex flex-col gap-y-3">
          {response.data.length > 0 ? (
            response.data.map((transaksi) => {
              return (
                <TransactionCard
                  key={transaksi.id}
                  data={transaksi}
                  onAcceptance={() =>
                    handleAcceptance(transaksi.id, "APPROVED")
                  }
                  onReject={() => handleAcceptance(transaksi.id, "REJECTED")}
                />
              );
            })
          ) : (
            <h1 className="text-center">Tidak ada transaksi</h1>
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
