/* eslint-disable @next/next/no-img-element */
import RoomCard from "@/components/cards/RoomCard";
import Checkbox from "@/components/forms/Checkbox";
import Input from "@/components/forms/Input";
import SearchBar from "@/components/forms/SearchBar";
import Star from "@/components/icons/Star";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React, { useState, useEffect } from "react";
import roomService from "@/services/room.service";

export default function Search() {
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });
  const [search, setSearch] = useState({
    keyword: "kamar",
    label: "",
    type: "",
    price_min: 0,
    price_max: 999999999,
    size: 10,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    try {
      const temp = await roomService.search({
        params: search,
      });
      console.log(temp);
      setResponse({
        isLoading: false,
        isError: false,
        data: temp.data,
      });
    } catch (error) {
      setResponse({
        ...response,
        isLoading: false,
        isError: true,
      });
    }
  };

  const [show, setShow] = useState([]);
  useEffect(() => {
    const data = response.data.filter((item) => item.keyword === search);
    setShow(data);
  }, [search]);

  return (
    <DefaultLayout title="Cari kost impianmu">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h2 className="font-bold text-2xl lg:text-[40px] text-base-1">
              Hasil pencarian: Bandung, Jawa Barat
            </h2>
            <p className="text-base-1">Ditemukan 50 kost-kostan</p>
          </div>
          <div className="grid h-full grid-cols-12">
            <div className="hidden col-span-4 lg:grid">
              <div className="relative">
                <div className="flex flex-col w-full border border-gray-200 shadow p-7 rounded-xl gap-y-6">
                  <h5 className="text-xl font-bold text-base-1">
                    Filter Pencarianmu
                  </h5>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Label</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kost Hits</Checkbox>
                      <Checkbox>SuperKost</Checkbox>
                      <Checkbox>Kost Terbaru</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Tipe</h5>
                    <div className="flex flex-row gap-x-2">
                      <button
                        className="w-24 text-center py-0.5 border border-gray-300 text-base-2 rounded-lg"
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            type: String(e.target),
                          })
                        }
                      >
                        Campur
                      </button>
                      <button
                        className="w-24 text-center py-0.5 border border-gray-300 text-base-2 rounded-lg"
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            type: String(e.target),
                          })
                        }
                      >
                        Pria
                      </button>
                      <button
                        className="w-24 text-center py-0.5 border border-gray-300 text-base-2 rounded-lg"
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            type: String(e.target),
                          })
                        }
                      >
                        Wanita
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Rentang Harga</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input
                        type="number"
                        placeholder="Harga Minimum"
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            price_min: Number(e.target.value),
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Harga Maksimum"
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            price_max: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Rating</h5>
                    <div className="flex flex-col gap-y-3">
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>
                        <Star className="w-5 h-5" />
                      </Checkbox>
                      <Checkbox>Tidak ada rating</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Promo</h5>
                    <div className="flex flex-col gap-y-3">
                      <Checkbox>Diskon 25%</Checkbox>
                      <Checkbox>Diskon 50%</Checkbox>
                      <Checkbox>Super Deals</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Fasilitas</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kamar Mandi Dalam</Checkbox>
                      <Checkbox>Air Panas</Checkbox>
                      <Checkbox>AC</Checkbox>
                      <Checkbox>Kamar Mandi Luar</Checkbox>
                      <Checkbox>Lemari</Checkbox>
                      <Checkbox>Kursi</Checkbox>
                      <Checkbox>Meja</Checkbox>
                      <Checkbox>Kloset Duduk</Checkbox>
                      <Checkbox>Kasur</Checkbox>
                      <Checkbox>Televisi</Checkbox>
                      <Checkbox>Jendela</Checkbox>
                      <Checkbox>Kipas Angin</Checkbox>
                      <Checkbox>Listrik</Checkbox>
                      <Checkbox>Laundry</Checkbox>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Skema Pembayaran</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Harian</Checkbox>
                      <Checkbox>Mingguan</Checkbox>
                      <Checkbox>Bulan</Checkbox>
                      <Checkbox>Per 3 bulan</Checkbox>
                      <Checkbox>Per 6 bulan</Checkbox>
                      <Checkbox>Per 12 bulan</Checkbox>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-x-3">
                    <button
                      className="w-full py-3 text-white rounded-lg bg-primary-1"
                      onClick={handleSearch}
                    >
                      Filter
                    </button>
                    <button className="w-full py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1">
                      Reset
                    </button>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Bandingkan Kost</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input type="text" placeholder="Kost 1" />
                      <Input type="text" placeholder="Kost 2" />
                      <button className="py-3 text-white rounded-lg bg-primary-1 w-44">
                        Bandingkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid h-full col-span-12 lg:col-span-8 md:px-4">
              <div className="flex flex-col">
                <form onSubmit={handleSearch}>
                  <SearchBar
                    placeholder="Cari nama kost, alamat, daerah atau kota"
                    value={search.keyword}
                    onChange={(e) =>
                      setSearch({ ...search, keyword: e.target.value })
                    }
                  />
                </form>
                <div className="flex flex-col w-full h-full py-6 gap-y-6">
                  {/* <RoomCard />
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                  <RoomCard /> */}

                  {response.data.length > 0
                    ? response.data.map((data) => {
                        return <RoomCard key={data.id} data={data} />;
                      })
                    : "tidak ada kamar"}
                  <button
                    onClick={(e) => {
                      setSearch({
                        ...search,
                        size: search.size + 5,
                      });
                      handleSearch(e);
                    }}
                  >
                    Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
