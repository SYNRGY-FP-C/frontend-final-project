import Head from "next/head";
import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";

type DefaultLayoutProps = {
  title?: string;
  custom?: boolean;
  children: React.ReactNode;
};

export default function DefaultLayout({
  title = "Title",
  custom = false,
  children,
}: DefaultLayoutProps) {
  const { isAuthenticated, isAdmin } = useAuth();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
        {custom ? children : <main className="flex-1">{children}</main>}
        <Footer />
      </div>
    </>
  );
}
