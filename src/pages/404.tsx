import ErrorPage from "@/components/ErrorPage";
import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <ErrorPage code={404}>
      <p className="mb-4 text-lg font-light text-gray-500">
        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
        the homepage.{" "}
      </p>
      <Link
        href="/"
        className="inline-flex text-white bg-blind hover:bg-blind-100 focus:ring-4 font-medium rounded text-sm px-5 py-2.5 text-center my-4"
      >
        Back to Homepage
      </Link>
    </ErrorPage>
  );
}
