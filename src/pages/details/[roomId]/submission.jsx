/* eslint-disable @next/next/no-img-element */
import Checkbox from "@/components/forms/Checkbox";
import DescriptionItem from "@/components/items/DescriptionItem";
import Modal from "@/components/Modal";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoomDetail from "@/layouts/RoomDetail";
import Section from "@/layouts/Section";
import SubmissionDetail from "@/layouts/SubmissionDetail";
import Link from "next/link";
import React from "react";
import { MdChevronLeft, MdPlace } from "react-icons/md";

export default function Submission() {
  return (
    <DefaultLayout title="Ajukan Penyewaan">
      <Modal />
      <Section>
        <div className="flex flex-col gap-y-6">
          <div className="block">
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
                      <div className="w-10 h-10 rounded-lg bg-primary-1-200"></div>
                    </div>
                    <input
                      type="number"
                      className="bg-gray-100 text-center text-primary-1 sm:text-sm border-0 rounded-lg block w-10 h-10 p-2.5 appearance-none"
                    />
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-1-200"></div>
                    </div>
                    <p className="text-primary-1">orang</p>
                  </div>
                </SubmissionDetail>
                <SubmissionDetail title="Durasi Sewa">
                  <div className="inline-flex items-center gap-x-2">
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-1-200"></div>
                    </div>
                    <input
                      type="number"
                      className="bg-gray-100 text-center text-primary-1 sm:text-sm border-0 rounded-lg block w-10 h-10 p-2.5 appearance-none"
                    />
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-10 h-10 rounded-lg bg-primary-1-200"></div>
                    </div>
                    <p className="text-primary-1">bulan (dapat diperpanjang)</p>
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
                {/* <SubmissionDetail title="Promo">
                  <Input />
                </SubmissionDetail> */}
                {/* <SubmissionDetail title="Kode Referal">
                  <Input />
                </SubmissionDetail> */}
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
            <div className="col-span-12 lg:col-span-4">
              <div className="flex flex-col bg-base-900 shadow rounded-xl gap-y-4">
                <div className="flex justify-center object-cover w-full overflow-hidden h-52">
                  <img
                    className="object-cover w-full rounded-t-xl"
                    src="/images/hero-image.jpg"
                    alt="Test"
                  />
                </div>
                <div className="flex flex-col p-5 gap-y-3">
                  <div className="inline-flex items-center gap-x-3">
                    <h5 className="text-[32px] font-bold">Kost Lorem</h5>
                    <div className="inline-block">
                      <span className="inline-flex items-center px-4 py-1 text-xs text-center bg-gray-200 rounded-lg">
                        Superkost
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex gap-x-3">
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-5 h-5 rounded-lg bg-primary-1-200"></div>{" "}
                      5
                    </div>
                    <div className="inline-flex items-center gap-x-2">
                      <div className="w-5 h-5 rounded-lg bg-primary-1-200"></div>{" "}
                      Campur
                    </div>
                  </div>
                  <div className="inline-flex flex-col gap-y-2">
                    <MdPlace className="w-5 h-5 text-primary-1" />
                    Jl. Lorem ipsum dolor sit amet No. 2, Kec. Lorem, Kel.
                    Ipsum, Kota Bandung, Jawa Barat, 40276
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p className="block text-xl font-semibold text-primary-1">
                      Tambahan Layanan & Fasilitas
                    </p>
                    <div className="grid grid-cols-2 mb-8 gap-y-3">
                      <Checkbox>Kasur</Checkbox>
                      <Checkbox>Kursi</Checkbox>
                      <Checkbox>Meja</Checkbox>
                      <Checkbox>Laundry</Checkbox>
                      <Checkbox>Kipas Angin</Checkbox>
                      <Checkbox>lemari</Checkbox>
                    </div>
                  </div>
                  <p className="block text-xl font-semibold text-primary-1">
                    Pembayaran Pertama
                  </p>
                  <div className="inline-flex justify-between">
                    <p>Biaya Kamar</p>
                    <p>Rp2.222.222</p>
                  </div>
                  <div className="inline-flex justify-between">
                    <p>Tambahan</p>
                    <p>Rp0</p>
                  </div>
                  <hr className="h-0.5 bg-gray-200 border-0" />
                  <div className="inline-flex justify-between">
                    <p className="font-bold text-primary-1">Total Biaya</p>
                    <p className="font-bold text-primary-1">Rp2.222.222</p>
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
              <button className="px-4 py-3 text-white rounded-lg w-72 bg-primary-1">
                Ajukan Sewa
              </button>
            </div>
          </RoomDetail>
        </div>
      </Section>
    </DefaultLayout>
  );
}
