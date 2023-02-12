/* eslint-disable @next/next/no-img-element */
import Alert from "@/components/Alert";
import Button from "@/components/buttons/Button";
import Checkbox from "@/components/forms/Checkbox";
import InputPassword from "@/components/forms/InputPassword";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { useAuth } from "@/contexts/AuthContext";
import useCheckPassword from "@/hooks/useCheckPassword";
import AuthPage from "@/layouts/AuthPage";
import DefaultLayout from "@/layouts/DefaultLayout";
import Section from "@/layouts/Section";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPemilik() {
  const { registerPemilik } = useAuth();
  const [show, setShow] = useState({
    password: false,
    repassword: false,
  });
  const [response, setResponse] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    repassword: "",
  });

  const [isPasswordValid, passwordMessage] = useCheckPassword(form.password);
  const [isRepasswordValid, repasswordMessage] = useCheckPassword(
    form.repassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse({ isLoading: true, isError: false, message: "" });
    if (!isPasswordValid || !isRepasswordValid) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Password tidak aman",
      });
      return;
    }
    if (form.password !== form.repassword) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Konfirmasi password tidak sama",
      });
      return;
    }
    try {
      await registerPemilik(form);
      setResponse({
        isLoading: false,
        isError: false,
        message: "Pendaftaran berhasil",
      });
    } catch (error) {
      setResponse({
        isLoading: false,
        isError: true,
        message: "Pendaftaran gagal",
      });
    }
  };

  return (
    <AuthPage>
      <DefaultLayout title="Buat akun - Pemilik">
        <Section>
          <div className="flex flex-col flex-1 pt-8 md:pt-16 gap-y-6">
            <div className="flex flex-col gap-y-4">
              <div className="grid grid-cols-12 my-6 md:px-20">
                <div className="grid col-span-12 lg:col-span-5 place-content-center">
                  <div className="flex flex-col gap-y-3">
                    <h5 className="text-xl leading-none mt-6 font-bold md:text-[28px] text-primary-1">
                      Buat Akun
                    </h5>
                    <p className="text-base font-bold text-primary-3">
                      sebagai Pemilik Kost
                    </p>
                    <form
                      className="flex flex-col gap-y-3 mt-7"
                      onSubmit={handleSubmit}
                    >
                      {response.message && (
                        <Alert type={response.isError ? "error" : "success"}>
                          {response.message}
                        </Alert>
                      )}
                      <InputWithLabel
                        labelName="Email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                      <InputWithLabel
                        labelName="Nomor telepon"
                        placeholder="Nomor telepon"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                      <InputPassword
                        labelName="Password"
                        value={form.password}
                        placeholder="Password"
                        show={show.password}
                        errorMessage={passwordMessage}
                        setShow={() =>
                          setShow({
                            ...show,
                            password: !show.password,
                          })
                        }
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        required
                      />
                      <InputPassword
                        labelName="Konfirmasi Password"
                        placeholder="Password"
                        value={form.repassword}
                        show={show.repassword}
                        errorMessage={repasswordMessage}
                        setShow={() =>
                          setShow({
                            ...show,
                            repassword: !show.repassword,
                          })
                        }
                        onChange={(e) =>
                          setForm({ ...form, repassword: e.target.value })
                        }
                        required
                      />
                      <Checkbox required>
                        Saya menyetujui Terms of Service yang berlaku
                      </Checkbox>
                      <Button
                        type="submit"
                        className="px-4 py-3 text-white rounded-lg bg-primary-1"
                        isLoading={response.isLoading}
                      >
                        Daftar
                      </Button>
                      <div className="relative">
                        <hr className="relative h-0.5 my-4 bg-gray-200 border-0" />
                        <p className="absolute px-4 py-3 text-center transform -translate-x-1/2 -translate-y-1/2 bg-base-9 top-1/2 left-1/2">
                          atau
                        </p>
                      </div>
                      <button
                        disabled
                        className="px-4 py-3 border rounded-lg bg-base-9 text-primary-1 border-primary-1 disabled:bg-base-8"
                      >
                        Daftar dengan Google
                      </button>
                      <Link
                        href="/login/pemilik"
                        className="text-xs text-center"
                      >
                        Saya sudah memiliki akun{" "}
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="hidden lg:grid md:col-span-7 place-content-center">
                  <div className="flex justify-center object-cover w-full h-full max-w-lg overflow-hidden">
                    <img
                      className="object-cover w-full rounded-xl"
                      src="/images/register-pemilik.png"
                      alt="Test"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </DefaultLayout>
    </AuthPage>
  );
}
