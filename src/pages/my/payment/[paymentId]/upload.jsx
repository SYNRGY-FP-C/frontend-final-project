/* eslint-disable @next/next/no-img-element */
import { payments } from "@/constants/payments";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconContext } from "react-icons";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export default function Upload() {
  const router = useRouter();
  const [openAcc1, setOpenAcc1] = useState(0);
  const [openAcc2, setOpenAcc2] = useState(0);
  const [openAcc3, setOpenAcc3] = useState(0);
  const [copied, setCopied] = useState(false);
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

  useEffect(() => {
    if (router?.query?.type) {
      console.log(router?.query?.type);
      setValue({ ...value, ...payments[router?.query?.type] });
    }
  }, [router.isReady]);

  return (
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
                    <img src={value.icon} alt="bca" className="block mx-auto" />
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
                      <p className="font-bold text-primary-1">Rp.1.320.000</p>
                    </div>
                    <div className="inline-flex justify-between">
                      <p className="text-primary-1">Sisa Waktu Pembayaran</p>
                      <p className="font-bold text-primary-1">
                        1 Hari 59 Menit 10 Detik
                      </p>
                    </div>
                    <form
                      action="#"
                      className="relative h-52 mb-2 bg-gray-100 rounded-lg shadow-inner"
                    >
                      <input type="file" id="file-upload" className="hidden" />
                      <label
                        for="file-upload"
                        className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                      >
                        <p className="z-10 text-[16px] font-light text-center text-gray-500">
                          Unggah dokumenmu di sini
                        </p>
                        <div className="z-10 mb-5 bg-white rounded-full h-14 w-14">
                          <FiUpload className="mx-auto my-3 w-8 h-8 text-gray-400" />
                        </div>
                      </label>
                    </form>
                    <button className="px-4 py-3 w-full text-white rounded-lg bg-primary-1 hover:bg-sky-700">
                      Bayar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
