import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/layouts/Navbar";
import Head from "next/head";
import React from "react";

import Footer from "./Footer";

export default function DefaultLayout({
  title = "Bapakos",
  custom = false,
  children,
}) {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col flex-wrap min-h-screen bg-base-900">
        <Navbar isAuthenticated={isAuthenticated} />
        {custom ? children : <main className="flex-1">{children}</main>}
        <Footer />
      </div>
    </>
  );
}
