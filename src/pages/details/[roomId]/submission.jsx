/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import InputTypePayment from "@/components/forms/InputTypePayment";
import InputWithLabel from "@/components/forms/InputWithLabel";
import VerifIdentitasButton from "@/components/forms/VerifIdentitasButton";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import DescriptionItem from "@/components/items/DescriptionItem";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import SubmissionDetail from "@/layouts/SubmissionDetail";
import roomService from "@/services/room.service";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useEffect,useState } from "react";
import { MdChevronLeft } from "react-icons/md";

const mockDataRoom =
  {
    id: 1,
    name: "Kamar Medium Kost Lorem",
    type: "Medium",
    rating: "4.8",
    label: "Superkost",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, dolor vitae vestibulum varius, sem nisi malesuada tellus, at tempor nibh augue at massa. Aliquam non sem ante. Donec hendrerit orci nec dapibus accumsan. In sollicitudin quis arcu non elementum. Sed congue felis at aliquam pulvinar. Vivamus eu justo vel enim blandit faucibus non mattis sapien. Suspendisse potenti. Aliquam at neque eu mi laoreet aliquet et et erat.",
    max_person: 3,
    price: 1200000,
    images: {
      kost :[
        {
          id: 1,
          url: "image_kost1.png"
        },
        {
          id: 2,
          url: "image_kost2.png"
        },
      ],
      room : [
        {
          id: 1,
          url: "image_room1.png"
        },
        {
          id: 2,
          url: "image_room2.png"
        }
      ]
    },
    facilities: [
      {
        id: 1,
        name: "Kamar Mandi",
      },
      {
        id: 2,
        name: "Kasur",
      },
      {
        id: 3,
        name: "Kipas",
      },
      {
        id: 4,
        name: "Jendela",
      },
      {
        id: 5,
        name: "Meja",
      }
    ],
    rules: [
      {
        id: 1,
        name: "Tamu boleh menginap"
      },
      {
        id: 2,
        name: "Tipe ini bisa diisi maks. 2 orang/ kamar"
      },
      {
        id: 3,
        name: "Tidak untuk pasutri"
      },
      {
        id: 4,
        name: "Tamu menginap dikenakan biaya"
      },
      {
        id: 5,
        name: "Kriteria umum"
      },
    ],
    another_room: [
      {
        id: 1,
        name: "Kamar Large Kost Lorem",
        price: 1700000,
        thumbnail: "thumbnail_other_room.png",
        label: "superkost",
        type: "campur",
        location: {
          city: "Bandung",
          district: "Kec. Lorem"
        },
        rating: "4.5"
      },
      {
        id: 2,
        name: "Kamar Large Kost Lorem",
        price: 1700000,
        thumbnail: "image_room1.png",
        location: {
          city: "Bandung",
          district: "Kec. Lorem"
        },
        rating: "4.5"
      }
    ],
    location: {
      long: "string",
      lat: "string",
      address: "Jl. Lorem ipsum dolor sit amet No. 2",
      province: "Jawa Barat",
      city: "Bandung",
      district: "Kec. Lorem",
      note: "40276"
    },
}

const mockDataUser = {
    id: 1,
    fullname: "Yusuf",
    birthdate: "2000-02-23",
    gender: "Laki-Laki",
    occupation: "Mahasiswa",
    email: "yusuf@gmail.com",
    phone: "081234567890",
    role: "penyewa",
    verified: true,
    photo: "/images/hero-image.jpg",
    verification: {
      type: "ktp",
      photo: "https://i0.wp.com/tutorian21.com/wp-content/uploads/2021/12/E-KTP-CDR-1.jpg?resize=768%2C491&ssl=1"
    },
    bank: {
      bank_name: "bca",
      account_number: "1234567890",
      account_name: "yusuf"
    }
}

export default function Submission() {
  const itemChecked = [
    {
      item: "Kursi",
      price: 50000,
    },
    {
      item: "Meja",
      price: 100000,
    },
    {
      item: "Kipas",
      price: 45000,
    },
    {
      item: "Lemari",
      price: 150000,
    },
    {
      item: "Kasur",
      price: 150000,
    },
    {
      item: "Laundry",
      price: 140000,
    },
  ];
  
  const [user, setUser] = useState(mockDataUser)
  const [room, setRoom] = useState(mockDataRoom)
  const [transaction, setTransaction] = useState([])
  const [response, setResponse] = useState({
    isLoading: false,
    isError : false,
    message: ""
  })
  const [count, setCount] = useState(0);
  const [rentDate, setRentDate] = useState("");
  const [typeDokumen, setTypeDokumen] = useState("");
  const [typePayment, setTypePayment] = useState("");
  const [checkedOrder, setCheckedOrder] = useState(new Array(itemChecked.length).fill(false));
  const [totalExtra, setTotalExtra] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(()=> {
    const fetchRoom = async () => {
      setResponse({ isLoading: true, isError: false, message:"" });
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

  const handleRentDate = (e) => {
    const value = e.target.value;
    setRentDate(value);
  };

  const handleTypePayment = (e) => {
    const value = e.target.value;
    setTypePayment(value);
  };

  const increment = () => {
    if( count < room.max_person) setCount( count + 1 );
  }

  const decrement = () => {
    if( count > 0) setCount( count - 1 );
  }
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedOrder.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedOrder(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + itemChecked[index].price;
        }
        return sum;
      },
      0
    );

    setTotalExtra(totalPrice);
    setTotalCost(room.price + totalPrice);
  };

  if (response.isLoading) return <LoadingScreen />;

  const handleAjukanSewa = () => {
    setOpen(true)
    // Create Transaction
  }

  return (
    <DefaultLayout title="Ajukan Penyewaan">
      <Section>
        <div className="flex flex-col gap-y-6">
          <div className="block mt-14">
            <Link href="/" className="inline-flex items-center py-2 gap-x-1">
              <MdChevronLeft className="w-7 h-7" />
              <p className="text-sm text-primary-1">Kembali</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="h-full col-span-12 lg:col-span-8">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px] my-4">
                Pengajuan Sewa
              </h3>
              <hr className="h-0.5 bg-gray-200 border-0 my-8" />
              <div className="flex flex-col my-8 gap-y-3">
                <h3 className="font-bold text-primary-1 text-[32px]">
                  Identitas Pencari
                </h3>

                <SubmissionDetail title="Profil Pencari">
                  <div className="flex flex-col gap-y-5 text-primary-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Nama lengkap</p>
                      <p>{user.fullname}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Email</p>
                      <p>{user.email}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Nomor Telepon</p>
                      <p>{user.phone}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Jenis Kelamin</p>
                      <p>{user.gender}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Pekerjaan</p>
                      <p>{user.occupation}</p>
                    </div>
                  </div>
                </SubmissionDetail>

                <SubmissionDetail title="Jumlah Penghuni">
                  <div className="inline-flex items-center gap-x-2">
                    <div className="inline-flex items-center gap-x-2">
                      <button 
                        className="w-10 h-10 rounded-lg border border-black text-xl"
                        onClick={() => decrement()}
                        >
                          -
                        </button>
                    </div>
                    <div
                      className="bg-gray-300 text-center text-primary-1 sm:text-sm border-1 rounded-lg block w-10 h-10 p-2.5 appearance-none">{count}
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                      <button 
                        className="w-10 h-10 rounded-lg border border-black text-xl"
                        onClick={() => increment()}
                        >
                          + 
                        </button>
                    </div>
                    <p className="text-primary-1">orang</p>
                  </div>
                </SubmissionDetail>

                <SubmissionDetail title="Jenis Dokumen">
                 <VerifIdentitasButton/>
                </SubmissionDetail>

                <SubmissionDetail title="Dokumen Persyaratan">
                  <div className="flex flex-row items-center justify-center w-full bg-gray-100 rounded-lg gap-x-3 h-52">
                  <div className="inline-flex items-center gap-x-2">
                      <div className="w-20 h-20 rounded-lg bg-primary-1-200"></div>
                    </div>
                      {/* <img src={`${user.verification.photo}`} alt={user.verification.type} className="w-full h-52 rounded-lg"/> */}
                      <p>Unggah scan KTP-mu di sini</p>
                  </div>
                </SubmissionDetail>

                <h3 className="font-bold text-primary-1 text-[32px] pt-5">
                  Detail Sewa
                </h3>

                <SubmissionDetail title="Tanggal Mulai Sewa">
                  <InputWithLabel
                      labelName=""
                      type="date"
                      placeholder="Tanggal Sewa"
                      required
                      value={rentDate}
                      onChange={(e) => handleRentDate(e)}
                    />
                </SubmissionDetail>

                <SubmissionDetail title="Tipe pembayaran">
                  <InputTypePayment 
                    labelName=""
                    placeholder="Tipe Pembayaran"
                    required
                    value={typePayment}
                    onChange={(e) => handleTypePayment(e)}/>
                </SubmissionDetail>

                <SubmissionDetail title="Tambahan Layanan & Fasilitas">
                  <div className="flex flex-col gap-y-2">
                      <div className="grid grid-cols-2 mb-8 gap-y-3">
                        {itemChecked.map(({ item, price }, index) => (
                          <Checkbox
                            name={item}
                            key={index}
                            value={price}
                            onChange={() => handleOnChange(index)}
                          >
                            {item}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                </SubmissionDetail>
              </div>

              <div className="flex flex-col my-6 gap-y-3">
                <h3 className="font-bold text-primary-1 text-[32px]">
                  Konfirmasi Ketentuan Kost{" "}
                </h3>
                <RoomDetail title="Fasilitas & Layanan">
                  <div className="grid grid-cols-2 mb-8 gap-y-4">
                    {room.facilities.map(facility => (
                      <DescriptionItem 
                        name={facility.name}
                        key={facility.id}
                      >
                        {facility.name}  
                      </DescriptionItem>
                    ))}
                  </div>
                  <p className="underline decoration-primary-1-200 decoration-2">
                    Lihat semua
                  </p>
                </RoomDetail>
                <hr className="h-0.5 bg-gray-200 border-0 my-8" />
                <RoomDetail title="Aturan Kost">
                  <div className="grid grid-cols-2 mb-8 gap-y-4">
                    {room.rules.map(rule => (
                      <DescriptionItem 
                        name={rule.name}
                        key={rule.id}
                      >
                        {rule.name}  
                      </DescriptionItem>
                    ))}
                  </div>
                  <p className="underline decoration-primary-1-200 decoration-2">
                    Lihat semua
                  </p>
              </RoomDetail>
              </div>
            </div>

            {/* Panel Total Pembayaran */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col bg-base-900 shadow rounded-xl gap-y-4">
                <div className="flex justify-center object-cover w-full overflow-hidden h-52">
                  <img
                    className="object-cover w-full rounded-t-xl"
                    src={`/images/${room.images.room[0].url}`}
                    alt="room kost"
                  />
                </div>
                <div className="flex flex-col p-5 gap-y-4">
                  <div className="inline-block items-center gap-x-4">
                    <div className="block mb-5">
                      <span className="inline-flex items-center h-7 px-4 py-1 text-xs text-center text-white bg-primary-3 rounded-full">
                        Superkost
                      </span>
                    </div>
                    <h5 className="text-[32px] font-bold">{room.name}</h5>
                  </div>
                  <div className="inline-flex gap-x-8">
                    <div className="inline-flex items-center gap-x-2">
                      <Star className="w-5 h-5" />
                      <span className="text-xl font-semibold">5</span>
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                      <span className="inline-flex items-center px-4 py-1 text-xs text-center border border-black rounded-full">
                        Campur
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex gap-y-2">
                    <Location className="w-10 h-5 mr-1" />
                      <span>
                      Jl. Lorem ipsum dolor sit amet No. 2, Kec. Lorem, Kel.
                      Ipsum, Kota Bandung, Jawa Barat, 40276
                      </span>
                  </div>
                  <p className="block text-xl font-semibold text-primary-1 md:pt-9">
                    Pembayaran Pertama
                  </p>
                  <div className="inline-flex justify-between">
                    <p>Biaya Kamar</p>
                    <p>{formatRupiah(room.price)}</p>
                  </div>
                  <div className="inline-flex justify-between">
                    <p>Tambahan</p>
                    <p>{formatRupiah(totalExtra)}</p>
                  </div>
                  <hr className="h-0.5 bg-gray-200 border-0" />
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-primary-1">Total Biaya</p>
                    <p className="font-bold text-primary-1">{formatRupiah(totalCost)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-0.5 bg-gray-200 border-0 my-4" />
          <RoomDetail title="Kebijakan Pembatalan">
            <Checkbox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit eleifend erat at fringilla. Praesent vestibulum diam mi,
              sed suscipit nisl iaculis vel.
            </Checkbox>
            
            <div className="flex justify-center my-5">
              <button 
                className="px-4 py-3 text-white rounded-lg w-72 bg-primary-1"
                onClick={() => handleAjukanSewa()}
              >
                Ajukan Sewa
              </button>
            </div>

            <Modal isOpen={open} setIsOpen={setOpen}>
              <img src="/images/succes_pengajuan_sewa.png" alt="Cancel" className="w-24 h-40" />
              <p className="text-xl text-center text-primary-1">
                Pengajuan sewamu sedang diproses!
              </p>
              <Link
                href="/my/history"
                className="w-full"
              >
                <Button
                  className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1"
                >
                  Lihat pengajuan
                </Button>
              </Link>
              <Link
                href="/"
                className="w-full"
              >
                <Button
                  className="inline-flex justify-center w-full px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1"
                >
                  Lanjut belanja
                </Button>
              </Link>
            </Modal>

          </RoomDetail>
        </div>
      </Section>
    </DefaultLayout>
  );
}
