/* eslint-disable @next/next/no-img-element */
import Email from "@/components/icons/Email";
import Whatsapp from "@/components/icons/Whatsapp";
import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@/contexts/AuthContext";
import Section from "@/layouts/Section";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Verify() {
  const { isVerified, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) return <LoadingScreen />;

  // if (isVerified) {
  //   setTimeout(() => router.push("/"), 2500);
  //   return <LoadingScreen redirect page="home" />;
  // }

  return (
    <>
      <Head>
        <title>Pilih Metode Verifikasi</title>
      </Head>
      <div className="flex flex-col flex-wrap min-h-screen bg-white">
        <main className="flex items-center justify-center flex-1">
          <Section>
            <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center lg:flex-row lg:justify-around md:text-start">
              <h5 className="text-3xl typo-headline-1 md:text-5xl text-primary-1">
                Pilih Metode Verifikasi
              </h5>
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="block space-y-4">
                  <Link
                    href="/verify/otp?method=whatsapp"
                    className="flex items-center justify-center px-5 py-3 space-x-2 text-xl border-2 rounded-lg w-60 bg-base-900 text-primary-1 border-primary-1"
                  >
                    <Whatsapp className="mr-2 w-7 h-7" />
                    Whatsapp
                  </Link>
                  <Link
                    href="/verify/otp?method=email"
                    className="flex items-center justify-center px-5 py-3 space-x-2 text-xl border-2 rounded-lg w-60 bg-base-900 text-primary-1 border-primary-1"
                  >
                    <Email className="mr-2 w-7 h-7" />
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
}
