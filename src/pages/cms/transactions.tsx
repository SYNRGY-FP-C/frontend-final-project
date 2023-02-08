/* eslint-disable @next/next/no-img-element */
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import cmsService from "@/services/cms.service";
import { formatRupiah } from "@/utils/helper";
import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Transaction() {
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const getTransaction = async () => {
    const { data } = await cmsService.getTransaction();
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
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Transaksi">
        <div className="flex flex-col gap-y-3">
          {response.data.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pengguna
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah Orang
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Skema
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.data.map((transaction) => (
                  <tr className="bg-white" key={uuid()}>
                    <th scope="row" className="px-6 py-4">
                      {transaction.id}
                    </th>
                    <td className="px-6 py-4">{transaction.account_id}</td>
                    <td className="px-6 py-4">{transaction.num_of_people}</td>
                    <td className="px-6 py-4">{transaction.payment_scheme}</td>
                    <td className="px-6 py-4">
                      {formatRupiah(transaction.price)}
                    </td>
                    <td className="px-6 py-4">{transaction.status}</td>
                    <td className="px-6 py-4">
                      {transaction.status === "PENDING" ? "Terima" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center">Tidak ada pengguna</h1>
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
