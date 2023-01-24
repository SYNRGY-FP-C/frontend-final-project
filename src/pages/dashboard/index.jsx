import Carrousel from "@/components/Carrousel";
import ProtectedPage from "@/layouts/ProtectedPage";
import Sidebar from "@/layouts/SidebarDashboard";
import Link from "next/link";
import { AiFillStar } from "react-icons/Ai";
import { CiLocationOn } from "react-icons/Ci";


export default function index() {
  return (
    <ProtectedPage allowed={["ROLE_USER_PEMILIK"]} redirect="/401">
      <div className="flex flex-col flex-wrap ">
        <div class="flex">
          <Sidebar />
            <div className="w-full max-w-screen-xl h-full ml-80">
              <div className="w-4/5 mx-auto my-10">
                <Carrousel />
                <div className="my-12">
                  <h1 className="text-2xl font-bold">Statistik</h1>
                  <div className="w-full mt-3 flex ">
                    <div className="w-1/4 mr-4 border rounded-md shadow-lg h-32">
                      <div className="my-7 ml-7">
                        <h1 className="text-3xl text-primary-2 font-bold">5</h1>
                        <h2 className="text-lg">Janji Temu</h2>
                      </div>
                    </div>
                    <div className="w-1/4 mr-4 border rounded-md shadow-lg h-32">
                      <div className="my-7 ml-7">
                        <h1 className="text-3xl text-primary-2 font-bold">3</h1>
                        <h2 className="text-lg">Pemesan</h2>
                      </div>
                    </div>
                    <div className="w-1/4 mr-4 border rounded-md shadow-lg h-32">
                      <div className="my-7 ml-7">
                        <h1 className="text-3xl text-primary-2 font-bold">5</h1>
                        <h2 className="text-lg">Penghuni</h2>
                      </div>
                    </div>
                    <div className="w-1/4 mr-4 border rounded-md shadow-lg h-32">
                      <div className="my-7 ml-7">
                        <h1 className="text-3xl text-primary-2 font-bold">5</h1>
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
                        className="rounded-t-lg w-full h-32"/>
                      <div className="m-4">
                        <div className="flex place-content-between items-center">
                          <h1 className="font-bold">Kos Binar</h1>
                          <h1 className="text-xs border border-black rounded-full px-6 py-2">
                            Putra
                          </h1>
                        </div>
                        <div className="flex items-center">
                          <CiLocationOn className="w-4" />
                          <h1 className="ml-3">Kecamatan Lorem, Bandung</h1>
                        </div>
                        <div className="flex items-center place-content-between my-5">
                          <div className=" bg-primary-4 rounded-full">
                            <h1 className="py-1 px-3 text-white text-xs">
                              Superkost
                            </h1>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <AiFillStar className="w-6 text-warning" />
                              <h1 className="">5</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="w-1/2 h-72 border border-black rounded-lg ml-5 items-center">
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
