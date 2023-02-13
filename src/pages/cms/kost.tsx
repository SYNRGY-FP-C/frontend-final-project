/* eslint-disable @next/next/no-img-element */
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import cmsService from "@/services/cms.service";
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
    const { data } = await cmsService.getKost({
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
      <DashboardLayout title="CMS - Kost">
        <div className="flex flex-col gap-y-3">
          {response.data.length > 0 ? (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipe
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Provinsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kota
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pemilik
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.data.map((kost) => (
                  <tr className="bg-white" key={uuid()}>
                    <th scope="row" className="px-6 py-4">
                      {kost.id}
                    </th>
                    <td className="px-6 py-4">{kost.kost_name}</td>
                    <td className="px-6 py-4">{kost.kost_type}</td>
                    <td className="px-6 py-4">{kost.province}</td>
                    <td className="px-6 py-4">{kost.city}</td>
                    <td className="px-6 py-4">{kost.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center">Tidak ada kost</h1>
          )}
        </div>
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
      </DashboardLayout>
    </ProtectedPage>
  );
}
