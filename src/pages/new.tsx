/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/buttons/BackButton";
import Button from "@/components/buttons/Button";
import RoomCard from "@/components/cards/RoomCard";
import SearchBar from "@/components/forms/SearchBar";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import roomService from "@/services/room.service";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function New({ data }) {
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: data || [],
  });

  const [search, setSearch] = useState({
    keyword: "",
    label: "KOST_TERBARU",
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
      const temp = await roomService.search({
        params: search,
      });
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

  const handleShowMore = async () => {
    setResponse({
      ...response,
      isLoading: true,
      isError: false,
    });
    try {
      const temp = await roomService.search({
        params: search,
      });
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

  useEffect(() => {
    handleShowMore();
  }, [search.size]);

  const handleClick = () => {
    setSearch({
      ...search,
      size: search.size + 5,
    });
  };

  return (
    <DefaultLayout title="Kost Terbaru">
      <Section>
        <div className="flex flex-col pt-24 pb-4 gap-y-4">
          <div className="grid h-full grid-cols-12 gap-y-3">
            <div className="grid w-full col-span-12 lg:col-span-4 place-items-start">
              <div className="flex flex-col gap-y-3">
                <BackButton />
                <h2 className="text-3xl lg:text-[40px] font-bold text-base-1">
                  Kost Terbaru
                </h2>
                <p className="text-base-2">
                  Ditemukan {response.data.length} kost-kostan
                </p>
              </div>
            </div>
            <div className="grid h-full col-span-12 lg:col-span-8 md:px-4">
              <div className="flex flex-col w-full h-full gap-y-6">
                <form onSubmit={handleSearch}>
                  <SearchBar
                    placeholder="Cari berdasarkan kota"
                    value={search.keyword}
                    onChange={(e) =>
                      setSearch({ ...search, keyword: e.target.value })
                    }
                  />
                </form>
                <div className="flex flex-col w-full h-full py-6 gap-y-6">
                  {response.data.length > 0 ? (
                    response.data.map((room) => (
                      <RoomCard key={uuid()} data={room} />
                    ))
                  ) : (
                    <p className="text-lg font-semibold text-center">
                      Kamar tidak ditemukan
                    </p>
                  )}
                  <div className="flex justify-center">
                    {response.data.length > 0 && (
                      <div className="block">
                        <Button
                          type="button"
                          className="block"
                          isLoading={response.isLoading}
                          onClick={handleClick}
                        >
                          Lihat lebih banyak
                        </Button>
                      </div>
                    )}
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

export const getServerSideProps = async () => {
  const { data } = await roomService.search({
    params: {
      label: "KOST_TERBARU",
      size: 5,
    },
  });
  return {
    props: {
      data,
    },
  };
};
