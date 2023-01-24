import ErrorPage from "@/components/ErrorPage";
import Link from "next/link";
import React from "react";

export default function UnAuthorized404() {
  return (
    <ErrorPage title="Unauthorized" code={401}>
      <p className="mb-4 text-lg font-light text-gray-500">
        Sorry, you can&apos;t access that page. You&apos;ll find lots to explore
        on the homepage.{" "}
      </p>
      <Link
        href="/"
        className="inline-flex text-white bg-primary-1 hover:bg-primary-1 font-medium rounded text-sm px-5 py-2.5 text-center my-4"
      >
        Back to Homepage
      </Link>
    </ErrorPage>
  );
}
