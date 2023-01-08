import Head from "next/head";
import React from "react";

export default function ErrorPage({
  title = "404 Not Found",
  code = 404,
  children,
}) {
  const statuses = {
    404: "Something's missing.",
    500: "Internal Server Error.",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="flex items-center justify-center flex-1 min-h-screen">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h1 className="mb-4 font-extrabold tracking-tight text-blind text-7xl lg:text-9xl">
              {code}
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-blind md:text-4xl">
              {statuses[code]}
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
