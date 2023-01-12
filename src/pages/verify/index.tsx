/* eslint-disable @next/next/no-img-element */
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Verify() {
  const { isVerified, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  if (isLoading || !isAuthenticated) return <LoadingScreen />;

  if (isVerified) {
    setTimeout(() => router.push("/"), 2500);
    return <LoadingScreen redirect page="home" />;
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
              <Link
                href="/verify/otp?method=whatsapp"
                className="flex items-center justify-center w-48 px-5 py-3 space-x-2 bg-white border rounded-lg text-blind boder-blind"
              >
                Whatsapp
              </Link>
              <Link
                href="/verify/otp?method=email"
                className="flex items-center justify-center w-48 px-5 py-3 space-x-2 bg-white border rounded-lg text-blind boder-blind"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
