/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import InputDropzone from "@/components/forms/InputDropzone";
import File from "@/components/icons/File";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import { payments } from "@/constants/payments";
import { ROLE_USER } from "@/constants/roles";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import Section from "@/layouts/Section";
import transactionService from "@/services/transaction.service";
import { formatRupiah } from "@/utils/helper";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconContext } from "react-icons";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";

export default function Upload() {
  const router = useRouter();
  const [openAcc1, setOpenAcc1] = useState(0);
  const [openAcc2, setOpenAcc2] = useState(0);
  const [openAcc3, setOpenAcc3] = useState(0);
  const [copied, setCopied] = useState(false);
  const [dataPayment, setDataPayment] = useState([]);
  const [preview, setPreview] = useState(null);
  const [upload, setUpload] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState({
    icon: "",
    account_number: "",
    steps: [
      {
        title: "",
        rules: [],
      },
    ],
  });
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Payment by Id
  useEffect(() => {
    const fetchPayment = async () => {
      setResponse({ isLoading: true, isError: false, message: "" });
      try {
        if (router?.query?.paymentId) {
          const response = await transactionService.get(
            router?.query?.paymentId
          );
          setDataPayment(response.data);
          setResponse({
            isLoading: false,
            isError: false,
            message: "Berhasil Get Data Payment By Id",
          });
        }
      } catch (err) {
        setResponse({
          isLoading: false,
          isError: true,
          message: `${err}, Gagal Get Data Payment By Id`,
        });
      }
    };
    fetchPayment();
  }, [router.isReady]);

  // Router By Type
  useEffect(() => {
    if (router?.query?.type) {
      setIsLoading(false);
      setValue({ ...value, ...payments[router?.query?.type] });
    }
  }, [router.isReady]);

  // CountDown
  // useEffect(() => {
  //   let x = setInterval(function () {
  //     let now = new Date().getTime();
  //     let distance = new Date(dataPayment.tf_end_date).getTime() - now;
  //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  //     let minutes = Math.floor(distance / 60000);
  //     let countDown = `${days} Hari ${hours} Jam ${minutes} Menit`;

  //     if (distance < 0) {
  //       return setPaymentDeadline("Kadaluarsa");
  //     }

  //     setPaymentDeadline(countDown);
  //   }, 1000);
  // }, [router.isReady]);

  const toggleAcc1 = (index) => {
    if (open === index) {
      return setOpenAcc1(null);
    }

    setOpenAcc1(index);
  };

  const toggleAcc2 = (index) => {
    if (open === index) {
      return setOpenAcc2(null);
    }

    setOpenAcc2(index);
  };

  const toggleAcc3 = (index) => {
    if (open === index) {
      return setOpenAcc3(null);
    }

    setOpenAcc3(index);
  };

  const handleUploadBuktiPembayaran = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("id", dataPayment.id);
      formData.append("image", upload);
      await transactionService.upload(formData);
      setResponse({ isLoading: false, isError: false, message: "" });
      setIsLoading(false);
      setOpenModal(true);
      setUpload(null);
    } catch (error) {
      setResponse({ isLoading: true, isError: true, message: error });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <DefaultLayout title="Konfirmasi Pembayaran">
        <Section>
          <button
            className="inline-flex items-center space-x-2 mt-28"
            onClick={() => router.back()}
          >
            <span className="text-secondary-1">{"<"}</span>
            <a className="text-secondary-1 text-[20px] font-bold">Kembali</a>
          </button>
          <div className="w-full h-full max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-y-6">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* Accordion Payment */}
                <div className="h-full col-span-12 lg:col-span-6 mt-2">
                  <h3 className="font-bold text-primary-1 text-3xl md:text-[40px] my-4">
                    Konfirmasi Pembayaran
                  </h3>
                  <h3 className="font-bold text-primary-1 text-3xl md:text-[25px] my-4 mt-10">
                    Instruksi Pembayaran
                  </h3>

                  {/* ATM BCA */}
                  <div className="pt-[10px]">
                    <div
                      className="bg-base-8 py-[25px] px-[20px] rounded-lg border border-gray-300 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAcc1(!openAcc1)}
                    >
                      <div className="text-[25px] font-semibold inline-flex item-center">
                        <p className="ml-4">{value.steps[0].title}</p>
                      </div>
                      <IconContext.Provider
                        value={{ color: "black", size: "20px" }}
                      >
                        {openAcc1 ? (
                          <BsCaretDownFill className="color-black" />
                        ) : (
                          <BsCaretUpFill v />
                        )}
                      </IconContext.Provider>
                    </div>
                  </div>

                  <Collapse isOpened={openAcc1}>
                    <div className="py-[5px]">
                      <div className="py-[10px] px-[40px] pb-[20px]">
                        <ul className="list-decimal">
                          {value.steps[0].rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Collapse>

                  {/* M-BCA (BCA Mobile) */}
                  <div className="pt-[10px]">
                    <div
                      className="bg-base-8 py-[25px] px-[20px] rounded-lg border border-gray-300 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAcc2(!openAcc2)}
                    >
                      <div className="text-[25px] font-semibold inline-flex item-center">
                        <p className="ml-4">{value?.steps[1]?.title}</p>
                      </div>
                      <IconContext.Provider
                        value={{ color: "black", size: "20px" }}
                      >
                        {openAcc2 ? (
                          <BsCaretDownFill className="color-black" />
                        ) : (
                          <BsCaretUpFill v />
                        )}
                      </IconContext.Provider>
                    </div>
                  </div>

                  <Collapse isOpened={openAcc2}>
                    <div className="py-[5px]">
                      <div className="py-[10px] px-[40px] pb-[20px]">
                        <ul className="list-decimal">
                          {value?.steps[1]?.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Collapse>

                  {/* Klick BCA */}
                  <div className="pt-[10px]">
                    <div
                      className="bg-base-8 py-[25px] px-[20px] rounded-lg border border-gray-300 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAcc3(!openAcc3)}
                    >
                      <div className="text-[25px] font-semibold inline-flex item-center">
                        <p className="ml-4">{value?.steps[2]?.title}</p>
                      </div>
                      <IconContext.Provider
                        value={{ color: "black", size: "20px" }}
                      >
                        {openAcc3 ? (
                          <BsCaretDownFill className="color-black" />
                        ) : (
                          <BsCaretUpFill v />
                        )}
                      </IconContext.Provider>
                    </div>
                  </div>

                  <Collapse isOpened={openAcc3}>
                    <div className="py-[5px]">
                      <div className="py-[10px] px-[40px] pb-[20px]">
                        <ul className="list-decimal">
                          {value?.steps[2]?.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Collapse>
                </div>

                {/* Total Payment */}
                <div className="bg-white col-span-12 lg:col-span-6 mt-2">
                  <div className="flex flex-col bg-base-900 rounded-lg border border-gray-300 gap-y-4">
                    <div className="flex flex-col py-11 px-12 gap-y-4">
                      <img
                        src={value.icon}
                        alt="bca"
                        className="block mx-auto"
                      />
                      <div className="inline-flex justify-between">
                        <p className="text-primary-1 mt-1">No. Rekening:</p>
                        <p className="font-bold text-primary ml-7 sm:ml-[28rem] md:ml-[11rem] lg:ml-[21rem] mt-1">
                          {value.account_number}
                        </p>
                        <CopyToClipboard
                          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                          text={value.account_number}
                          onCopy={() => setCopied(true)}
                        >
                          <button>
                            <FaRegClone />
                          </button>
                        </CopyToClipboard>
                      </div>
                      <hr className="h-0.5 bg-gray-300 border-0" />
                      <div className="inline-flex justify-between">
                        <p className="text-primary-1">Total Pembayaran</p>
                        <p className="font-bold text-primary-1">
                          {formatRupiah(dataPayment.price)}
                        </p>
                      </div>
                      <div className="inline-flex justify-between">
                        <p className="text-primary-1">Sisa Waktu Pembayaran</p>
                        <p className="font-bold text-primary-1">
                          {moment(new Date(dataPayment.tf_end_date)).format(
                            "LLL"
                          )}
                        </p>
                      </div>
                      <InputDropzone
                        labelName="Unggah Foto Identitas"
                        icon={<File />}
                        preview={preview}
                        onChange={(e) => {
                          setUpload(e.target.files[0]);
                          setPreview(URL.createObjectURL(e.target.files[0]));
                        }}
                        required
                      />
                      <button
                        className="px-4 py-3 w-full text-white rounded-lg bg-primary-1 hover:bg-sky-700"
                        onClick={handleUploadBuktiPembayaran}
                      >
                        Bayar
                      </button>
                      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                        <img
                          src="/images/successful-upload.png"
                          alt="Cancel"
                          className="w-30 h-40"
                        />
                        <p className="text-xl text-center text-primary-1">
                          Pembayaran Selesai
                        </p>
                        <Link href="/my/history" className="w-full">
                          <Button className="inline-flex justify-center w-full px-4 py-3 text-white rounded-lg bg-primary-1">
                            Lihat Status
                          </Button>
                        </Link>
                        <Link href="/" className="w-full">
                          <Button className="inline-flex justify-center w-full px-4 py-3 bg-base-900 border rounded-lg text-primary-1 border-primary-1">
                            Beranda
                          </Button>
                        </Link>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </ProtectedPage>
  );
}
