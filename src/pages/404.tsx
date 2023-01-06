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
        className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center my-4"
      >
        Back to Homepage
      </Link>
    </ErrorPage>
  );
}
