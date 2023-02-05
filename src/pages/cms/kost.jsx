import Button from "@/components/buttons/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function Kost() {
  const kost = [
    { id: 1, name: "kost A" },
    { id: 2, name: "kost B" },
  ];

  const [select, setSelect] = useState("kamar");
  const [show, setShow] = useState([]);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [...kost],
  });

  useEffect(() => {
    const data = response.data.filter((item) => item.sec === select);
    setShow(data);
  }, [select]);

  return (
    <DefaultLayout title="Room">
      <Section>
        <div className="pt-16 gap-y-6 pb-6">
          <div className="my-4 text-5xl font-bold text-primary-1">Rooms</div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 gap-x-12">
            <div className="grid w-full lg:col-span-3 place-items-start">
              <div className="flex flex-col w-full gap-y-3">
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("facilities")}
                >
                  Fasilitas
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("rules")}
                >
                  Peraturan
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("users")}
                >
                  Users
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("kost")}
                >
                  Kost
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("room")}
                >
                  Kamar
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("transaksi")}
                >
                  Transaksi
                </Button>
              </div>
            </div>
            <div className="grid lg:col-span-9">
              <div className="grid grid-col-span-2 place-content-start">
                <div>
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Fasilitas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kost.map((kos) => {
                        return (
                          <tr key={uuid()}>
                            <td>{kos.name}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
