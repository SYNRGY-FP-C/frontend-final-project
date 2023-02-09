import Accordion from "@/components/Accordion";
import BackButton from "@/components/buttons/BackButton";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";

export default function Syarat() {
  const data = [
    {
      header: "Pengumpulan dan Penggunaan Informasi",
      body: "Untuk meningkatkan pengalaman penggunaan layanan kami, KostHub mungkin akan meminta Anda untuk memberikan informasi pribadi tertentu, seperti email, foto, dan tanggal lahir. Informasi tersebut akan disimpan dan digunakan sesuai dengan Kebijakan Privasi kami. Selain itu, website ini juga menggunakan layanan dari pihak ketiga, seperti Google Analytics, yang mungkin mengumpulkan informasi yang dapat digunakan untuk mengidentifikasi Anda. Anda dapat menemukan tautan ke Kebijakan Privasi dari penyedia layanan pihak ketiga yang digunakan oleh website kami pada bagian tersedia.",
    },
    {
      header: "Log data",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
    },
    {
      header: "Section three",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
    },
    {
      header: "Section four",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
    },
  ];

  return (
    <Defaultlayout
      title="Kebijakan Privasi
    "
    >
      <Section>
        <div className="pt-12 gap-y-6 pb-6">
          <div className="mt-5">
            <BackButton />
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
            <div className="grid w-full lg:col-span-3 place-items-start">
              <div className="flex flex-col w-full gap-y-3"></div>
            </div>
            <div className="grid lg:col-span-9">
              <div className="grid grid-col-span-2 place-content-start">
                <div className="my-4 text-3xl font-bold text-primary-1">
                  Kebijakan Privasi
                </div>
                <p className="mb-4">
                  Halaman ini digunakan untuk memberitahu pengunjung mengenai
                  kebijakan kami dengan pengumpulan, penggunaan, dan
                  pengungkapan Informasi Pribadi jika ada yang memutuskan untuk
                  menggunakan Layanan kami.
                </p>
                <p className="mb-4">
                  Jika Anda memilih untuk menggunakan Layanan kami, maka Anda
                  setuju dengan pengumpulan dan penggunaan informasi sehubungan
                  dengan kebijakan ini. Informasi Pribadi yang kami kumpulkan
                  akan digunakan untuk menyediakan dan meningkatkan Layanan.
                  Kami tidak akan menggunakan atau membagikan Informasi Pribadi
                  Anda kepada siapa pun, kecuali sebagaimana dijelaskan dalam
                  Kebijakan Privasi ini. Istilah yang digunakan dalam Kebijakan
                  Privasi ini memiliki arti yang sama seperti dalam Syarat dan
                  Ketentuan kami, yang dapat diakses di Website Infokost.id
                  kecuali ditentukan lain dalam Kebijakan Privasi ini.
                </p>
                <Accordion data={data} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Defaultlayout>
  );
}
