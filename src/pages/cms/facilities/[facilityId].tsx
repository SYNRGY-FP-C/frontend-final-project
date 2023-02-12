/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import facilityService from "@/services/facilities.service";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export default function Facility() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
  });

  const getFaficityById = async () => {
    setReponse({ isLoading: true, isError: false, message: "" });
    try {
      const response = await facilityService.get(router?.query?.facilityId);
      setForm({
        name: response.data.facility_name || "",
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
      await facilityService.update(router?.query?.facilityId, form);
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
    if (router?.query?.facilityId) {
      getFaficityById();
    }
  }, [router.isReady]);

  if (isLoading) return <LoadingScreen />;

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
              labelName="Nama Fasilitas"
              type="text"
              placeholder="Nama fasilitas"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-start">
            <Button
              className="px-4 py-2 text-center text-white border rounded-lg bg-primary-1"
              isLoading={response.isLoading}
            >
              Perbarui
            </Button>
          </div>
        </form>
      </DashboardLayout>
    </ProtectedPage>
  );
}
