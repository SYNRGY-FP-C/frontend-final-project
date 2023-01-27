import ProtectedPage from "@/layouts/ProtectedPage";
import React from "react";

export default function index() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/403">
      <>index</>
    </ProtectedPage>
  );
}
