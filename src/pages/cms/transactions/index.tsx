/* eslint-disable @next/next/no-img-element */
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import cmsService from "@/services/cms.service";
import { formatRupiah } from "@/utils/helper";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Transaction() {
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(30);

  const getTransaction = async () => {
    const { data } = await cmsService.getTransaction({
      params: { page: page, size: size },
    });
    setReponse({ isLoading: false, isError: false, data: data });
  };

  useEffect(() => {
    setReponse({ isLoading: true, isError: false, data: [] });
    try {
      getTransaction();
    } catch (error) {
      setReponse({ isLoading: false, isError: error, data: [] });
    }
  }, [page]);
  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Transaksi">
        <div className="flex flex-col gap-y-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  No
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
              {response.isLoading ? (
                <tr className="bg-white">
                  <td colSpan={7} className="px-6 py-4">
                    <div className="flex justify-center">Memuat data...</div>
                  </td>
                </tr>
              ) : response.data.length > 0 ? (
                response.data.map((transaction, index) => (
                  <tr className="bg-white" key={uuid()}>
                    <th scope="row" className="px-6 py-4">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{transaction.account_id}</td>
                    <td className="px-6 py-4">{transaction.num_of_people}</td>
                    <td className="px-6 py-4">{transaction.payment_scheme}</td>
                    <td className="px-6 py-4">
                      {formatRupiah(transaction.price)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={clsx("px-4 py-1.5 rounded-2xl text-xs", {
                          "text-warning": transaction.status === "PENDING",
                          "text-error": transaction.status === "REJECTED",
                          "text-success": transaction.status === "APPROVED",
                          "text-info": transaction.status === "ONPROCCESS",
                          "text-primary-1": transaction.status === "ONGOING",
                          "text-gray-300": transaction.status === "ENDED",
                        })}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/cms/transactions/${transaction.id}`}
                        className="px-3 py-2 text-center border rounded-lg text-base-2"
                      >
                        Lihat
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white">
                  <td colSpan={7} className="px-6 py-4">
                    <div className="flex justify-center">
                      Tidak ada transaksi
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {response.data.length > 0 ? (
            <div className="inline-flex item-center justify-center">
              <button onClick={() => (page > 1 ? setPage(page - 1) : 1)}>
                {"Prev <"}
              </button>
              <p className="mr-4 ml-4">{page}</p>
              <button onClick={() => setPage(page + 1)}>{"> Next"}</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
