import AuthPage from "@/layouts/AuthPage";
import Footer from "@/layouts/Footer";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";

export default function About() {
  return (
    <AuthPage>
      <DefaultLayout title="Tentang Kami">
        <Section className="md:absolute">
          <div className=" flex flex-col flex-1 pt-8 md:pt-12 gap-y-6">
            <div className="bg-cover">
              <img
                className="md:absolute inset-0 "
                src="/images/about.png"
                alt="Test"
              />
              <h1 className="relative flex flex-row-reverse pt-16 font-bold text-4xl top-6 right-24">
                Tentang Kami
              </h1>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="grid grid-cols-12 my-6 md:py-20 md:px-20">
                <div className="grid col-span-12 lg:col-span-12 place-content-center text-justify">
                  <p className="md:relative text-base pt-20 ">
                    KostHub adalah start-up teknologi yang berfokus pada solusi
                    platform penyewaan kost untuk membantu pencari kost dan
                    pemilik kost untuk berkomunikasi dan bekerja sama dalam
                    menemukan solusi terbaik bagi kebutuhan mereka. Sejak
                    didirikan, tim KostHub bekerja keras untuk menciptakan
                    platform yang mudah digunakan, inovatif, dan bermanfaat bagi
                    para penggunanya. Kami memahami betul bahwa mencari dan
                    menyewa kost dapat menjadi proses yang rumit dan memakan
                    waktu, oleh karena itu kami hadir untuk mempermudah dan
                    mempercepat proses tersebut.
                  </p>
                  <br />
                  <p className="text-base items-center">
                    Dengan menggunakan teknologi terbaru dan desain intuitif,
                    KostHub mempermudah para pencari kost untuk menemukan opsi
                    yang sesuai dengan kebutuhan dan budget mereka, serta
                    membantu para pemilik kost untuk mengelola dan mempromosikan
                    properti mereka.
                  </p>
                  <br />
                  <p className="text-base">
                    Tim KostHub terdiri dari profesional yang berpengalaman dan
                    berdedikasi untuk memastikan bahwa setiap aspek dari
                    platform kami memberikan pengalaman yang memuaskan bagi para
                    penggunanya. Kami bertekad untuk terus berinovasi dan
                    meningkatkan layanan kami agar dapat memberikan solusi
                    terbaik bagi para pencari kost dan pemilik kost.
                  </p>
                  <br />
                  <p className="text-base">
                    Jika Anda tertarik untuk menyewa atau mengelola kost, jangan
                    ragu untuk menjelajahi platform KostHub. Kami yakin bahwa
                    Anda akan menemukan solusi yang tepat untuk kebutuhan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Footer></Footer>
      </DefaultLayout>
    </AuthPage>
  );
}
