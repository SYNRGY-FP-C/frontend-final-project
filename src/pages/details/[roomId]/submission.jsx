/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import InputTypePayment from "@/components/forms/InputTypePayment";
import InputWithLabel from "@/components/forms/InputWithLabel";
import Location from "@/components/icons/Location";
import Star from "@/components/icons/Star";
import DescriptionItem from "@/components/items/DescriptionItem";
import Modal from "@/components/Modal";
import { ROLE_USER } from "@/constants/roles";
import { useAuth } from "@/contexts/AuthContext";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import SubmissionDetail from "@/layouts/SubmissionDetail";
import roomService from "@/services/room.service";
import transactionService from "@/services/transaction.service";
import { formatRupiah } from "@/utils/helper";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdChevronLeft } from "react-icons/md";

export default function Submission({ roomSubmission }) {
  const { user } = useAuth();
  const [capacity, setCapacity] = useState(0);
  const [rentDate, setRentDate] = useState("");
  const [paymentScheme, setPaymentScheme] = useState("");
  const [checkedAddOnFacilities, setCheckedAddOnFacilities] = useState([]);
  const [totalExtra, setTotalExtra] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const [radio, setRadio] = useState("");

  useEffect(() => {
    setRadio(user?.verification?.type || "");
  }, [user]);

  const handleRentDate = (e) => {
    const value = e.target.value;
    setRentDate(value);
  };

  const handlePaymentScheme = (e) => {
    const value = e.target.value;
    setPaymentScheme(value);
  };

  const increment = () => {
    if (capacity < roomSubmission.max_person) setCapacity(capacity + 1);
  };

  const decrement = () => {
    if (capacity > 0) setCapacity(capacity - 1);
  };

  const handleCheckbox = (id, list) => {
    const checkboxes = checkedAddOnFacilities;

    const find = checkboxes.findIndex((checkbox) => checkbox.id === id);

    if (find > -1) {
      checkboxes.splice(find, 1);
    } else {
      checkboxes.push(list.find((item) => item.id === id));
    }
    setCheckedAddOnFacilities(checkboxes);
  };

  useEffect(() => {
    const totalPrice = checkedAddOnFacilities.reduce((sum, currentState) => {
      return sum + currentState.price;
    }, 0);

    setTotalExtra(totalPrice);
    setTotalCost(roomSubmission.price + totalPrice);
  }, [checkedAddOnFacilities]);

  const handleAjukanSewa = async () => {
    const dataTransaction = {
      room_id: roomSubmission.id,
      user_id: user?.id,
      capacity,
      start_date: moment(new Date(rentDate)).format("DD-MM-YYYY"),
      payment_scheme: paymentScheme,
      addons_facilities: checkedAddOnFacilities,
    };
    setResponse({ isLoading: true, isError: false, message: "" });
    try {
      const transaction = await transactionService.create(dataTransaction);
      console.log(transaction);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Transaksi Berhasil",
      });
      setOpenModal(true);
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: error,
      });
    }
  };

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/login/pencari">
      <DefaultLayout title="Ajukan Penyewaan">
        <Section>
          <div className="flex flex-col gap-y-6">
            <div className="block mt-24">
              <Link href="/" className="inline-flex items-center py-2 gap-x-1">
                <MdChevronLeft className="w-7 h-7 text-secondary-2" />
                <p className="text-lg font-bold text-secondary-2">Kembali</p>
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
                        <p>{user?.fullname}</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className="font-semibold">Email</p>
                        <p>{user?.email}</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className="font-semibold">Nomor Telepon</p>
                        <p>{user?.phone}</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className="font-semibold">Jenis Kelamin</p>
                        <p>{user?.gender}</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className="font-semibold">Pekerjaan</p>
                        <p>{user?.occupation}</p>
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
                      <div className="bg-gray-300 text-center text-primary-1 sm:text-sm border-1 rounded-lg block w-10 h-10 p-2.5 appearance-none">
                        {capacity}
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
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-radio"
                          type="radio"
                          disabled
                          defaultChecked={radio === "ktp"}
                          name="inline-radio-group"
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="inline-radio"
                          className="ml-2 text-sm font-medium"
                        >
                          e-KTP
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          disabled
                          defaultChecked={radio === "sim"}
                          name="inline-radio-group"
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="inline-2-radio"
                          className="ml-2 text-sm font-medium"
                        >
                          SIM
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-checked-radio"
                          type="radio"
                          disabled
                          defaultChecked={radio === "passport"}
                          name="inline-radio-group"
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="inline-checked-radio"
                          className="ml-2 text-sm font-medium"
                        >
                          Passport
                        </label>
                      </div>
                    </div>
                  </SubmissionDetail>

                  <SubmissionDetail title="Dokumen Persyaratan">
                    <div className="flex flex-row items-center justify-center w-full bg-gray-100 rounded-lg gap-x-3 h-52">
                      <div className="inline-flex items-center gap-x-2">
                        <div className="w-20 h-20 rounded-lg bg-primary-1-200"></div>
                      </div>
                      {/* <img src={`${user?.verification.photo}`} alt={user?.verification.type} className="w-full h-52 rounded-lg"/> */}
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
                      value={paymentScheme}
                      onChange={(e) => handlePaymentScheme(e)}
                    />
                  </SubmissionDetail>

                  <SubmissionDetail title="Tambahan Layanan & Fasilitas">
                    <div className="flex flex-col gap-y-2">
                      <div className="grid grid-cols-2 mb-8 gap-y-3">
                        {roomSubmission?.addons_facilities?.map(
                          ({ id, name, price }) => (
                            <Checkbox
                              name={name}
                              key={id}
                              value={price}
                              onChange={() =>
                                handleCheckbox(
                                  id,
                                  roomSubmission?.addons_facilities
                                )
                              }
                            >
                              {name}
                            </Checkbox>
                          )
                        )}
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
                      {roomSubmission?.facilities.map((facility) => (
                        <DescriptionItem name={facility.name} key={facility.id}>
                          {facility.name}
                        </DescriptionItem>
                      ))}
                    </div>
                  </RoomDetail>
                  <hr className="h-0.5 bg-gray-200 border-0 my-8" />
                  <RoomDetail title="Aturan Kost">
                    <div className="grid grid-cols-2 mb-8 gap-y-4">
                      {roomSubmission?.rules.map((rule) => (
                        <DescriptionItem name={rule.name} key={rule.id}>
                          {rule.name}
                        </DescriptionItem>
                      ))}
                    </div>
                  </RoomDetail>
                </div>
              </div>

              {/* Panel Total Pembayaran */}
              <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col bg-base-9 shadow rounded-xl gap-y-4">
                  <div className="flex justify-center object-cover w-full overflow-hidden h-52">
                    <img
                      className="object-cover w-full rounded-t-xl"
                      src={roomSubmission.images[0]}
                      alt={roomSubmission.name}
                    />
                  </div>
                  <div className="flex flex-col p-5 gap-y-4">
                    <div className="inline-block items-center gap-x-4">
                      <h5 className="text-[32px] font-bold">
                        {roomSubmission.name}
                      </h5>
                    </div>
                    <div className="inline-flex gap-x-8">
                      <div className="inline-flex items-center gap-x-2">
                        <Star className="w-5 h-5" />
                        <span className="text-xl font-semibold">
                          {roomSubmission.rating}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-x-2">
                        <span className="inline-flex items-center px-4 py-1 text-xs text-center border border-black rounded-full">
                          {roomSubmission.type}
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex gap-y-2">
                      <Location className="w-10 h-5 mr-1" />
                      <span>
                        {`${roomSubmission?.district}, ${roomSubmission?.city}`}
                      </span>
                    </div>
                    <p className="block text-xl font-semibold text-primary-1 md:pt-9">
                      Pembayaran Pertama
                    </p>
                    <div className="inline-flex justify-between">
                      <p>Biaya Kamar</p>
                      <p>{formatRupiah(roomSubmission.price)}</p>
                    </div>
                    <div className="inline-flex justify-between">
                      <p>Tambahan</p>
                      <p>{formatRupiah(totalExtra)}</p>
                    </div>
                    <hr className="h-0.5 bg-gray-200 border-0" />
                    <div className="inline-flex justify-between">
                      <p className="font-bold text-primary-1">Total Biaya</p>
                      <p className="font-bold text-primary-1">
                        {formatRupiah(totalCost)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-0.5 bg-gray-200 border-0 my-4" />
            <RoomDetail title="Kebijakan Pembatalan">
              <Checkbox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit eleifend erat at fringilla. Praesent vestibulum diam
                mi, sed suscipit nisl iaculis vel.
              </Checkbox>

              <div className="flex justify-center my-5">
                <button
                  className="px-4 py-3 text-white rounded-lg w-72 bg-primary-1"
                  onClick={() => handleAjukanSewa()}
                >
                  Ajukan Sewa
                </button>
              </div>

              <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                <img
                  src="/images/succes_pengajuan_sewa.png"
                  alt="Cancel"
                  className="w-24 h-40"
                />
                <p className="text-xl text-center text-primary-1">
                  Pengajuan sewamu sedang diproses!
                </p>
                <Link href="/my/history" className="w-full">
                  <Button className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1">
                    Lihat pengajuan
                  </Button>
                </Link>
                <Link href="/" className="w-full">
                  <Button className="inline-flex justify-center w-full px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1">
                    Lanjut belanja
                  </Button>
                </Link>
              </Modal>
            </RoomDetail>
          </div>
        </Section>
      </DefaultLayout>
    </ProtectedPage>
  );
}

export const getServerSideProps = async (contex) => {
  const { data } = await roomService.get(contex.query.roomId);
  return {
    props: {
      roomSubmission: data,
    },
  };
};
