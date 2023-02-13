/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
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

  const getUsers = async () => {
    const response = await cmsService.getUsers({
      params: { page: page, size: size },
    });
    setReponse({ isLoading: false, isError: false, data: response.data });
  };

  useEffect(() => {
    setReponse({ isLoading: true, isError: false, data: [] });
    try {
      getUsers();
    } catch (error) {
      setReponse({ isLoading: false, isError: error, data: [] });
    }
  }, [page]);

  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Pengguna">
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
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Kelamin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    No HP
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.data.map((user) => (
                  <tr className="bg-white" key={uuid()}>
                    <th scope="row" className="px-6 py-4">
                      {user.id}
                    </th>
                    <td className="px-6 py-4">{user.fullname}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">{user.gender}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center">Tidak ada pengguna</h1>
          )}
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
