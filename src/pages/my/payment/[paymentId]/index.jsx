/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Collapse } from "react-collapse";
import { IconContext } from "react-icons";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

export default function Submission() {
  const [openBank, setOpenBank] = useState(0);
  const [openEWallet, setOpenWallet] = useState(0);

  const toggleBank = (index) => {
    if (open === index) {
      return setOpenBank(null);
    }

    setOpenBank(index);
  };

  const toggleWallet = (index) => {
    if (open === index) {
      return setOpenWallet(null);
    }

    setOpenWallet(index);
  };

  return (
    <section className="flex w-full h-screen px-4 py-2 mx-auto">
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-y-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Accordion Payment */}
            <div className="h-full col-span-12 lg:col-span-8 mt-20">
              <h3 className="font-bold text-primary-1 text-3xl md:text-[40px] my-4">
                Metode Pembayaran
              </h3>

              {/* Bank */}
              <div className="pt-[10px]">
                <div
                  className="bg-white py-[25px] px-[20px] rounded-lg border border-gray-300 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBank(!openBank)}
                >
                  <div className="text-[25px] font-semibold inline-flex item-center">
                    <MdPayment className="mt-1" />
                    <p className="ml-4">Bank</p>
                  </div>
                  <IconContext.Provider
                    value={{ color: "black", size: "20px" }}
                  >
                    {openBank ? (
                      <BsCaretDownFill className="color-black" />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </IconContext.Provider>
                </div>
              </div>

              <Collapse isOpened={openBank}>
                <div className="bg-white rounded-b-lg border border-gray-300 py-[20px] px-[30px] pb-[20px]">
                  <div className="bg-base-8 rounded-lg py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <img src="/images/bca.png" alt="bca" />
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <img src="/images/bri.png" alt="bri" />
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <img src="/images/bni.png" alt="bni" />
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <p>Bank Lain</p>
                  </div>
                </div>
              </Collapse>

              {/* E-Wallet */}
              <div className="pt-[10px]">
                <div
                  className="bg-white py-[25px] px-[20px] rounded-lg border border-gray-300 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleWallet(!openEWallet)}
                >
                  <div className="text-[25px] font-semibold inline-flex item-center">
                    <MdOutlineAccountBalanceWallet className="mt-1" />
                    <p className="ml-4">E-Wallet</p>
                  </div>
                  <IconContext.Provider
                    value={{ color: "black", size: "20px" }}
                  >
                    {openEWallet ? (
                      <BsCaretDownFill className="color-black" />
                    ) : (
                      <BsCaretUpFill v />
                    )}
                  </IconContext.Provider>
                </div>
              </div>

              <Collapse isOpened={openEWallet}>
                <div className="bg-white rounded-b-lg border border-gray-300 py-[20px] px-[30px] pb-[20px]">
                  <div className="bg-base-8 rounded-lg py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <div className="inline-flex item-center">
                      <img src="/images/dana.png" alt="dana" />
                      <p className="ml-4 mt-1">DANA</p>
                    </div>
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <div className="inline-flex item-center">
                      <img src="/images/ovo.png" alt="ovo" />
                      <p className="ml-4 mt-1">OVO</p>
                    </div>
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <div className="inline-flex item-center">
                      <img src="/images/gopay.png" alt="gopay" />
                      <p className="ml-4 mt-1">GOPAY</p>
                    </div>
                  </div>

                  <div className="bg-base-8 rounded-lg mt-4 py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                    <div className="inline-flex item-center">
                      <img src="/images/shoopepay.png" alt="shoopepay" />
                      <p className="ml-4 mt-1">ShopeePay</p>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* Total Payment */}
            <div className="col-span-12 lg:col-span-4 mt-20">
              <div className="flex flex-col bg-base-900 border-l border-l-gray-300 gap-y-4">
                <div className="flex flex-col p-5 gap-y-4">
                  <p className="block text-[28px] font-bold text-primary-1 md:pt-2">
                    Rincian Pembayaran
                  </p>
                  <div className="inline-flex justify-between">
                    <p>Biaya Kamar</p>
                    <p>Rp.1.200.000</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Tambahan</p>
                    <div className="inline-flex justify-between mt-2 ml-5">
                      <p> &bull; Lorem ipsum</p>
                      <p>Rp.120.000</p>
                    </div>
                  </div>
                  <hr className="h-0.5 bg-gray-300 border-0" />
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-primary-1">Total Biaya</p>
                    <p className="font-bold text-primary-1">Rp.1.320.000</p>
                  </div>
                  <button className="px-4 py-3 w-full text-white rounded-lg bg-primary-1 hover:bg-sky-700">
                    Bayar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
