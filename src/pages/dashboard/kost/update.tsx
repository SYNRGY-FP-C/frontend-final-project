import { ROLE_ADMIN } from "@/constants/roles";
import ProtectedPage from "@/layouts/ProtectedPage";
import React from "react";

export default function Update() {
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <>index</>
    </ProtectedPage>
  );
}
