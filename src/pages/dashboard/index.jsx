import ProtectedPage from "@/layouts/ProtectedPage";
import React from "react";

export default function index() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/401">
      <>index</>
    </ProtectedPage>
  );
}
