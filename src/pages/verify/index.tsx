/* eslint-disable @next/next/no-img-element */
import LoadingScreen from "@/components/LoadingScreen";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Verify() {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  const { phone_number, email } = router.query;

  useEffect(() => {
    if (
      !phone_number ||
      !email ||
      phone_number === "undefined" ||
      email === "undefined"
    ) {
      router.push("/");
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [router, phone_number, email]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <DefaultLayout title="Pilih Metode Verifikasi">
      <Section>
        <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center lg:flex-row lg:justify-around md:text-start">
          <h5 className="text-3xl font-semibold md:text-5xl text-blind">
            Pilih Metode Verifikasi
          </h5>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="block space-y-4">
              <button
                className="flex items-center justify-center w-48 px-5 py-3 space-x-2 bg-white border rounded-lg text-blind boder-blind"
                onClick={() =>
                  router.push(
                    `/verify/otp?method=$whatsapp&target=${phone_number}`
                  )
                }
              >
                Whatsapp
              </button>
              <button
                className="flex items-center justify-center w-48 px-5 py-3 space-x-2 bg-white border rounded-lg text-blind boder-blind"
                onClick={() =>
                  router.push(`/verify/otp?method=email&target=${email}`)
                }
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
