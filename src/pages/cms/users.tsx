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

  const getTransaction = async () => {
    const { data } = await cmsService.getUsers();
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
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
