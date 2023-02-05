import Button from "@/components/buttons/Button";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import React from "react";
import { useState, useEffect } from "react";

export default function Peraturan() {
  const rules = [
    { id: 1, name: "Itulah" },
    { id: 2, name: "Inilah" },
  ];

  const [select, setSelect] = useState("rules");
  const [show, setShow] = useState([]);
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    data: [...rules],
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
                <Button className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1">
                  Fasilitas
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Peraturan
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("rules")}
                >
                  Users
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
                >
                  Kost
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("kamar")}
                >
                  Kamar
                </Button>
                <Button
                  className="w-full px-4 py-2 text-left bg-gray-100 rounded-lg text-primary-1"
                  onClick={() => setSelect("")}
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
                        <th>Peraturan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {show.map((rule) => {
                        return (
                          <tr>
                            <td>{rule.name}</td>
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
