/* eslint-disable @next/next/no-img-element */
import { ROLE_ADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedPage from "@/layouts/ProtectedPage";

export default function Dashboard() {
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DashboardLayout title="Dashboard - Transaksi">oke</DashboardLayout>
    </ProtectedPage>
  );
}
