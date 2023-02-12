/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import InputWithLabel from "@/components/forms/InputWithLabel";
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import ruleService from "@/services/rules.service";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

export default function Rule() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setReponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const getRuleById = async () => {
    setReponse({ isLoading: true, isError: false, message: "" });
    try {
      const response = await ruleService.get(router?.query?.ruleId);
      setForm({
        name: response.data.rule || "",
        description: response.data.description || "",
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
      await ruleService.update(router?.query?.ruleId, form);
      setReponse({
        isLoading: false,
        isError: false,
        message: "Peraturan berhasil diubah",
      });
    } catch (error) {
      setReponse({
        isLoading: false,
        isError: true,
        message: "Peraturan gagal diubah",
      });
    }
  };

  useEffect(() => {
    if (router?.query?.ruleId) {
      getRuleById();
    }
  }, [router.isReady]);

  if (isLoading) return <LoadingScreen />;

  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Peraturan">
        {response.message && (
          <Alert type={response.isError ? "error" : "success"}>
            {response.message}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <InputWithLabel
              labelName="Nama Peraturan"
              type="text"
              placeholder="Nama peraturan"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <InputWithLabel
              labelName="Deskripsi Pendek"
              placeholder="Deskripsi pendek peraturan"
              type="text"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          <div className="flex justify-end">
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
