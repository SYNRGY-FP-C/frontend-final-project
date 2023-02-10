/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import LoadingScreen from "@/components/LoadingScreen";
import { ROLE_USER } from "@/constants/roles";
import DefaultLayout from "@/layouts/DefaultLayout";
import ProtectedPage from "@/layouts/ProtectedPage";
import transactionService from "@/services/transaction.service";
import { formatRupiah } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IconContext } from "react-icons";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

export default function Payment() {
  const router = useRouter();
  const [dataPayment, setDataPayment] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [openBank, setOpenBank] = useState(0);

  const fetchPayment = async () => {
    try {
      const response = await transactionService.get(router?.query?.paymentId);
      setDataPayment(response.data);
      setIsLoading(false);
    } catch (error) {
      router.push("/404");
    }
  };

  useEffect(() => {
    if (router?.query?.paymentId) {
      fetchPayment();
    }
  }, [router.isReady]);

  const toggleBank = (index) => {
    if (open === index) {
      return setOpenBank(null);
    }

    setOpenBank(index);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ProtectedPage allowed={[ROLE_USER]} redirect="/403">
      <DefaultLayout title="Metode Pembayaran">
        <section className="flex w-full h-screen px-4 py-2 mx-auto">
          <div className="w-full h-full max-w-screen-xl mx-auto">
            <div className="flex flex-col gap-y-6">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* Accordion Payment */}
                <div className="h-full col-span-12 mt-20 lg:col-span-8">
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
                          <BsCaretUpFill />
                        ) : (
                          <BsCaretDownFill className="color-black" />
                        )}
                      </IconContext.Provider>
                    </div>
                  </div>

                  <Collapse isOpened={openBank}>
                    <div className="bg-white rounded-b-lg border border-gray-300 py-[20px] px-[30px] pb-[20px]">
                      <Link
                        href={`/my/payment/${router?.query?.paymentId}/upload?type=bca`}
                      >
                        <div className="bg-base-8 rounded-lg py-[20px] px-[50px] pb-[20px] hover:bg-slate-300">
                          <img src="/images/bca.png" alt="bca" />
                        </div>
                      </Link>
                    </div>
                  </Collapse>
                </div>

                {/* Total Payment */}
                <div className="col-span-12 mt-20 lg:col-span-4">
                  <div className="flex flex-col border-l bg-base-900 border-l-gray-300 gap-y-4">
                    <div className="flex flex-col p-5 gap-y-4">
                      <p className="block text-[28px] font-bold text-primary-1 md:pt-2">
                        Rincian Pembayaran
                      </p>
                      <div className="inline-flex justify-between">
                        <p>Biaya Kamar</p>
                        <p>{formatRupiah(dataPayment?.price || 0)}</p>
                      </div>
                      {/* <div className="flex flex-col">
                        <p>Tambahan</p>
                        <div className="inline-flex justify-between mt-2 ml-5">
                          <p> &bull; Lorem ipsum</p>
                          <p>Rp.120.000</p>
                        </div>
                      </div> */}
                      <hr className="h-0.5 bg-gray-300 border-0" />
                      <div className="inline-flex justify-between">
                        <p className="font-bold text-primary-1">Total Biaya</p>
                        <p className="font-bold text-primary-1">
                          {formatRupiah(dataPayment?.price || 0)}
                        </p>
                      </div>
                      {/* <button className="w-full px-4 py-3 text-white rounded-lg bg-primary-1 hover:bg-sky-700">
                        Bayar
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </ProtectedPage>
  );
}
