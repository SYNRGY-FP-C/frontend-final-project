import ErrorPage from "@/components/ErrorPage";
import React from "react";

export default function InternalServerErrorPage500() {
  return (
    <ErrorPage code={500} title="Internal Server Error">
      {" "}
      <p className="mb-4 text-lg font-light text-gray-500">
        We are already working to solve the problem.
      </p>
    </ErrorPage>
  );
}
