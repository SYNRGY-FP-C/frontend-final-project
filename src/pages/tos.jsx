import Accordion from "@/components/Accordion";
import BackButton from "@/components/buttons/BackButton";
import Defaultlayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";

export default function Syarat() {
  const data = [
    {
      header: "Perubahan Pada Syarat dan Ketentuan Ini",
      body: "KostHub dapat memperbarui Syarat dan Ketentuan dari waktu ke waktu. Dengan demikian, Anda disarankan untuk meninjau halaman ini secara berkala untuk setiap perubahan. KostHub akan memberi tahu tentang segala perubahan dengan mengunggah Syarat dan Ketentuan baru di halaman ini. Perubahan ini berlaku segera setelah diunggah di halaman ini.",
    },
    {
      header: "Hubungi Kami",
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
    <Defaultlayout title="Syarat dan Ketentuan">
      <Section>
        <div className="pt-12 gap-y-6 pb-6">
          <div className="mt-5">
            <BackButton />
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
            <div className="grid w-full lg:col-span-3 place-items-start">
              <div className="flex flex-col w-full gap-y-3 m-5">
                {/* <Button className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1">
                  Pusat Bantuan
                </Button>
                <Button className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1">
                  Syarat dan Ketentuan
                </Button>
                <Button className="w-full px-4 py-2 text-left bg-white rounded-lg text-primary-1">
                  Kebijakan Privasi
                </Button> */}
              </div>
            </div>
            <div className="grid lg:col-span-9">
              <div className="grid gid-col-span-2 place-content-start">
                <div className="my-4 text-3xl font-bold text-primary-1">
                  Syarat dan Ketentuan
                </div>
                <p className="mb-4">
                  Dengan menggunakan platform KostHub maka ketentuan ini akan
                  berlaku secara otomatis. Oleh karena itu, Anda harus
                  memastikan bahwa Anda telah membaca Syarat dan Ketentuan
                  dengan cermat sebelum menggunakan platform kami. Dilarang
                  menyalin atau memodifikasi platform, sebagian atau seluruh
                  platform termasuk trademark KostHub, dengan cara apa pun. Anda
                  tidak diizinkan mencoba mengekstrak kode platform serta
                  dilarang menerjemahkan platform ke bahasa lain atau membuat
                  versi turunannya karena semua merek dagang, hak cipta, hak
                  basis data, dan hak kekayaan intelektual lainnya yang masih
                  terkait dengan platform merupakan milik KostHub.
                </p>
                <p className="mb-4">
                  Kosthub berkomitmen dalam memastikan bahwa platform ini
                  bermanfaat dan dibuat seefisien mungkin. Untuk alasan itu,
                  KostHub berhak membuat perubahan terhadap platform atau
                  membebankan biaya untuk layanannya, kapan saja dan untuk
                  alasan apapun. KostHub tidak akan pernah menagih Anda untuk
                  penggunaan platform atau layanannya tanpa pemberitahuan
                  sebelumnya. Seandainya ada, maka Anda akan mengetahui apa yang
                  harus dibayarkan.
                </p>
                <p className="mb-4">
                  Platform KostHub menyimpan dan memproses data pribadi yang
                  telah Anda berikan untuk mengakses Layanan KostHub. Menjadi
                  tanggung jawab Anda untuk menjaga keamanan ponsel dan
                  kerahasiaan akses ke platform. Oleh karena itu, kami tidak
                  menyarankan jailbreak atau root pada ponsel Anda yang
                  merupakan proses menghilangkan batasan dari perangkat lunak
                  yang diberlakukan oleh sistem operasi resmi bawaan ponsel. Hal
                  ini dapat membuat ponsel Anda rentan terhadap
                  malware/virus/program berbahaya yang mengancam fitur keamanan
                  ponsel sekaligus membuat platform KostHub tidak bekerja
                  optimal, bahkan tidak berfungsi sama sekali.
                </p>
                <p className="mb-4">
                  Anda harus menyadari bahwa ada hal-hal tertentu yang di luar
                  kuasa KostHub. Beberapa fungsi platform membutuhkan koneksi
                  internet aktif. Koneksi dapat berupa Wi-Fi atau paket data
                  dari penyedia jaringan seluler Anda. KostHub tidak dapat
                  bertanggung jawab atas platform yang tidak berfungsi akibat
                  tidak adanya akses ke Wi-Fi maupun paket data yang habis.
                </p>
                <p className="mb-4">
                  Jika menggunakan platform KostHub di luar area koneksi Wi-Fi,
                  Anda harus ingat terhadap ketentuan perjanjian Anda dengan
                  penyedia jaringan seluler yang tetap berlaku. Akibatnya
                  penyedia layanan seluler akan mengenakan biaya data saat Anda
                  mengakses platform dan selama koneksi berlangsung, atau
                  munculnya biaya dari pihak ketiga lainnya. Dalam menggunakan
                  platform KostHub, Anda menerima tanggung jawab atas tagihan
                  tersebut, termasuk biaya data roaming jika Anda menggunakan
                  platform di luar wilayah rumah (misalnya berpindah wilayah
                  atau negara) tanpa mematikan roaming data. Jika Anda bukan
                  pembayar tagihan dari perangkat yang digunakan untuk mengakses
                  platform KostHub, maka KostHub menganggap bahwa Anda telah
                  menerima izin dari pembayar tagihan untuk menggunakan platform
                  KostHub tersebut.
                </p>
                <p className="mb-4">
                  KostHub juga tidak bertanggung jawab atas cara Anda
                  menggunakan platform kami. Anda harus memastikan bahwa baterai
                  perangkat ponsel selalu terisi penuh. Apabila kehabisan daya
                  maka ponsel tidak dapat digunakan untuk mengakses layanan
                  platform dan KostHub tidak dapat menerima tanggung jawab atas
                  hal ini.
                </p>
                <p className="mb-4">
                  Sehubungan dengan tanggung jawab atas penggunaan platform
                  KostHub, KostHub berupaya memastikan bahwa platform diperbarui
                  dan diperbaiki setiap saat. KostHub tidak bertanggung jawab
                  atas kehilangan, langsung atau tidak langsung, yang Anda alami
                  sebagai akibat sepenuhnya mengandalkan fungsi platform ini.
                </p>
                <p className="mb-4">
                  Di kemudian hari selalu ada kemungkinan KostHub akan
                  memperbarui platform. Anda harus siap menerima pembaruan
                  platform ketika dibutuhkan sewaktu-waktu. KostHub juga mungkin
                  saja berhenti menyediakan platform dan dapat menghentikan
                  penggunaannya setiap saat tanpa memberikan pemberitahuan
                  kepada pengguna platform. Kecuali kami memberitahukan kepada
                  Anda, pada setiap penghentian maka (A) hak dan lisensi yang
                  diberikan kepada Anda dalam ketentuan ini akan berakhir; (B)
                  Anda harus berhenti menggunakan platform dan (jika perlu)
                  menghapusnya dari perangkat ponsel.
                </p>
                <p className="mb-4">
                  Di kemudian hari selalu ada kemungkinan KostHub akan
                  memperbarui platform. Anda harus siap menerima pembaruan
                  platform ketika dibutuhkan sewaktu-waktu. KostHub juga mungkin
                  saja berhenti menyediakan platform dan dapat menghentikan
                  penggunaannya setiap saat tanpa memberikan pemberitahuan
                  kepada pengguna platform. Kecuali kami memberitahukan kepada
                  Anda, pada setiap penghentian maka (A) hak dan lisensi yang
                  diberikan kepada Anda dalam ketentuan ini akan berakhir; (B)
                  Anda harus berhenti menggunakan platform dan (jika perlu)
                  menghapusnya dari perangkat ponsel.
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
