/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import ruleService from "@/services/rules.service";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Rules() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
    message: "",
  });

  const getRules = async () => {
    setReponse({ ...response, isLoading: true, data: [] });
    const { data } = await ruleService.getAll();
    setReponse({ ...response, isLoading: false, isError: false, data: data });
  };

  useEffect(() => {
    setReponse({ ...response, isLoading: true, isError: false, data: [] });
    try {
      getRules();
    } catch (error) {
      setReponse({ ...response, isLoading: false, isError: true, data: [] });
    }
  }, []);

  const onDelete = async (id: number) => {
    try {
      setButtonLoading(true);
      await ruleService.remove(id);
      await getRules();
      setButtonLoading(false);
    } catch (error) {
      setButtonLoading(false);
      setReponse({
        ...response,
        isLoading: false,
        isError: error,
        message: "Gagal menghapus peraturan",
      });
    }
  };

  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Peraturan">
        <div className="flex flex-col gap-3 space-y-3">
          {response.message && (
            <Alert type={response.isError ? "error" : "success"}>
              {response.message}
            </Alert>
          )}
          <div className="block">
            <Link
              href="/cms/rules/add"
              className="px-4 py-2 text-center text-white border rounded-lg bg-primary-1"
            >
              Tambahkan
            </Link>
          </div>
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
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {response.isLoading ? (
                <tr className="bg-white">
                  <td colSpan={4} className="px-6 py-4">
                    <div className="flex justify-center">Memuat data...</div>
                  </td>
                </tr>
              ) : response.data.length > 0 ? (
                response.data.map((rule) => (
                  <tr className="bg-white" key={uuid()}>
                    <th scope="row" className="px-6 py-4">
                      {rule.id}
                    </th>
                    <td className="px-6 py-4">{rule.rule}</td>
                    <td className="px-6 py-4">{rule.description}</td>
                    <td className="flex flex-col gap-3 px-6 py-4 lg:flex-row">
                      <Button
                        className="px-3 py-2 text-center border rounded-lg text-error"
                        onClick={async () => await onDelete(rule.id)}
                        isLoading={buttonLoading}
                      >
                        Hapus
                      </Button>
                      <Link
                        href={`/cms/rules/${rule.id}`}
                        className="px-3 py-2 text-center border rounded-lg text-base-2"
                      >
                        Ubah
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white">
                  <td colSpan={4} className="px-6 py-4">
                    <div className="flex justify-center">Tidak ada data</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
