/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import cmsService from "@/services/cms.service";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Transaction() {
  const router = useRouter();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    status: "",
    price: 0,
    payment_scheme: "",
    photo: "",
  });

  const getTransactionById = async () => {
    setReponse({ isLoading: true, isError: false, message: "" });
    try {
      const response = await cmsService.getTransactionById(router?.query?.trId);
      setForm({
        name: response.data.facility_name || "",
        status: response.data.status || "",
        price: response.data.price || 0,
        payment_scheme: response.data.payment_scheme || "",
        photo: response.data.photo || "",
      });

      setReponse({
        isLoading: false,
        isError: false,
        message: "",
      });
      setIsLoading(false);
    } catch (error) {
      router.push("/404");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setReponse({ isLoading: true, isError: false, message: "" });
    try {
      await cmsService.getTransactionById(router?.query?.trId);
      setReponse({
        isLoading: false,
        isError: false,
        message: "Fasilitas berhasil diubah",
      });
    } catch (error) {
      setReponse({
        isLoading: false,
        isError: true,
        message: "Fasilitas gagal diubah",
      });
    }
  };

  useEffect(() => {
    if (router?.query?.trId) {
      getTransactionById();
    }
  }, [router.isReady]);

  if (isLoading) return <LoadingScreen />;

  const statuses = {
    ONPROCCESS: "Dalam proses verifikasi",
    PENDING: "Dalam proses pengajuan",
    REJECTED: "Ditolak",
    ENDED: "Selesai",
    APPROVED: "Disetujui",
    ONGOING: "Sedang jalan",
  };
  const handleAcceptance = async (status) => {
    setButtonLoading(true);
    setReponse({ ...response, isError: false });
    try {
      await cmsService.updateTransactionById(router?.query?.trId, {
        status: status,
      });
      await getTransactionById();
      setReponse({
        isLoading: false,
        isError: false,
        message: "Berhasil memperbarui status",
      });
      setButtonLoading(false);
    } catch (error) {
      setReponse({
        isLoading: false,
        isError: true,
        message: "Gagal memperbarui status",
      });
      setButtonLoading(false);
    }
  };
  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Fasilitas">
        {response.message && (
          <Alert type={response.isError ? "error" : "success"}>
            {response.message}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <InputWithLabel
              labelName="Nama"
              type="text"
              placeholder="Nama"
              disabled={true}
              value={form.name}
            />{" "}
            <InputWithLabel
              labelName="Status"
              type="text"
              placeholder="Status"
              disabled={true}
              value={statuses[form.status]}
            />{" "}
            <InputWithLabel
              labelName="Harga"
              type="number"
              placeholder="Harga"
              disabled={true}
              value={String(form.price)}
            />
            <InputWithLabel
              labelName="Skema"
              type="text"
              placeholder="Skema"
              disabled={true}
              value={form.payment_scheme}
            />
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-center w-full h-64 overflow-hidden bg-gray-100 rounded-lg object-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {form.photo ? (
                <img
                  className="object-cover w-full rounded-lg"
                  src={form.photo}
                  alt={form.name}
                />
              ) : (
                <p className="text-primary-1">Belum ada dokumen</p>
              )}
            </div>
          </div>
          <div className="flex justify-start gap-3">
            <Button
              type="button"
              className="px-3 py-2 text-center border rounded-lg text-error"
              isLoading={buttonLoading}
              onClick={async () => await handleAcceptance("REJECTED")}
            >
              Tolak
            </Button>
            <Button
              type="button"
              className="px-4 py-2 text-center text-white border rounded-lg bg-primary-1"
              isLoading={buttonLoading}
              onClick={async () => await handleAcceptance("ONGOING")}
            >
              Terima
            </Button>
          </div>
        </form>
      </DashboardLayout>
    </ProtectedPage>
  );
}
