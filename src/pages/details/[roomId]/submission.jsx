/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
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
import Link from "next/link";
import { useEffect,useState } from "react";
import { MdChevronLeft } from "react-icons/md";

export default function Submission() {
  const max_person = 5
  const rooms = {
    name: "cakra 1",
    price: 1200000,
  };
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

  const [room, setRoom] = useState([])
  const [transaction, setTransaction] = useState([])
  const [response, setResponse] = useState({
    isLoading: false,
    isError : false,
    message: ""
  })
  const [count, setCount] = useState(0);
  const [rentDate, setRentDate] = useState("");
  const [typePayment, setTypePayment] = useState("")
  const [checkedOrder, setCheckedOrder] = useState(new Array(itemChecked.length).fill(false));
  const [totalExtra, setTotalExtra] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [open, setOpen] = useState(false);

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

  const handleRentDate = (e) => {
    const value = e.target.value;
    setRentDate(value);
  };

  const handleTypePayment = (e) => {
    const value = e.target.value;
    setTypePayment(value);
  };

  const increment = () => {
    if( count < max_person) setCount( count + 1 );
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
    setTotalCost(rooms.price + totalPrice);
  };

  if (response.isLoading) return <LoadingScreen />;

  const handleAjukanSewa = () => {
    setOpen(true)
    // CRUD Enpoint Transaction
  }

  return (
    <DefaultLayout title="Ajukan Penyewaan">
      <Section>
        <div className="flex flex-col gap-y-6">
          <div className="block">
            <Link href="/" className="inline-flex items-center py-2 gap-x-1">
              <MdChevronLeft className="w-7 h-7" />
              <p className="text-sm text-primary-1">Kembali</p>
            </Link>
          </div>
          {response.message && (
            <Alert type={response.isError ? "error" : "success"}>
              {response.message}
            </Alert>
          )}
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
                      <p>Lorem Ipsum Dolor</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Email</p>
                      <p>lorem.ipsum@gmail.com</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Nomor Telepon</p>
                      <p>022222222222</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Jenis Kelamin</p>
                      <p>Wanita</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <p className="font-semibold">Pekerjaan</p>
                      <p>Mahasiswa</p>
                    </div>
                  </div>
                </SubmissionDetail>

                <SubmissionDetail title="Jumlah Penghuni">
                  <div className="inline-flex items-center gap-x-2">
                    <div className="inline-flex items-center gap-x-2">
                      <button 
                        className="w-10 h-10 rounded-lg bg-primary-1 text-white"
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
                        className="w-10 h-10 rounded-lg bg-primary-1 text-white"
                        onClick={() => increment()}
                        >
                          + 
                        </button>
                    </div>
                    <p className="text-primary-1">orang</p>
                  </div>
                </SubmissionDetail>

                <SubmissionDetail title="Jenis Dokumen">
                  <div className="inline-flex items-center gap-x-2">
                    <VerifIdentitasButton/>
                  </div>
                </SubmissionDetail>

                <SubmissionDetail title="Dokumen Persyaratan">
                  <div className="flex flex-row items-center justify-center w-full bg-gray-100 rounded-lg gap-x-3 h-36">
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-20 h-20 rounded-lg bg-primary-1-200"></div>
                    </div>
                    <p>Unggah scan KTP-mu di sini</p>
                  </div>
                </SubmissionDetail>

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
              </div>
            </div>

            {/* Panel Total Pembayaran */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col bg-base-900 shadow rounded-xl gap-y-4">
                <div className="flex justify-center object-cover w-full overflow-hidden h-52">
                  <img
                    className="object-cover w-full rounded-t-xl"
                    src="/images/hero-image.jpg"
                    alt="Test"
                  />
                </div>
                <div className="flex flex-col p-5 gap-y-4">
                  <div className="inline-flex items-center gap-x-3">
                    <h5 className="text-[32px] font-bold">Kost Lorem</h5>
                    <div className="inline-block">
                      <span className="inline-flex items-center px-4 py-1 text-xs text-center bg-gray-200 rounded-lg">
                        Superkost
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex gap-x-8">
                    <div className="inline-flex items-center gap-x-2">
                      <Star className="w-5 h-5" />
                      <span className="text-xl font-semibold">5</span>
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-5 h-5 rounded-lg bg-primary-1"></div>{" "}
                      Campur
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
                    <p>Rp. {rooms.price}</p>
                  </div>
                  <div className="inline-flex justify-between">
                    <p>Tambahan</p>
                    <p>Rp. {totalExtra}</p>
                  </div>
                  <hr className="h-0.5 bg-gray-200 border-0" />
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-primary-1">Total Biaya</p>
                    <p className="font-bold text-primary-1">Rp. {totalCost}</p>
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
            
            <div className="flex justify-center">
              <button 
                className="px-4 py-3 text-white rounded-lg w-72 bg-primary-1"
                onClick={() => handleAjukanSewa()}
              >
                Ajukan Sewa
              </button>
            </div>

            <Modal isOpen={open} setIsOpen={setOpen}>
              <img src="/images/cancel.png" alt="Cancel" className="w-24 h-24" />
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
