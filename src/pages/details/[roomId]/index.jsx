/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import BreadCrumb from "@/components/BreadCrumb";
import Button from "@/components/buttons/Button";
import MapCard from "@/components/cards/MapCard";
import OtherRoomCard from "@/components/cards/OtherRoomCard";
import Location from "@/components/icons/Location";
import DescriptionItem from "@/components/items/DescriptionItem";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDescription from "@/layouts/RoomDescription";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";

export default function Details() {
  const img = [
    {
      id: 0,
      url: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/5/2022/09/Alt-Text-2.-Desain-Rumah-Kost-2-Lantai-Lahan-Sempit-Minimalis.png"
    },
    {
      id: 1,
      url: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/5/2022/09/Alt-Text-1.-Desain-Rumah-Kost-2-Lantai-Lahan-Sempit-Letter-U.png"
    },
    {
      id: 2,
      url: "https://www.kibrispdr.org/data/63/desain-kamar-kost-dengan-kamar-mandi-dalam-9.jpg"
    },
    {
      id: 3,
      url: "https://cdn-cms.pgimgs.com/static/2021/02/3.4-Desain-Kamar-Kost-Kamar-Mandi-Dalam.png"
    }
  ]
  const isVerified = true;

  const router = useRouter();
  const [room, setRoom] = useState([]);
  const [images] = useState(img)
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({
    isLoading : false,
    isError : false,
    message : "",
  })
  
  useEffect(()=> {
    const fetchRoom = async () => {
      setResponse({ isLoading: true, isError: false });
      try {
        const response = await roomService.get()
        setRoom(response.room)
        setResponse({
          isLoading: false,
          isError: false,
          message: "Berhasil Get Data Room",
        });
      } catch (err) {
        setResponse({
          isLoading: false,
          isError: true,
          message: `${err}, Gagal Get Data Room`,
        })
      }
    }
    fetchRoom()
  }, [])
  
  if (response.isLoading) return <LoadingScreen />;

  const handleButtonRegistrasi = () => {
    if(isVerified) {
      router.push(
        `/details/1/submission`
      );
    } else {
      setOpen(true)
    }
  }


  return (
    <DefaultLayout title="Kos itu">
      <Modal isOpen={open} setIsOpen={setOpen}>
        <img src="/images/cancel.png" alt="Cancel" className="w-24 h-24" />
        <p className="text-xl text-center text-primary-1">
          Anda harus melengkapi profil untuk melanjutkan registrasi
        </p>
        <Link
          href="/my/history"
          className="w-full"
        >
          <Button>
            Lengkapi profil
          </Button>
        </Link>
        <Button
          className="inline-flex justify-center w-full px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1"
          onClick={() => setOpen(false)}
        >
          Batal
        </Button>
      </Modal>
      <Section>
        <div className="flex flex-col gap-y-6">
          {/* BreadCrumb Navigasi */}
          <BreadCrumb />

          {response.message && (
            <Alert type={response.isError ? "error" : "success"}>
              {response.message}
            </Alert>
          )}

          {/* Image Kos */}
          {/* <RoomImagesCard/> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-y-0 lg:gap-x-2 rounded-2xl">
            <div className="flex w-full col-span-6 max-h-[392px]">
              <div className="flex justify-center object-cover w-full overflow-hidden max-h-48 sm:max-h-72 md:max-h-full">
                <img
                  className="object-cover w-full rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                  src={images[tab].url}
                  alt="Test"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex flex-row gap-2 lg:grid lg:grid-cols-2">
                {images.map((image, index)=> (
                <div key={index} className="flex justify-center object-cover w-full overflow-hidden max-h-24 lg:max-h-48">
                  <img
                    key={index}
                    className="object-cover w-full"
                    src={image.url}
                    alt={image.url}
                    onClick={() => setTab(index)}
                  />
                </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tittle */}
          <div className="flex flex-col md:justify-between md:flex-row">
            <div className="inline-flex items-center gap-x-3">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px]">
                Kamar A Kost Lorem
              </h3>
              <p className="text-sm italic md:text-xl">Sisa 1 kamar</p>
            </div>
          </div>

          {/* Detail Room */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <RoomDescription />

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              
              {/* Deskripsi Kamar */}
              <RoomDetail title="Deskripsi">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, dolor vitae vestibulum varius, sem nisi malesuada tellus, at tempor nibh augue at massa. Aliquam non sem ante. Donec hendrerit orci nec dapibus accumsan. In sollicitudin quis arcu non elementum. Sed congue felis at aliquam pulvinar. Vivamus eu justo vel enim blandit faucibus non mattis sapien. Suspendisse potenti. Aliquam at neque eu mi laoreet aliquet et et erat.</p>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Fasilitas */}
              <RoomDetail title="Fasilitas & Layanan">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                </div>
                <p className="underline decoration-primary-1-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Aturan Kos */}
              <RoomDetail title="Aturan Kost">
                <div className="grid grid-cols-2 mb-8 gap-y-4">
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                  <DescriptionItem />
                </div>
                <p className="underline decoration-primary-1-200 decoration-2">
                  Lihat semua
                </p>
              </RoomDetail>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Tipe Kamar Lain*/}
              <RoomDetail title="Tipe Kamar Lain dari Pemilik Kost Ini">
                <div className="flex gap-x-3">
                  <OtherRoomCard />
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Lokasi */}
              <RoomDetail title="Lokasi">
                <div className="flex flex-col gap-y-3">
                  <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row">
                  <Location className="w-5 h-5 mr-1" />
                    <p>
                      Jl. Lorem ipsum dolor sit amet No. 2, Kec. Lorem, Kel.
                      Ipsum, Kota Bandung, Jawa Barat, 40276
                    </p>
                  </div>
                  <MapCard />
                </div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Ulasan */}
              <RoomDetail title="Ulasan">
                <div className="flex flex-col gap-y-3"></div>
              </RoomDetail>

              <hr className="h-0.5 bg-gray-200 border-0 my-8" />

              {/* Kontak Pemiliki Kos */}
              <RoomDetail title="Kontak Pemilik Kos">
                <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-y-4">
                  <div className="flex flex-row">
                    <div className="flex justify-center object-cover w-32 h-32 overflow-hidden">
                      <img
                        className="object-cover w-full rounded-xl"
                        src="/images/hero-image.jpg"
                        alt="Test"
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                      <h3 className="text-xl font-medium text-primary-1">
                        Lorem Ipsum
                      </h3>
                      <p className="text-primary-1">
                        Bergabung pada September 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-56 gap-y-3">
                    <button className="inline-flex items-center px-4 py-3 rounded-lg text-primary-1 bg-primary-1-200 gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-primary-1"></div>
                      <p> Hubungi pemilik</p>
                    </button>
                    <button className="inline-flex items-center px-4 py-3 rounded-lg text-primary-1 bg-primary-1-200 gap-x-3">
                      <div className="w-5 h-5 rounded-lg bg-primary-1"></div>
                      <p>Jadwalkan survey</p>
                    </button>
                  </div>
                </div>
              </RoomDetail>
            </div>

            {/* Panel Form Penyewaan */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative w-full">
                <div className="flex flex-col p-8 rounded-lg shadow gap-y-4">
                
                  {/* Icon Save To Wishlisht*/}
                  <div className="inline-flex items-center gap-x-6">
                    <div className="inline-flex items-center gap-x-2">
                      <button className="w-5 h-5 rounded-lg bg-gray-300"></button>
                      Simpan
                    </div>
                  </div>
                  {/* Label */}
                  <div className="block">
                    <span className="inline-flex items-center px-4 py-1 text-xs text-center bg-gray-200 rounded-lg">
                      Superkost
                    </span>
                  </div>
                  {/* title room panel */}
                  <div className="inline-block items-center gap-x-3">
                    <h3 className="font-bold text-primary-1 text-3xl md:text-[24px]">
                      Kamar Medium Kost Lorem
                    </h3>
                    <div className="inline-flex flex-col gap-2 lg:items-center lg:flex-row pt-3">
                      <Location className="w-5 h-5 mr-1" />
                      <p className="text-[15px]">
                        Kecamatan Lorem, Bandung
                      </p>
                    </div>
                  </div>
                  <hr className="h-0.5 bg-gray-400 border-0" />
                  {/* Harga Kamar */}
                  <p className="text-primary-1">Mulai dari</p>
                  <p className="text-primary-1">
                    {" "}
                    <span className="text-2xl font-semibold">
                      Rp. 1.200.000
                    </span>{" "}
                    / bulan
                  </p>
                  {/* Button Registrasi */}
                  <button 
                    className="px-4 py-3 w-full text-white rounded-lg bg-primary-1 hover:bg-sky-700"
                    onClick={()=> handleButtonRegistrasi()}
                  > 
                    Registrasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
