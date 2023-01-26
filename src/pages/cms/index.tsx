import { ROLE_SUPERADMIN } from "@/constants/roles";
import ProtectedPage from "@/layouts/ProtectedPage";
import React from "react";

export default function index() {
  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <>index</>
    </ProtectedPage>
  );
}
