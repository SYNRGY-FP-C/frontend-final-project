import ProtectedPage from "@/layouts/ProtectedPage";
import React from "react";

export default function CMS() {
  return (
    <ProtectedPage allowed={["ROLE_USER_SUPERUSER"]} redirect="/401">
      <>index</>
    </ProtectedPage>
  );
}
