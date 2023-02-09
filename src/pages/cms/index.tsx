/* eslint-disable @next/next/no-img-element */
import Carrousel from "@/components/Carrousel";
import { ROLE_SUPERADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardSuperadmin";
import ProtectedPage from "@/layouts/ProtectedPage";
import statisticService from "@/services/statistic.service";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [statistic, setStatistic] = useState({
    users: 0,
    kosts: 0,
    rooms: 0,
    transactions: 0,
  });

  const getStatistic = async () => {
    const { data } = await statisticService.getAll();
    setStatistic(data);
  };

  useEffect(() => {
    getStatistic();
  }, []);

  return (
    <ProtectedPage allowed={[ROLE_SUPERADMIN]} redirect="/403">
      <DashboardLayout title="CMS - Superadmin">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center w-full max-w-4xl mx-auto lg:p-6 2xl:max-w-6xl">
            <Carrousel />
          </div>
          <h1 className="text-2xl font-bold">Statistik</h1>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.users}
              </h5>
              <p className="text-lg">Pengguna</p>
            </div>
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.kosts}
              </h5>
              <p className="text-lg">Kost</p>
            </div>
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.rooms}
              </h5>
              <p className="text-lg">Kamar</p>
            </div>
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.rooms}
              </h5>
              <p className="text-lg">Transaksi</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
