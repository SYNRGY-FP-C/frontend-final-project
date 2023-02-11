/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/buttons/Button";
import RoomCard from "@/components/cards/RoomCard";
import Input from "@/components/forms/Input";
import SearchBar from "@/components/forms/SearchBar";
// import Star from "@/components/icons/Star";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Search() {
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const [show, setShow] = useState([]);

  const [showMore, setShowMore] = useState({
    isLoading: false,
  });

  const [search, setSearch] = useState({
    keyword: "",
    label: "",
    type: "",
    price_min: 0,
    price_max: 999999999,
    size: 5,
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    try {
      const { data } = await roomService.search({
        params: search,
      });
      setResponse({
        isLoading: false,
        isError: false,
        data: data,
      });
      setShow(data);
    } catch (error) {
      setResponse({
        ...response,
        isLoading: false,
        isError: true,
      });
    }
  };

  const handleLabel = (type) => {
    if (search.type === type) {
      setSearch({
        ...search,
        type: "",
      });
      return;
    }
    setSearch({
      ...search,
      type: type,
    });
  };

  const handleShowMore = async () => {
    setShowMore({
      isLoading: true,
    });
    try {
      const temp = await roomService.search({
        params: search,
      });
      setResponse({
        ...response,
        data: temp.data,
      });
      setShowMore({
        isLoading: false,
      });
    } catch (error) {
      setResponse({
        ...response,
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    handleShowMore();
  }, [search.size]);

  const handleClick = () => {
    setSearch({
      ...search,
      size: search.size + 5,
    });
  };
  const fetchData = async () => {
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    const { data } = await roomService.search({
      params: search,
    });
    setResponse({
      isLoading: false,
      isError: false,
      data: data,
    });
    setShow(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    const filtered = response.data.filter((item) => {
      return (
        (!search.label || item.label === search.label) &&
        (!search.price_min ||
          !search.price_max ||
          (item.price >= search.price_min && item.price <= search.price_max)) &&
        (!search.type || item.type === search.type)
      );
    });
    setShow(filtered);
  };

  return (
    <DefaultLayout title="Cari kost impianmu">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <h2 className="font-bold text-2xl lg:text-[40px] text-base-1">
              Hasil pencarian: {search.keyword}
            </h2>
            <p className="text-base-2">
              Ditemukan {response.data.length} kost-kostan
            </p>
          </div>
          <div className="grid h-full grid-cols-12">
            <div className="hidden col-span-4 lg:grid">
              <div className="relative">
                <div className="flex flex-col w-full border border-gray-200 shadow p-7 rounded-xl gap-y-6">
                  <h5 className="text-xl font-bold text-base-1">
                    Filter Pencarianmu
                  </h5>
                  {/* <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Label</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <Checkbox>Kost Hits</Checkbox>
                      <Checkbox>SuperKost</Checkbox>
                      <Checkbox>Kost Terbaru</Checkbox>
                    </div>
                  </div> */}
                  <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Tipe</h5>
                    <div className="flex flex-row gap-x-2">
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "CAMPURAN",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "CAMPURAN",
                          }
                        )}
                        onClick={() => handleLabel("CAMPURAN")}
                      >
                        Campur
                      </button>
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "PUTRA",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "PUTRA",
                          }
                        )}
                        onClick={() => handleLabel("PUTRA")}
                      >
                        Pria
                      </button>
                      <button
                        className={clsx(
                          "w-24 text-center py-0.5 border rounded-lg",
                          {
                            ["bg-primary-1 text-white"]:
                              search.type === "PUTRI",
                            ["border-gray-300 text-base-2"]:
                              search.type !== "PUTRI",
                          }
                        )}
                        onClick={() => handleLabel("PUTRI")}
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
                        value={search.price_min}
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
                        value={search.price_max}
                        onChange={(e) =>
                          setSearch({
                            ...search,
                            price_max: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-y-3">
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
                  </div> */}

                  <div className="flex flex-row justify-between gap-x-3">
                    <button
                      className="w-full py-3 text-white rounded-lg bg-primary-1"
                      onClick={handleFilter}
                    >
                      Filter
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSearch({
                          keyword: "",
                          label: "",
                          type: "",
                          price_min: 0,
                          price_max: 999999999,
                          size: 5,
                        });
                        setShow(response.data);
                      }}
                      className="w-full py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1"
                    >
                      Reset
                    </button>
                  </div>
                  {/* <div className="flex flex-col gap-y-3">
                    <h5 className="font-bold text-base-1">Bandingkan Kost</h5>
                    <div className="flex flex-col gap-y-3">
                      <Input type="text" placeholder="Kost 1" />
                      <Input type="text" placeholder="Kost 2" />
                      <button className="py-3 text-white rounded-lg bg-primary-1 w-44">
                        Bandingkan
                      </button>
                    </div>
                  </div> */}
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
                  {response.isLoading ? (
                    <h1 className="col-span-12 text-center md:grid-cols-6 lg:grid-cols-3">
                      Memuat data...
                    </h1>
                  ) : response.data.length > 0 ? (
                    show.map((room) => <RoomCard key={uuid()} data={room} />)
                  ) : (
                    <p className="text-lg font-semibold text-center">
                      Kamar tidak ditemukan
                    </p>
                  )}
                  {!response.isLoading && (
                    <div className="flex justify-center">
                      {response.data.length > 0 && (
                        <div className="block">
                          <Button
                            type="button"
                            className="block"
                            isLoading={showMore.isLoading}
                            onClick={handleClick}
                          >
                            Lihat lebih banyak
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
