/* eslint-disable @next/next/no-img-element */
import Carrousel from "@/components/Carrousel";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import { ROLE_ADMIN } from "@/constants/roles";
import ProtectedPage from "@/layouts/ProtectedPage";
import Sidebar from "@/layouts/SidebarDashboard";
import Link from "next/link";

export default function index() {
  return (
    <ProtectedPage allowed={[ROLE_ADMIN]} redirect="/401">
      <div className="flex flex-col flex-wrap ">
        <div className="flex">
          <Sidebar />
          <div className="w-full h-full max-w-screen-xl ml-80">
            <div className="w-4/5 mx-auto my-10">
              <Carrousel />
              <div className="my-12">
                <h1 className="text-2xl font-bold">Statistik</h1>
                <div className="flex w-full mt-3 ">
                  <div className="w-1/4 h-32 mr-4 border rounded-md shadow-lg">
                    <div className="my-7 ml-7">
                      <h1 className="text-3xl font-bold text-primary-2">5</h1>
                      <h2 className="text-lg">Janji Temu</h2>
                    </div>
                  </div>
                  <div className="w-1/4 h-32 mr-4 border rounded-md shadow-lg">
                    <div className="my-7 ml-7">
                      <h1 className="text-3xl font-bold text-primary-2">3</h1>
                      <h2 className="text-lg">Pemesan</h2>
                    </div>
                  </div>
                  <div className="w-1/4 h-32 mr-4 border rounded-md shadow-lg">
                    <div className="my-7 ml-7">
                      <h1 className="text-3xl font-bold text-primary-2">5</h1>
                      <h2 className="text-lg">Penghuni</h2>
                    </div>
                  </div>
                  <div className="w-1/4 h-32 mr-4 border rounded-md shadow-lg">
                    <div className="my-7 ml-7">
                      <h1 className="text-3xl font-bold text-primary-2">5</h1>
                      <h2 className="text-lg">Kamar Kosong</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-10">
                <h1 className="text-2xl font-bold">Kos Anda</h1>
                <div className="flex ">
                  <Link
                    href="/dashboard"
                    className="w-1/2 border rounded-lg hover:shadow-xl shadow-primary-2"
                  >
                    <img
                      src="/images/hero.png"
                      alt=""
                      className="w-full h-32 rounded-t-lg"
                    />
                    <div className="m-4">
                      <div className="flex items-center place-content-between">
                        <h1 className="font-bold">Kos Binar</h1>
                        <h1 className="px-6 py-2 text-xs border border-black rounded-full">
                          Putra
                        </h1>
                      </div>
                      <div className="flex items-center">
                        <Location className="w-4" />
                        <h1 className="ml-3">Kecamatan Lorem, Bandung</h1>
                      </div>
                      <div className="flex items-center my-5 place-content-between">
                        <div className="rounded-full  bg-primary-4">
                          <h1 className="px-3 py-1 text-xs text-white">
                            Superkost
                          </h1>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <Star className="w-6" />
                            <h1 className="">5</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="items-center w-1/2 ml-5 border border-black rounded-lg h-72">
                    <h1 className="text-center mt-36">
                      Anda belum memiliki kost lain
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
}
