/* eslint-disable @next/next/no-img-element */
import KostCard from "@/components/cards/KostCard";
import Carrousel from "@/components/Carrousel";
import { ROLE_ADMIN } from "@/constants/roles";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import kostService from "@/services/kost.service";
import statisticService from "@/services/statistic.service";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [statistic, setStatistic] = useState({
    bookers: 0,
    occupants: 0,
    empty_rooms: 0,
  });

  const [kost, setKost] = useState([]);

  const getStatistic = async () => {
    const { data } = await statisticService.getAllDash();
    setStatistic({
      bookers: data.bookers ?? 0,
      occupants: data.occupants ?? 0,
      empty_rooms: data.empty_rooms ?? 0,
    });
  };

  const getKost = async () => {
    const { data } = await kostService.getAll();
    setKost(data);
  };

  useEffect(() => {
    getStatistic();
    getKost();
  }, []);

  const onDelete = async (id) => {
    await kostService.remove(id);
    await getKost();
  };

  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/403">
      <DashboardLayout title="Dashboard - Pemilik">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-center w-full max-w-4xl mx-auto lg:p-6 2xl:max-w-6xl">
            <Carrousel />
          </div>
          <h1 className="text-2xl font-bold">Statistik</h1>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.bookers}
              </h5>
              <p className="text-lg">Pemesan</p>
            </div>
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.occupants}
              </h5>
              <p className="text-lg">Penghuni</p>
            </div>
            <div className="h-32 p-6 border rounded-lg border-base-5">
              <h5 className="text-3xl font-bold text-primary-2">
                {statistic.empty_rooms}
              </h5>
              <p className="text-lg">Kamar Kosong</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">Kos Anda</h1>
          <div className="grid h-full min-h-full grid-cols-1 gap-3 lg:grid-cols-2">
            {kost.length > 0 &&
              kost.map((kost) => (
                <KostCard
                  key={kost.id}
                  data={kost}
                  onDelete={() => onDelete(kost.id)}
                />
              ))}
            {kost.length > 0 && kost.length < 2 && (
              <div className="flex items-center justify-center h-full min-h-full border rounded-lg border-base-2">
                <h1 className="text-center">Anda belum memiliki kost lain</h1>
              </div>
            )}
          </div>
          {kost.length === 0 && (
            <div className="flex items-center justify-center h-full min-h-full">
              <h1 className="text-center">Loading</h1>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedPage>
  );
}
